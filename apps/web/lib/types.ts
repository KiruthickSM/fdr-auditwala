export type UserRole =
  | "APPLICANT"
  | "CASE_OFFICER"
  | "APPROVING_AUTHORITY"
  | "FINANCE_OFFICER"
  | "AUDITOR"
  | "SYSTEM_ADMIN"
  | "POLICY_ADMIN"
  | "MANAGEMENT"
  // Backward-compatible role aliases
  | "INSTITUTION"
  | "REVIEWER"
  | "ADMIN";

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
  | "MISMATCH"
  | "NOT_CHECKED"
  | "SOURCE_UNAVAILABLE"
  | "SOURCE_ERROR"
  | "INSUFFICIENT_EVIDENCE"
  | "PENDING_HUMAN_REVIEW"
  // Backward-compatible mappings
  | "PARTIAL MATCH"
  | "REQUIRES HUMAN REVIEW";

export type PriorityLevel = "Critical" | "High" | "Medium" | "Low";
export type RiskLevel = "Low" | "Medium" | "High" | "Critical";

export type ProvenanceLabel =
  | "authoritative integration response"
  | "Verification source (simulated)"
  | "verification source (simulated)"
  | "official document"
  | "extracted claim"
  | "configured rule"
  | "public reference"
  | "synthetic demo data"
  | "human observation";

export interface ExtractionClaim {
  id: string;
  field: string;
  label: string;
  extracted_value: string;
  normalized_value: string | number;
  confidence: number; // 0.0 to 1.0
  page_number: number;
  source_text?: string;
  engine: string;
  engine_version: string;
  review_status: "UNREVIEWED" | "ACCEPTED" | "CORRECTED" | "DISPUTED";
  reviewed_by?: string;
  reviewed_at?: string;
  correction_reason?: string;
  boundingBox?: { x: number; y: number; width: number; height: number };
}

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
  checked_at?: string;
  reference_id?: string;
}

export type FindingCategory =
  | "completeness"
  | "mismatch"
  | "compliance"
  | "risk"
  | "lifecycle"
  | "knowledge_gap";

export type FindingSeverity = "info" | "low" | "medium" | "high";
export type FindingStatus = "open" | "resolved" | "disputed";

export interface FindingRecord {
  id: string;
  code: string; // e.g. "MATURITY_DATE_MISMATCH", "AMOUNT_MISMATCH", "MISSING_REQUIRED_DOCUMENT"
  category: FindingCategory;
  severity: FindingSeverity;
  status: FindingStatus;
  explanation: string;
  evidenceRefs: Array<{
    source: string;
    provenance: ProvenanceLabel;
    refId?: string;
    value?: string | number;
  }>;
  nextStep: string;
  ruleOrModelVersion: string;
  createdAt: string;
  resolvedAt?: string;
  resolvedBy?: string;
}

export interface RuleEvaluation {
  ruleId: string;
  ruleName: string;
  ruleVersion: string;
  category: string;
  status: "PASS" | "FAIL" | "WARNING" | "UNKNOWN" | "NEEDS_EVIDENCE" | "NEEDS_POLICY_REVIEW";
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
  record_version?: number; // optimistic concurrency
  
  // Document Refs & Claims
  documentId: string;
  documentFileName: string;
  extractedFields: ExtractedField[];
  claims?: ExtractionClaim[];
  findings?: FindingRecord[];
  
  // Intelligence Outputs
  verification?: VerificationRecord;
  tamperAnalysis?: TamperAnalysis;
  ruleEvaluations: RuleEvaluation[];
  riskAssessment?: RiskAssessment;
  aiRecommendation?: {
    action: "Approve" | "Request Clarification" | "Escalate" | "Reject" | "RECOMMEND_APPROVAL" | "RECOMMEND_REJECTION";
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
  record_version?: number; // optimistic concurrency
  createdAt: string;
  updatedAt: string;
}

export type ReviewerAction =
  | "ACCEPT"
  | "EDIT"
  | "REQUEST_INFORMATION"
  | "MARK_EVIDENCE_INCORRECT"
  | "ESCALATE"
  | "RECOMMEND_APPROVAL"
  | "RECOMMEND_REJECTION"
  | "APPROVE"
  | "REJECT";

export interface ReviewerDecision {
  id: string;
  caseId: string;
  fdrId: string;
  reviewerId: string;
  reviewerName: string;
  action: ReviewerAction | "Approve" | "Reject" | "Request Clarification" | "Escalate";
  overrideAI: boolean;
  justification: string;
  timestamp: string;
  record_version?: number;
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
