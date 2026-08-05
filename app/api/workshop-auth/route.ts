import { NextRequest, NextResponse } from "next/server";
import {
  WORKSHOP_COOKIE,
  computeToken,
  isConfigured,
  passwordMatches,
} from "@/lib/workshop-auth";

export const runtime = "nodejs";

const MAX_ATTEMPTS = 10;
const WINDOW_MS = 10 * 60 * 1000;
const attempts = new Map<string, { count: number; windowStart: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);
  if (!entry || now - entry.windowStart > WINDOW_MS) {
    attempts.set(ip, { count: 1, windowStart: now });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_ATTEMPTS;
}

export async function POST(req: NextRequest) {
  const back = new URL("/workshop-resources", req.nextUrl.origin);

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    back.searchParams.set("error", "rate");
    return NextResponse.redirect(back, 303);
  }

  if (!isConfigured()) {
    back.searchParams.set("error", "unconfigured");
    return NextResponse.redirect(back, 303);
  }

  const form = await req.formData().catch(() => null);
  const password = String(form?.get("password") ?? "");

  if (!password || !passwordMatches(password)) {
    back.searchParams.set("error", "incorrect");
    return NextResponse.redirect(back, 303);
  }

  const res = NextResponse.redirect(back, 303);
  res.cookies.set(WORKSHOP_COOKIE, computeToken()!, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return res;
}
