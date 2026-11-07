import { NextRequest, NextResponse } from "next/server";
import { ALL_SEED_FDRS } from "@/lib/seedData";
import { getSessionFromCookie } from "@/lib/auth";

export async function GET(request: NextRequest) {
    const session = await getSessionFromCookie(request.headers.get("authorization"));
  if (!session) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  const searchParams = request.nextUrl.searchParams;
  const lifecycle = searchParams.get("lifecycle");
  const institutionId = searchParams.get("institution_id");

  let fdrs = [...ALL_SEED_FDRS];

  if (session && (session.role === "APPLICANT" || session.role === "INSTITUTION") && session.institutionId) {
    fdrs = fdrs.filter(f => f.institutionId === session.institutionId);
  } else if (institutionId) {
    fdrs = fdrs.filter(f => f.institutionId === institutionId);
  }

  if (lifecycle) {
    fdrs = fdrs.filter(f => f.lifecycleStatus.toLowerCase() === lifecycle.toLowerCase());
  }

  return NextResponse.json({
    success: true,
    total: fdrs.length,
    fdrs
  });
}
