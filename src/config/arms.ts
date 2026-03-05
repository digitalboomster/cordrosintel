import {
  Briefcase,
  LineChart,
  Shield,
  FileSearch,
  Wallet,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ArmId } from "@/contexts/AuthContext";

const ArmIcons = {
  banking: Briefcase,
  im: LineChart,
  securities: Shield,
  research: FileSearch,
  wealth: Wallet,
  registrars: Users,
} as const;

export interface ArmConfig {
  id: ArmId;
  name: string;
  shortName: string;
  path: string;
  description: string;
  icon: LucideIcon;
}

export const ARMS: ArmConfig[] = [
  {
    id: "banking",
    name: "Investment Banking",
    shortName: "Deal & Advisory",
    path: "/banking",
    description: "Deal pipeline, comps, DCF, data room, due diligence",
    icon: ArmIcons.banking,
  },
  {
    id: "im",
    name: "Investment Management",
    shortName: "Portfolio & Risk",
    path: "/im",
    description: "Allocation, VaR, attribution, rebalancing, ESG",
    icon: ArmIcons.im,
  },
  {
    id: "securities",
    name: "Securities",
    shortName: "Execution & Surveillance",
    path: "/securities",
    description: "Order routing, TCA, surveillance, regulatory reporting",
    icon: ArmIcons.securities,
  },
  {
    id: "research",
    name: "Research",
    shortName: "Research Studio",
    path: "/research",
    description: "Transcripts, sentiment, screening, draft copilot",
    icon: ArmIcons.research,
  },
  {
    id: "wealth",
    name: "Private Wealth",
    shortName: "Wealth & Advice",
    path: "/wealth",
    description: "Goals, risk profiling, tax/estate, client copilot",
    icon: ArmIcons.wealth,
  },
  {
    id: "registrars",
    name: "Registrars",
    shortName: "Registrar Ops",
    path: "/registrars",
    description: "Shareholder, KYC, dividends, AGM, cap table",
    icon: ArmIcons.registrars,
  },
];

export function getArmById(id: ArmId): ArmConfig | undefined {
  return ARMS.find((a) => a.id === id);
}
