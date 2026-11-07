export type UserRole = "INSTITUTION" | "REVIEWER" | "ADMIN" | "MANAGEMENT";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  institutionId?: string;
  department?: string;
}

export type LifecycleState =
  | "Submitted"
  | "Extracted"
  | "Validation Pending"
  | "Verification Pending"
  | "Under Review"
  | "Verified"
  | "Compliance Checked"
  | "Active"
  | "Maturity Approaching"
  | "Renewal Required"
  | "Renewal Submitted"
  | "Replacement Under Review"
  | "Release Eligible"
  | "Refund Processing"
  | "Released/Refunded"
  | "Closed";

export type AuthenticityLevel =
  | "Normal"
  | "Low concern"
  | "Review recommended"
  | "High concern";

export type VerificationStatus =
  | "MATCH"
  | "PARTIAL MATCH"
  | "MISMATCH"
  | "SOURCE UNAVAILABLE"
  | "REQUIRES HUMAN REVIEW";

export type PriorityLevel = "Critical" | "High" | "Medium" | "Low";
export type RiskLevel = "Low" | "Medium" | "High" | "Critical";

export interface ExtractedField {
  fieldName: string;
  label: string;
  value: string | number;
  confidence: number; // 0.0 to 1.0
  page: number;
  boundingBox?: { x: number; y: number; width: number; height: number }; // normalized 0-100%
  isEdited?: boolean;
  originalValue?: string | number;
}

export interface VerificationDiscrepancy {
  field: string;
  submittedValue: string | number;
  authoritativeValue: string | number;
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  explanation: string;
}

export interface VerificationRecord {
  source: string;
  status: VerificationStatus;
  verifiedAt: string;
  discrepancies: VerificationDiscrepancy[];
  matchedFields: string[];
  externalRef: string;
  bankBranch: string;
  isAuthorizedConnector: boolean;
}

export interface RuleEvaluation {
  ruleId: string;
  ruleName: string;
  ruleVersion: string;
  category: string;
  status: "PASS" | "FAIL" | "WARNING";
  severity: "CRITICAL" | "HIGH" | "MEDIUM" | "INFO";
  explanation: string;
  remedy?: string;
}

export interface RiskFactor {
  factor: string;
  points: number; // added to 0-100 score
  weight: number;
  category: "VERIFICATION" | "TAMPER" | "MATURITY" | "EVIDENCE" | "COMPLIANCE" | "HISTORY";
  description: string;
}

export interface RiskAssessment {
  score: number; // 0 to 100
  level: RiskLevel;
  factors: RiskFactor[];
  summary: string;
  assessedAt: string;
}

export interface TamperAnalysis {
  overallLevel: AuthenticityLevel;
  fontConsistency: number; // 0 to 100%
  layoutIntegrity: number;
  alteredNumericsDetected: boolean;
  metadataAnomalies: string[];
  sealSignatureCheck: "Verified Authentic" | "Consistent" | "Needs Manual Inspection" | "Anomalous";
  confidence: number;
}

export interface FDRRecord {
  id: string;
  fdrNumber: string;
  institutionId: string;
  institutionName: string;
  bankName: string;
  branchName: string;
  ifscCode: string;
  amount: number; // in INR
  issueDate: string; // YYYY-MM-DD
  maturityDate: string; // YYYY-MM-DD
  tenureMonths: number;
  interestRate: number; // e.g. 7.25%
  beneficiary: string;
  jointBeneficiary: string;
  purpose: string;
  lifecycleStatus: LifecycleState;
  authenticityLevel: AuthenticityLevel;
  verificationStatus: VerificationStatus;
  riskScore: number;
  riskLevel: RiskLevel;
  
  // Document Refs
  documentId: string;
  documentFileName: string;
  extractedFields: ExtractedField[];
  
  // Intelligence Outputs
  verification?: VerificationRecord;
  tamperAnalysis?: TamperAnalysis;
  ruleEvaluations: RuleEvaluation[];
  riskAssessment?: RiskAssessment;
  aiRecommendation?: {
    action: "Approve" | "Request Clarification" | "Escalate" | "Reject";
    confidence: number;
    rationale: string;
    applicableRuleId: string;
    evidenceText: string;
  };
  
  // Lifecycle & Replacement Links
  replacementForFdrId?: string;
  replacedByFdrId?: string;
  releaseEligibilityDate?: string;
  releaseReason?: string;
  refundApprovedDate?: string;
  refundAmount?: number;
  
  // Clarification notes
  clarificationRequest?: string;
  clarificationResponse?: string;
  
  createdAt: string;
  updatedAt: string;
}

export interface Institution {
  id: string;
  code: string; // e.g. "AICTE-1-3928192"
  name: string;
  type: "Engineering" | "Management" | "Pharmacy" | "Polytechnic" | "Architecture";
  state: string;
  city: string;
  contactPerson: string;
  email: string;
  phone: string;
  aicteApprovalNo: string;
  approvalYear: number;
  complianceStatus: "Compliant" | "Action Required" | "Under Review";
  riskProfile: "Low" | "Medium" | "High";
  totalFDRCount: number;
  activeFDRAmount: number;
}

export interface CaseRecord {
  id: string;
  caseNumber: string;
  fdrId: string;
  fdrNumber: string;
  institutionId: string;
  institutionName: string;
  amount: number;
  priority: PriorityLevel;
  status: "Open" | "In Review" | "Clarification Requested" | "Resolved" | "Escalated";
  slaDeadline: string; // ISO string
  isSlaBreached: boolean;
  assignedReviewerId?: string;
  assignedReviewerName?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewerDecision {
  id: string;
  caseId: string;
  fdrId: string;
  reviewerId: string;
  reviewerName: string;
  action: "Approve" | "Reject" | "Request Clarification" | "Escalate";
  overrideAI: boolean;
  justification: string;
  timestamp: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  actorId: string;
  actorName: string;
  actorRole: UserRole;
  action: string;
  entityType: "FDR" | "Document" | "Case" | "Rule" | "Institution" | "Security";
  entityId: string;
  previousState?: string;
  newState?: string;
  reason?: string;
  correlationId: string;
  prevHash: string;
  currHash: string;
}

export interface FeedbackRecord {
  id: string;
  caseId: string;
  fdrId: string;
  actorId: string;
  actorName: string;
  fieldName: string;
  modelSuggestedValue: string | number;
  humanCorrectedValue: string | number;
  category: "Extraction Error" | "Tamper Misclassification" | "Rule False Positive" | "Other";
  notes: string;
  status: "Logged" | "Analyzed" | "Rule Pack Updated";
  timestamp: string;
}
