"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  UserRole,
  UserSession,
  FDRRecord,
  Institution,
  CaseRecord,
  ReviewerDecision,
  FeedbackRecord,
  AuditEvent,
  LifecycleState
} from "./types";
import { ALL_SEED_FDRS, SEED_INSTITUTIONS, SEED_CASES } from "./seedData";
import { LifecycleStateMachine } from "./lifecycleFSM";
import { AuditLedgerService } from "./auditLedger";
import { RulesEngine } from "./rulesEngine";
import { ExplainableRiskEngine } from "./riskEngine";
import { MockBankVerificationService } from "./mockBank";

interface StoreContextType {
  currentUser: UserSession;
  setCurrentRole: (role: UserRole) => void;
  institutions: Institution[];
  fdrs: FDRRecord[];
  cases: CaseRecord[];
  auditEvents: AuditEvent[];
  feedbacks: FeedbackRecord[];
  guidedDemoStep: number;
  isGuidedDemoActive: boolean;
  startGuidedDemo: () => void;
  nextGuidedDemoStep: () => void;
  stopGuidedDemo: () => void;
  
  // Actions
  getFDRById: (id: string) => FDRRecord | undefined;
  getCaseById: (id: string) => CaseRecord | undefined;
  getInstitutionById: (id: string) => Institution | undefined;
  submitNewFDR: (fdrData: Partial<FDRRecord>) => Promise<FDRRecord>;
  transitionLifecycle: (fdrId: string, targetState: LifecycleState, reason?: string) => Promise<{ success: boolean; error?: string }>;
  recordDecision: (caseId: string, fdrId: string, action: "Approve" | "Reject" | "Request Clarification" | "Escalate", overrideAI: boolean, justification: string) => Promise<void>;
  submitFeedback: (feedback: Omit<FeedbackRecord, "id" | "timestamp" | "status">) => Promise<void>;
  submitReplacementFDR: (oldFdrId: string, replacementData: Partial<FDRRecord>) => Promise<FDRRecord>;
  triggerReVerification: (fdrId: string) => Promise<void>;
  resetToDefaultSeeds: () => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

const DEFAULT_USERS: Record<UserRole, UserSession> = {
  INSTITUTION: {
    id: "usr-inst-1",
    name: "Dr. K. S. Venkatesh (Principal)",
    email: "principal@aryabhata-tech.edu.in",
    role: "INSTITUTION",
    institutionId: "inst-1",
    department: "Institutional Administration"
  },
  REVIEWER: {
    id: "usr-rev-1",
    name: "Rajesh Sharma (Senior Reviewer)",
    email: "rsharma@aicte-india.org",
    role: "REVIEWER",
    department: "FDR Verification & Inspection Cell"
  },
  ADMIN: {
    id: "usr-admin-1",
    name: "Smt. Priya Sundaram (Portal Admin)",
    email: "admin@aicte-portal.gov.in",
    role: "ADMIN",
    department: "System Governance & Rules Registry"
  },
  MANAGEMENT: {
    id: "usr-mgmt-1",
    name: "Prof. Anil Sahasrabudhe (Executive Committee)",
    email: "executive@aicte-india.org",
    role: "MANAGEMENT",
    department: "Executive Directorate & Compliance Oversight"
  }
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRoleState] = useState<UserRole>("REVIEWER");
  const [currentUser, setCurrentUser] = useState<UserSession>(DEFAULT_USERS["REVIEWER"]);
  const [institutions, setInstitutions] = useState<Institution[]>(SEED_INSTITUTIONS);
  const [fdrs, setFdrs] = useState<FDRRecord[]>(ALL_SEED_FDRS);
  const [cases, setCases] = useState<CaseRecord[]>(SEED_CASES);
  const [auditEvents, setAuditEvents] = useState<AuditEvent[]>([]);
  const [feedbacks, setFeedbacks] = useState<FeedbackRecord[]>([]);
  
  // Guided Demo Mode State
  const [guidedDemoStep, setGuidedDemoStep] = useState<number>(0);
  const [isGuidedDemoActive, setIsGuidedDemoActive] = useState<boolean>(false);

  // Initialize from LocalStorage if present
  useEffect(() => {
    try {
      const savedFdrs = localStorage.getItem("fdr_records_v1");
      if (savedFdrs) setFdrs(JSON.parse(savedFdrs));
      
      const savedCases = localStorage.getItem("fdr_cases_v1");
      if (savedCases) setCases(JSON.parse(savedCases));

      const savedFeedbacks = localStorage.getItem("fdr_feedbacks_v1");
      if (savedFeedbacks) setFeedbacks(JSON.parse(savedFeedbacks));

      setAuditEvents(AuditLedgerService.getEvents());
    } catch (e) {
      console.warn("Storage hydration failed", e);
    }
  }, []);

  const setCurrentRole = (role: UserRole) => {
    setCurrentRoleState(role);
    setCurrentUser(DEFAULT_USERS[role]);
  };

  const syncFdrs = (newFdrs: FDRRecord[]) => {
    setFdrs(newFdrs);
    try {
      localStorage.setItem("fdr_records_v1", JSON.stringify(newFdrs));
    } catch (e) {
      console.error(e);
    }
  };

  const syncCases = (newCases: CaseRecord[]) => {
    setCases(newCases);
    try {
      localStorage.setItem("fdr_cases_v1", JSON.stringify(newCases));
    } catch (e) {
      console.error(e);
    }
  };

  const getFDRById = (id: string) => fdrs.find(f => f.id === id);
  const getCaseById = (id: string) => cases.find(c => c.id === id || c.fdrId === id);
  const getInstitutionById = (id: string) => institutions.find(i => i.id === id);

  const startGuidedDemo = () => {
    setIsGuidedDemoActive(true);
    setGuidedDemoStep(1);
    setCurrentRole("INSTITUTION");
  };

  const nextGuidedDemoStep = () => {
    setGuidedDemoStep(prev => prev + 1);
  };

  const stopGuidedDemo = () => {
    setIsGuidedDemoActive(false);
    setGuidedDemoStep(0);
  };

  const transitionLifecycle = async (fdrId: string, targetState: LifecycleState, reason?: string) => {
    const fdr = getFDRById(fdrId);
    if (!fdr) return { success: false, error: "FDR not found" };

    const check = LifecycleStateMachine.canTransition(fdr, targetState);
    if (!check.allowed) {
      return { success: false, error: check.reason };
    }

    const prevState = fdr.lifecycleStatus;
    const updated: FDRRecord = {
      ...fdr,
      lifecycleStatus: targetState,
      updatedAt: new Date().toISOString()
    };

    const newFdrs = fdrs.map(f => f.id === fdrId ? updated : f);
    syncFdrs(newFdrs);

    const audit = await AuditLedgerService.recordEvent({
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: currentUser.role,
      action: `LIFECYCLE_TRANSITION: ${prevState} -> ${targetState}`,
      entityType: "FDR",
      entityId: fdrId,
      previousState: prevState,
      newState: targetState,
      reason: reason || "User triggered lifecycle transition"
    });

    setAuditEvents(AuditLedgerService.getEvents());
    return { success: true };
  };

  const recordDecision = async (
    caseId: string,
    fdrId: string,
    action: "Approve" | "Reject" | "Request Clarification" | "Escalate",
    overrideAI: boolean,
    justification: string
  ) => {
    const fdr = getFDRById(fdrId);
    if (!fdr) return;

    let targetState: LifecycleState = fdr.lifecycleStatus;
    if (action === "Approve") {
      targetState = "Active";
    } else if (action === "Reject") {
      targetState = "Under Review";
    } else if (action === "Request Clarification") {
      targetState = "Under Review";
    } else if (action === "Escalate") {
      targetState = "Under Review";
    }

    const updatedFdr: FDRRecord = {
      ...fdr,
      lifecycleStatus: targetState,
      clarificationRequest: action === "Request Clarification" ? justification : undefined,
      updatedAt: new Date().toISOString()
    };

    syncFdrs(fdrs.map(f => f.id === fdrId ? updatedFdr : f));

    // Update Case status
    const c = getCaseById(caseId);
    if (c) {
      const updatedCase: CaseRecord = {
        ...c,
        status: action === "Approve" ? "Resolved" : action === "Request Clarification" ? "Clarification Requested" : "In Review",
        updatedAt: new Date().toISOString()
      };
      syncCases(cases.map(item => item.id === c.id ? updatedCase : item));
    }

    await AuditLedgerService.recordEvent({
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: currentUser.role,
      action: `REVIEWER_DECISION: ${action}`,
      entityType: "Case",
      entityId: caseId,
      previousState: fdr.lifecycleStatus,
      newState: targetState,
      reason: `${justification} ${overrideAI ? "[OVERRODE_AI]" : ""}`
    });

    setAuditEvents(AuditLedgerService.getEvents());
  };

  const submitFeedback = async (feedback: Omit<FeedbackRecord, "id" | "timestamp" | "status">) => {
    const newFeedback: FeedbackRecord = {
      ...feedback,
      id: `fb-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: "Logged"
    };

    const updatedList = [newFeedback, ...feedbacks];
    setFeedbacks(updatedList);
    try {
      localStorage.setItem("fdr_feedbacks_v1", JSON.stringify(updatedList));
    } catch (e) {
      console.error(e);
    }

    await AuditLedgerService.recordEvent({
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: currentUser.role,
      action: "HUMAN_CORRECTION_FEEDBACK_LOGGED",
      entityType: "FDR",
      entityId: feedback.fdrId,
      reason: `Corrected field ${feedback.fieldName} from ${feedback.modelSuggestedValue} to ${feedback.humanCorrectedValue}`
    });
    setAuditEvents(AuditLedgerService.getEvents());
  };

  const triggerReVerification = async (fdrId: string) => {
    const fdr = getFDRById(fdrId);
    if (!fdr) return;

    const connector = new MockBankVerificationService();
    const verification = await connector.verifyFDR(fdr);
    
    // Evaluate rules
    const ruleEvaluations = RulesEngine.evaluateAll(fdr);
    
    // Assess risk
    const tempFdr = { ...fdr, verification, verificationStatus: verification.status, ruleEvaluations };
    const riskAssessment = ExplainableRiskEngine.assess(tempFdr);

    const updatedFdr: FDRRecord = {
      ...tempFdr,
      riskScore: riskAssessment.score,
      riskLevel: riskAssessment.level,
      riskAssessment,
      updatedAt: new Date().toISOString()
    };

    syncFdrs(fdrs.map(f => f.id === fdrId ? updatedFdr : f));

    await AuditLedgerService.recordEvent({
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: currentUser.role,
      action: `RE_VERIFY_TRIGGERED: Status=${verification.status}`,
      entityType: "FDR",
      entityId: fdrId,
      reason: "Authoritative connector query triggered"
    });
    setAuditEvents(AuditLedgerService.getEvents());
  };

  const submitNewFDR = async (formData: Partial<FDRRecord>): Promise<FDRRecord> => {
    const id = `fdr-user-${Date.now()}`;
    const amount = Number(formData.amount) || 2500000;
    const fdrNum = formData.fdrNumber || `FDR-SBI-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    const newFdr: FDRRecord = {
      id,
      fdrNumber: fdrNum,
      institutionId: formData.institutionId || currentUser.institutionId || "inst-1",
      institutionName: formData.institutionName || "Aryabhata Institute of Technology & Engineering",
      bankName: formData.bankName || "State Bank of India",
      branchName: formData.branchName || "Main Branch, Bengaluru",
      ifscCode: formData.ifscCode || "SBIN0001092",
      amount,
      issueDate: formData.issueDate || new Date().toISOString().split("T")[0],
      maturityDate: formData.maturityDate || "2031-03-15",
      tenureMonths: formData.tenureMonths || 60,
      interestRate: formData.interestRate || 7.25,
      beneficiary: formData.beneficiary || formData.institutionName || "Aryabhata Institute of Technology & Engineering",
      jointBeneficiary: formData.jointBeneficiary || "Regional Officer AICTE",
      purpose: "Mandatory Security Deposit under AICTE Approval Process (Lien Marked)",
      lifecycleStatus: "Validation Pending",
      authenticityLevel: "Normal",
      verificationStatus: "MATCH",
      riskScore: 12,
      riskLevel: "Low",
      documentId: `doc-${Date.now()}`,
      documentFileName: formData.documentFileName || "FDR_Deposit_Certificate.pdf",
      extractedFields: formData.extractedFields || [],
      ruleEvaluations: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Run rules & risk
    newFdr.ruleEvaluations = RulesEngine.evaluateAll(newFdr);
    newFdr.riskAssessment = ExplainableRiskEngine.assess(newFdr);
    newFdr.riskScore = newFdr.riskAssessment.score;
    newFdr.riskLevel = newFdr.riskAssessment.level;

    const updatedList = [newFdr, ...fdrs];
    syncFdrs(updatedList);

    // Create Reviewer Case
    const newCase: CaseRecord = {
      id: `case-${Date.now()}`,
      caseNumber: `CASE-2026-${newFdr.riskLevel.toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`,
      fdrId: newFdr.id,
      fdrNumber: newFdr.fdrNumber,
      institutionId: newFdr.institutionId,
      institutionName: newFdr.institutionName,
      amount: newFdr.amount,
      priority: newFdr.riskLevel === "Critical" ? "Critical" : newFdr.riskLevel === "High" ? "High" : "Medium",
      status: "Open",
      slaDeadline: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
      isSlaBreached: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    syncCases([newCase, ...cases]);

    await AuditLedgerService.recordEvent({
      actorId: currentUser.id,
      actorName: currentUser.name,
      actorRole: currentUser.role,
      action: "FDR_SUBMISSION_AND_CASE_CREATED",
      entityType: "FDR",
      entityId: newFdr.id,
      reason: `Uploaded new deposit certificate ${newFdr.fdrNumber} for ₹${newFdr.amount.toLocaleString("en-IN")}`
    });
    setAuditEvents(AuditLedgerService.getEvents());

    return newFdr;
  };

  const submitReplacementFDR = async (oldFdrId: string, replacementData: Partial<FDRRecord>): Promise<FDRRecord> => {
    const oldFdr = getFDRById(oldFdrId);
    const replacement = await submitNewFDR(replacementData);
    
    if (oldFdr) {
      // Link old <-> new
      const updatedOld: FDRRecord = {
        ...oldFdr,
        replacedByFdrId: replacement.id,
        lifecycleStatus: "Renewal Submitted",
        updatedAt: new Date().toISOString()
      };
      const updatedNew: FDRRecord = {
        ...replacement,
        replacementForFdrId: oldFdr.id,
        lifecycleStatus: "Replacement Under Review",
        updatedAt: new Date().toISOString()
      };

      syncFdrs(fdrs.map(f => {
        if (f.id === oldFdrId) return updatedOld;
        if (f.id === replacement.id) return updatedNew;
        return f;
      }));

      await AuditLedgerService.recordEvent({
        actorId: currentUser.id,
        actorName: currentUser.name,
        actorRole: currentUser.role,
        action: "REPLACEMENT_FDR_LINKED",
        entityType: "FDR",
        entityId: replacement.id,
        reason: `Replacement for maturing FDR ${oldFdr.fdrNumber} (${oldFdr.id})`
      });
      setAuditEvents(AuditLedgerService.getEvents());
    }

    return replacement;
  };

  const resetToDefaultSeeds = () => {
    localStorage.removeItem("fdr_records_v1");
    localStorage.removeItem("fdr_cases_v1");
    localStorage.removeItem("fdr_feedbacks_v1");
    localStorage.removeItem("fdr_audit_ledger_v1");
    setFdrs(ALL_SEED_FDRS);
    setCases(SEED_CASES);
    setFeedbacks([]);
    setAuditEvents([]);
    setIsGuidedDemoActive(false);
    setGuidedDemoStep(0);
  };

  return (
    <StoreContext.Provider
      value={{
        currentUser,
        setCurrentRole,
        institutions,
        fdrs,
        cases,
        auditEvents,
        feedbacks,
        guidedDemoStep,
        isGuidedDemoActive,
        startGuidedDemo,
        nextGuidedDemoStep,
        stopGuidedDemo,
        getFDRById,
        getCaseById,
        getInstitutionById,
        submitNewFDR,
        transitionLifecycle,
        recordDecision,
        submitFeedback,
        submitReplacementFDR,
        triggerReVerification,
        resetToDefaultSeeds
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};
