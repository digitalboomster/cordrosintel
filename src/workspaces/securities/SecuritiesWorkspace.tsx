import {
  Route,
  ScanSearch,
  LineChart,
  UserX,
  Sliders,
  UserCog,
  AlertTriangle,
  TrendingUp,
  Users,
  FileBarChart,
} from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { WorkspaceSection } from "@/components/ui/WorkspaceSection";

const FEATURED = [
  {
    icon: Route,
    title: "Smart order routing",
    description:
      "Low-latency execution pipelines and optimal venue selection to minimise slippage and improve execution quality.",
    accent: "cyan" as const,
    to: "/securities/order-routing",
  },
  {
    icon: ScanSearch,
    title: "Surveillance & detection",
    description:
      "Insider trading and market manipulation pattern recognition with real-time anomaly alerts and human override protocols.",
    accent: "gold" as const,
    to: "/securities/surveillance",
  },
];

const REST = [
  { icon: Sliders, title: "Slippage & TCA", description: "Trade cost models, execution quality analytics", to: "/securities/tca" },
  { icon: LineChart, title: "Trade cost analysis", description: "Pre/post-trade TCA, benchmark comparison", to: "/securities/tca" },
  { icon: UserX, title: "Insider trading detection", description: "Pattern recognition, anomaly alerts", to: "/securities/insider-detection" },
  { icon: UserCog, title: "Account behavior anomaly", description: "Behavioral profiling, deviation alerts", to: "/securities/account-behavior" },
  { icon: AlertTriangle, title: "Fraudulent transaction flagging", description: "Real-time fraud signals, rule + ML", to: "/securities/fraud-flagging" },
  { icon: TrendingUp, title: "Liquidity forecasting", description: "Depth and spread prediction", to: "/securities/liquidity-forecast" },
  { icon: Users, title: "Client trade pattern intelligence", description: "Client-level analytics, best execution", to: "/securities/client-trade-pattern" },
  { icon: FileBarChart, title: "Regulatory reporting", description: "Automated reporting with HITL review", to: "/securities/regulatory-reporting" },
];

export function SecuritiesWorkspace() {
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Securities
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Execution & Surveillance
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Execution efficiency and surveillance integrity with dual validation and override protocols
          for all algorithmic decisions.
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
