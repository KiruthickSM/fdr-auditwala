import { NextRequest, NextResponse } from "next/server";
import { resetAccountLockout, findDemoUserByEmail } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = findDemoUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    resetAccountLockout(email);
    return NextResponse.json({
      success: true,
      message: `Account lockout cleared and password reset token sent for ${email}. Default temporary password: Demo@12345`
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
