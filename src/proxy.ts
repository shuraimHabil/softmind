import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Block indexing on every host that is NOT the production domain
  if (request.nextUrl.hostname !== "www.softmindindia.com") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

// Run on every route (no matcher restrictions)
export const config = {
  matcher: "/:path*",
};
