import {
  Users,
  Fingerprint,
  Coins,
  CalendarClock,
  Search,
  Vote,
  ShieldAlert,
  Table2,
  FileCheck,
  BarChart2,
} from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { WorkspaceSection } from "@/components/ui/WorkspaceSection";

const FEATURED = [
  {
    icon: Users,
    title: "Shareholder data cleansing",
    description:
      "Deduplication, normalisation, and quality scoring so cap tables and registers stay clean and audit-ready.",
    accent: "cyan" as const,
    to: "/registrars/data-cleansing",
  },
  {
    icon: Fingerprint,
    title: "Identity & KYC AI",
    description:
      "Verification and biometric APIs with NDPA-aligned handling so onboarding stays secure and compliant.",
    accent: "gold" as const,
    to: "/registrars/identity-kyc",
  },
];

const REST = [
  { icon: Coins, title: "Dividend reconciliation", description: "Automated reconciliation, exception handling", to: "/registrars/dividend-recon" },
  { icon: CalendarClock, title: "Corporate action prediction", description: "Event prediction, impact modelling", to: "/registrars/corporate-action" },
  { icon: Search, title: "Unclaimed dividend recovery", description: "Recovery intelligence, outreach support", to: "/registrars/unclaimed-dividend" },
  { icon: Vote, title: "AGM voting analytics", description: "Voting pattern analytics, turnout insights", to: "/registrars/agm-voting" },
  { icon: ShieldAlert, title: "Fraudulent transfer detection", description: "Anomaly detection, alerting", to: "/registrars/fraud-transfer" },
  { icon: Table2, title: "Cap table integrity", description: "Integrity monitoring, audit trail", to: "/registrars/cap-table" },
  { icon: FileCheck, title: "Regulatory filing automation", description: "Filing generation, submission tracking", to: "/registrars/filing-automation" },
  { icon: BarChart2, title: "Shareholder engagement", description: "Engagement analytics, segmentation", to: "/registrars/shareholders" },
];

export function RegistrarsWorkspace() {
  return (
    <div className="animate-fade-in">
      <header className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Registrars
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Registrar Ops
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Data-driven governance infrastructure. Optional blockchain audit trail; real-time
          reconciliation and NDPA-compliant encryption.
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
