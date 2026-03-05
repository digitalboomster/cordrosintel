import {
  PieChart,
  Activity,
  Droplets,
  TrendingUp,
  Leaf,
  RefreshCw,
  Globe,
  Layers,
  BarChart2,
  HelpCircle,
} from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { WorkspaceSection } from "@/components/ui/WorkspaceSection";

const FEATURED = [
  {
    icon: PieChart,
    title: "Multi-factor allocation",
    description:
      "Dynamic regime detection, macro factor modelling, and adaptive risk parity to keep allocation aligned with market conditions.",
    accent: "cyan" as const,
    to: "/im/risk",
  },
  {
    icon: Activity,
    title: "Real-time risk dashboard",
    description:
      "VaR/CVaR recalculation engines, stress testing automation, and correlation breakdown alerts for continuous risk visibility.",
    accent: "gold" as const,
    to: "/im/risk",
  },
];

const REST = [
  { icon: Droplets, title: "Liquidity risk", description: "Market depth modeling, exit cost simulations, illiquidity premium", to: "/im/liquidity-risk" },
  { icon: TrendingUp, title: "Performance attribution", description: "Factor decomposition, alpha clustering, manager contribution", to: "/im/attribution" },
  { icon: Leaf, title: "ESG integration", description: "NLP controversy detection, sustainability metrics normalisation", to: "/im/esg" },
  { icon: RefreshCw, title: "Predictive rebalancing", description: "Volatility triggers, momentum regimes, drift correction", to: "/im/rebalancing" },
  { icon: Globe, title: "Macro forecast layer", description: "Time-series ensembles, FX and inflation predictive models", to: "/im/macro-forecast" },
  { icon: Layers, title: "Portfolio scenario simulator", description: "Crisis replay, tail-risk probability mapping", to: "/im/scenario-simulator" },
  { icon: BarChart2, title: "Client mandate engine", description: "Constraint-aware optimisation, tax-sensitive rebalancing", to: "/im/client-mandate" },
  { icon: HelpCircle, title: "Explainable AI", description: "Model reasoning dashboards, decision path traceability", to: "/explain" },
];

export function IMWorkspace() {
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Investment Management
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Portfolio & Risk
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Predictive, risk-adjusted portfolio intelligence with real-time risk, attribution, ESG,
          and explainable decision support.
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
