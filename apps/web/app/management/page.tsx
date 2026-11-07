"use client";

import React from "react";
import { useStore } from "@/lib/store";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid
} from "recharts";
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Clock,
  ShieldCheck,
  Building2,
  Calendar,
  Sparkles
} from "lucide-react";

export default function ManagementDashboardPage() {
  const { fdrs, institutions, cases } = useStore();

  const totalExposure = fdrs.reduce((sum, f) => sum + (f.amount || 0), 0);
  const criticalCount = fdrs.filter(f => f.riskLevel === "Critical").length;
  const highCount = fdrs.filter(f => f.riskLevel === "High").length;
  const medCount = fdrs.filter(f => f.riskLevel === "Medium").length;
  const lowCount = fdrs.filter(f => f.riskLevel === "Low").length;

  // Chart data 1: Risk Distribution
  const riskData = [
    { name: "Low Risk", count: lowCount, color: "#10b981" },
    { name: "Medium Risk", count: medCount, color: "#f59e0b" },
    { name: "High Risk", count: highCount, color: "#f97316" },
    { name: "Critical", count: criticalCount, color: "#ef4444" }
  ];

  // Chart data 2: Bank Exposure
  const bankTotals: Record<string, number> = {};
  fdrs.forEach(f => {
    bankTotals[f.bankName] = (bankTotals[f.bankName] || 0) + f.amount;
  });
  const bankData = Object.entries(bankTotals).map(([bank, val]) => ({
    bank: bank.replace("State Bank of India", "SBI").replace("Punjab National Bank", "PNB"),
    amountCr: Number((val / 10000000).toFixed(2))
  })).slice(0, 6);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border shadow-sm">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-slate-900">Executive Portfolio Oversight</h1>
            <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-full">
              AICTE Executive Council
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Macro risk metrics, financial exposure, SLA compliance, and AI model verification accuracy.
          </p>
        </div>
      </div>

      {/* KPI Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Custody Portfolio</span>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">
            ₹{(totalExposure / 10000000).toFixed(2)} Cr
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Across 21 technical institutions</span>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Critical Exposure Cases</span>
          <div className="text-2xl font-extrabold text-rose-600 mt-1">
            {criticalCount} Active
          </div>
          <span className="text-xs text-rose-700 font-semibold mt-1 block">Bank mismatch or high tamper signal</span>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Maturities in Next 60 Days</span>
          <div className="text-2xl font-extrabold text-amber-600 mt-1">
            5 Deposits
          </div>
          <span className="text-xs text-slate-500 mt-1 block">Automated renewal notices dispatched</span>
        </div>

        <div className="bg-white border rounded-xl p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">AI Model Verification Precision</span>
          <div className="text-2xl font-extrabold text-blue-900 mt-1">
            97.8%
          </div>
          <span className="text-xs text-emerald-700 font-semibold mt-1 block">Low false-positive override rate</span>
        </div>
      </div>

      {/* Visual Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Distribution Pie */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-sm text-slate-900">Security Deposit Risk Distribution</h3>
            <p className="text-xs text-slate-500">Classified by Explainable Risk Engine (0-100 scale)</p>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="count"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs pt-2 border-t">
            {riskData.map(d => (
              <div key={d.name}>
                <div className="font-extrabold text-slate-900">{d.count}</div>
                <div className="text-slate-500 text-[10px]">{d.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bank Exposure Bar Chart */}
        <div className="bg-white border rounded-2xl p-6 shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-sm text-slate-900">Financial Exposure by Issuing Bank</h3>
            <p className="text-xs text-slate-500">Deposit value concentration across major scheduled banks (in ₹ Crores)</p>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={bankData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="bank" textAnchor="end" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip formatter={(value) => `₹${value} Cr`} />
                <Bar dataKey="amountCr" fill="#1e40af" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
