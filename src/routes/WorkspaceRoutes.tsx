import { Routes, Route, Navigate } from "react-router-dom";
import type { ArmId } from "@/contexts/AuthContext";
import { BankingWorkspace } from "@/workspaces/banking/BankingWorkspace";
import { DealsView } from "@/workspaces/banking/DealsView";
import { DealDetailView } from "@/workspaces/banking/DealDetailView";
import { CompsView } from "@/workspaces/banking/CompsView";
import { DataRoomView } from "@/workspaces/banking/DataRoomView";
import { MarketScanningView } from "@/workspaces/banking/MarketScanningView";
import { DCFScenariosView } from "@/workspaces/banking/DCFScenariosView";
import { DueDiligenceView } from "@/workspaces/banking/DueDiligenceView";
import { ComplianceView } from "@/workspaces/banking/ComplianceView";
import { ForensicsView } from "@/workspaces/banking/ForensicsView";
import { MandateProbabilityView } from "@/workspaces/banking/MandateProbabilityView";
import { InstitutionalMemoryView } from "@/workspaces/banking/InstitutionalMemoryView";
import { IMWorkspace } from "@/workspaces/im/IMWorkspace";
import { RiskDashboardView } from "@/workspaces/im/RiskDashboardView";
import { AttributionView } from "@/workspaces/im/AttributionView";
import { RebalancingView } from "@/workspaces/im/RebalancingView";
import { LiquidityRiskView } from "@/workspaces/im/LiquidityRiskView";
import { ESGView } from "@/workspaces/im/ESGView";
import { MacroForecastView } from "@/workspaces/im/MacroForecastView";
import { ScenarioSimulatorView } from "@/workspaces/im/ScenarioSimulatorView";
import { ClientMandateView } from "@/workspaces/im/ClientMandateView";
import { SecuritiesWorkspace } from "@/workspaces/securities/SecuritiesWorkspace";
import { SurveillanceView } from "@/workspaces/securities/SurveillanceView";
import { TCAView } from "@/workspaces/securities/TCAView";
import { OrderRoutingView } from "@/workspaces/securities/OrderRoutingView";
import { InsiderDetectionView } from "@/workspaces/securities/InsiderDetectionView";
import { AccountBehaviorView } from "@/workspaces/securities/AccountBehaviorView";
import { FraudFlaggingView } from "@/workspaces/securities/FraudFlaggingView";
import { LiquidityForecastView } from "@/workspaces/securities/LiquidityForecastView";
import { ClientTradePatternView } from "@/workspaces/securities/ClientTradePatternView";
import { RegulatoryReportingView } from "@/workspaces/securities/RegulatoryReportingView";
import { ResearchWorkspace } from "@/workspaces/research/ResearchWorkspace";
import { ScreeningView } from "@/workspaces/research/ScreeningView";
import { TranscriptView } from "@/workspaces/research/TranscriptView";
import { DraftCopilotView } from "@/workspaces/research/DraftCopilotView";
import { SentimentToneView } from "@/workspaces/research/SentimentToneView";
import { MacroEventView } from "@/workspaces/research/MacroEventView";
import { ChartGeneratorView } from "@/workspaces/research/ChartGeneratorView";
import { FilingTrackerView } from "@/workspaces/research/FilingTrackerView";
import { ThematicClusteringView } from "@/workspaces/research/ThematicClusteringView";
import { CitationVerificationView } from "@/workspaces/research/CitationVerificationView";
import { KnowledgeGraphView } from "@/workspaces/research/KnowledgeGraphView";
import { WealthWorkspace } from "@/workspaces/wealth/WealthWorkspace";
import { PlanningView } from "@/workspaces/wealth/PlanningView";
import { CommunicationsView } from "@/workspaces/wealth/CommunicationsView";
import { RiskToleranceView } from "@/workspaces/wealth/RiskToleranceView";
import { BehavioralBiasView } from "@/workspaces/wealth/BehavioralBiasView";
import { LifeEventView } from "@/workspaces/wealth/LifeEventView";
import { TaxLossView } from "@/workspaces/wealth/TaxLossView";
import { AssetLocationView } from "@/workspaces/wealth/AssetLocationView";
import { EstatePlanningView } from "@/workspaces/wealth/EstatePlanningView";
import { DriftAlertsView } from "@/workspaces/wealth/DriftAlertsView";
import { ChurnPredictionView } from "@/workspaces/wealth/ChurnPredictionView";
import { RegistrarsWorkspace } from "@/workspaces/registrars/RegistrarsWorkspace";
import { ShareholdersView } from "@/workspaces/registrars/ShareholdersView";
import { DataCleansingView } from "@/workspaces/registrars/DataCleansingView";
import { IdentityKYCView } from "@/workspaces/registrars/IdentityKYCView";
import { DividendReconView } from "@/workspaces/registrars/DividendReconView";
import { CorporateActionView } from "@/workspaces/registrars/CorporateActionView";
import { UnclaimedDividendView } from "@/workspaces/registrars/UnclaimedDividendView";
import { AGMVotingView } from "@/workspaces/registrars/AGMVotingView";
import { FraudTransferView } from "@/workspaces/registrars/FraudTransferView";
import { CapTableView } from "@/workspaces/registrars/CapTableView";
import { FilingAutomationView } from "@/workspaces/registrars/FilingAutomationView";

const WORKSPACE_MAP: Record<ArmId, React.ComponentType> = {
  banking: BankingWorkspace,
  im: IMWorkspace,
  securities: SecuritiesWorkspace,
  research: ResearchWorkspace,
  wealth: WealthWorkspace,
  registrars: RegistrarsWorkspace,
};

interface WorkspaceRoutesProps {
  arm: ArmId;
}

export function WorkspaceRoutes({ arm }: WorkspaceRoutesProps) {
  const Workspace = WORKSPACE_MAP[arm];
  if (!Workspace) return <Navigate to="/" replace />;

  if (arm === "banking") {
    return (
      <Routes>
        <Route path="/" element={<BankingWorkspace />} />
        <Route path="deals" element={<DealsView />} />
        <Route path="deals/:dealId" element={<DealDetailView />} />
        <Route path="comps" element={<CompsView />} />
        <Route path="data-room" element={<DataRoomView />} />
        <Route path="market-scanning" element={<MarketScanningView />} />
        <Route path="dcf-scenarios" element={<DCFScenariosView />} />
        <Route path="due-diligence" element={<DueDiligenceView />} />
        <Route path="compliance" element={<ComplianceView />} />
        <Route path="forensics" element={<ForensicsView />} />
        <Route path="mandate-probability" element={<MandateProbabilityView />} />
        <Route path="institutional-memory" element={<InstitutionalMemoryView />} />
        <Route path="*" element={<BankingWorkspace />} />
      </Routes>
    );
  }

  if (arm === "im") {
    return (
      <Routes>
        <Route path="/" element={<IMWorkspace />} />
        <Route path="risk" element={<RiskDashboardView />} />
        <Route path="attribution" element={<AttributionView />} />
        <Route path="rebalancing" element={<RebalancingView />} />
        <Route path="liquidity-risk" element={<LiquidityRiskView />} />
        <Route path="esg" element={<ESGView />} />
        <Route path="macro-forecast" element={<MacroForecastView />} />
        <Route path="scenario-simulator" element={<ScenarioSimulatorView />} />
        <Route path="client-mandate" element={<ClientMandateView />} />
        <Route path="*" element={<IMWorkspace />} />
      </Routes>
    );
  }

  if (arm === "securities") {
    return (
      <Routes>
        <Route path="/" element={<SecuritiesWorkspace />} />
        <Route path="surveillance" element={<SurveillanceView />} />
        <Route path="tca" element={<TCAView />} />
        <Route path="order-routing" element={<OrderRoutingView />} />
        <Route path="insider-detection" element={<InsiderDetectionView />} />
        <Route path="account-behavior" element={<AccountBehaviorView />} />
        <Route path="fraud-flagging" element={<FraudFlaggingView />} />
        <Route path="liquidity-forecast" element={<LiquidityForecastView />} />
        <Route path="client-trade-pattern" element={<ClientTradePatternView />} />
        <Route path="regulatory-reporting" element={<RegulatoryReportingView />} />
        <Route path="*" element={<SecuritiesWorkspace />} />
      </Routes>
    );
  }

  if (arm === "research") {
    return (
      <Routes>
        <Route path="/" element={<ResearchWorkspace />} />
        <Route path="screening" element={<ScreeningView />} />
        <Route path="transcripts" element={<TranscriptView />} />
        <Route path="draft" element={<DraftCopilotView />} />
        <Route path="sentiment-tone" element={<SentimentToneView />} />
        <Route path="macro-event" element={<MacroEventView />} />
        <Route path="chart-generator" element={<ChartGeneratorView />} />
        <Route path="filing-tracker" element={<FilingTrackerView />} />
        <Route path="thematic-clustering" element={<ThematicClusteringView />} />
        <Route path="citation-verification" element={<CitationVerificationView />} />
        <Route path="knowledge-graph" element={<KnowledgeGraphView />} />
        <Route path="*" element={<ResearchWorkspace />} />
      </Routes>
    );
  }

  if (arm === "wealth") {
    return (
      <Routes>
        <Route path="/" element={<WealthWorkspace />} />
        <Route path="planning" element={<PlanningView />} />
        <Route path="communications" element={<CommunicationsView />} />
        <Route path="risk-tolerance" element={<RiskToleranceView />} />
        <Route path="behavioral-bias" element={<BehavioralBiasView />} />
        <Route path="life-events" element={<LifeEventView />} />
        <Route path="tax-loss" element={<TaxLossView />} />
        <Route path="asset-location" element={<AssetLocationView />} />
        <Route path="estate-planning" element={<EstatePlanningView />} />
        <Route path="drift-alerts" element={<DriftAlertsView />} />
        <Route path="churn-prediction" element={<ChurnPredictionView />} />
        <Route path="*" element={<WealthWorkspace />} />
      </Routes>
    );
  }

  if (arm === "registrars") {
    return (
      <Routes>
        <Route path="/" element={<RegistrarsWorkspace />} />
        <Route path="shareholders" element={<ShareholdersView />} />
        <Route path="data-cleansing" element={<DataCleansingView />} />
        <Route path="identity-kyc" element={<IdentityKYCView />} />
        <Route path="dividend-recon" element={<DividendReconView />} />
        <Route path="corporate-action" element={<CorporateActionView />} />
        <Route path="unclaimed-dividend" element={<UnclaimedDividendView />} />
        <Route path="agm-voting" element={<AGMVotingView />} />
        <Route path="fraud-transfer" element={<FraudTransferView />} />
        <Route path="cap-table" element={<CapTableView />} />
        <Route path="filing-automation" element={<FilingAutomationView />} />
        <Route path="*" element={<RegistrarsWorkspace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Workspace />} />
      <Route path="*" element={<Workspace />} />
    </Routes>
  );
}
