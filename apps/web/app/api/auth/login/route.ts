import { NextRequest, NextResponse } from "next/server";
import {
  findDemoUserByEmail,
  verifyPassword,
  createSessionToken,
  recordFailedLogin,
  resetAccountLockout,
  isAccountLocked,
  getDefaultLandingRoute,
  isSafeRedirect
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password, next } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    // Check account lockout
    const lockStatus = isAccountLocked(email);
    if (lockStatus.isLocked) {
      return NextResponse.json(
        {
          error: `Account is temporarily locked due to 5 consecutive failed attempts. Please retry in ${lockStatus.minutesRemaining} minutes.`
        },
        { status: 429 }
      );
    }

    const user = findDemoUserByEmail(email);
    if (!user || !verifyPassword(password)) {
      const lockCheck = recordFailedLogin(email);
      if (lockCheck.isLocked) {
        return NextResponse.json(
          {
            error: "Too many failed attempts. Account locked for 15 minutes."
          },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { error: "Invalid email or password. Please check your credentials." },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: "This demo account has been deactivated by administrator." },
        { status: 403 }
      );
    }

    // Successful login: reset lockout
    resetAccountLockout(email);

    // Create session token (30 min expiration)
    const token = createSessionToken(user);
    const defaultLanding = getDefaultLandingRoute(user.role);
    const redirectUrl = isSafeRedirect(next) ? next : defaultLanding;

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        institutionId: user.institutionId,
        department: user.department,
        title: user.title
      },
      redirectTo: redirectUrl
    });

    // Set HttpOnly Secure Cookie (SameSite=Lax, 30 mins)
    response.cookies.set("fdrguard_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 30 * 60, // 30 mins
      path: "/"
    });

    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Login failed" }, { status: 500 });
  }
}
