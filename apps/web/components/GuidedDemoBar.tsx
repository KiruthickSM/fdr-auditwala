"use client";
import React from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { Sparkles, ArrowRight, X, AlertCircle, CheckCircle2 } from "lucide-react";

export const GuidedDemoBar: React.FC = () => {
  const { isGuidedDemoActive, guidedDemoStep, nextGuidedDemoStep, stopGuidedDemo, setCurrentRole } = useStore();

  if (!isGuidedDemoActive) return null;

  const steps = [
    {
      title: "Step 1: Institution Upload & Document Intelligence",
      description: "Experience AI certificate extraction with field-level confidence and bounding coordinates.",
      cta: "Go to Institution Dashboard",
      href: "/institution",
      role: "INSTITUTION" as const
    },
    {
      title: "Step 2: Core Banking Mismatch Detection (Benchmark Case #2)",
      description: "Inspect the ₹50L vs ₹45L bank CBS discrepancy with explainable risk breakdown and regulatory rule citations.",
      cta: "Inspect Mismatch Case in Reviewer Inbox",
      href: "/reviewer/case/case-bench-2",
      role: "REVIEWER" as const
    },
    {
      title: "Step 3: Human-in-the-Loop Decision & Clarification Request",
      description: "Reviewer requests bank confirmation or makes consequential decision with mandatory justification.",
      cta: "Review Suspicious Scan Case #4",
      href: "/reviewer/case/case-bench-4",
      role: "REVIEWER" as const
    },
    {
      title: "Step 4: Imminent Maturity & Automated Renewal Workflow",
      description: "FDR maturing within 45 days triggers Chapter IV renewal alert and replacement FDR linking.",
      cta: "View Expiring FDR #3",
      href: "/fdr/fdr-benchmark-3",
      role: "REVIEWER" as const
    },
    {
      title: "Step 5: Release / Refund Authorization (Benchmark Case #5)",
      description: "10-Year permanent approval security deposit reaches complete lock-in and clears prerequisite checks.",
      cta: "Inspect Release Eligible Case",
      href: "/reviewer/case/case-bench-5",
      role: "REVIEWER" as const
    },
    {
      title: "Step 6: Management Oversight, SLA Breaches & Continuous Improvement",
      description: "Explore portfolio risk distribution, false-positive feedback capture, and versioned rule governance.",
      cta: "Open Management Analytics",
      href: "/management",
      role: "MANAGEMENT" as const
    }
  ];

  const currentStepData = steps[guidedDemoStep - 1] || steps[0];

  const handleStepJump = (stepIdx: number) => {
    const s = steps[stepIdx];
    setCurrentRole(s.role);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-4 py-3 shadow-lg border-b border-indigo-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
            {guidedDemoStep}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                SIH 2026 Evaluator Walkthrough
              </span>
              <span className="text-slate-400 text-xs">({guidedDemoStep} of {steps.length})</span>
            </div>
            <h4 className="text-sm font-bold text-white">{currentStepData.title}</h4>
            <p className="text-xs text-indigo-200 mt-0.5">{currentStepData.description}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          <Link
            href={currentStepData.href}
            onClick={() => setCurrentRole(currentStepData.role)}
            className="flex items-center space-x-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow"
          >
            <span>{currentStepData.cta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          {guidedDemoStep < steps.length ? (
            <button
              onClick={nextGuidedDemoStep}
              className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            >
              Next Step
            </button>
          ) : (
            <button
              onClick={stopGuidedDemo}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center space-x-1"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Complete Tour</span>
            </button>
          )}
          <button
            onClick={stopGuidedDemo}
            className="text-slate-400 hover:text-white p-1.5 rounded hover:bg-white/10"
            title="Exit Walkthrough"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
