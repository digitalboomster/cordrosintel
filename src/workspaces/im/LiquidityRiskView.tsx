import { PageShell } from "@/components/ui/PageShell";
import { LIQUIDITY_RISK_METRICS } from "@/data/chartData";
import { Droplets } from "lucide-react";

export function LiquidityRiskView() {
  return (
    <PageShell backTo="/im" backLabel="Back to Portfolio & Risk" title="Liquidity risk" description="Market depth, exit cost simulations, illiquidity premium.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Droplets className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Portfolio liquidity metrics</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Portfolio</th>
              <th className="p-4 font-medium">Exit cost (bp)</th>
              <th className="p-4 font-medium">Illiquidity premium</th>
              <th className="p-4 font-medium">Depth score</th>
            </tr>
          </thead>
          <tbody>
            {LIQUIDITY_RISK_METRICS.map((m, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{m.portfolio}</td>
                <td className="p-4 text-cordros-text">{m.exitCostBp}</td>
                <td className="p-4 text-cordros-text">{m.illiquidityPremium}</td>
                <td className="p-4 text-cordros-text">{(m.depthScore * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
