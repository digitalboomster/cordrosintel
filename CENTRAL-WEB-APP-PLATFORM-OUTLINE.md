# Cordros AI Transformation — Central Web App Platform Outline

**Building institutional intelligence through a single, unified web application**

---

## I. Platform Vision

The central web app is **not** six separate tools with a shared login. It is one **intelligence cockpit** that:

- Exposes the **Unified Data Fabric**, **AI Middleware**, and **Governance & Risk** layers through a single API-first web platform.
- Presents **role-based workspaces** (one per business arm) that share the same data, models, and governance.
- Ensures **one audit trail**, **one identity model**, and **one explainability surface** across all arms.

Outcome: **One URL, one platform, six business arms, one institutional brain.**

---

## II. High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CORDROS INTELLIGENCE PLATFORM (Web App)                   │
├─────────────────────────────────────────────────────────────────────────────┤
│  Shell: SSO • Global search • Notifications • XAI dashboard • Audit viewer   │
├──────────┬──────────┬──────────┬──────────┬──────────┬──────────────────────┤
│ Invest   │ Invest   │ Securities│ Research │ Private  │ Registrars          │
│ Banking  │ Mgmt     │           │          │ Wealth   │                      │
│ Workspace│ Workspace│ Workspace │ Workspace│ Workspace│ Workspace            │
└──────────┴──────────┴──────────┴──────────┴──────────┴──────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│              Platform API Gateway (BFF per arm + shared services)             │
└─────────────────────────────────────────────────────────────────────────────┘
                                    │
        ┌──────────────────────────┼──────────────────────────┐
        ▼                          ▼                          ▼
┌───────────────┐         ┌─────────────────┐         ┌──────────────────┐
│ Data Fabric   │         │ AI Middleware   │         │ Governance & Risk │
│ (Lakehouse,   │         │ (Orchestration, │         │ (MRM, bias,      │
│  pipelines,   │         │  HITL gates,    │         │  compliance,      │
│  metadata)    │         │  XAI modules)   │         │  zero-trust)      │
└───────────────┘         └─────────────────┘         └──────────────────┘
```

The web app is the **single front-end** to this stack. All capabilities in the blueprint are delivered as **features inside this platform**, not as separate products.

---

## III. Platform Structure

### 1. **Shell (Global Layer)**

- **Identity & access**
  - Single sign-on (SSO) with role-based and attribute-based access.
  - Roles map to business arms and functions (e.g. Investment Banking – Analyst, Research – Editor, Securities – Surveillance).
  - Zero-trust: every API call and UI route is permission-checked; no “super app” without arm-level and action-level controls.
- **Global navigation**
  - Arm switcher (tabs or sidebar): Investment Banking | Investment Management | Securities | Research | Private Wealth | Registrars.
  - Context stays per arm; switching arms does not mix data or permissions.
- **Cross-cutting features**
  - **Global search**: semantic search over allowed data (lakehouse + document index) scoped by role and arm.
  - **Notifications**: approvals (HITL), alerts (risk, compliance, model), and tasks from any arm.
  - **XAI / Explainability hub**: one place to see “why” a model did something (link from any arm to the same XAI backend).
  - **Audit viewer**: immutable log viewer (who did what, when, which model version) with filters by arm, user, entity, date.
- **Design system**
  - One UI kit (components, charts, tables, forms) so all arms look and behave consistently; theming per arm is optional (e.g. colour accent).

### 2. **Workspaces (Per–Business Arm)**

Each arm is a **workspace** inside the same app: its own routes, dashboards, and primary workflows, all calling the same backend services.

| Arm | Workspace name | Primary entry points in the web app |
|-----|----------------|-------------------------------------|
| **1. Investment Banking** | Deal & Advisory | Deal pipeline, comps/DCF tools, data room, due diligence, mandate scoring, institutional memory search. |
| **2. Investment Management** | Portfolio & Risk | Allocation dashboard, risk (VaR/CVaR/stress), attribution, rebalancing, ESG, scenario simulator, explainability. |
| **3. Securities** | Execution & Surveillance | Order routing config, TCA, surveillance (insider/market manipulation/account anomaly), liquidity views, regulatory reporting. |
| **4. Research** | Research Studio | Transcript/filing tools, sentiment/thematics, screening, charts, draft copilot, citation/knowledge graph. |
| **5. Private Wealth** | Wealth & Advice | Goals/planning, risk profiling, tax/estate tools, client copilot, drift/churn alerts. |
| **6. Registrars** | Registrar Ops | Shareholder cleanse, KYC/identity, dividends/corporate actions, AGM/voting, cap table, filings, engagement. |

Each workspace:

- Uses **shared platform services** (search, notifications, XAI, audit).
- Calls **arm-specific APIs** that sit on top of the Data Fabric and AI Middleware.
- Enforces **arm + role** permissions (e.g. Research cannot see Securities P&L).

### 3. **Shared Platform Capabilities (Used by All Arms)**

These are implemented once and consumed by every workspace:

- **Unified search**
  - One search bar (in shell): queries go to the data fabric (structured + unstructured) and return results tagged by arm and permission; results open in the correct workspace.
- **Document intelligence**
  - Upload/view/extract: used by Banking (data room, DD), Research (filings), Registrars (KYC). Same pipeline, different workspaces and prompts.
- **Model orchestration UI**
  - Where human-in-the-loop is required: the platform shows “pending model recommendations” (e.g. rebalance, flag, approval). Accept/reject/override with reason; all stored in audit trail.
- **Explainability (XAI)**
  - Every model that affects a decision exposes a “Why?” link; the XAI module (and optional dashboard) is shared so reasoning is consistent and auditable.
- **Reporting & export**
  - Shared report builder and export (PDF/Excel) with regulatory tagging and audit trail.
- **Admin & configuration**
  - Central place for feature flags, model version toggles (per arm), and user/role management, without leaving the platform.

---

## IV. How Each Business Arm Plugs Into the Platform

### Arm 1: Investment Banking (Advisory)

- **In the web app:** “Deal & Advisory” workspace.
- **Screens/flows:**
  - Deal pipeline (from Intelligent Deal Origination Engine); sector/trend alerts.
  - Market scanning (NLP) results: filings, transcripts, thematic tags in list/detail views.
  - Comps & DCF: input forms → backend runs peer set, multiples, DCF; results and sensitivity heat maps in UI.
  - Due diligence: document upload → clause extraction, risk flags, litigation scores in a dashboard.
  - Data room: semantic search, summarisation, red-flag aggregation (Data Room Intelligence Assistant).
  - Mandate probability: client/engagement scoring and relationship heat maps.
  - Institutional memory: search over past deals and precedents (same global search, scoped to Banking).
- **Tech in platform:** Graph API for relationships; NLP APIs for documents; valuation APIs; all surfaced as UI components and workflows.

### Arm 2: Investment Management

- **In the web app:** “Portfolio & Risk” workspace.
- **Screens/flows:**
  - Allocation dashboard (multi-factor, regime detection, risk parity).
  - Risk dashboard: VaR/CVaR, stress tests, correlation alerts (real-time where needed).
  - Liquidity risk: depth, exit cost, illiquidity premium views.
  - Attribution and performance: factor decomposition, alpha sources, manager contribution.
  - ESG: scores and controversy detection (NLP) in same UI.
  - Rebalancing: triggers, drift, tax-aware suggestions with approve/reject (HITL).
  - Macro layer: forecasts, FX/inflation (time-series outputs in UI).
  - Scenario simulator: crisis replay, tail-risk views.
  - Explainability: “Why this allocation?” linked to shared XAI.
- **Tech in platform:** Real-time and batch APIs from calculation engine; GPU-backed models behind APIs; role-based portfolio filters in UI.

### Arm 3: Securities

- **In the web app:** “Execution & Surveillance” workspace.
- **Screens/flows:**
  - Smart order routing and slippage/TCA config and results.
  - Surveillance: insider trading, market manipulation, account anomaly, fraud flags in unified queues with drill-down.
  - Liquidity forecasting and client trade pattern views.
  - Regulatory reporting: automated reports with “review & submit” (HITL) and audit.
- **Tech in platform:** Low-latency and streaming APIs abstracted behind platform gateway; all algo decisions surfaced for dual validation/override in UI.

### Arm 4: Research

- **In the web app:** “Research Studio” workspace.
- **Screens/flows:**
  - Transcript/filing intelligence: ingestion, sentiment, tone shifts, event impact.
  - Thematic clustering and screening assistant (quant screening).
  - Chart/visualisation generator and regulatory filing tracker.
  - Draft copilot with citation verification and knowledge graph (sector interlinkages).
- **Tech in platform:** LLM + RAG APIs; vector search and citation cross-check; guardrails and references shown in UI.

### Arm 5: Private Wealth

- **In the web app:** “Wealth & Advice” workspace.
- **Screens/flows:**
  - Goal-based planning, risk tolerance, behavioural bias views.
  - Life event and churn signals; tax-loss harvesting and asset location (with advisor approval).
  - Estate scenarios; client communication copilot; portfolio drift alerts.
- **Tech in platform:** CRM integration via platform APIs; client-scoped models with encryption; explainability for advisor review; advisors remain decision authority in UI.

### Arm 6: Registrars

- **In the web app:** “Registrar Ops” workspace.
- **Screens/flows:**
  - Shareholder cleanse, KYC/identity (biometric where used), dividend reconciliation, corporate action prediction.
  - Unclaimed dividend recovery, AGM voting analytics, fraud detection, cap table integrity.
  - Regulatory filing automation and shareholder engagement analytics.
- **Tech in platform:** Reconciliation and identity APIs; optional blockchain audit trail exposed in UI; NDPA-aligned encryption and access.

---

## V. Data Fabric & AI Middleware in the Web App

- **Data Fabric**
  - The web app never talks to the lakehouse directly. All access is via:
    - Search API (structured + unstructured, metadata, regulatory tags).
    - Entity/document APIs (e.g. company, deal, client, filing) used by workspaces.
  - Audit trail and data lineage are visible in the platform (e.g. “Audit” and “Lineage” views), not in a separate tool.

- **AI Middleware**
  - Model orchestration is backend; the web app:
    - Triggers runs (e.g. “Run comps”, “Refresh risk”, “Scan surveillance”).
    - Displays outputs (tables, charts, scores).
    - Surfaces HITL gates (approve/reject/override with reason).
    - Links to XAI for “why” and to audit for “who/when”.
  - Role-based model access is enforced by the API layer; the UI only shows what the user is allowed to run and see.

- **Governance & Risk**
  - MRM, bias, compliance monitors are backend services. In the web app:
    - Governance dashboard: model inventory, validation status, bias metrics, compliance scores.
    - Alerts and tasks (e.g. “Bias audit due”, “Model recertify”) in notifications and optional dedicated governance workspace.
  - Zero-trust and encryption are infrastructure; the app uses secure sessions and does not store sensitive secrets in the client.

---

## VI. Technical Stack for the Central Web App

- **Front-end**
  - Single-page application (e.g. React/Next.js or Vue/Nuxt) with:
    - Shell + workspace routing (e.g. `/banking/*`, `/im/*`, `/securities/*`, etc.).
    - Shared design system and component library.
    - State management that respects arm context and permissions.
  - Optional: lightweight “micro-frontends” per workspace (same shell, different bundles) for very large teams and independent deploy cadence.

- **Back-end for the platform**
  - API gateway (Kong, AWS API Gateway, or custom) with:
    - Auth (SSO/JWT), rate limiting, arm/role checks.
    - BFF (Backend-for-Frontend) per arm or a single BFF with arm-scoped handlers.
  - Services:
    - Search service (talks to lakehouse/search index).
    - Document/entity services (wrap data fabric).
    - Model-orchestration client (calls AI middleware).
    - HITL workflow service (tasks, approvals, audit).
    - XAI service (explanations).
    - Notifications and audit log reader.

- **Consistency with blueprint**
  - Kubernetes-hosted containers for app and BFFs.
  - Event-driven updates (e.g. WebSocket or SSE) for real-time risk/surveillance where specified.
  - Immutable audit logs and optional blockchain-backed audit for registrars as backend features; platform only consumes and displays.

---

## VII. Phased Delivery via the Platform

- **Year 1 – Infrastructure + internal tools**
  - Launch platform shell: SSO, arm switcher, global search (limited), audit viewer.
  - Deploy 1–2 workspaces first (e.g. Research + Investment Banking) with core features (e.g. document intelligence, comps/DCF, research copilot).
  - Data fabric and AI middleware integrations for those arms; governance dashboard (read-only) in the app.

- **Year 2 – Decision support**
  - All six workspaces live with primary workflows.
  - HITL gates and XAI fully integrated; model orchestration visible across arms.
  - Real-time and batch risk/surveillance in Securities and Investment Management.
  - Full global search and cross-arm notifications.

- **Year 3 – Client-facing intelligence**
  - Client/advisor-facing views (e.g. Private Wealth, selective Research) with appropriate UX and consent.
  - Registrar client portal (e.g. shareholder self-service) as part of the same platform identity and audit model.
  - Platform as the single “intelligence face” of Cordros for internal and external users.

---

## VIII. Success Metrics for the Platform

- **Adoption:** % of users per arm using the platform as primary workflow (target: 80%+).
- **Decision velocity:** Time from “model recommendation” to “decision” (target: reduction vs. pre-platform).
- **Governance:** 100% of model-driven decisions traceable (audit + XAI) via the platform.
- **Compliance:** All relevant regulatory reporting and MRM workflows initiated and evidenced through the platform.
- **Unification:** One login, one audit trail, one place to explain “why” for every arm.

---

## IX. One-Line Summary

The Cordros AI transformation is delivered through **one central web app platform**: a single shell with six role-based workspaces (Investment Banking, Investment Management, Securities, Research, Private Wealth, Registrars), each consuming the same Unified Data Fabric, AI Middleware, and Governance & Risk layer, with shared search, HITL, XAI, and audit—turning the blueprint into one institutional intelligence cockpit that scales across all business arms while preserving fiduciary oversight and regulatory defensibility.
