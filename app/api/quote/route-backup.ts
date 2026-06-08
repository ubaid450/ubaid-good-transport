import { NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

type QuotePayload = {
  name?: string;
  phone?: string;
  pickup?: string;
  delivery?: string;
  truckType?: string;
  serviceNeeded?: string;
  pickupDate?: string;
  details?: string;
};

const requiredFields: Array<keyof QuotePayload> = ["truckType", "serviceNeeded", "pickupDate", "details"];

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;

    const quote = {
      name: clean(body.name),
      phone: clean(body.phone),
      pickup: clean(body.pickup),
      delivery: clean(body.delivery),
      truckType: clean(body.truckType),
      serviceNeeded: clean(body.serviceNeeded),
      pickupDate: clean(body.pickupDate),
      details: clean(body.details)
    };

    const missingFields = requiredFields.filter((field) => !quote[field]);

    if (missingFields.length) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
          fields: missingFields
        },
        { status: 400 }
      );
    }

    const db = await getMongoDb();
    const result = await db.collection("quote_submissions").insertOne({
      ...quote,
      source: "website_quote_form",
      status: "new",
      createdAt: new Date(),
      updatedAt: new Date(),
      userAgent: request.headers.get("user-agent") || "",
      referrer: request.headers.get("referer") || ""
    });

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully.",
        id: result.insertedId.toString()
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Quote submission failed", error);

    const message = error instanceof Error && error.message === "MONGODB_URI is not configured"
      ? "Quote storage is not configured."
      : "Unable to submit quote request. Please try again.";

    return NextResponse.json(
      {
        success: false,
        error: message
      },
      { status: 500 }
    );
  }
}
