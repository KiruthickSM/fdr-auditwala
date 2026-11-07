"use client";
import React from "react";
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  AlertOctagon,
  ShieldCheck,
  HelpCircle,
  WifiOff,
  ServerCrash,
  UserCheck,
  FileQuestion
} from "lucide-react";
import { LifecycleState, VerificationStatus, RiskLevel, AuthenticityLevel } from "@/lib/types";

interface StatusBadgeProps {
  status: LifecycleState | VerificationStatus | RiskLevel | AuthenticityLevel | string;
  size?: "sm" | "md" | "lg";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = "md" }) => {
  let bg = "bg-slate-100 text-slate-800 border-slate-300";
  let icon = <HelpCircle className="w-3.5 h-3.5 mr-1" />;

  // 1. Verification Specific Statuses (Guidebook Rule 5 & 6)
  if (status === "MATCH") {
    bg = "bg-emerald-50 text-emerald-800 border-emerald-300";
    icon = <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />;
  } else if (status === "MISMATCH") {
    bg = "bg-rose-50 text-rose-800 border-rose-300";
    icon = <AlertOctagon className="w-3.5 h-3.5 mr-1 text-rose-600" />;
  } else if (status === "SOURCE_UNAVAILABLE" || status === "SOURCE UNAVAILABLE") {
    // Visibly distinct from MISMATCH (Cyan/Slate with WifiOff, never treated as fraud or mismatch)
    bg = "bg-sky-50 text-sky-800 border-sky-300";
    icon = <WifiOff className="w-3.5 h-3.5 mr-1 text-sky-600" />;
  } else if (status === "SOURCE_ERROR") {
    bg = "bg-amber-50 text-amber-800 border-amber-300";
    icon = <ServerCrash className="w-3.5 h-3.5 mr-1 text-amber-600" />;
  } else if (status === "INSUFFICIENT_EVIDENCE") {
    bg = "bg-purple-50 text-purple-800 border-purple-200";
    icon = <FileQuestion className="w-3.5 h-3.5 mr-1 text-purple-600" />;
  } else if (status === "PENDING_HUMAN_REVIEW" || status === "REQUIRES HUMAN REVIEW") {
    bg = "bg-indigo-50 text-indigo-800 border-indigo-200";
    icon = <UserCheck className="w-3.5 h-3.5 mr-1 text-indigo-600" />;
  } else if (status === "NOT_CHECKED") {
    bg = "bg-slate-50 text-slate-600 border-slate-200";
    icon = <Clock className="w-3.5 h-3.5 mr-1 text-slate-400" />;
  }

  // 2. Lifecycle states
  else if (status === "Active" || status === "Verified" || status === "Compliant") {
    bg = "bg-emerald-50 text-emerald-800 border-emerald-300";
    icon = <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />;
  } else if (
    status === "Under Review" ||
    status === "Validation Pending" ||
    status === "Verification Pending" ||
    status === "In Review"
  ) {
    bg = "bg-blue-50 text-blue-800 border-blue-300";
    icon = <Clock className="w-3.5 h-3.5 mr-1 text-blue-600" />;
  } else if (
    status === "Maturity Approaching" ||
    status === "Renewal Required" ||
    status === "Review recommended" ||
    status === "Medium"
  ) {
    bg = "bg-amber-50 text-amber-800 border-amber-300";
    icon = <AlertTriangle className="w-3.5 h-3.5 mr-1 text-amber-600" />;
  } else if (
    status === "High concern" ||
    status === "Critical" ||
    status === "High" ||
    status === "Action Required"
  ) {
    bg = "bg-rose-50 text-rose-800 border-rose-300";
    icon = <AlertOctagon className="w-3.5 h-3.5 mr-1 text-rose-600" />;
  } else if (
    status === "Release Eligible" ||
    status === "Refund Processing" ||
    status === "Released/Refunded"
  ) {
    bg = "bg-purple-50 text-purple-800 border-purple-300";
    icon = <ShieldCheck className="w-3.5 h-3.5 mr-1 text-purple-600" />;
  }

  const sizeClasses =
    size === "sm"
      ? "text-xs px-2 py-0.5"
      : size === "lg"
      ? "text-sm px-3.5 py-1.5"
      : "text-xs px-2.5 py-1";

  return (
    <span className={`inline-flex items-center font-medium rounded-full border ${bg} ${sizeClasses}`}>
      {icon}
      <span>{status}</span>
    </span>
  );
};
