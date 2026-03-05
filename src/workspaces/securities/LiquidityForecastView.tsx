import { PageShell } from "@/components/ui/PageShell";
import { LIQUIDITY_FORECAST } from "@/data/chartData";
import { TrendingUp } from "lucide-react";

export function LiquidityForecastView() {
  return (
    <PageShell backTo="/securities" backLabel="Back to Execution & Surveillance" title="Liquidity forecasting" description="Depth and spread prediction.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Forecast (demo)</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Symbol</th>
              <th className="p-4 font-medium">Next 1d depth</th>
              <th className="p-4 font-medium">Next 5d spread (bp)</th>
              <th className="p-4 font-medium">Horizon</th>
            </tr>
          </thead>
          <tbody>
            {LIQUIDITY_FORECAST.map((l, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{l.symbol}</td>
                <td className="p-4 text-cordros-text">{l.next1dDepth}</td>
                <td className="p-4 text-cordros-text">{l.next5dSpread}</td>
                <td className="p-4 text-cordros-textSecondary">{l.horizon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
