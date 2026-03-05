# Cordros Nautilus — Demo MVP Audit

## 1. Capability text (verified)

Copy under **Capabilities** across all six arms has been checked. Summary:

| Arm | Section | Count | Notes |
|-----|---------|-------|--------|
| **Investment Banking** | Valuation & analytics, Governance & compliance, Intelligence & memory | 3 + 3 + 2 | Market scanning, Comps, DCF, Due diligence, Compliance, Forensics, Mandate probability, Institutional memory |
| **Investment Management** | Capabilities | 8 | Liquidity risk, Performance attribution, ESG integration, Predictive rebalancing, Macro forecast layer, Portfolio scenario simulator, Client mandate engine, Explainable AI |
| **Securities** | Capabilities | 8 | Slippage & TCA, Trade cost analysis, Insider trading detection, Account behavior anomaly, Fraudulent transaction flagging, Liquidity forecasting, Client trade pattern intelligence, Regulatory reporting |
| **Research** | Capabilities | 8 | Sentiment & tone shifts, Macro event impact, Chart & visualisation generator, Regulatory filing tracker, Thematic trend clustering, Quant screening assistant, Citation verification, Sector knowledge graph |
| **Private Wealth** | Capabilities | 8 | Risk tolerance profiling, Behavioral bias detection, Life event signals, Tax-loss harvesting, Asset location optimisation, Estate planning scenarios, Portfolio drift alerts, Churn prediction |
| **Registrars** | Capabilities | 8 | Dividend reconciliation, Corporate action prediction, Unclaimed dividend recovery, AGM voting analytics, Fraudulent transfer detection, Cap table integrity, Regulatory filing automation, Shareholder engagement |

Spelling: UK English used where in blueprint (e.g. “modelling”, “normalisation”, “optimisation”).

---

## 2. Layout fix applied

- **Capabilities grid:** Where a section has **8 cards**, the grid is now `lg:grid-cols-4` so you get two full rows (4 + 4) instead of 3 + 3 + 2. Applied to IM, Securities, Research, Wealth, Registrars.
- Banking keeps `lg:grid-cols-3` for sections of 3 and 2 items.

---

## 3. Done (complete for demo)

- [x] Shell: sidebar, header, search (⌘K), notifications, user menu
- [x] Six workspaces: hero + Featured + Capabilities (or grouped sections for Banking)
- [x] Synthetic data: deals, audit log, HITL tasks, search index, XAI decisions
- [x] Demo store: in-memory state + localStorage; Approve/Reject HITL updates state and audit
- [x] Global search: filters synthetic index; empty query shows “Jump to workspace”
- [x] Notifications: HITL list, Approve/Reject/Dismiss, badge, “View audit trail”
- [x] Audit page: table of audit log (time, user, action, entity, details)
- [x] Explain page: list + detail of synthetic XAI decisions (context, outcome, factors)
- [x] Banking: Deal pipeline list + deal detail view; “View deal pipeline” from home
- [x] Sidebar: Audit and Explain under Governance
- [x] Header title for /audit and /explain
- [x] Reset demo: User menu → “Reset demo” restores initial HITL + audit and clears persisted state

---

## 4. Incomplete / left to do (demo MVP)

### 4.1 Capability cards (display only)

- **Current:** All capability cards are static (title + description). No links or actions.
- **Left:** Optional for demo:
  - Add “Coming soon” or “View demo” on cards that don’t have a screen yet.
  - Or link a few to placeholder sub-routes (e.g. “Real-time risk dashboard” → `/im/risk` with a stub page).

### 4.2 Sub-views per arm (only Banking has one)

- **Done:** Banking has `/banking/deals` and `/banking/deals/:id`.
- **Left (optional):**
  - IM: e.g. `/im/risk` — stub “Risk dashboard” with synthetic VaR/metrics.
  - Securities: e.g. `/securities/surveillance` — stub list of alerts from synthetic data.
  - Research / Wealth / Registrars: same idea (one stub sub-view each) if you want deeper demo flows.

### 4.3 Audit page

- **Done:** Table with all columns; data from store.
- **Left (optional):** Date range or action-type filters; export (e.g. CSV) of visible rows.

### 4.4 Explain (XAI) page

- **Done:** Two synthetic decisions; select one to see explanation.
- **Left (optional):** More synthetic decisions; link from Notifications (“Why?” on an approved item).

### 4.5 Search

- **Done:** Query filters synthetic index; navigate to deal/detail or workspace.
- **Left (optional):** Highlight query in snippet; “Recent” or “Suggested” when query is empty.

### 4.6 Demo reset

- **Done:** “Reset demo” in User menu clears localStorage and reloads initial synthetic HITL + audit.

### 4.7 Mobile / responsive

- **Current:** Sidebar fixed width; content area responds.
- **Left (optional):** Collapsible or drawer sidebar on small screens; top bar adjustments.

### 4.8 Copy and polish

- **Left (optional):** Pass over all user-facing strings for consistency; add tooltips or short help where useful for demo narrative.

---

## 5. Summary

- **Capability text:** Checked and consistent; layout updated so 8-card sections use a 4-column grid and no incomplete last row.
- **Done:** Full shell, six workspaces, synthetic data, search, notifications, HITL actions, Audit, Explain, Banking deal pipeline + detail.
- **Incomplete but optional for MVP:** Sub-views for other arms, filters/export on Audit, more XAI items, demo reset, mobile sidebar, and small copy/polish passes.
