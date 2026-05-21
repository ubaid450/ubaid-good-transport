import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getCmsContent, saveCmsContent } from "@/lib/cms";

export async function GET() {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await getCmsContent());
}

export async function PUT(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const content = await request.json();
  await saveCmsContent(content);

  return NextResponse.json({ ok: true });
}
