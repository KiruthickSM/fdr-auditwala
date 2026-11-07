import { UserRole, UserSession } from "./types";

export interface DemoUserAccount extends UserSession {
  passwordHash?: string;
  title: string;
  department: string;
  institutionId?: string;
  isActive: boolean;
  failedAttempts: number;
  lockedUntil?: number; // timestamp in ms
  lastLoginAt?: string;
}

export const DEMO_PASSWORD = process.env.DEMO_PASSWORD || "Demo@12345";
export const JWT_SECRET = process.env.JWT_SECRET || "fdrguard-sih-2026-secret-key-32chars!";

export const SEEDED_DEMO_ACCOUNTS: DemoUserAccount[] = [
  {
    id: "usr-rev-1",
    name: "Rajesh Sharma",
    email: "rajesh.sharma@demo.fdrguard.test",
    role: "CASE_OFFICER",
    title: "Senior Case Officer / Reviewer",
    department: "FDR Verification & Inspection Cell",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-07T09:15:00Z"
  },
  {
    id: "usr-appr-1",
    name: "Prof. K. Rajagopal",
    email: "approving.authority@demo.fdrguard.test",
    role: "APPROVING_AUTHORITY",
    title: "Member Secretary / Approving Authority",
    department: "AICTE Regulatory Approvals Board",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-07T08:30:00Z"
  },
  {
    id: "usr-inst-2",
    name: "Dr. Arvind Patel",
    email: "registrar.inst2@demo.fdrguard.test",
    role: "APPLICANT",
    institutionId: "inst-2",
    title: "Registrar, Sardar Patel Management Academy",
    department: "Institutional Administration",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-07T08:00:00Z"
  },
  {
    id: "usr-fin-1",
    name: "Shri M. K. Verma",
    email: "finance.officer@demo.fdrguard.test",
    role: "FINANCE_OFFICER",
    title: "Chief Finance Officer",
    department: "AICTE Security Deposit Custody & Accounts",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-06T15:40:00Z"
  },
  {
    id: "usr-audit-1",
    name: "Smt. Meenakshi Sundaram",
    email: "auditor@demo.fdrguard.test",
    role: "AUDITOR",
    title: "Chief Vigilance & Internal Auditor",
    department: "Independent Audit & Vigilance Cell",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-06T11:20:00Z"
  },
  {
    id: "usr-admin-1",
    name: "Smt. Priya Sundaram",
    email: "admin@demo.fdrguard.test",
    role: "SYSTEM_ADMIN",
    title: "Platform System Administrator",
    department: "AICTE Portal Infrastructure Cell",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-07T07:30:00Z"
  },
  {
    id: "usr-policy-1",
    name: "Dr. H. C. Nagaraj",
    email: "policy.admin@demo.fdrguard.test",
    role: "POLICY_ADMIN",
    title: "Regulatory Policy Administrator",
    department: "AICTE Approval Process Handbook (APH) Council",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-05T14:15:00Z"
  },
  {
    id: "usr-mgmt-1",
    name: "Dr. Anil Sahasrabudhe",
    email: "management@demo.fdrguard.test",
    role: "MANAGEMENT",
    title: "Executive Director",
    department: "AICTE Executive Board",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-06T17:00:00Z"
  },
  {
    id: "usr-rev-2",
    name: "Priya Nair",
    email: "priya.nair@demo.fdrguard.test",
    role: "CASE_OFFICER",
    title: "Forensic Analyst",
    department: "Document Authenticity & Forensics",
    isActive: true,
    failedAttempts: 0,
    lastLoginAt: "2026-11-06T14:20:00Z"
  }
];

// In-memory rate limiting and lockout state (survives requests in same node process)
const accountStateMap: Map<string, { failedAttempts: number; lockedUntil?: number }> = new Map();

export function getAccountState(email: string) {
  const normalized = email.toLowerCase().trim();
  if (!accountStateMap.has(normalized)) {
    accountStateMap.set(normalized, { failedAttempts: 0 });
  }
  return accountStateMap.get(normalized)!;
}

export function recordFailedLogin(email: string): { isLocked: boolean; minutesRemaining: number } {
  const state = getAccountState(email);
  const now = Date.now();

  // If previous lock expired, reset
  if (state.lockedUntil && now > state.lockedUntil) {
    state.failedAttempts = 0;
    state.lockedUntil = undefined;
  }

  state.failedAttempts += 1;
  if (state.failedAttempts >= 5) {
    // Lock for 15 minutes (900,000 ms)
    state.lockedUntil = now + 15 * 60 * 1000;
    return { isLocked: true, minutesRemaining: 15 };
  }

  return { isLocked: false, minutesRemaining: 0 };
}

export function resetAccountLockout(email: string) {
  const state = getAccountState(email);
  state.failedAttempts = 0;
  state.lockedUntil = undefined;
}

export function isAccountLocked(email: string): { isLocked: boolean; minutesRemaining: number } {
  const state = getAccountState(email);
  const now = Date.now();
  if (state.lockedUntil && now < state.lockedUntil) {
    const msLeft = state.lockedUntil - now;
    const minutesLeft = Math.max(1, Math.ceil(msLeft / 60000));
    return { isLocked: true, minutesRemaining: minutesLeft };
  }
  if (state.lockedUntil && now >= state.lockedUntil) {
    state.failedAttempts = 0;
    state.lockedUntil = undefined;
  }
  return { isLocked: false, minutesRemaining: 0 };
}

export function findDemoUserByEmail(email: string): DemoUserAccount | undefined {
  const normalized = email.toLowerCase().trim();
  return SEEDED_DEMO_ACCOUNTS.find(a => a.email.toLowerCase() === normalized);
}

export function verifyPassword(providedPassword: string): boolean {
  return providedPassword === DEMO_PASSWORD;
}

export function getDefaultLandingRoute(role: UserRole): string {
  switch (role) {
    case "APPLICANT":
    case "INSTITUTION":
      return "/institution";
    case "CASE_OFFICER":
    case "REVIEWER":
    case "APPROVING_AUTHORITY":
      return "/reviewer";
    case "SYSTEM_ADMIN":
    case "POLICY_ADMIN":
    case "AUDITOR":
    case "ADMIN":
      return "/admin";
    case "FINANCE_OFFICER":
    case "MANAGEMENT":
      return "/management";
    default:
      return "/";
  }
}

export function isSafeRedirect(path: string | null | undefined): boolean {
  if (!path) return false;
  // Must start with single slash, not double slash, no backslashes, no protocols
  if (!path.startsWith("/")) return false;
  if (path.startsWith("//")) return false;
  if (path.includes("\\")) return false;
  if (path.includes("://")) return false;
  return true;
}

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: UserRole;
  institutionId?: string;
  department?: string;
  iat: number;
  exp: number; // 30 minutes expiration
}

// Simple deterministic HMAC-like signature for demo tokens
export function createSessionToken(user: DemoUserAccount): string {
  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = {
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    institutionId: user.institutionId,
    department: user.department,
    iat: now,
    exp: now + 30 * 60 // 30 minutes
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  // Simple checksum signature using secret
  let sum = 0;
  for (let i = 0; i < payloadB64.length; i++) {
    sum = (sum * 31 + payloadB64.charCodeAt(i) + JWT_SECRET.charCodeAt(i % JWT_SECRET.length)) % 1000000007;
  }
  const sig = sum.toString(36);
  return `${payloadB64}.${sig}`;
}

export function verifySessionToken(token: string): SessionPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return null;
    const [payloadB64, sig] = parts;

    let sum = 0;
    for (let i = 0; i < payloadB64.length; i++) {
      sum = (sum * 31 + payloadB64.charCodeAt(i) + JWT_SECRET.charCodeAt(i % JWT_SECRET.length)) % 1000000007;
    }
    if (sum.toString(36) !== sig) return null;

    const payloadJson = Buffer.from(payloadB64, "base64url").toString("utf-8");
    const payload: SessionPayload = JSON.parse(payloadJson);

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp < now) {
      return null; // Expired
    }

    return payload;
  } catch {
    return null;
  }
}

export async function getSessionFromCookie(): Promise<SessionPayload | null> {
  try {
    const { cookies } = await import("next/headers");
    const cookieStore = cookies();
    const token = cookieStore.get("fdr_session_token")?.value;
    if (!token) return null;
    return verifySessionToken(token);
  } catch {
    return null;
  }
}
