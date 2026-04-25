import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_CONFIG } from "@/lib/admin-auth";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_CONFIG.name, "", {
    maxAge: 0,
    httpOnly: COOKIE_CONFIG.httpOnly,
    sameSite: COOKIE_CONFIG.sameSite,
    secure: COOKIE_CONFIG.secure,
    path: COOKIE_CONFIG.path,
  });
  return NextResponse.json({ ok: true });
}
