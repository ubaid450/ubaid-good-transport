import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getCmsContent, saveCmsContent } from "@/lib/cms";

export async function POST(request: Request) {
  const session = await auth();

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get("file");
  const type = String(form.get("type") || "website") as "logo" | "truck" | "website";

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const safeName = `${Date.now()}-${file.name.replace(/[^a-z0-9_.-]/gi, "-").toLowerCase()}`;
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(path.join(uploadDir, safeName), bytes);

  const url = `/uploads/${safeName}`;
  const content = await getCmsContent();
  content.images = [
    ...content.images,
    {
      id: safeName,
      title: file.name,
      url,
      type
    }
  ];

  if (type === "logo") {
    content.company.logoUrl = url;
  }

  await saveCmsContent(content);

  return NextResponse.json({ url });
}
