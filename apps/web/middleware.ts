import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "fdrguard-sih-2026-secret-key-32chars!";

interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
  institutionId?: string;
  exp: number;
}

function verifyEdgeToken(token: string): SessionPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;
    const [payloadB64, sig] = parts;

    // Checksum verification
    let sum = 0;
    for (let i = 0; i < payloadB64.length; i++) {
      sum = (sum * 31 + payloadB64.charCodeAt(i) + JWT_SECRET.charCodeAt(i % JWT_SECRET.length)) % 1000000007;
    }
    if (sum.toString(36) !== sig) return null;

    // Base64url decode
    const base64 = payloadB64.replace(/-/g, "+").replace(/_/g, "/");
    const jsonStr = decodeURIComponent(
      atob(base64)
        .split("")
        .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const payload: SessionPayload = JSON.parse(jsonStr);

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) return null; // Expired

    return payload;
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // 1. Allow public assets and public routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/static") ||
    pathname === "/login" ||
    pathname === "/403" ||
    pathname === "/favicon.ico" ||
    pathname.match(/\.(png|jpg|jpeg|svg|ico|css|js|woff|woff2)$/)
  ) {
    return NextResponse.next();
  }

  // 2. Read session cookie
  const token = req.cookies.get("fdrguard_session")?.value;
  const session = token ? verifyEdgeToken(token) : null;

  // Unauthenticated -> redirect to /login?next=<path>
  if (!session) {
    const loginUrl = new URL("/login", req.url);
    if (pathname !== "/") {
      loginUrl.searchParams.set("next", pathname);
    }
    const response = NextResponse.redirect(loginUrl);
    if (token) {
      // Clear expired cookie
      response.cookies.delete("fdrguard_session");
    }
    return response;
  }

  const role = session.role;

  // 3. RBAC Route Protection
  // Reviewer routes (Case Officer, Approving Authority, Admin)
  if (pathname.startsWith("/reviewer")) {
    const allowed = ["CASE_OFFICER", "APPROVING_AUTHORITY", "SYSTEM_ADMIN", "REVIEWER", "ADMIN"];
    if (!allowed.includes(role)) {
      return NextResponse.redirect(new URL("/403", req.url));
    }
  }

  // Institution routes & Tenant Isolation
  if (pathname.startsWith("/institution")) {
    const allowed = ["APPLICANT", "SYSTEM_ADMIN", "INSTITUTION", "ADMIN"];
    if (!allowed.includes(role)) {
      return NextResponse.redirect(new URL("/403", req.url));
    }

    // Tenant Isolation check
    if (role === "APPLICANT" || role === "INSTITUTION") {
      const match = pathname.match(/\/institution\/([^\/]+)/);
      if (match && match[1]) {
        const requestedInstId = match[1];
        if (session.institutionId && requestedInstId !== session.institutionId) {
          // Block cross-tenant access
          return NextResponse.redirect(new URL("/403?reason=tenant_mismatch", req.url));
        }
      }
    }
  }

  // Admin routes (System Admin, Policy Admin, Auditor, Admin)
  if (pathname.startsWith("/admin")) {
    const allowed = ["SYSTEM_ADMIN", "POLICY_ADMIN", "AUDITOR", "ADMIN"];
    if (!allowed.includes(role)) {
      return NextResponse.redirect(new URL("/403", req.url));
    }
  }

  // Management routes (Management, Finance Officer, Approving Authority, System Admin)
  if (pathname.startsWith("/management")) {
    const allowed = ["MANAGEMENT", "FINANCE_OFFICER", "APPROVING_AUTHORITY", "SYSTEM_ADMIN", "ADMIN"];
    if (!allowed.includes(role)) {
      return NextResponse.redirect(new URL("/403", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
