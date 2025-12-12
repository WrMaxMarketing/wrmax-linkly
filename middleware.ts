// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorized() {
  return new NextResponse("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="WRMAX Linkly Admin"',
    },
  });
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ✅ Protege APENAS a Home (e opcionalmente /admin)
  const isProtected = pathname === "/" || pathname.startsWith("/admin");

  if (!isProtected) return NextResponse.next();

  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASS;

  if (!user || !pass) return unauthorized();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  const base64 = auth.split(" ")[1] || "";
  const decoded = Buffer.from(base64, "base64").toString("utf8");
  const [u, p] = decoded.split(":");

  if (u === user && p === pass) return NextResponse.next();

  return unauthorized();
}

// Importante: não interceptar _next, assets etc.
export const config = {
  matcher: ["/", "/admin/:path*"],
};
