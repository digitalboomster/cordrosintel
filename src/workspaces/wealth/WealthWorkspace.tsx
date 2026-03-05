import {
  Target,
  MessageCircle,
  Gauge,
  Brain,
  Calendar,
  Receipt,
  MapPin,
  Home,
  AlertCircle,
  UserMinus,
} from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { WorkspaceSection } from "@/components/ui/WorkspaceSection";

const FEATURED = [
  {
    icon: Target,
    title: "Goal-based financial planning",
    description:
      "Goals engine with scenario modelling and progress tracking so advisors can align portfolios to client outcomes.",
    accent: "cyan" as const,
    to: "/wealth/planning",
  },
  {
    icon: MessageCircle,
    title: "Client communication copilot",
    description:
      "Draft communications and personalisation support so advisors stay in the loop while scaling touchpoints.",
    accent: "gold" as const,
    to: "/wealth/communications",
  },
];

const REST = [
  { icon: Gauge, title: "Risk tolerance profiling", description: "Assessment, dynamic profiling, alignment checks", to: "/wealth/risk-tolerance" },
  { icon: Brain, title: "Behavioral bias detection", description: "Bias signals, nudges, advisor prompts", to: "/wealth/behavioral-bias" },
  { icon: Calendar, title: "Life event signals", description: "Life event prediction, proactive planning", to: "/wealth/life-events" },
  { icon: Receipt, title: "Tax-loss harvesting", description: "Automated harvesting, wash-sale awareness", to: "/wealth/tax-loss" },
  { icon: MapPin, title: "Asset location optimisation", description: "Tax-aware location across accounts", to: "/wealth/asset-location" },
  { icon: Home, title: "Estate planning scenarios", description: "Estate modelling, transfer strategies", to: "/wealth/estate-planning" },
  { icon: AlertCircle, title: "Portfolio drift alerts", description: "Drift thresholds, rebalancing prompts", to: "/wealth/drift-alerts" },
  { icon: UserMinus, title: "Churn prediction", description: "Churn risk scoring, retention actions", to: "/wealth/churn-prediction" },
];

export function WealthWorkspace() {
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Private Wealth
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Wealth & Advice
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Hyper-personalisation without headcount linearity. Human advisors remain decision
          authorities; AI supports planning, tax, and client engagement.
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
