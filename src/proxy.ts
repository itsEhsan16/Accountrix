import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "admin_token";

async function verifyToken(token: string): Promise<boolean> {
  try {
    const secret = process.env.ADMIN_TOKEN_SECRET;
    if (!secret) return false;

    const dotIdx = token.lastIndexOf(".");
    if (dotIdx === -1) return false;
    const payloadB64 = token.slice(0, dotIdx);
    const sigHex = token.slice(dotIdx + 1);

    const enc = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw",
      enc.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"],
    );

    const sigBuffer = await crypto.subtle.sign(
      "HMAC",
      key,
      enc.encode(payloadB64),
    );
    const computedHex = Array.from(new Uint8Array(sigBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    // Constant-time comparison
    if (computedHex.length !== sigHex.length) return false;
    let diff = 0;
    for (let i = 0; i < computedHex.length; i++) {
      diff |= computedHex.charCodeAt(i) ^ sigHex.charCodeAt(i);
    }
    if (diff !== 0) return false;

    // Check expiry (base64url → JSON)
    const json = atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"));
    const { exp } = JSON.parse(json) as { exp: number };
    return exp > Date.now();
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (!token || !(await verifyToken(token))) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
