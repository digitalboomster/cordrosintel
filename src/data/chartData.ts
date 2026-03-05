/**
 * Synthetic data for charts and dashboards. Used across risk, attribution, TCA, comps, etc.
 */

export const RISK_VAR_SERIES = [
  { name: "Mon", var: 2.1, cvar: 2.8 },
  { name: "Tue", var: 2.3, cvar: 3.0 },
  { name: "Wed", var: 1.9, cvar: 2.5 },
  { name: "Thu", var: 2.5, cvar: 3.2 },
  { name: "Fri", var: 2.2, cvar: 2.9 },
  { name: "Sat", var: 1.8, cvar: 2.4 },
  { name: "Sun", var: 2.0, cvar: 2.6 },
];

export const STRESS_TEST_SERIES = [
  { scenario: "Baseline", pnl: 0 },
  { scenario: "-10% Equity", pnl: -2.4 },
  { scenario: "-20% Equity", pnl: -5.1 },
  { scenario: "+100bp Rates", pnl: -1.2 },
  { scenario: "Credit spread +50bp", pnl: -0.8 },
  { scenario: "Combined shock", pnl: -6.2 },
];

export const ATTRIBUTION_FACTORS = [
  { name: "Equity", contribution: 1.2, allocation: 0.4 },
  { name: "Duration", contribution: -0.3, allocation: 0.2 },
  { name: "Credit", contribution: 0.5, allocation: 0.25 },
  { name: "Currency", contribution: 0.1, allocation: 0.05 },
  { name: "Security selection", contribution: 0.4, allocation: 0.1 },
];

export const REBAL_WEIGHTS = [
  { name: "US Equity", current: 42, target: 40 },
  { name: "EMEA Equity", current: 18, target: 20 },
  { name: "Govt bonds", current: 25, target: 26 },
  { name: "Credit", current: 12, target: 11 },
  { name: "Cash", current: 3, target: 3 },
];

export const SURVEILLANCE_ALERTS = [
  { id: "A1", time: "11:42", account: "7X-8821", type: "Volume", score: 0.92, status: "Open" },
  { id: "A2", time: "11:38", account: "9K-1022", type: "Price", score: 0.87, status: "Open" },
  { id: "A3", time: "11:15", account: "2M-5543", type: "Pattern", score: 0.78, status: "Closed" },
  { id: "A4", time: "10:58", account: "7X-8821", type: "Timing", score: 0.65, status: "Open" },
];

export const ALERTS_OVER_TIME = [
  { hour: "09:00", count: 2 },
  { hour: "10:00", count: 5 },
  { hour: "11:00", count: 8 },
  { hour: "12:00", count: 4 },
  { hour: "13:00", count: 3 },
];

export const TCA_SERIES = [
  { name: "Implementation shortfall (%)", pre: 0.02, post: 0.05 },
  { name: "Spread cost (bp)", pre: 1.2, post: 1.8 },
  { name: "Market impact (bp)", pre: 0.5, post: 2.1 },
];

export const COMPS_PEERS = [
  { name: "Eko Petrochemicals", evEbitda: 8.2, pe: 12.4, sector: "Energy" },
  { name: "Peer A", evEbitda: 7.8, pe: 11.2, sector: "Energy" },
  { name: "Peer B", evEbitda: 9.1, pe: 14.0, sector: "Energy" },
  { name: "Peer C", evEbitda: 8.5, pe: 13.1, sector: "Energy" },
  { name: "Peer D", evEbitda: 7.2, pe: 10.5, sector: "Energy" },
];

export const DATA_ROOM_DOCS = [
  { id: "1", name: "Information Memorandum.pdf", type: "IM", date: "2025-03-01", size: "2.4 MB" },
  { id: "2", name: "Financial Statements FY24.xlsx", type: "Financials", date: "2025-02-28", size: "1.1 MB" },
  { id: "3", name: "Management Presentation.pdf", type: "Presentation", date: "2025-03-02", size: "4.2 MB" },
  { id: "4", name: "Due Diligence Summary.docx", type: "DD", date: "2025-03-03", size: "0.3 MB" },
];

export const SCREENING_RESULTS = [
  { ticker: "EQTY-A", momentum: 0.82, value: 0.65, quality: 0.78, sector: "Financials" },
  { ticker: "BANK-B", momentum: 0.71, value: 0.88, quality: 0.72, sector: "Financials" },
  { ticker: "IND-C", momentum: 0.55, value: 0.92, quality: 0.85, sector: "Industrials" },
  { ticker: "TECH-D", momentum: 0.91, value: 0.42, quality: 0.90, sector: "Technology" },
];

export const WEALTH_AUM_TREND = [
  { month: "Sep", aum: 124 },
  { month: "Oct", aum: 127 },
  { month: "Nov", aum: 125 },
  { month: "Dec", aum: 131 },
  { month: "Jan", aum: 129 },
  { month: "Feb", aum: 135 },
];

export const SHAREHOLDER_BREAKDOWN = [
  { name: "Institutional", value: 62, color: "#22d3ee" },
  { name: "Retail", value: 28, color: "#fbbf24" },
  { name: "Insiders", value: 10, color: "#a78bfa" },
];

// ——— Earnings transcript intelligence ———
export interface TranscriptSummary {
  id: string;
  company: string;
  ticker: string;
  date: string;
  quarter: string;
  sentiment: "positive" | "neutral" | "cautious";
  sentimentScore: number;
  keyThemes: string[];
  toneShift: boolean;
}

export interface TranscriptSection {
  heading: string;
  body: string;
}

export const TRANSCRIPT_SUMMARIES: TranscriptSummary[] = [
  { id: "T1", company: "Eko Petrochemicals Ltd", ticker: "EKO", date: "2025-02-28", quarter: "Q4 FY24", sentiment: "positive", sentimentScore: 0.72, keyThemes: ["Capacity expansion", "Margin improvement", "Downstream integration"], toneShift: true },
  { id: "T2", company: "Fintrak Solutions", ticker: "FTR", date: "2025-02-25", quarter: "Q4 FY24", sentiment: "cautious", sentimentScore: 0.38, keyThemes: ["Regulatory headwinds", "Client retention", "Cost discipline"], toneShift: false },
  { id: "T3", company: "MedPlus Health", ticker: "MDP", date: "2025-02-20", quarter: "Q3 FY24", sentiment: "neutral", sentimentScore: 0.55, keyThemes: ["Store rollout", "E-commerce growth", "Supply chain"], toneShift: true },
];

export const TRANSCRIPT_SAMPLE_SECTIONS: TranscriptSection[] = [
  { heading: "Opening remarks", body: "Revenue for the quarter was NGN 42.1 billion, up 18% year on year. We saw strong demand in our core petrochemical segment and continued progress on the Port Harcourt expansion." },
  { heading: "Key themes (extracted)", body: "Capacity expansion: management reiterated guidance for Phase 2 completion by Q2 2025. Margin improvement: gross margin expanded 120bp on better mix. Downstream integration: new product line contributed 8% of revenue." },
  { heading: "Tone shift", body: "Tone shifted from cautious in the first 15 minutes to more confident in the Q&A section, particularly on pricing power and order book visibility." },
];

// ——— Research draft copilot (precedent / citations) ———
export const DRAFT_PRECEDENTS = [
  { id: "P1", title: "Eko Petrochemicals — Initiation", snippet: "We initiate coverage of Eko Petrochemicals with a Buy rating. The company’s downstream expansion and cost discipline support our NGN 85 PT.", used: true },
  { id: "P2", title: "Nigerian Petrochemicals Sector — Thematic", snippet: "Capacity additions in H2 2025 are likely to ease margin pressure. We see EKO and one peer as primary beneficiaries.", used: false },
  { id: "P3", title: "FY24 Results — Earnings note", snippet: "Q4 revenue beat consensus by 5%; management raised FY25 capex guidance. Valuation remains attractive on EV/EBITDA.", used: true },
];

// ——— Wealth client communications (drafts) ———
export const CLIENT_DRAFTS = [
  { id: "CD1", client: "Adebayo Family Office", type: "Quarterly review", subject: "Q1 2025 portfolio summary and rebalancing", lastEdited: "2025-03-04", status: "Draft" },
  { id: "CD2", client: "Oluwa Holdings", type: "Meeting follow-up", subject: "Action items from 28 Feb call — tax-loss harvesting", lastEdited: "2025-03-03", status: "Sent" },
  { id: "CD3", client: "Lagos Port Authority (PWM)", type: "Market update", subject: "Rate outlook and bond allocation", lastEdited: "2025-03-02", status: "Draft" },
];

// ——— Order routing (venues / execution) ———
export const ORDER_ROUTES = [
  { id: "R1", orderId: "ORD-8821", symbol: "EKO", side: "Buy", qty: 5000, venue: "NGX", latencyMs: 12, status: "Filled", avgPrice: "NGN 42.10" },
  { id: "R2", orderId: "ORD-8822", symbol: "FTR", side: "Sell", qty: 2000, venue: "NGX", latencyMs: 18, status: "Filled", avgPrice: "NGN 18.45" },
  { id: "R3", orderId: "ORD-8823", symbol: "MDP", side: "Buy", qty: 10000, venue: "NGX", latencyMs: 8, status: "Partial", avgPrice: "NGN 5.22" },
];

export const VENUE_SUMMARY = [
  { venue: "NGX", sharePct: 78, avgLatencyMs: 14 },
  { venue: "ATS-1", sharePct: 15, avgLatencyMs: 22 },
  { venue: "OTC", sharePct: 7, avgLatencyMs: 45 },
];

// ——— Unique view data: one dataset per capability ———
export const SENTIMENT_TONE_SERIES = [
  { name: "EKO", date: "2025-02-28", sentiment: 0.72, toneShift: true },
  { name: "FTR", date: "2025-02-25", sentiment: 0.38, toneShift: false },
  { name: "MDP", date: "2025-02-20", sentiment: 0.55, toneShift: true },
];
export const MACRO_EVENTS = [
  { id: "E1", event: "CBN rate decision", date: "2025-03-25", sectorImpact: "Financials", impactScore: 0.9 },
  { id: "E2", event: "Oil production OPEC", date: "2025-03-18", sectorImpact: "Energy", impactScore: 0.85 },
];
export const CHART_TEMPLATES = [
  { id: "C1", name: "Peer comps bar", category: "Valuation" },
  { id: "C2", name: "AUM trend area", category: "Wealth" },
  { id: "C3", name: "Attribution stacked bar", category: "IM" },
];
export const FILING_ALERTS = [
  { id: "F1", company: "EKO", filing: "Annual report", change: "Revenue restated", date: "2025-03-01" },
  { id: "F2", company: "FTR", filing: "Interim", change: "New segment disclosure", date: "2025-02-28" },
];
export const THEMATIC_CLUSTERS = [
  { theme: "Clean energy transition", names: ["EKO", "Greenfield"], trend: "Rising" },
  { theme: "Fintech regulation", names: ["FTR", "Paystack"], trend: "Volatile" },
];
export const CITATION_QUEUE = [
  { id: "V1", source: "EKO Initiation", claim: "EV/EBITDA 8.2x", status: "Verified" },
  { id: "V2", source: "Q4 Note", claim: "Revenue NGN 42.1bn", status: "Pending" },
];
export const KNOWLEDGE_GRAPH_ENTITIES = [
  { id: "K1", entity: "Eko Petrochemicals", links: 12, sector: "Energy" },
  { id: "K2", entity: "Fintrak Solutions", links: 8, sector: "Fintech" },
];
export const RISK_TOLERANCE_PROFILES = [
  { clientId: "C1", score: 72, alignment: "On track", lastAssessed: "2025-02-15" },
  { clientId: "C2", score: 45, alignment: "Review", lastAssessed: "2025-02-10" },
];
export const BEHAVIORAL_BIAS_SIGNALS = [
  { clientId: "C1", bias: "Loss aversion", strength: "High", nudge: "Frame in upside scenarios" },
  { clientId: "C2", bias: "Recency", strength: "Medium", nudge: "Show long-term history" },
];
export const LIFE_EVENT_SIGNALS = [
  { clientId: "C1", event: "Retirement window", probability: 0.85, suggestedAction: "Drawdown review" },
  { clientId: "C2", event: "Education funding", probability: 0.7, suggestedAction: "Trust allocation" },
];
export const TAX_LOSS_OPPORTUNITIES = [
  { holding: "EQTY-A", unrealizedLoss: 120000, washSaleFlag: false, suggested: "Harvest" },
  { holding: "BANK-B", unrealizedLoss: 45000, washSaleFlag: true, suggested: "Defer" },
];
export const ASSET_LOCATION_VIEW = [
  { account: "Taxable", equity: 42, fixedIncome: 30, taxEfficiency: "Standard" },
  { account: "Pension", equity: 55, fixedIncome: 40, taxEfficiency: "Optimal" },
];
export const ESTATE_SCENARIOS = [
  { scenario: "Current", transferTax: 0, timeline: "—" },
  { scenario: "Gift now", transferTax: 2.5, timeline: "Q2 2025" },
];
export const DRIFT_ALERTS = [
  { portfolio: "PWM-001", driftPct: 2.1, threshold: 2.0, action: "Rebalance suggested" },
  { portfolio: "PWM-002", driftPct: 1.2, threshold: 2.0, action: "Monitor" },
];
export const CHURN_RISK_SCORES = [
  { clientId: "C1", score: 0.22, risk: "Low", action: "No action" },
  { clientId: "C2", score: 0.78, risk: "High", action: "Outreach + review" },
];
export const INSIDER_DETECTION_ALERTS = [
  { id: "I1", account: "7X-8821", pattern: "Pre-announcement", score: 0.92, time: "11:42" },
];
export const ACCOUNT_BEHAVIOR_DEVIATIONS = [
  { account: "9K-1022", metric: "Trade frequency", deviation: "+180%", vsBaseline: "30d" },
];
export const FRAUD_FLAGS = [
  { id: "FF1", transaction: "Wire TX-8821", rule: "Amount threshold", mlScore: 0.88, status: "Under review" },
];
export const LIQUIDITY_FORECAST = [
  { symbol: "EKO", next1dDepth: 1.2, next5dSpread: 18, horizon: "5d" },
];
export const CLIENT_TRADE_PATTERNS = [
  { clientId: "CL1", bestExecutionPct: 94, avgSlippageBp: 2.1, period: "30d" },
];
export const REGULATORY_REPORTS_QUEUE = [
  { reportId: "RPT-001", type: "Best execution", status: "HITL review", due: "2025-03-15" },
];
export const LIQUIDITY_RISK_METRICS = [
  { portfolio: "IM-204", exitCostBp: 22, illiquidityPremium: 0.15, depthScore: 0.7 },
];
export const ESG_CONTROVERSY_SCORES = [
  { name: "EKO", env: 0.3, social: 0.2, gov: 0.1, controversy: "Low" },
];
export const MACRO_FORECAST_SERIES = [
  { variable: "FX (NGN/USD)", current: 1650, forecast1m: 1680, horizon: "1m" },
  { variable: "Inflation (CPI)", current: 28.5, forecast1m: 27.2, horizon: "1m" },
];
export const SCENARIO_SIMULATOR_RUNS = [
  { scenario: "2020-style drawdown", portfolioPnl: -5.2, tailProb: 0.02 },
];
export const CLIENT_MANDATE_CONSTRAINTS = [
  { mandateId: "M1", constraint: "Max equity 60%", current: 58, status: "OK" },
];
export const REGISTRAR_DATA_CLEANSING_JOBS = [
  { jobId: "J1", register: "EKO Register", duplicates: 12, qualityScore: 0.92, status: "Complete" },
];
export const KYC_VERIFICATION_QUEUE = [
  { id: "KYC1", entity: "Adebayo Family Office", status: "Verified", method: "Biometric" },
];
export const DIVIDEND_RECON_EXCEPTIONS = [
  { id: "DR1", issuer: "EKO", amount: 125000, exception: "Timing mismatch", status: "Resolved" },
];
export const CORPORATE_ACTION_PREDICTIONS = [
  { issuer: "EKO", event: "Dividend", prob: 0.9, expectedDate: "2025-04-15" },
];
export const UNCLAIMED_DIVIDEND_LIST = [
  { beneficiary: "Unknown holder X", amount: 45000, years: 3, outreach: "In progress" },
];
export const AGM_VOTING_ANALYTICS = [
  { meeting: "EKO AGM 2025", turnout: 72, dissentPct: 8, resolution: "Director election" },
];
export const FRAUD_TRANSFER_ALERTS = [
  { id: "FT1", transfer: "TR-5521", anomaly: "Velocity", status: "Closed" },
];
export const CAP_TABLE_INTEGRITY_LOG = [
  { date: "2025-03-04", check: "Share count", result: "Pass", auditId: "AUD-101" },
];
export const REGISTRAR_FILING_QUEUE = [
  { filing: "SEC 10-K equivalent", issuer: "EKO", status: "Submitted", tracking: "TRK-001" },
];
export const BANKING_MARKET_SCAN_ITEMS = [
  { source: "SEC filing", company: "EKO", theme: "Capacity", date: "2025-03-01" },
];
export const DCF_SCENARIOS = [
  { scenario: "Base", npv: 85, irr: 0.14 },
  { scenario: "Upside", npv: 102, irr: 0.18 },
  { scenario: "Downside", npv: 68, irr: 0.10 },
];
export const DUE_DILIGENCE_FLAGS = [
  { area: "Contracts", flag: "Clause 12.3 liability cap", risk: "Medium" },
  { area: "Litigation", flag: "One pending matter", risk: "Low" },
];
export const COMPLIANCE_RULE_SCORES = [
  { rule: "SEC Rule 144", score: 1.0, lastCheck: "2025-03-01" },
  { rule: "CBN capital", score: 0.95, lastCheck: "2025-02-28" },
];
export const FORENSICS_QUALITY_FLAGS = [
  { company: "EKO", metric: "Accrual ratio", flag: "Within range", score: 0.88 },
];
export const MANDATE_PROBABILITY_SCORES = [
  { dealId: "D-001", client: "Eko Holdings", probability: 0.87, heat: "High" },
];
export const INSTITUTIONAL_MEMORY_DEALS = [
  { id: "MEM-1", name: "Similar M&A 2023", sector: "Energy", lesson: "Price sensitivity on capex" },
];
