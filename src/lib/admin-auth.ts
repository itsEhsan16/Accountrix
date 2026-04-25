import { createHmac, timingSafeEqual } from "crypto";

const SECRET = process.env.ADMIN_TOKEN_SECRET!;
const COOKIE_NAME = "admin_token";
const COOKIE_MAX_AGE = 60 * 60 * 8; // 8 hours

function sign(payload: string): string {
  const sig = createHmac("sha256", SECRET).update(payload).digest("hex");
  return `${payload}.${sig}`;
}

function verify(token: string): boolean {
  const lastDot = token.lastIndexOf(".");
  if (lastDot === -1) return false;
  const payload = token.slice(0, lastDot);
  const sig = token.slice(lastDot + 1);
  const expected = createHmac("sha256", SECRET).update(payload).digest("hex");
  try {
    return timingSafeEqual(
      Buffer.from(sig, "hex"),
      Buffer.from(expected, "hex"),
    );
  } catch {
    return false;
  }
}

export function createAdminToken(): string {
  const exp = Date.now() + COOKIE_MAX_AGE * 1000;
  // base64url-encode JSON payload so proxy.ts (Edge) can also decode it
  const payloadB64 = Buffer.from(JSON.stringify({ exp }))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=/g, "");
  return sign(payloadB64);
}

export function verifyAdminToken(token: string): boolean {
  if (!token) return false;
  if (!verify(token)) return false;
  // Check expiry from the base64url payload
  try {
    const payloadB64 = token.slice(0, token.lastIndexOf("."));
    const json = Buffer.from(
      payloadB64.replace(/-/g, "+").replace(/_/g, "/"),
      "base64",
    ).toString("utf-8");
    const { exp } = JSON.parse(json) as { exp: number };
    return exp > Date.now();
  } catch {
    return false;
  }
}

export const COOKIE_CONFIG = {
  name: COOKIE_NAME,
  maxAge: COOKIE_MAX_AGE,
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
};
