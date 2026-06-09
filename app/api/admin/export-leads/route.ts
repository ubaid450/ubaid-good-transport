import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

function csvSafe(value: unknown) {
  const text = String(value || "").replace(/\r?\n|\r/g, " ");
  return `"${text.replace(/"/g, '""')}"`;
}

export async function GET() {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  const db = await getMongoDb();

  const quotes = await db
    .collection("quote_submissions")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  const contacts = await db
    .collection("contact_submissions")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  const rows = [
    [
      "Type",
      "Name",
      "Email",
      "Phone",
      "Pickup",
      "Dropoff",
      "Pickup Date",
      "Truck",
      "Service",
      "Message/Details",
      "Status",
      "Created At",
    ],
  ];

  for (const quote of quotes as any[]) {
    rows.push([
      "Quote",
      quote.name || "",
      "",
      quote.phone || "",
      quote.pickup || "",
      quote.delivery || "",
      quote.pickupDate || "",
      quote.truckType || "",
      quote.serviceNeeded || "",
      quote.details || "",
      quote.status || "new",
      quote.createdAt ? new Date(quote.createdAt).toLocaleString() : "",
    ]);
  }

  for (const contact of contacts as any[]) {
    rows.push([
      "Contact",
      contact.name || "",
      contact.email || "",
      contact.phone || "",
      "",
      "",
      "",
      "",
      "",
      contact.message || "",
      contact.status || "new",
      contact.createdAt ? new Date(contact.createdAt).toLocaleString() : "",
    ]);
  }

  const csv = rows.map((row) => row.map(csvSafe).join(",")).join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="ubaid-transport-leads.csv"`,
    },
  });
}