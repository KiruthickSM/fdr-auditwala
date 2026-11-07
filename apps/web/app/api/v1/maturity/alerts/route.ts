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
  const windowDays = parseInt(searchParams.get("window") || "45", 10);

  const now = new Date("2026-11-07T00:00:00Z");
  const horizon = new Date(now.getTime() + windowDays * 24 * 60 * 60 * 1000);

  const upcomingAlerts = ALL_SEED_FDRS.filter(f => {
    if (!f.maturityDate) return false;
    const mDate = new Date(f.maturityDate);
    return mDate >= now && mDate <= horizon;
  }).map(f => {
    const mDate = new Date(f.maturityDate);
    const daysRemaining = Math.ceil((mDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return {
      fdrId: f.id,
      fdrNumber: f.fdrNumber,
      institutionId: f.institutionId,
      institutionName: f.institutionName,
      amount: f.amount,
      maturityDate: f.maturityDate,
      daysRemaining,
      urgency: daysRemaining <= 15 ? "CRITICAL" : daysRemaining <= 30 ? "HIGH" : "NORMAL",
      recommendedAction: "Issue 45-day pre-maturity renewal notice to institution per AICTE norms."
    };
  });

  return NextResponse.json({
    success: true,
    as_of: now.toISOString(),
    window_days: windowDays,
    alerts_count: upcomingAlerts.length,
    alerts: upcomingAlerts
  });
}
