export type ArmId =
  | "banking"
  | "im"
  | "securities"
  | "research"
  | "wealth"
  | "registrars";

export interface ArmConfig {
  id: ArmId;
  name: string;
  shortName: string;
  path: string;
  description: string;
}

export const ARMS: ArmConfig[] = [
  {
    id: "banking",
    name: "Investment Banking",
    shortName: "Deal & Advisory",
    path: "/banking",
    description: "Deal pipeline, comps, DCF, data room, due diligence",
  },
  {
    id: "im",
    name: "Investment Management",
    shortName: "Portfolio & Risk",
    path: "/im",
    description: "Allocation, VaR, attribution, rebalancing, ESG",
  },
  {
    id: "securities",
    name: "Securities",
    shortName: "Execution & Surveillance",
    path: "/securities",
    description: "Order routing, TCA, surveillance, regulatory reporting",
  },
  {
    id: "research",
    name: "Research",
    shortName: "Research Studio",
    path: "/research",
    description: "Transcripts, sentiment, screening, draft copilot",
  },
  {
    id: "wealth",
    name: "Private Wealth",
    shortName: "Wealth & Advice",
    path: "/wealth",
    description: "Goals, risk profiling, tax/estate, client copilot",
  },
  {
    id: "registrars",
    name: "Registrars",
    shortName: "Registrar Ops",
    path: "/registrars",
    description: "Shareholder, KYC, dividends, AGM, cap table",
  },
];

export function getArmById(id: ArmId): ArmConfig | undefined {
  return ARMS.find((a) => a.id === id);
}
