/**
 * Single source of truth for "where am I?" across the platform.
 * Maps pathnames to arm + capability so every page can show unified wayfinding.
 */

import { ARMS } from "./arms";
import type { ArmId } from "@/contexts/AuthContext";

export interface WayfindingContext {
  type: "overview" | "governance" | "arm";
  armId: ArmId | null;
  armShortName: string | null;
  capabilityLabel: string | null;
  /** For governance: "Audit" | "Explain" */
  governanceLabel?: string;
}

/** Path segment → human-readable capability label (per arm). */
const CAPABILITY_LABELS: Record<ArmId, Record<string, string>> = {
  banking: {
    deals: "Deal pipeline",
    comps: "Comparable analytics",
    "data-room": "Data room",
    "market-scanning": "Market scanning",
    "dcf-scenarios": "DCF & scenarios",
    "due-diligence": "Due diligence",
    compliance: "Compliance automation",
    forensics: "Financial forensics",
    "mandate-probability": "Mandate probability",
    "institutional-memory": "Institutional memory",
  },
  im: {
    risk: "Risk dashboard",
    attribution: "Performance attribution",
    rebalancing: "Predictive rebalancing",
    "liquidity-risk": "Liquidity risk",
    esg: "ESG integration",
    "macro-forecast": "Macro forecast",
    "scenario-simulator": "Scenario simulator",
    "client-mandate": "Client mandate engine",
  },
  securities: {
    surveillance: "Surveillance & detection",
    tca: "Trade cost analysis",
    "order-routing": "Smart order routing",
    "insider-detection": "Insider trading detection",
    "account-behavior": "Account behavior anomaly",
    "fraud-flagging": "Fraudulent transaction flagging",
    "liquidity-forecast": "Liquidity forecasting",
    "client-trade-pattern": "Client trade pattern",
    "regulatory-reporting": "Regulatory reporting",
  },
  research: {
    screening: "Quant screening",
    transcripts: "Earnings transcript intelligence",
    draft: "Research draft copilot",
    "sentiment-tone": "Sentiment & tone",
    "macro-event": "Macro event impact",
    "chart-generator": "Chart generator",
    "filing-tracker": "Regulatory filing tracker",
    "thematic-clustering": "Thematic trend clustering",
    "citation-verification": "Citation verification",
    "knowledge-graph": "Sector knowledge graph",
  },
  wealth: {
    planning: "Goal-based planning",
    communications: "Client communication copilot",
    "risk-tolerance": "Risk tolerance profiling",
    "behavioral-bias": "Behavioral bias detection",
    "life-events": "Life event signals",
    "tax-loss": "Tax-loss harvesting",
    "asset-location": "Asset location optimisation",
    "estate-planning": "Estate planning scenarios",
    "drift-alerts": "Portfolio drift alerts",
    "churn-prediction": "Churn prediction",
  },
  registrars: {
    shareholders: "Shareholder engagement",
    "data-cleansing": "Shareholder data cleansing",
    "identity-kyc": "Identity & KYC AI",
    "dividend-recon": "Dividend reconciliation",
    "corporate-action": "Corporate action prediction",
    "unclaimed-dividend": "Unclaimed dividend recovery",
    "agm-voting": "AGM voting analytics",
    "fraud-transfer": "Fraudulent transfer detection",
    "cap-table": "Cap table integrity",
    "filing-automation": "Regulatory filing automation",
  },
};

export function getWayfindingContext(pathname: string): WayfindingContext {
  if (pathname === "/") {
    return { type: "overview", armId: null, armShortName: null, capabilityLabel: null };
  }
  if (pathname === "/audit") {
    return { type: "governance", armId: null, armShortName: null, capabilityLabel: null, governanceLabel: "Audit trail" };
  }
  if (pathname === "/explain") {
    return { type: "governance", armId: null, armShortName: null, capabilityLabel: null, governanceLabel: "Explainability" };
  }

  const arm = ARMS.find((a) => pathname.startsWith(a.path) && (pathname === a.path || pathname[a.path.length] === "/"));
  if (!arm) {
    return { type: "overview", armId: null, armShortName: null, capabilityLabel: null };
  }

  const rest = pathname.slice(arm.path.length).replace(/^\//, "");
  const segment = rest.split("/")[0];
  const labels = CAPABILITY_LABELS[arm.id];
  const capabilityLabel = segment && labels ? labels[segment] ?? null : null;

  return {
    type: "arm",
    armId: arm.id,
    armShortName: arm.shortName,
    capabilityLabel: capabilityLabel ?? null,
  };
}
