import { PageShell } from "@/components/ui/PageShell";
import { SCENARIO_SIMULATOR_RUNS } from "@/data/chartData";
import { Layers } from "lucide-react";

export function ScenarioSimulatorView() {
  return (
    <PageShell backTo="/im" backLabel="Back to Portfolio & Risk" title="Portfolio scenario simulator" description="Crisis replay, tail-risk probability mapping.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Layers className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Scenario runs</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Scenario</th>
              <th className="p-4 font-medium">Portfolio P&amp;L (%)</th>
              <th className="p-4 font-medium">Tail prob</th>
            </tr>
          </thead>
          <tbody>
            {SCENARIO_SIMULATOR_RUNS.map((s, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{s.scenario}</td>
                <td className="p-4 text-rose-400">{s.portfolioPnl}%</td>
                <td className="p-4 text-cordros-text">{(s.tailProb * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
