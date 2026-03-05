import { Link } from "react-router-dom";
import {
  GitBranch,
  FileSearch,
  BarChart3,
  Calculator,
  FileCheck,
  FolderSearch,
  Target,
  Archive,
  Shield,
  BookOpen,
} from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { WorkspaceSection } from "@/components/ui/WorkspaceSection";

const FEATURED = [
  {
    icon: GitBranch,
    title: "Deal origination & pipeline",
    description:
      "Graph-based relationship mapping, sector trend anomaly detection, and predictive IPO/M&A scoring to surface the right opportunities.",
    accent: "cyan" as const,
    to: "/banking/deals",
  },
  {
    icon: FolderSearch,
    title: "Data room intelligence",
    description:
      "Semantic search across data rooms, document summarisation, and red-flag aggregation so due diligence stays fast and consistent.",
    accent: "gold" as const,
    to: "/banking/data-room",
  },
];

const VALUATION = [
  { icon: FileSearch, title: "Market scanning", description: "Regulatory filings, earnings transcripts, thematic tagging", to: "/banking/market-scanning" },
  { icon: BarChart3, title: "Comparable analytics", description: "Dynamic peer sets, sector-adjusted multiples, regression calibration", to: "/banking/comps" },
  { icon: Calculator, title: "DCF & scenarios", description: "Monte Carlo revenue forecasting, sensitivity heat mapping", to: "/banking/dcf-scenarios" },
];

const GOVERNANCE = [
  { icon: FileCheck, title: "Due diligence", description: "Contract clause extraction, risk flags, litigation exposure scoring", to: "/banking/due-diligence" },
  { icon: Shield, title: "Compliance automation", description: "SEC/CBN rule ingestion, continuous scoring, automated reporting", to: "/banking/compliance" },
  { icon: BookOpen, title: "Financial forensics", description: "Earnings quality, accrual anomaly detection, revenue recognition flags", to: "/banking/forensics" },
];

const INTELLIGENCE = [
  { icon: Target, title: "Mandate probability", description: "Client engagement scoring, conversion analytics, relationship heat maps", to: "/banking/mandate-probability" },
  { icon: Archive, title: "Institutional memory", description: "Indexed deal database, precedent retrieval, lessons-learned inference", to: "/banking/institutional-memory" },
];

export function BankingWorkspace() {
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Investment Banking · Advisory
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Deal & Advisory
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Increase deal velocity, accuracy, and compliance defensibility with AI-enhanced origination,
          valuation, due diligence, and institutional memory.
        </p>
        <Link
          to="/banking/deals"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-cordros-textSecondary hover:border-white/15 hover:bg-white/[0.05] hover:text-cordros-text transition-colors"
        >
          View deal pipeline
          <span className="text-cordros-accent">→</span>
        </Link>
      </header>

      <WorkspaceSection title="Featured" subtitle="Core capabilities">
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURED.map((cap) => (
            <CapabilityCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              feature
              accent={cap.accent}
              to={cap.to}
            />
          ))}
        </div>
      </WorkspaceSection>

      <WorkspaceSection title="Valuation & analytics">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {VALUATION.map((cap) => (
            <CapabilityCard
              key={cap.title}
              icon={cap.icon}
              title={cap.title}
              description={cap.description}
              to={cap.to}
            />
          ))}
        </div>
      </WorkspaceSection>

      <WorkspaceSection title="Governance & compliance">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GOVERNANCE.map((cap) => (
            <CapabilityCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} to={cap.to} />
          ))}
        </div>
      </WorkspaceSection>

      <WorkspaceSection title="Intelligence & memory">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INTELLIGENCE.map((cap) => (
            <CapabilityCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} to={cap.to} />
          ))}
        </div>
      </WorkspaceSection>
    </div>
  );
}
