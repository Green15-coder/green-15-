import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const { pathname } = req.nextUrl;

  const protectedPath =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/api/settings") ||
    pathname.startsWith("/api/saved-views") ||
    pathname.startsWith("/api/tracker");

  if (protectedPath && !req.auth?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
