import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getCmsContent, saveCmsContent } from "@/lib/cms";

export async function POST(request: Request) {
  const session = await getAdminSession();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const type = String(form.get("type") || "website") as
    | "logo"
    | "truck"
    | "website";

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const base64 = `data:${file.type};base64,${bytes.toString("base64")}`;

  const content = await getCmsContent();

  content.images = [
    ...content.images,
    {
      id: `${Date.now()}-${file.name}`,
      title: file.name,
      url: base64,
      type,
    },
  ];

  if (type === "logo") {
    content.company.logoUrl = base64;
  }

  await saveCmsContent(content);

  return NextResponse.json({ url: base64 });
}