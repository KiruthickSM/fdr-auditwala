"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/lib/store";
import { SEEDED_DEMO_ACCOUNTS } from "@/lib/auth";
import {
  Shield,
  Sparkles,
  RotateCcw,
  Building2,
  FileCheck2,
  BarChart3,
  Sliders,
  BookOpen,
  ChevronDown,
  LogOut,
  AlertTriangle
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const {
    currentUser,
    setCurrentUserDirectly,
    resetToDefaultSeeds,
    startGuidedDemo,
    isGuidedDemoActive
  } = useStore();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showResetConfirmModal, setShowResetConfirmModal] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // ignore
    }
    if (typeof window !== "undefined" && "BroadcastChannel" in window) {
      new BroadcastChannel("fdrguard_auth").postMessage({ type: "LOGOUT" });
    }
    router.push("/login");
  };

  const handleSwitchDemoAccount = async (targetEmail: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: targetEmail, password: "Demo@12345" })
      });
      const data = await res.json();
      if (data.success && data.user) {
        setCurrentUserDirectly(data.user);
        setIsUserMenuOpen(false);
        router.push(data.redirectTo || "/reviewer");
        router.refresh();
      }
    } catch {
      // ignore
    }
  };

  // If logged out or on login page, render bare minimal brand header with NO app nav, NO demo controls, and NO user persona badge
  if (!currentUser || pathname === "/login") {
    return (
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:bg-blue-800 transition-colors">
              <Shield className="w-6 h-6 text-blue-200" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">FDR AuditWala</span>
                <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                  FDRGuard
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">AI FDR Lifecycle Intelligence Platform</p>
            </div>
          </Link>
          {pathname !== "/login" && (
            <Link
              href="/login"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2 rounded-lg shadow-sm transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </header>
    );
  }

  const navLinks = [
    { href: "/institution", label: "Institution Portal", icon: Building2, roles: ["APPLICANT", "INSTITUTION", "SYSTEM_ADMIN", "ADMIN"] },
    { href: "/reviewer", label: "Reviewer Inbox", icon: FileCheck2, roles: ["CASE_OFFICER", "APPROVING_AUTHORITY", "REVIEWER", "SYSTEM_ADMIN", "ADMIN"] },
    { href: "/management", label: "Portfolio Analytics", icon: BarChart3, roles: ["MANAGEMENT", "FINANCE_OFFICER", "APPROVING_AUTHORITY", "SYSTEM_ADMIN", "ADMIN", "CASE_OFFICER", "REVIEWER"] },
    { href: "/admin", label: "Rules & Governance", icon: Sliders, roles: ["SYSTEM_ADMIN", "POLICY_ADMIN", "AUDITOR", "ADMIN"] },
    { href: "/policy", label: "AICTE RAG Search", icon: BookOpen, roles: ["APPLICANT", "CASE_OFFICER", "APPROVING_AUTHORITY", "FINANCE_OFFICER", "AUDITOR", "SYSTEM_ADMIN", "POLICY_ADMIN", "MANAGEMENT", "INSTITUTION", "REVIEWER", "ADMIN"] }
  ];

  const visibleLinks = navLinks.filter(l => l.roles.includes(currentUser.role));
  const isAdmin = currentUser.role === "SYSTEM_ADMIN" || currentUser.role === "ADMIN";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand: FDR AuditWala */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:bg-blue-800 transition-colors">
              <Shield className="w-6 h-6 text-blue-200" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">FDR AuditWala</span>
                <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                  FDRGuard
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">AI FDR Lifecycle Intelligence Platform</p>
            </div>
          </Link>

          {/* Navigation Links with aria-current */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {visibleLinks.map(link => {
              const Icon = link.icon;
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-900 font-bold border-b-2 border-blue-900"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-900 font-bold" : "text-slate-400"}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Section: User Profile & User Menu (with Demo controls inside) */}
        <div className="flex items-center space-x-3">
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center space-x-2.5 p-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors"
              aria-expanded={isUserMenuOpen}
              aria-haspopup="true"
            >
              <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                {currentUser.name.charAt(0)}
              </div>
              <div className="text-left text-xs hidden sm:block">
                <div className="font-bold text-slate-900 leading-tight truncate max-w-[150px]">
                  {currentUser.name}
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-[10px] uppercase font-bold text-blue-800 bg-blue-100 px-1.5 py-0.2 rounded">
                    {currentUser.role}
                  </span>
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 text-xs z-50 text-slate-800 animate-fadeIn">
                {/* User Info Header */}
                <div className="px-4 py-2.5 border-b border-slate-100">
                  <div className="font-bold text-slate-900">{currentUser.name}</div>
                  <div className="text-slate-500 text-[11px] truncate">{currentUser.email}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    Role: {currentUser.role} {currentUser.institutionId ? `(Tenant: ${currentUser.institutionId})` : ""}
                  </div>
                </div>

                {/* Demo & Evaluation Section */}
                <div className="px-4 pt-2.5 pb-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Demo & Evaluation
                </div>
                <button
                  onClick={() => {
                    setIsUserMenuOpen(false);
                    startGuidedDemo();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-blue-50 flex items-center space-x-2 text-blue-900 font-semibold"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <div>
                    <div>{isGuidedDemoActive ? "Guided Demo Active" : "Start Guided Demo"}</div>
                    <div className="text-[10px] text-slate-500 font-normal">6-step automated evaluation tour</div>
                  </div>
                </button>

                {isAdmin && (
                  <button
                    onClick={() => {
                      setIsUserMenuOpen(false);
                      setShowResetConfirmModal(true);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-rose-50 flex items-center space-x-2 text-rose-700 font-semibold"
                  >
                    <RotateCcw className="w-4 h-4 text-rose-600" />
                    <div>
                      <div>Reset Demo Data</div>
                      <div className="text-[10px] text-slate-500 font-normal">Restores benchmark cases & ledger (Admin)</div>
                    </div>
                  </button>
                )}

                {/* Switch Demo Persona */}
                <div className="border-t border-slate-100 my-1"></div>
                <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Switch Demo Account
                </div>
                <div className="max-h-48 overflow-y-auto px-1 space-y-0.5">
                  {SEEDED_DEMO_ACCOUNTS.map(acc => {
                    const isSelected = acc.email === currentUser.email;
                    return (
                      <button
                        key={acc.id}
                        onClick={() => handleSwitchDemoAccount(acc.email)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg flex items-center justify-between text-xs transition-colors ${
                          isSelected ? "bg-blue-50 text-blue-900 font-bold" : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <div className="truncate mr-2">
                          <div>{acc.name}</div>
                          <div className="text-[10px] text-slate-400 font-normal">{acc.title}</div>
                        </div>
                        <span className="text-[9px] font-bold uppercase bg-slate-100 px-1.5 py-0.5 rounded shrink-0">
                          {acc.role}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="border-t border-slate-100 mt-2 pt-1">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-rose-50 text-rose-700 font-semibold flex items-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Reset Demo Data (Admin Only) */}
      {showResetConfirmModal && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-sm w-full p-6 text-center space-y-4 animate-scaleUp">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900">Reset Demo Data?</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                This will restore all benchmark cases, FDR records, and the audit ledger to the initial seed state. Any new test submissions will be cleared.
              </p>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => {
                  resetToDefaultSeeds();
                  setShowResetConfirmModal(false);
                }}
                className="flex-1 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 rounded-lg shadow-sm transition-colors"
              >
                Yes, Restore Demo Cases
              </button>
              <button
                onClick={() => setShowResetConfirmModal(false)}
                className="flex-1 border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold text-xs py-2.5 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
