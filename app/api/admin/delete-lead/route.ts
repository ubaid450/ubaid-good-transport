import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getAdminSession } from "@/lib/auth";
import { getMongoDb } from "@/lib/mongodb";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const session = await getAdminSession();

    if (!session) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const id = String(body.id || "");
    const type = String(body.type || "");

    if (!id || !ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: "Invalid lead id" },
        { status: 400 }
      );
    }

    const collection =
      type === "quote"
        ? "quote_submissions"
        : type === "contact"
        ? "contact_submissions"
        : "";

    if (!collection) {
      return NextResponse.json(
        { success: false, error: "Invalid lead type" },
        { status: 400 }
      );
    }

    const db = await getMongoDb();

    await db.collection(collection).deleteOne({
      _id: new ObjectId(id),
    });

    return NextResponse.json({
      success: true,
      message: "Lead deleted successfully.",
    });
  } catch (error) {
    console.error("Delete lead failed", error);

    return NextResponse.json(
      { success: false, error: "Unable to delete lead." },
      { status: 500 }
    );
  }
}