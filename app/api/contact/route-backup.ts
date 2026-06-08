import { NextResponse } from "next/server";
import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const contact = {
      name: clean(body.name),
      email: clean(body.email),
      phone: clean(body.phone),
      message: clean(body.message),
    };

    if (!contact.name || !contact.email || !contact.message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    const db = await getMongoDb();

    const result = await db.collection("contact_submissions").insertOne({
      ...contact,
      source: "website_contact_form",
      status: "new",
      createdAt: new Date(),
      updatedAt: new Date(),
      userAgent: request.headers.get("user-agent") || "",
      referrer: request.headers.get("referer") || "",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact message submitted successfully.",
        id: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact submission failed", error);

    return NextResponse.json(
      {
        success: false,
        error: "Unable to submit contact message. Please try again.",
      },
      { status: 500 }
    );
  }
}