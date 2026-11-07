"use client";

import React from "react";
import { useStore } from "@/lib/store";
import {
  RotateCcw,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  History,
  Sliders,
  Shield,
  Layers
} from "lucide-react";

export default function ContinuousImprovementPage() {
  const { feedbacks } = useStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-slate-900">Continuous Improvement Loop (M16)</h1>
            <span className="text-xs font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
              Model Governance Active
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Recommendation → Review → Human Correction → Feedback Store → Versioned, Approved & Reversible Rule Deployment.
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <span className="text-slate-400 uppercase font-semibold">Human Corrections Logged</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">{feedbacks.length}</div>
          <span className="text-slate-500 text-[10px]">Officer corrections in production</span>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <span className="text-slate-400 uppercase font-semibold">Human Override Rate</span>
          <div className="text-2xl font-extrabold text-blue-900 mt-1">2.2%</div>
          <span className="text-emerald-700 text-[10px] font-semibold">Well below 5% target ceiling</span>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <span className="text-slate-400 uppercase font-semibold">Active Rule Pack Version</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">v1.0.0</div>
          <span className="text-slate-500 text-[10px]">aicte-fdr-regulatory-pack-v1</span>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow-sm">
          <span className="text-slate-400 uppercase font-semibold">Self-Learning Safeguard</span>
          <div className="text-2xl font-extrabold text-emerald-700 mt-1">ENFORCED</div>
          <span className="text-slate-500 text-[10px]">Zero uncontrolled autonomous updates</span>
        </div>
      </div>

      {/* Corrections List */}
      <div className="bg-white border rounded-2xl shadow-sm p-6 space-y-4">
        <h3 className="font-bold text-base text-slate-900">Validated Human Feedback & Corrections</h3>
        <p className="text-xs text-slate-500">
          Every correction logged by officers in the Reviewer Hero Screen is captured here to drive versioned rule refinement.
        </p>

        {feedbacks.length > 0 ? (
          <div className="divide-y border rounded-xl text-xs overflow-hidden">
            {feedbacks.map(f => (
              <div key={f.id} className="p-3 hover:bg-slate-50 transition-colors space-y-1">
                <div className="flex items-center justify-between text-slate-500 text-[10px]">
                  <span className="font-bold text-slate-700">Field: {f.fieldName}</span>
                  <span>{f.timestamp}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-800">
                  <span className="text-slate-400 line-through">Suggested: {f.modelSuggestedValue}</span>
                  <span className="font-bold text-emerald-700">→ Corrected: {f.humanCorrectedValue}</span>
                </div>
                <div className="text-slate-500 text-[11px]">{f.notes}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center text-slate-400 border rounded-xl bg-slate-50 text-xs italic">
            No human corrections logged yet. Use the Reviewer Case Screen to edit any extracted field and observe feedback capture.
          </div>
        )}
      </div>
    </div>
  );
}
