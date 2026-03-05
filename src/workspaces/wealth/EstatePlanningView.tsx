import { PageShell } from "@/components/ui/PageShell";
import { ESTATE_SCENARIOS } from "@/data/chartData";
import { Home } from "lucide-react";

export function EstatePlanningView() {
  return (
    <PageShell backTo="/wealth" backLabel="Back to Wealth & Advice" title="Estate planning scenarios" description="Estate modelling and transfer strategies.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Home className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Scenarios</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Scenario</th>
              <th className="p-4 font-medium">Transfer tax (%)</th>
              <th className="p-4 font-medium">Timeline</th>
            </tr>
          </thead>
          <tbody>
            {ESTATE_SCENARIOS.map((s, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{s.scenario}</td>
                <td className="p-4 text-cordros-text">{s.transferTax}%</td>
                <td className="p-4 text-cordros-textSecondary">{s.timeline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
