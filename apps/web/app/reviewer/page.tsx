"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { PriorityLevel } from "@/lib/types";
import { StatusBadge } from "@/components/StatusBadge";
import {
  FileCheck2,
  AlertOctagon,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Search,
  ArrowRight,
  Filter,
  CheckCircle2
} from "lucide-react";

export default function ReviewerInboxPage() {
  const { cases, fdrs } = useStore();
  const [selectedTab, setSelectedTab] = useState<PriorityLevel | "ALL">("ALL");
  const [searchFilter, setSearchFilter] = useState("");

  const filteredCases = cases.filter(c => {
    if (selectedTab !== "ALL" && c.priority !== selectedTab) return false;
    if (searchFilter) {
      const q = searchFilter.toLowerCase();
      return (
        c.caseNumber.toLowerCase().includes(q) ||
        c.fdrNumber.toLowerCase().includes(q) ||
        c.institutionName.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const criticalCount = cases.filter(c => c.priority === "Critical").length;
  const highCount = cases.filter(c => c.priority === "High").length;
  const medCount = cases.filter(c => c.priority === "Medium").length;
  const lowCount = cases.filter(c => c.priority === "Low").length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Reviewer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border shadow-sm">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-slate-900">Reviewer Case Queue</h1>
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">
              FDR Inspection Cell
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Ranked by financial exposure, authoritative bank match confidence, and regulatory SLA timers.
          </p>
        </div>

        {/* Next Best Action Card */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs max-w-md">
          <div className="font-bold text-amber-900 flex items-center space-x-1.5">
            <AlertOctagon className="w-4 h-4 text-rose-600" />
            <span>Next Best Action: Case #2 Requires Decision</span>
          </div>
          <p className="text-amber-800 text-[11px] mt-0.5">
            ₹50L claimed vs ₹45L bank CBS record (₹5L deficit) at Sardar Vallabhbhai Management Academy.
          </p>
          <Link
            href="/reviewer/case/case-bench-2"
            className="inline-flex items-center space-x-1 text-blue-800 font-bold mt-1 hover:underline"
          >
            <span>Open Case #2 Now</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Priority Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-2">
        <div className="flex space-x-2 text-xs font-semibold">
          <button
            onClick={() => setSelectedTab("ALL")}
            className={`px-3.5 py-2 rounded-lg transition-all ${
              selectedTab === "ALL"
                ? "bg-blue-900 text-white font-bold shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border"
            }`}
          >
            All Cases ({cases.length})
          </button>

          <button
            onClick={() => setSelectedTab("Critical")}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center space-x-1.5 ${
              selectedTab === "Critical"
                ? "bg-rose-700 text-white font-bold shadow-sm"
                : "bg-white text-rose-700 hover:bg-rose-50 border border-rose-200"
            }`}
          >
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Critical ({criticalCount})</span>
          </button>

          <button
            onClick={() => setSelectedTab("High")}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center space-x-1.5 ${
              selectedTab === "High"
                ? "bg-amber-600 text-white font-bold shadow-sm"
                : "bg-white text-amber-700 hover:bg-amber-50 border border-amber-200"
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>High Priority ({highCount})</span>
          </button>

          <button
            onClick={() => setSelectedTab("Medium")}
            className={`px-3.5 py-2 rounded-lg transition-all ${
              selectedTab === "Medium"
                ? "bg-slate-800 text-white font-bold shadow-sm"
                : "bg-white text-slate-600 hover:bg-slate-100 border"
            }`}
          >
            Medium ({medCount})
          </button>

          <button
            onClick={() => setSelectedTab("Low")}
            className={`px-3.5 py-2 rounded-lg transition-all ${
              selectedTab === "Low"
                ? "bg-emerald-700 text-white font-bold shadow-sm"
                : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200"
            }`}
          >
            Low / Resolved ({lowCount})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search FDR / Institution..."
            value={searchFilter}
            onChange={e => setSearchFilter(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      {/* Cases Table */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b text-slate-600 font-bold uppercase tracking-wider">
                <th className="py-3 px-4">Case / Priority</th>
                <th className="py-3 px-4">Institution</th>
                <th className="py-3 px-4">FDR Number & Value</th>
                <th className="py-3 px-4">AI Finding / Anomaly</th>
                <th className="py-3 px-4">SLA Window</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Review</th>
              </tr>
            </thead>
            <tbody className="divide-y text-slate-700">
              {filteredCases.map(c => {
                const fdr = fdrs.find(f => f.id === c.fdrId);
                return (
                  <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">{c.caseNumber}</div>
                      <div className="mt-1">
                        <StatusBadge status={c.priority} size="sm" />
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="font-semibold text-slate-900 max-w-[220px] truncate">
                        {c.institutionName}
                      </div>
                      <div className="text-[11px] text-slate-400">ID: {c.institutionId}</div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="font-bold text-slate-900">₹{c.amount.toLocaleString("en-IN")}</div>
                      <div className="text-[11px] text-slate-500 font-mono">{c.fdrNumber}</div>
                    </td>

                    <td className="py-3 px-4 max-w-[240px]">
                      {fdr?.verificationStatus === "MISMATCH" ? (
                        <div className="text-rose-700 font-semibold text-[11px] bg-rose-50 border border-rose-200 rounded p-1.5">
                          Bank CBS mismatch: ₹{fdr.amount.toLocaleString("en-IN")} claimed vs ₹{(fdr.verification?.discrepancies[0]?.authoritativeValue as number || 0).toLocaleString("en-IN")} authoritative
                        </div>
                      ) : fdr?.authenticityLevel === "High concern" ? (
                        <div className="text-rose-700 font-semibold text-[11px] bg-rose-50 border border-rose-200 rounded p-1.5">
                          High tamper anomaly: Photoshop edits in metadata
                        </div>
                      ) : fdr?.lifecycleStatus === "Renewal Required" ? (
                        <div className="text-amber-700 font-semibold text-[11px] bg-amber-50 border border-amber-200 rounded p-1.5">
                          Maturity in &lt; 20 days: Chapter IV renewal alert
                        </div>
                      ) : fdr?.lifecycleStatus === "Release Eligible" ? (
                        <div className="text-purple-700 font-semibold text-[11px] bg-purple-50 border border-purple-200 rounded p-1.5">
                          10-Year lock-in complete: Release approval requested
                        </div>
                      ) : (
                        <div className="text-slate-500 text-[11px]">
                          Clean match with core banking system.
                        </div>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1 text-slate-700 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-blue-700" />
                        <span>SLA Active</span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Assigned: {c.assignedReviewerName || "Reviewer Pool"}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <StatusBadge status={c.status} size="sm" />
                    </td>

                    <td className="py-3 px-4 text-right">
                      <Link
                        href={`/reviewer/case/${c.id}`}
                        className="inline-flex items-center space-x-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-colors"
                      >
                        <span>Inspect</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
