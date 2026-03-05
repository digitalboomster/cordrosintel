import { PageShell } from "@/components/ui/PageShell";
import { DCF_SCENARIOS } from "@/data/chartData";
import { Calculator } from "lucide-react";

export function DCFScenariosView() {
  return (
    <PageShell backTo="/banking" backLabel="Back to Deal & Advisory" title="DCF & scenarios" description="Monte Carlo revenue forecasting, sensitivity heat mapping.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Calculator className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Scenario output</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Scenario</th>
              <th className="p-4 font-medium">NPV (NGN)</th>
              <th className="p-4 font-medium">IRR</th>
            </tr>
          </thead>
          <tbody>
            {DCF_SCENARIOS.map((d, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{d.scenario}</td>
                <td className="p-4 text-cordros-text">{d.npv}</td>
                <td className="p-4 text-cordros-text">{(d.irr * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
