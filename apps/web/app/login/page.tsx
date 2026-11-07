"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Shield,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  AlertOctagon,
  Copy,
  Check,
  UserCheck,
  Building2,
  FileCheck2,
  Sliders,
  BarChart3,
  KeyRound
} from "lucide-react";
import { SEEDED_DEMO_ACCOUNTS, DEMO_PASSWORD } from "@/lib/auth";
import { useStore } from "@/lib/store";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next");

  const [email, setEmail] = useState("rajesh.sharma@demo.fdrguard.test");
  const [password, setPassword] = useState("Demo@12345");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const { setCurrentUserDirectly } = useStore();

  const handleLogin = async (overrideEmail?: string, overridePassword?: string) => {
    setLoading(true);
    setErrorMessage(null);

    const targetEmail = overrideEmail || email;
    const targetPassword = overridePassword || password;

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: targetEmail,
          password: targetPassword,
          next: nextPath
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Authentication failed. Please verify credentials.");
        setLoading(false);
        return;
      }

      // Update store state with logged in user session
      if (data.user && setCurrentUserDirectly) {
        setCurrentUserDirectly(data.user);
      }

      // Broadcast to other tabs
      if (typeof window !== "undefined" && "BroadcastChannel" in window) {
        const bc = new BroadcastChannel("fdrguard_auth");
        bc.postMessage({ type: "LOGIN", user: data.user });
      }

      // Navigate to destination
      router.push(data.redirectTo || "/reviewer");
      router.refresh();
    } catch (err: any) {
      setErrorMessage(err.message || "Network error connecting to auth service");
      setLoading(false);
    }
  };

  const handleQuickSignIn = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword(DEMO_PASSWORD);
    handleLogin(demoEmail, DEMO_PASSWORD);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">


      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-auto">
        {/* Left: Login Form Card (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl shadow-xl p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center shadow-md">
              <Shield className="w-6 h-6 text-blue-200" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-black text-xl text-slate-900">FDR AuditWala</h1>
                <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                  FDRGuard
                </span>
              </div>
              <p className="text-xs text-slate-500">AI Security Deposit Lifecycle Platform</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">Sign in to your regulatory portal</h2>
            <p className="text-xs text-slate-500 mt-1">
              Enter your credentials to access the FDR inspection, verification, and audit suite.
            </p>
          </div>

          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs p-3.5 rounded-xl flex items-start space-x-2.5 animate-fadeIn">
              <AlertOctagon className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
              <div className="leading-relaxed font-medium">{errorMessage}</div>
            </div>
          )}

          <form
            onSubmit={e => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Official Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="email"
                  autoFocus
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@demo.fdrguard.test"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-bold text-slate-700">Password</label>
                <span className="text-[11px] text-slate-400 font-mono">Default: Demo@12345</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-9 pr-10 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center space-x-2 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold text-xs py-2.5 rounded-lg shadow-md transition-all"
            >
              {loading ? (
                <span>Authenticating regulatory session...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="border-t border-slate-100 pt-4 text-center">
            <div className="text-[11px] text-slate-500">
              Security Policy: Sessions automatically expire after 30 minutes of inactivity. 5 failed attempts trigger a 15-minute lockout.
            </div>
          </div>
        </div>

        {/* Right: Seeded Demo Accounts Panel (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-amber-100 text-amber-900 rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Demo Accounts</h3>
                <p className="text-[11px] text-slate-500">
                  Click <strong>Sign In Instantly</strong> on any persona to test role-specific lifecycle controls.
                </p>
              </div>
            </div>
            <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border">
              PWD: Demo@12345
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[520px] overflow-y-auto pr-1">
            {SEEDED_DEMO_ACCOUNTS.map(account => {
              const isCurrent = email === account.email;
              const roleIcon =
                account.role === "REVIEWER"
                  ? FileCheck2
                  : account.role === "INSTITUTION"
                  ? Building2
                  : account.role === "ADMIN"
                  ? Sliders
                  : BarChart3;
              const Icon = roleIcon;

              const roleColor =
                account.role === "REVIEWER"
                  ? "bg-blue-50 text-blue-800 border-blue-200"
                  : account.role === "INSTITUTION"
                  ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                  : account.role === "ADMIN"
                  ? "bg-purple-50 text-purple-800 border-purple-200"
                  : "bg-indigo-50 text-indigo-800 border-indigo-200";

              return (
                <div
                  key={account.id}
                  className={`border rounded-xl p-3.5 flex flex-col justify-between transition-all ${
                    isCurrent
                      ? "border-blue-600 bg-blue-50/40 ring-1 ring-blue-500 shadow-sm"
                      : "border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${roleColor}`}>
                        {account.role}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <div>
                      <div className="font-bold text-xs text-slate-900">{account.name}</div>
                      <div className="text-[11px] text-slate-600 leading-tight">{account.title}</div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">{account.department}</div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-50 border rounded px-2 py-1 text-[11px] font-mono text-slate-600">
                      <span className="truncate mr-1">{account.email}</span>
                      <button
                        type="button"
                        onClick={() => handleCopy(account.email)}
                        className="text-slate-400 hover:text-slate-700 shrink-0"
                        title="Copy email"
                      >
                        {copiedEmail === account.email ? (
                          <Check className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 mt-2 border-t border-slate-100 flex items-center space-x-2">
                    <button
                      type="button"
                      onClick={() => handleQuickSignIn(account.email)}
                      className="flex-1 bg-slate-900 hover:bg-blue-900 text-white font-bold text-[11px] py-1.5 rounded-lg shadow-sm transition-colors flex items-center justify-center space-x-1"
                    >
                      <UserCheck className="w-3 h-3" />
                      <span>Sign In Instantly</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setEmail(account.email);
                        setPassword(DEMO_PASSWORD);
                      }}
                      className="px-2 py-1.5 border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg text-[11px] font-semibold"
                      title="Fill form with credentials"
                    >
                      Fill
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-400 border-t bg-white">
        FDR AuditWala · AI-powered FDR lifecycle intelligence
      </footer>
    </div>
  );
}


export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading Login Portal...</div>}>
      <LoginContent />
    </Suspense>
  );
}
