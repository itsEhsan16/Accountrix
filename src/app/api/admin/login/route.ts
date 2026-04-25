import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createAdminToken, COOKIE_CONFIG } from "@/lib/admin-auth";

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (!password || password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const token = createAdminToken();
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_CONFIG.name, token, {
      maxAge: COOKIE_CONFIG.maxAge,
      httpOnly: COOKIE_CONFIG.httpOnly,
      sameSite: COOKIE_CONFIG.sameSite,
      secure: COOKIE_CONFIG.secure,
      path: COOKIE_CONFIG.path,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
