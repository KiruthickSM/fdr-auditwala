"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";
import { UserRole } from "@/lib/types";
import {
  Shield,
  Search,
  Bell,
  Sparkles,
  RotateCcw,
  Building2,
  FileCheck2,
  BarChart3,
  Sliders,
  BookOpen,
  ArrowRight
} from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { currentUser, setCurrentRole, resetToDefaultSeeds, startGuidedDemo, isGuidedDemoActive } = useStore();
  const [searchQuery, setSearchQuery] = useState("");

  const roles: Array<{ key: UserRole; label: string; desc: string }> = [
    { key: "INSTITUTION", label: "Institution", desc: "Submit & manage FDRs" },
    { key: "REVIEWER", label: "Reviewer", desc: "Inspect cases & decide" },
    { key: "ADMIN", label: "Admin", desc: "Rules & ledger audit" },
    { key: "MANAGEMENT", label: "Management", desc: "Portfolio & analytics" }
  ];

  const navLinks = [
    { href: "/institution", label: "Institution Portal", icon: Building2, roles: ["INSTITUTION", "ADMIN"] },
    { href: "/reviewer", label: "Reviewer Inbox", icon: FileCheck2, roles: ["REVIEWER", "ADMIN"] },
    { href: "/management", label: "Portfolio Analytics", icon: BarChart3, roles: ["MANAGEMENT", "ADMIN", "REVIEWER"] },
    { href: "/admin", label: "Rules & Governance", icon: Sliders, roles: ["ADMIN"] },
    { href: "/policy", label: "AICTE RAG Search", icon: BookOpen, roles: ["INSTITUTION", "REVIEWER", "ADMIN", "MANAGEMENT"] }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Top AICTE Gov Header Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <span className="font-semibold tracking-wide text-white flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
            ALL INDIA COUNCIL FOR TECHNICAL EDUCATION (AICTE)
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">Security Deposit / FDR Regulatory Portal</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={resetToDefaultSeeds}
            className="flex items-center space-x-1 text-slate-400 hover:text-white transition-colors"
            title="Reset data to initial benchmark scenarios"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo Data</span>
          </button>
          <span className="text-slate-600">|</span>
          <button
            onClick={startGuidedDemo}
            className="flex items-center space-x-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2.5 py-0.5 rounded font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>{isGuidedDemoActive ? "Guided Demo Active" : "Start Guided Demo"}</span>
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:bg-blue-800 transition-colors">
              <Shield className="w-6 h-6 text-blue-200" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-lg text-slate-900 tracking-tight">FDR AuditWala</span>
                <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">FDRGuard</span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">AI FDR Lifecycle Intelligence Platform</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => {
              const Icon = link.icon;
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-blue-700" : "text-slate-400"}`} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right Section: Role Switcher & User Profile */}
        <div className="flex items-center space-x-4">
          {/* Quick Role Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200">
            {roles.map(r => (
              <button
                key={r.key}
                onClick={() => setCurrentRole(r.key)}
                className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                  currentUser.role === r.key
                    ? "bg-white text-blue-900 shadow-sm font-bold border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title={r.desc}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* User Badge */}
          <div className="hidden sm:flex items-center space-x-2 pl-2 border-l border-slate-200">
            <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
              {currentUser.name.charAt(0)}
            </div>
            <div className="text-left text-xs">
              <div className="font-semibold text-slate-800 leading-tight truncate max-w-[140px]">{currentUser.name}</div>
              <div className="text-slate-500 text-[10px] uppercase font-bold">{currentUser.role}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
