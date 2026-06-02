import { NextResponse } from "next/server";
import { signSession, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: Request) {
  const formData = await req.formData();

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  const adminEmail = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email !== adminEmail || password !== adminPassword) {
    return NextResponse.redirect(new URL("/login2", req.url));
  }

  const token = signSession(email);

  const res = NextResponse.redirect(new URL("/admin", req.url));

  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return res;
}