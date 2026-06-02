import crypto from "crypto";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { getMongoDb } from "@/lib/mongodb";

const COOKIE_NAME = "admin_session";

function getSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error("AUTH_SECRET is not configured");
  return secret;
}

export function signSession(username: string) {
  const payload = JSON.stringify({
    username,
    exp: Date.now() + 1000 * 60 * 60 * 24,
  });

  const base64 = Buffer.from(payload).toString("base64url");

  const sig = crypto
    .createHmac("sha256", getSecret())
    .update(base64)
    .digest("base64url");

  return `${base64}.${sig}`;
}

export function verifySession(token?: string) {
  if (!token) return null;

  const [base64, sig] = token.split(".");

  if (!base64 || !sig) return null;

  const expectedSig = crypto
    .createHmac("sha256", getSecret())
    .update(base64)
    .digest("base64url");

  if (sig !== expectedSig) return null;

  const data = JSON.parse(
    Buffer.from(base64, "base64url").toString()
  );

  if (Date.now() > data.exp) return null;

  return data;
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;

  return verifySession(token);
}

export async function createDefaultAdminUser() {
  const db = await getMongoDb();

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  if (!username || !password) {
    throw new Error("ADMIN_USERNAME or ADMIN_PASSWORD missing");
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await db.collection("users").updateOne(
    { role: "admin" },
    {
      $set: {
        username,
        passwordHash,
        role: "admin",
        updatedAt: new Date(),
      },
      $setOnInsert: {
        createdAt: new Date(),
      },
    },
    { upsert: true }
  );
}

export async function validateAdminLogin(
  username: string,
  password: string
) {
  await createDefaultAdminUser();

  const db = await getMongoDb();

  const user = await db.collection("users").findOne({
    username,
    role: "admin",
  });

  if (!user) return false;

  return bcrypt.compare(password, user.passwordHash);
}

export { COOKIE_NAME };