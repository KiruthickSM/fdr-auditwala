"use client";

import React from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import {
  Shield,
  FileCheck2,
  Building2,
  BarChart3,
  Sliders,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ShieldAlert,
  HelpCircle,
  FileText
} from "lucide-react";

export default function LandingPage() {
  const { setCurrentRole, startGuidedDemo, fdrs, cases } = useStore();

  const benchmarkCases = [
    {
      id: "case-bench-1",
      fdrId: "fdr-benchmark-1",
      tag: "CASE 1: CLEAN MATCH",
      title: "Normal FDR (₹35 Lakhs, SBI)",
      desc: "All extracted certificate details correspond 100% with SBI Core Banking authoritative records.",
      status: "LOW RISK / VERIFIED",
      statusColor: "bg-emerald-50 text-emerald-800 border-emerald-300",
      href: "/fdr/fdr-benchmark-1"
    },
    {
      id: "case-bench-2",
      fdrId: "fdr-benchmark-2",
      tag: "CASE 2: AMOUNT MISMATCH",
      title: "₹50L Claimed vs ₹45L Bank CBS (PNB)",
      desc: "Flagged by Cross-Source Verification with ₹5L deficit. Altered numeric glyph detected by AI.",
      status: "CRITICAL / HUMAN REVIEW",
      statusColor: "bg-rose-50 text-rose-800 border-rose-300",
      href: "/reviewer/case/case-bench-2"
    },
    {
      id: "case-bench-3",
      fdrId: "fdr-benchmark-3",
      tag: "CASE 3: IMMINENT MATURITY",
      title: "Expiring in < 20 Days (Bank of Baroda)",
      desc: "Maturity proximity rule triggers automated Chapter IV renewal notice and replacement workflow.",
      status: "RENEWAL REQUIRED",
      statusColor: "bg-amber-50 text-amber-800 border-amber-300",
      href: "/fdr/fdr-benchmark-3"
    },
    {
      id: "case-bench-4",
      fdrId: "fdr-benchmark-4",
      tag: "CASE 4: SUSPICIOUS SCAN",
      title: "Tamper Artifacts & Metadata Skew (HDFC)",
      desc: "Photoshop edit tags in metadata, mismatched stamp DPI, and unverified branch certificate serial.",
      status: "HIGH CONCERN / ESCALATE",
      statusColor: "bg-rose-50 text-rose-800 border-rose-300",
      href: "/reviewer/case/case-bench-4"
    },
    {
      id: "case-bench-5",
      fdrId: "fdr-benchmark-5",
      tag: "CASE 5: RELEASE / REFUND",
      title: "10-Year Lock-in Complete (Canara Bank)",
      desc: "Full 8-year mandatory security deposit tenure completed with zero deficiencies. Cleared for refund.",
      status: "RELEASE ELIGIBLE",
      statusColor: "bg-purple-50 text-purple-800 border-purple-300",
      href: "/reviewer/case/case-bench-5"
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-blue-800">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-800/80 border border-blue-600/50 text-blue-200 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Smart India Hackathon 2026 • AICTE Technical Education Context</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            FDR AuditWala <span className="text-blue-300 text-3xl sm:text-4xl block sm:inline font-bold">(FDRGuard)</span>
          </h1>

          {/* VERBATIM ONE-LINE IDENTITY */}
          <div className="bg-blue-900/50 border border-blue-700/60 rounded-2xl p-6 shadow-inner max-w-4xl mx-auto backdrop-blur-md">
            <p className="text-lg sm:text-2xl font-semibold italic text-blue-100">
              &ldquo;This is not an FDR database. It is an AI-powered FDR lifecycle intelligence and decision-support platform.&rdquo;
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Empowering AICTE officers and technical institutions with evidence-grounded document extraction, authoritative Core Banking cross-verification, deterministic regulatory rules, and explainable risk intelligence.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={startGuidedDemo}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center space-x-2 text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Evaluator Guided Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/reviewer"
              onClick={() => setCurrentRole("REVIEWER")}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all border border-white/20 text-sm flex items-center space-x-2"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Open Reviewer Inbox ({cases.length} Cases)</span>
            </Link>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto border-t border-blue-800/80 text-center">
            <div>
              <div className="text-2xl font-extrabold text-white">₹78.4 Cr</div>
              <div className="text-xs text-blue-300 font-medium">Total FDR Portfolio Under Custody</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">55</div>
              <div className="text-xs text-blue-300 font-medium">Managed FDR Certificates</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">21</div>
              <div className="text-xs text-blue-300 font-medium">Registered Institutions</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs text-blue-300 font-medium">Human-in-the-Loop Governance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Loop & Architectural Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Core Loop Pill Stepper */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Core Lifecycle Loop
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-700">
            {[
              "DOCUMENT", "VERIFY", "UNDERSTAND", "SCORE",
              "PRIORITIZE", "REVIEW", "ACT", "AUDIT", "IMPROVE"
            ].map((step, idx) => (
              <React.Fragment key={step}>
                <div className="flex items-center space-x-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-900 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors">
                  <span className="w-5 h-5 rounded-full bg-blue-900 text-white flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
                {idx < 8 && <span className="text-slate-300 font-bold hidden md:inline">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Roles & Responsibilities Matrix */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">System Roles & Separation of Concerns</h3>
              <p className="text-xs text-slate-500">Consequential decisions strictly mandate human review backed by deterministic rules.</p>
            </div>
            <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-1 rounded-full">
              Fail-Safe Architecture
            </span>
          </div>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y text-slate-600 font-bold uppercase tracking-wider">
                <th className="py-2.5 px-3">Component</th>
                <th className="py-2.5 px-3">Strict Role</th>
                <th className="py-2.5 px-3">Guardrail / Non-Negotiable</th>
              </tr>
            </thead>
            <tbody className="divide-y text-slate-700">
              <tr>
                <td className="py-2.5 px-3 font-bold text-blue-900">AI</td>
                <td className="py-2.5 px-3">Suggests, detects anomalies, explains evidence</td>
                <td className="py-2.5 px-3 text-slate-500">Never invents rules, never silently modifies records, never approves releases</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-indigo-900">Rules Engine</td>
                <td className="py-2.5 px-3">Decides deterministic regulatory compliance (YAML)</td>
                <td className="py-2.5 px-3 text-slate-500">Versioned, traceable, every result cites rule code (e.g. RULE-FDR-EXP-003)</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-purple-900">Verification</td>
                <td className="py-2.5 px-3">Checks authoritative sources (Core Banking APIs)</td>
                <td className="py-2.5 px-3 text-slate-500">Fail-safe: SOURCE UNAVAILABLE is never treated as verified</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-emerald-900">Human Reviewer</td>
                <td className="py-2.5 px-3">Makes every consequential decision</td>
                <td className="py-2.5 px-3 text-slate-500">Mandatory justification required when overriding AI recommendations</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-amber-900">Audit Ledger</td>
                <td className="py-2.5 px-3">Records immutable history</td>
                <td className="py-2.5 px-3 text-slate-500">Append-only, SHA-256 hash-chained; tamper-evident cryptographic verification</td>
              </tr>
              <tr>
                <td className="py-2.5 px-3 font-bold text-cyan-900">Improvement Loop</td>
                <td className="py-2.5 px-3">Learns only from validated human corrections</td>
                <td className="py-2.5 px-3 text-slate-500">No uncontrolled self-learning; changes require versioned rule deployment</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5 Scripted Benchmark Scenarios */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Scripted Benchmark Scenarios</h2>
              <p className="text-xs text-slate-500">Reproduce any of the 5 official SIH test cases in a single click.</p>
            </div>
            <span className="text-xs text-slate-500 font-medium">Deterministic AICTE dataset</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benchmarkCases.map((b) => (
              <Link
                key={b.id}
                href={b.href}
                className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{b.tag}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${b.statusColor}`}>
                      {b.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-800 transition-colors text-sm">
                    {b.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                  <span>Inspect Case & Evidence</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Role Portals Navigation Cards */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">Interactive Role Dashboards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/institution"
              onClick={() => setCurrentRole("INSTITUTION")}
              className="bg-white border hover:border-blue-500 p-5 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-3 group-hover:bg-blue-800 group-hover:text-white transition-colors">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Institution Dashboard</h4>
              <p className="text-xs text-slate-500 mt-1">
                Submit new FDRs via 3-step wizard, inspect deficiencies, upload renewals.
              </p>
              <div className="mt-3 text-xs font-bold text-blue-700 flex items-center space-x-1">
                <span>Enter as Principal</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              href="/reviewer"
              onClick={() => setCurrentRole("REVIEWER")}
              className="bg-white border hover:border-blue-500 p-5 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center mb-3 group-hover:bg-indigo-800 group-hover:text-white transition-colors">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Reviewer Case Queue</h4>
              <p className="text-xs text-slate-500 mt-1">
                Critical/High risk prioritized queues, hero 3-pane review screen, sticky decisions.
              </p>
              <div className="mt-3 text-xs font-bold text-indigo-700 flex items-center space-x-1">
                <span>Enter as Reviewer</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              href="/management"
              onClick={() => setCurrentRole("MANAGEMENT")}
              className="bg-white border hover:border-blue-500 p-5 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center mb-3 group-hover:bg-purple-800 group-hover:text-white transition-colors">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Management Overview</h4>
              <p className="text-xs text-slate-500 mt-1">
                Portfolio risk distribution, maturity calendar, SLA tracking, AI accuracy metrics.
              </p>
              <div className="mt-3 text-xs font-bold text-purple-700 flex items-center space-x-1">
                <span>Enter as Executive</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>

            <Link
              href="/admin"
              onClick={() => setCurrentRole("ADMIN")}
              className="bg-white border hover:border-blue-500 p-5 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center mb-3 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Sliders className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Admin & Rule Governance</h4>
              <p className="text-xs text-slate-500 mt-1">
                Versioned rule packs, diff & rollback, append-only cryptographic audit ledger.
              </p>
              <div className="mt-3 text-xs font-bold text-slate-700 flex items-center space-x-1">
                <span>Enter as Admin</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
