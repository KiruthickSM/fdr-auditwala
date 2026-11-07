import { AuditEvent, UserRole } from "./types";

// In-browser SHA-256 utility
async function computeSha256(message: string): Promise<string> {
  if (typeof window !== "undefined" && window.crypto && window.crypto.subtle) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  }
  // Node / SSR fallback simple hash representation
  let hash = 0;
  for (let i = 0; i < message.length; i++) {
    const char = message.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return "hash_" + Math.abs(hash).toString(16).padStart(64, "0");
}

export class AuditLedgerService {
  private static STORAGE_KEY = "fdr_audit_ledger_v1";

  public static getEvents(): AuditEvent[] {
    if (typeof window === "undefined") return [];
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  public static async recordEvent(params: {
    actorId: string;
    actorName: string;
    actorRole: UserRole;
    action: string;
    entityType: "FDR" | "Document" | "Case" | "Rule" | "Institution" | "Security";
    entityId: string;
    previousState?: string;
    newState?: string;
    reason?: string;
    correlationId?: string;
  }): Promise<AuditEvent> {
    const events = this.getEvents();
    const lastEvent = events[events.length - 1];
    const prevHash = lastEvent ? lastEvent.currHash : "GENESIS_BLOCK_0000000000000000000000000000000000000000000000000000000000000000";

    const timestamp = new Date().toISOString();
    const correlationId = params.correlationId || `corr-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const payloadToHash = JSON.stringify({
      prevHash,
      timestamp,
      actorId: params.actorId,
      actorRole: params.actorRole,
      action: params.action,
      entityType: params.entityType,
      entityId: params.entityId,
      previousState: params.previousState,
      newState: params.newState,
      reason: params.reason,
      correlationId
    });

    const currHash = await computeSha256(payloadToHash);

    const newEvent: AuditEvent = {
      id: `audit-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
      timestamp,
      actorId: params.actorId,
      actorName: params.actorName,
      actorRole: params.actorRole,
      action: params.action,
      entityType: params.entityType,
      entityId: params.entityId,
      previousState: params.previousState,
      newState: params.newState,
      reason: params.reason,
      correlationId,
      prevHash,
      currHash
    };

    events.push(newEvent);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(events));
      } catch (e) {
        console.error("Audit ledger storage failed", e);
      }
    }

    return newEvent;
  }

  public static async verifyChainIntegrity(): Promise<{ valid: boolean; brokenAtBlock?: number; details?: string }> {
    const events = this.getEvents();
    if (events.length === 0) return { valid: true };

    let expectedPrevHash = "GENESIS_BLOCK_0000000000000000000000000000000000000000000000000000000000000000";

    for (let i = 0; i < events.length; i++) {
      const block = events[i];
      if (block.prevHash !== expectedPrevHash) {
        return {
          valid: false,
          brokenAtBlock: i,
          details: `Block ${i} previous hash mismatch. Expected ${expectedPrevHash}, found ${block.prevHash}`
        };
      }

      const payload = JSON.stringify({
        prevHash: block.prevHash,
        timestamp: block.timestamp,
        actorId: block.actorId,
        actorRole: block.actorRole,
        action: block.action,
        entityType: block.entityType,
        entityId: block.entityId,
        previousState: block.previousState,
        newState: block.newState,
        reason: block.reason,
        correlationId: block.correlationId
      });

      const calculated = await computeSha256(payload);
      if (calculated !== block.currHash) {
        return {
          valid: false,
          brokenAtBlock: i,
          details: `Block ${i} hash tampering detected! Stored: ${block.currHash}, Calculated: ${calculated}`
        };
      }

      expectedPrevHash = block.currHash;
    }

    return { valid: true };
  }
}
