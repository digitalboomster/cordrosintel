import {
  MessageSquare,
  PenLine,
  Smile,
  Zap,
  BarChart3,
  FileText,
  GitBranch,
  Filter,
  CheckCircle,
  Network,
} from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { WorkspaceSection } from "@/components/ui/WorkspaceSection";

const FEATURED = [
  {
    icon: MessageSquare,
    title: "Earnings transcript intelligence",
    description:
      "Ingestion, structuring, and key theme extraction from earnings calls with sentiment and tone shift detection.",
    accent: "cyan" as const,
    to: "/research/transcripts",
  },
  {
    icon: PenLine,
    title: "Research draft copilot",
    description:
      "RAG-backed drafting with precedent retrieval and citation verification to scale insight production without diluting rigour.",
    accent: "gold" as const,
    to: "/research/draft",
  },
];

const REST = [
  { icon: Smile, title: "Sentiment & tone shifts", description: "Tone analysis, sentiment scoring, trend detection", to: "/research/sentiment-tone" },
  { icon: Zap, title: "Macro event impact", description: "Event-driven impact modeling on sectors and names", to: "/research/macro-event" },
  { icon: BarChart3, title: "Chart & visualisation generator", description: "Automated charts, standardised templates", to: "/research/chart-generator" },
  { icon: FileText, title: "Regulatory filing tracker", description: "Filing alerts, change detection, summarisation", to: "/research/filing-tracker" },
  { icon: GitBranch, title: "Thematic trend clustering", description: "Industry thematic clustering, trend signals", to: "/research/thematic-clustering" },
  { icon: Filter, title: "Quant screening assistant", description: "Factor screens, backtest support", to: "/research/screening" },
  { icon: CheckCircle, title: "Citation verification", description: "Cross-check citations, reduce hallucination", to: "/research/citation-verification" },
  { icon: Network, title: "Sector knowledge graph", description: "Interlinkages, entity relationships", to: "/research/knowledge-graph" },
];

export function ResearchWorkspace() {
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Research
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Research Studio
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Scale insight production without diluting analytical rigour. LLM + RAG with citation
          guardrails and internal vector search.
        </p>
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

      <WorkspaceSection title="Capabilities">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {REST.map((cap) => (
            <CapabilityCard key={cap.title} icon={cap.icon} title={cap.title} description={cap.description} to={cap.to} />
          ))}
        </div>
      </WorkspaceSection>
    </div>
  );
}
