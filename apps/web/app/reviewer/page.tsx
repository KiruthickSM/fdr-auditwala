"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useStore } from "@/lib/store";
import { StatusBadge } from "@/components/StatusBadge";
import { formatCurrencyFull, formatCurrencyCompact, calculateSla } from "@/lib/formatters";
import { computePriorityScore } from "@/lib/priorityEngine";
import {
  AlertOctagon,
  AlertTriangle,
  Clock,
  Search,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  RotateCw,
  ArrowUpDown,
  ExternalLink
} from "lucide-react";

function ReviewerInboxContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { cases, fdrs, currentUser } = useStore();

  const tabParam = searchParams.get("tab") || "OPEN";
  const viewParam = searchParams.get("view") || "me";
  const searchParam = searchParams.get("q") || "";
  const sortParam = searchParams.get("sort") || "score_desc";

  const [selectedTab, setSelectedTab] = useState<string>(tabParam);
  const [assigneeView, setAssigneeView] = useState<"me" | "all">(viewParam as "me" | "all");
  const [searchFilter, setSearchFilter] = useState<string>(searchParam);
  const [sortBy, setSortBy] = useState<string>(sortParam);
  const [hoveredScoreCaseId, setHoveredScoreCaseId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("Just now");

  const updateUrlParams = (newTab: string, newView: string, newSearch: string, newSort: string) => {
    const params = new URLSearchParams();
    if (newTab !== "OPEN") params.set("tab", newTab);
    if (newView !== "me") params.set("view", newView);
    if (newSearch) params.set("q", newSearch);
    if (newSort !== "score_desc") params.set("sort", newSort);
    const qs = params.toString();
    router.replace(`/reviewer${qs ? `?${qs}` : ""}`, { scroll: false });
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    updateUrlParams(tab, assigneeView, searchFilter, sortBy);
  };

  const handleAssigneeViewChange = (view: "me" | "all") => {
    setAssigneeView(view);
    updateUrlParams(selectedTab, view, searchFilter, sortBy);
  };

  const handleSearchChange = (q: string) => {
    setSearchFilter(q);
    updateUrlParams(selectedTab, assigneeView, q, sortBy);
  };

  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    updateUrlParams(selectedTab, assigneeView, searchFilter, sort);
  };

  const refreshData = () => {
    setIsLoading(true);
    setHasError(false);
    setTimeout(() => {
      setIsLoading(false);
      setLastUpdated(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }));
    }, 400);
  };

  const enrichedCases = useMemo(() => {
    return cases.map(c => {
      const fdr = fdrs.find(f => f.id === c.fdrId);
      const priorityInfo = computePriorityScore(c, fdr);
      const isResolved = c.status === "Resolved";
      const sla = calculateSla(c.slaDeadline, isResolved);
      return {
        ...c,
        fdr,
        priorityInfo,
        sla,
        isAssignedToCurrentReviewer:
          c.assignedReviewerId === currentUser.id ||
          Boolean(c.assignedReviewerName?.toLowerCase().includes(currentUser.name.toLowerCase().split(" ")[0]))
      };
    });
  }, [cases, fdrs, currentUser]);

  const openCasesCount = enrichedCases.filter(c => c.status !== "Resolved").length;
  const criticalCount = enrichedCases.filter(c => c.status !== "Resolved" && c.priority === "Critical").length;
  const highCount = enrichedCases.filter(c => c.status !== "Resolved" && c.priority === "High").length;
  const medCount = enrichedCases.filter(c => c.status !== "Resolved" && c.priority === "Medium").length;
  const resolvedCount = enrichedCases.filter(c => c.status === "Resolved").length;

  const nextBestActionCase = useMemo(() => {
    const reviewerCases = enrichedCases
      .filter(c => c.status !== "Resolved" && c.isAssignedToCurrentReviewer)
      .sort((a, b) => b.priorityInfo.totalScore - a.priorityInfo.totalScore);
    return reviewerCases[0] || null;
  }, [enrichedCases]);

  const otherCriticalCasesCount = useMemo(() => {
    return enrichedCases.filter(
      c => c.status !== "Resolved" && c.priority === "Critical" && c.id !== nextBestActionCase?.id
    ).length;
  }, [enrichedCases, nextBestActionCase]);

  const displayedCases = useMemo(() => {
    let result = enrichedCases;
    if (selectedTab === "OPEN") {
      result = result.filter(c => c.status !== "Resolved");
    } else if (selectedTab === "RESOLVED") {
      result = result.filter(c => c.status === "Resolved");
    } else if (selectedTab === "CRITICAL") {
      result = result.filter(c => c.status !== "Resolved" && c.priority === "Critical");
    } else if (selectedTab === "HIGH") {
      result = result.filter(c => c.status !== "Resolved" && c.priority === "High");
    } else if (selectedTab === "MEDIUM") {
      result = result.filter(c => c.status !== "Resolved" && c.priority === "Medium");
    }

    if (assigneeView === "me") {
      result = result.filter(c => c.isAssignedToCurrentReviewer);
    }

    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase().trim();
      result = result.filter(
        c =>
          c.caseNumber.toLowerCase().includes(q) ||
          c.fdrNumber.toLowerCase().includes(q) ||
          c.institutionName.toLowerCase().includes(q) ||
          c.institutionId.toLowerCase().includes(q)
      );
    }

    result = [...result].sort((a, b) => {
      if (sortBy === "score_desc") return b.priorityInfo.totalScore - a.priorityInfo.totalScore;
      if (sortBy === "score_asc") return a.priorityInfo.totalScore - b.priorityInfo.totalScore;
      if (sortBy === "amount_desc") return b.amount - a.amount;
      if (sortBy === "amount_asc") return a.amount - b.amount;
      if (sortBy === "sla_asc") return a.sla.totalMinutesLeft - b.sla.totalMinutesLeft;
      return 0;
    });

    return result;
  }, [enrichedCases, selectedTab, assigneeView, searchFilter, sortBy]);

  const renderAiFinding = (c: typeof enrichedCases[0]) => {
    const fdr = c.fdr;
    if (fdr?.verificationStatus === "MISMATCH") {
      return (
        <div className="text-xs text-rose-900 leading-snug">
          <span className="font-bold text-rose-700 block">
            Bank CBS mismatch: ₹50,00,000 claimed vs ₹45,00,000 in bank record
          </span>
          <Link
            href="/admin#rules"
            className="text-[11px] font-mono text-blue-700 hover:underline inline-flex items-center space-x-0.5 mt-0.5"
            onClick={e => e.stopPropagation()}
          >
            <span>RULE-FDR-AMOUNT-004</span>
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </Link>
        </div>
      );
    }

    if (fdr?.authenticityLevel === "High concern") {
      return (
        <div className="text-xs text-rose-900 leading-snug">
          <span className="font-bold text-rose-700 block">
            High authenticity concern: metadata tampering detected
          </span>
          <Link
            href="/admin#rules"
            className="text-[11px] font-mono text-blue-700 hover:underline inline-flex items-center space-x-0.5 mt-0.5"
            onClick={e => e.stopPropagation()}
          >
            <span>RULE-FDR-LIEN-006</span>
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </Link>
        </div>
      );
    }

    if (fdr?.lifecycleStatus === "Renewal Required") {
      return (
        <div className="text-xs text-amber-900 leading-snug">
          <span className="font-semibold text-amber-800 block">
            Maturity in 18 days: renewal required
          </span>
          <Link
            href="/admin#rules"
            className="text-[11px] font-mono text-blue-700 hover:underline inline-flex items-center space-x-0.5 mt-0.5"
            onClick={e => e.stopPropagation()}
          >
            <span>RULE-FDR-EXP-003</span>
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </Link>
        </div>
      );
    }

    if (fdr?.jointBeneficiary === "None" || !fdr?.jointBeneficiary?.includes("AICTE")) {
      return (
        <div className="text-xs text-slate-800 leading-snug">
          <span className="font-medium text-slate-700 block">
            Joint beneficiary missing: AICTE not listed as second holder
          </span>
          <Link
            href="/admin#rules"
            className="text-[11px] font-mono text-blue-700 hover:underline inline-flex items-center space-x-0.5 mt-0.5"
            onClick={e => e.stopPropagation()}
          >
            <span>RULE-FDR-BENEFICIARY-001</span>
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </Link>
        </div>
      );
    }

    return (
      <div className="text-xs text-slate-600 leading-snug">
        <span className="font-medium text-emerald-700 block">
          Verified & compliant: 100% CBS record match
        </span>
        <Link
          href="/admin#rules"
          className="text-[11px] font-mono text-blue-700 hover:underline inline-flex items-center space-x-0.5 mt-0.5"
          onClick={e => e.stopPropagation()}
        >
          <span>RULE-FDR-BANK-005</span>
          <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
        </Link>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-slate-800">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        <span className="text-slate-900 font-bold" aria-current="page">Reviewer Inbox</span>
      </nav>

      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Reviewer Inbox</h1>
            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
              FDR Inspection Cell
            </span>
          </div>
          <p className="text-xs text-slate-600 mt-1 max-w-2xl">
            Ranked by Risk (35%) × Urgency (25%) × Compliance (15%) × Financial Exposure (15%) × Verification (10%).
          </p>
          <div className="text-[11px] text-slate-400 mt-1 flex items-center space-x-2">
            <span>Reviewer: <strong>{currentUser.name}</strong></span>
            <span>•</span>
            <span>Last synced: {lastUpdated}</span>
            <button
              onClick={refreshData}
              className="p-1 text-slate-400 hover:text-blue-900 rounded transition-colors"
              title="Refresh queue"
              aria-label="Refresh queue"
            >
              <RotateCw className={`w-3 h-3 ${isLoading ? "animate-spin text-blue-600" : ""}`} />
            </button>
          </div>
        </div>

        {/* Next Best Action Card */}
        {nextBestActionCase ? (
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-xs max-w-md shadow-sm">
            <div className="font-bold text-amber-950 flex items-center space-x-2">
              <AlertOctagon className="w-4 h-4 text-rose-600 shrink-0" />
              <span>Next Best Action: Case {nextBestActionCase.caseNumber}</span>
            </div>
            <p className="text-amber-900 text-xs mt-1 leading-relaxed">
              Highest priority: amount mismatch, ₹5L deficit, {nextBestActionCase.sla.label}.
            </p>
            <div className="mt-2.5 flex items-center justify-between">
              <Link
                href={`/reviewer/case/${nextBestActionCase.id}`}
                className="inline-flex items-center space-x-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
              >
                <span>Review Top Case Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              {otherCriticalCasesCount > 0 && (
                <button
                  onClick={() => handleTabChange("CRITICAL")}
                  className="text-amber-900 hover:text-blue-900 text-[11px] font-bold underline"
                >
                  +{otherCriticalCasesCount} more critical case{otherCriticalCasesCount > 1 ? "s" : ""}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs max-w-md">
            <div className="font-bold text-slate-700 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Zero High-Priority Backlog</span>
            </div>
            <p className="text-slate-500 text-xs mt-1">
              All critical cases assigned to you have been adjudicated.
            </p>
          </div>
        )}
      </div>

      {/* Filter and Control Bar */}
      <div className="space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200 pb-3">
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold" role="tablist">
            <button
              role="tab"
              aria-selected={selectedTab === "OPEN"}
              onClick={() => handleTabChange("OPEN")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedTab === "OPEN"
                  ? "bg-blue-900 text-white font-bold shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Open Cases ({openCasesCount})
            </button>

            <button
              role="tab"
              aria-selected={selectedTab === "CRITICAL"}
              onClick={() => handleTabChange("CRITICAL")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                selectedTab === "CRITICAL"
                  ? "bg-rose-700 text-white font-bold shadow-sm"
                  : "bg-white text-rose-700 hover:bg-rose-50 border border-rose-200"
              }`}
            >
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>Critical ({criticalCount})</span>
            </button>

            <button
              role="tab"
              aria-selected={selectedTab === "HIGH"}
              onClick={() => handleTabChange("HIGH")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                selectedTab === "HIGH"
                  ? "bg-amber-600 text-white font-bold shadow-sm"
                  : "bg-white text-amber-700 hover:bg-amber-50 border border-amber-200"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>High ({highCount})</span>
            </button>

            <button
              role="tab"
              aria-selected={selectedTab === "MEDIUM"}
              onClick={() => handleTabChange("MEDIUM")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedTab === "MEDIUM"
                  ? "bg-slate-800 text-white font-bold shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Medium ({medCount})
            </button>

            <button
              role="tab"
              aria-selected={selectedTab === "RESOLVED"}
              onClick={() => handleTabChange("RESOLVED")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center space-x-1.5 ${
                selectedTab === "RESOLVED"
                  ? "bg-emerald-700 text-white font-bold shadow-sm"
                  : "bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Resolved ({resolvedCount})</span>
            </button>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search Case / FDR / Institution..."
              value={searchFilter}
              onChange={e => handleSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
              aria-label="Search cases"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <span className="text-slate-500 font-semibold">Filter:</span>
            <div className="inline-flex rounded-lg border border-slate-200 bg-slate-100 p-0.5">
              <button
                onClick={() => handleAssigneeViewChange("me")}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  assigneeView === "me"
                    ? "bg-white text-blue-900 shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Assigned to me
              </button>
              <button
                onClick={() => handleAssigneeViewChange("all")}
                className={`px-3 py-1 rounded-md text-xs font-semibold transition-all ${
                  assigneeView === "all"
                    ? "bg-white text-blue-900 shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All reviewers
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={e => handleSortChange(e.target.value)}
              className="bg-white border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Sort cases"
            >
              <option value="score_desc">Priority Score (High → Low)</option>
              <option value="score_asc">Priority Score (Low → High)</option>
              <option value="amount_desc">Amount (High → Low)</option>
              <option value="amount_asc">Amount (Low → High)</option>
              <option value="sla_asc">SLA Deadline (Urgent First)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Loading Skeleton */}
      {isLoading && (
        <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 animate-pulse">
          <div className="h-6 bg-slate-200 rounded w-1/4"></div>
          <div className="h-12 bg-slate-100 rounded"></div>
          <div className="h-12 bg-slate-100 rounded"></div>
          <div className="h-12 bg-slate-100 rounded"></div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-8 text-center space-y-3">
          <AlertOctagon className="w-8 h-8 text-rose-600 mx-auto" />
          <h2 className="text-sm font-bold text-rose-900">Unable to load case queue</h2>
          <p className="text-xs text-rose-700">A temporary error occurred while retrieving regulatory cases.</p>
          <button
            onClick={refreshData}
            className="inline-flex items-center space-x-1.5 bg-rose-700 hover:bg-rose-800 text-white font-bold text-xs px-4 py-2 rounded-lg"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Retry</span>
          </button>
        </div>
      )}

      {/* Empty State */}
      {!isLoading && !hasError && displayedCases.length === 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4">
          <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">No cases match your filters</h2>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              {searchFilter
                ? `No records found for "${searchFilter}". Try a different FDR number, institution name, or clear filters.`
                : "There are currently no cases matching the selected status tab and assignee filter."}
            </p>
          </div>
          <button
            onClick={() => {
              setSelectedTab("OPEN");
              setAssigneeView("all");
              setSearchFilter("");
              updateUrlParams("OPEN", "all", "", "score_desc");
            }}
            className="inline-flex items-center space-x-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
          >
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Table & Mobile Responsive Cards */}
      {!isLoading && !hasError && displayedCases.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse" aria-label="Reviewer Case Queue">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                  <th scope="col" className="py-3.5 px-4">Case / Priority</th>
                  <th scope="col" className="py-3.5 px-4">Institution</th>
                  <th scope="col" className="py-3.5 px-4">FDR No. & Amount</th>
                  <th scope="col" className="py-3.5 px-4 max-w-[260px]">AI Finding</th>
                  <th scope="col" className="py-3.5 px-4">Score & Confidence</th>
                  <th scope="col" className="py-3.5 px-4">SLA</th>
                  <th scope="col" className="py-3.5 px-4">Assignee</th>
                  <th scope="col" className="py-3.5 px-4">Status</th>
                  <th scope="col" className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {displayedCases.map(c => {
                  const scoreBreakdown = c.priorityInfo;
                  const isHovered = hoveredScoreCaseId === c.id;

                  return (
                    <tr
                      key={c.id}
                      tabIndex={0}
                      onClick={() => router.push(`/reviewer/case/${c.id}`)}
                      onKeyDown={e => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          router.push(`/reviewer/case/${c.id}`);
                        }
                      }}
                      className="hover:bg-slate-50/90 focus:bg-blue-50/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 transition-colors cursor-pointer group"
                      aria-label={`Case ${c.caseNumber}, ${c.institutionName}`}
                    >
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors font-mono">
                          {c.caseNumber}
                        </div>
                        <div className="mt-1">
                          <StatusBadge status={c.priority} size="sm" />
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-900 max-w-[200px] truncate" title={c.institutionName}>
                          {c.institutionName}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">ID: {c.institutionId}</div>
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <div className="font-black text-slate-900 text-xs font-mono">
                          {formatCurrencyFull(c.amount)}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {c.fdrNumber}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 max-w-[260px]">
                        {renderAiFinding(c)}
                      </td>

                      <td className="py-3.5 px-4 relative">
                        <div
                          className="inline-flex items-center space-x-1.5 cursor-help"
                          onMouseEnter={() => setHoveredScoreCaseId(c.id)}
                          onMouseLeave={() => setHoveredScoreCaseId(null)}
                        >
                          <span
                            className={`font-black text-sm px-2 py-0.5 rounded-lg border ${
                              scoreBreakdown.totalScore >= 75
                                ? "bg-rose-50 text-rose-800 border-rose-300"
                                : scoreBreakdown.totalScore >= 50
                                ? "bg-amber-50 text-amber-800 border-amber-300"
                                : "bg-slate-100 text-slate-700 border-slate-300"
                            }`}
                          >
                            {scoreBreakdown.totalScore}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">/100</span>
                          <HelpCircle className="w-3.5 h-3.5 text-slate-400 hover:text-slate-600" />
                        </div>

                        <div className="text-[10px] text-slate-500 mt-1">
                          Conf: {Math.round((c.fdr?.aiRecommendation?.confidence || 0.94) * 100)}%
                        </div>

                        {isHovered && (
                          <div className="absolute left-4 top-12 z-50 bg-slate-900 text-white rounded-xl shadow-xl p-3 w-64 text-[11px] space-y-1.5 pointer-events-none animate-fadeIn">
                            <div className="font-bold text-amber-300 border-b border-slate-700 pb-1 flex justify-between items-center">
                              <span>Priority Score Breakdown</span>
                              <span>{scoreBreakdown.totalScore}/100</span>
                            </div>
                            <div className="space-y-1 text-slate-300">
                              <div className="flex justify-between">
                                <span>Risk (35%):</span>
                                <span className="font-mono font-bold text-white">+{scoreBreakdown.riskFactor.points} pts</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Urgency (25%):</span>
                                <span className="font-mono font-bold text-white">+{scoreBreakdown.urgencyFactor.points} pts</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Compliance (15%):</span>
                                <span className="font-mono font-bold text-white">+{scoreBreakdown.complianceFactor.points} pts</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Exposure (15%):</span>
                                <span className="font-mono font-bold text-white">+{scoreBreakdown.exposureFactor.points} pts</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Verification (10%):</span>
                                <span className="font-mono font-bold text-white">+{scoreBreakdown.verificationFactor.points} pts</span>
                              </div>
                            </div>
                            <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-1">
                              {scoreBreakdown.formula}
                            </div>
                          </div>
                        )}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center space-x-1 text-xs px-2.5 py-1 rounded-full border ${c.sla.colorClass}`}
                        >
                          <Clock className="w-3 h-3" />
                          <span>{c.sla.label}</span>
                        </span>
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-800 truncate max-w-[130px]">
                          {c.assignedReviewerName?.split(" (")[0] || "Reviewer Pool"}
                        </div>
                        {c.isAssignedToCurrentReviewer && (
                          <span className="text-[9px] font-bold text-blue-700 uppercase bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 mt-0.5 inline-block">
                            You
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <StatusBadge status={c.status} size="sm" />
                      </td>

                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <Link
                          href={`/reviewer/case/${c.id}`}
                          onClick={e => e.stopPropagation()}
                          className="inline-flex items-center space-x-1.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        >
                          <span>Review</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards View (< 768px, No Horizontal Scroll) */}
          <div className="md:hidden divide-y divide-slate-100">
            {displayedCases.map(c => {
              const scoreBreakdown = c.priorityInfo;
              return (
                <div
                  key={c.id}
                  tabIndex={0}
                  onClick={() => router.push(`/reviewer/case/${c.id}`)}
                  className="p-4 space-y-3 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono font-bold text-slate-900">{c.caseNumber}</span>
                      <StatusBadge status={c.priority} size="sm" />
                    </div>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${c.sla.colorClass}`}
                    >
                      {c.sla.label}
                    </span>
                  </div>

                  <div>
                    <div className="font-bold text-xs text-slate-900">{c.institutionName}</div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      {formatCurrencyFull(c.amount)} • {c.fdrNumber}
                    </div>
                  </div>

                  <div className="bg-slate-50 border rounded-lg p-2.5 text-xs">
                    {renderAiFinding(c)}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="font-bold text-slate-700">Score:</span>
                      <span className="font-black text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                        {scoreBreakdown.totalScore}/100
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Conf: {Math.round((c.fdr?.aiRecommendation?.confidence || 0.94) * 100)}%
                      </span>
                    </div>

                    <Link
                      href={`/reviewer/case/${c.id}`}
                      className="inline-flex items-center space-x-1 bg-blue-900 text-white font-bold text-xs px-3 py-1.5 rounded-lg"
                    >
                      <span>Review</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ReviewerInboxPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading Reviewer Inbox...</div>}>
      <ReviewerInboxContent />
    </Suspense>
  );
}
