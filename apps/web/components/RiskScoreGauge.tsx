"use client";
import React from "react";
import { RiskAssessment } from "@/lib/types";

export const RiskScoreGauge: React.FC<{ assessment?: RiskAssessment; score?: number; level?: string }> = ({
  assessment,
  score = assessment?.score || 0,
  level = assessment?.level || "Low"
}) => {
  const normalized = Math.min(100, Math.max(0, score));
  let color = "bg-emerald-500";
  let text = "text-emerald-700";

  if (normalized >= 65) {
    color = "bg-rose-600";
    text = "text-rose-700";
  } else if (normalized >= 45) {
    color = "bg-amber-500";
    text = "text-amber-700";
  } else if (normalized >= 20) {
    color = "bg-yellow-500";
    text = "text-yellow-700";
  }

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Risk & Anomaly Score
        </span>
        <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded-full ${text} bg-slate-100`}>
          {level} Risk
        </span>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-3xl font-extrabold text-slate-900">{score}</span>
        <span className="text-sm font-medium text-slate-400">/ 100</span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2.5 mt-3 overflow-hidden">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${normalized}%` }}
        />
      </div>
      {assessment?.factors && assessment.factors.length > 0 && (
        <div className="mt-3 pt-3 border-t text-xs text-slate-600 space-y-1.5">
          <span className="font-semibold text-slate-700 block">Itemized Score Drivers:</span>
          {assessment.factors.map((f, idx) => (
            <div key={idx} className="flex justify-between items-center text-slate-600">
              <span className="truncate pr-2">• {f.factor}</span>
              <span className="font-semibold text-rose-600">+{f.points}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
