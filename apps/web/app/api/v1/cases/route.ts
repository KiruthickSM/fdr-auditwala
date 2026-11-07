import { NextRequest, NextResponse } from "next/server";
import { SEED_CASES } from "@/lib/seedData";
import { getSessionFromCookie } from "@/lib/auth";

export async function GET(request: NextRequest) {
    const session = await getSessionFromCookie(request.headers.get("authorization"));
  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  const searchParams = request.nextUrl.searchParams;
  const status = searchParams.get("status");
  const institutionId = searchParams.get("institution_id");

  let cases = [...SEED_CASES];

  // Tenant Boundary isolation
  if (session && (session.role === "APPLICANT" || session.role === "INSTITUTION") && session.institutionId) {
    cases = cases.filter(c => c.institutionId === session.institutionId);
  } else if (institutionId) {
    cases = cases.filter(c => c.institutionId === institutionId);
  }

  if (status) {
    cases = cases.filter(c => c.status.toLowerCase() === status.toLowerCase());
  }

  return NextResponse.json({
    success: true,
    count: cases.length,
    cases
  });
}
