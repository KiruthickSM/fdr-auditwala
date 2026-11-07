import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("fdrguard_session")?.value;
  if (!token) {
    return NextResponse.json({ authenticated: false, user: null }, { status: 401 });
  }

  const payload = verifySessionToken(token);
  if (!payload) {
    const res = NextResponse.json({ authenticated: false, user: null }, { status: 401 });
    res.cookies.delete("fdrguard_session");
    return res;
  }

  const now = Math.floor(Date.now() / 1000);
  const remainingSeconds = Math.max(0, payload.exp - now);

  return NextResponse.json({
    authenticated: true,
    user: {
      id: payload.userId,
      name: payload.name,
      email: payload.email,
      role: payload.role,
      institutionId: payload.institutionId,
      department: payload.department
    },
    remainingSeconds
  });
}
