/**
 * Synthetic data for demo MVP. No backend — all in-memory / static.
 */

export interface Deal {
  id: string;
  name: string;
  sector: string;
  type: "M&A" | "IPO" | "Advisory";
  status: "Pipeline" | "Live" | "Closed";
  valueUsdM?: number;
  mandateScore: number;
  client: string;
  updatedAt: string;
}

export interface AuditEntry {
  id: string;
  timestamp: string;
  userId: string;
  action: string;
  entityType: string;
  entityId: string;
  details: string;
  modelId?: string;
}

export interface HITLTask {
  id: string;
  type: "approval" | "override" | "info";
  title: string;
  body: string;
  arm: string;
  entityId?: string;
  createdAt: string;
  status: "pending" | "approved" | "rejected";
}

export interface SearchHit {
  id: string;
  type: "deal" | "document" | "entity" | "workspace";
  title: string;
  subtitle?: string;
  path: string;
  arm?: string;
  snippet?: string;
}

export interface XAIDecision {
  id: string;
  title: string;
  context: string;
  outcome: string;
  factors: { name: string; contribution: string; direction: "positive" | "negative" | "neutral" }[];
  modelVersion: string;
  timestamp: string;
}

// ——— Deals (Banking) ———
export const SYNTHETIC_DEALS: Deal[] = [
  { id: "D-001", name: "Eko Petrochemicals Ltd", sector: "Energy", type: "M&A", status: "Live", valueUsdM: 420, mandateScore: 0.87, client: "Eko Holdings", updatedAt: "2025-03-04T10:00:00Z" },
  { id: "D-002", name: "Fintrak Solutions IPO", sector: "Fintech", type: "IPO", status: "Pipeline", valueUsdM: 180, mandateScore: 0.72, client: "Fintrak", updatedAt: "2025-03-03T14:30:00Z" },
  { id: "D-003", name: "Greenfield Power Acquisition", sector: "Utilities", type: "M&A", status: "Closed", valueUsdM: 650, mandateScore: 0.94, client: "Niger Delta Power", updatedAt: "2025-02-28T09:15:00Z" },
  { id: "D-004", name: "MedPlus Health Advisory", sector: "Healthcare", type: "Advisory", status: "Live", mandateScore: 0.68, client: "MedPlus Group", updatedAt: "2025-03-04T08:45:00Z" },
  { id: "D-005", name: "Lagos Port Authority Refinancing", sector: "Infrastructure", type: "Advisory", status: "Pipeline", mandateScore: 0.55, client: "LPA", updatedAt: "2025-03-02T16:00:00Z" },
];

// ——— Audit log (append-only in demo) ———
export const SYNTHETIC_AUDIT: AuditEntry[] = [
  { id: "A-1", timestamp: "2025-03-04T11:22:00Z", userId: "user@cordros.com", action: "Approved", entityType: "HITL", entityId: "H-101", details: "Rebalance recommendation for portfolio IM-204", modelId: "rebal-v2" },
  { id: "A-2", timestamp: "2025-03-04T11:18:00Z", userId: "user@cordros.com", action: "Viewed", entityType: "Deal", entityId: "D-001", details: "Eko Petrochemicals Ltd" },
  { id: "A-3", timestamp: "2025-03-04T10:45:00Z", userId: "user@cordros.com", action: "Rejected", entityType: "HITL", entityId: "H-100", details: "Surveillance alert override", modelId: "surv-v1" },
  { id: "A-4", timestamp: "2025-03-04T09:30:00Z", userId: "user@cordros.com", action: "Search", entityType: "Search", entityId: "-", details: "Query: eko petrochemicals" },
  { id: "A-5", timestamp: "2025-03-03T16:00:00Z", userId: "user@cordros.com", action: "Exported", entityType: "Report", entityId: "R-IM-Q1", details: "Portfolio risk report Q1" },
];

// ——— HITL tasks (pending; demo actions will update these) ———
export const SYNTHETIC_HITL: HITLTask[] = [
  { id: "H-102", type: "approval", title: "Rebalance pending", body: "Portfolio IM-204 requires your approval", arm: "im", entityId: "IM-204", createdAt: "2025-03-04T11:20:00Z", status: "pending" },
  { id: "H-103", type: "approval", title: "Mandate probability update", body: "Eko Petrochemicals mandate score above threshold", arm: "banking", entityId: "D-001", createdAt: "2025-03-04T11:15:00Z", status: "pending" },
  { id: "H-104", type: "override", title: "VaR breach", body: "US Equity book exceeded threshold", arm: "im", createdAt: "2025-03-04T11:00:00Z", status: "pending" },
  { id: "H-105", type: "approval", title: "Surveillance flag", body: "Account 7X-8821 unusual volume", arm: "securities", entityId: "7X-8821", createdAt: "2025-03-04T10:55:00Z", status: "pending" },
  { id: "H-106", type: "info", title: "Model recertification", body: "Q1 bias audit due Mar 15", arm: "governance", createdAt: "2025-03-04T09:00:00Z", status: "pending" },
];

// ——— Search index (for command palette search) ———
export const SYNTHETIC_SEARCH_INDEX: SearchHit[] = [
  ...SYNTHETIC_DEALS.map((d) => ({
    id: d.id,
    type: "deal" as const,
    title: d.name,
    subtitle: `${d.type} · ${d.sector}`,
    path: `/banking/deals/${d.id}`,
    arm: "banking",
    snippet: `Deal ${d.name}, ${d.status}, ${d.client}`,
  })),
  { id: "doc-1", type: "document", title: "Eko Petrochemicals - IM", subtitle: "Information Memorandum", path: "/banking/data-room", arm: "banking", snippet: "Information memorandum for Eko Petrochemicals Ltd" },
  { id: "doc-2", type: "document", title: "Q1 Risk Report", subtitle: "Investment Management", path: "/im/risk", arm: "im", snippet: "VaR, stress tests, correlation breakdown" },
  { id: "ent-1", type: "entity", title: "Eko Holdings", subtitle: "Client", path: "/banking", arm: "banking", snippet: "Client entity" },
  { id: "ent-2", type: "entity", title: "Portfolio IM-204", subtitle: "Portfolio", path: "/im", arm: "im", snippet: "Institutional portfolio" },
];

// ——— XAI explanations (for Explainability page) ———
export const SYNTHETIC_XAI: XAIDecision[] = [
  {
    id: "X-1",
    title: "Rebalance recommendation for IM-204",
    context: "Multi-factor allocation model suggested a 3% shift from US Equity to EMEA Fixed Income.",
    outcome: "Recommended: Reduce US Equity by 3%, add EMEA Fixed Income 3%.",
    factors: [
      { name: "Regime shift (volatility)", contribution: "+0.42", direction: "positive" },
      { name: "Momentum (EMEA FI)", contribution: "+0.28", direction: "positive" },
      { name: "Correlation (US/EMEA)", contribution: "-0.05", direction: "negative" },
    ],
    modelVersion: "rebal-v2",
    timestamp: "2025-03-04T11:20:00Z",
  },
  {
    id: "X-2",
    title: "Mandate probability: Eko Petrochemicals",
    context: "Deal origination model scored likelihood of mandate win for Eko Petrochemicals Ltd.",
    outcome: "Score: 0.87 (High). Recommended: Prioritise engagement.",
    factors: [
      { name: "Relationship history", contribution: "+0.35", direction: "positive" },
      { name: "Sector fit", contribution: "+0.22", direction: "positive" },
      { name: "Competitive overlap", contribution: "-0.10", direction: "negative" },
    ],
    modelVersion: "mandate-v1",
    timestamp: "2025-03-04T11:15:00Z",
  },
];
