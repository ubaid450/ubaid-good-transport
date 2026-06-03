import { NextResponse } from "next/server";
import { signSession, validateAdminLogin, COOKIE_NAME } from "@/lib/auth";

export async function POST(req: Request) {
  const formData = await req.formData();

  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  const valid = await validateAdminLogin(email, password);

  if (!valid) {
    return NextResponse.redirect(new URL("/login", req.url), 303);
  }

  const token = signSession(email);

  const res = NextResponse.redirect(new URL("/admin/dashboard", req.url), 303);

  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return res;
}