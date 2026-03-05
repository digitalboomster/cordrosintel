import { PageShell } from "@/components/ui/PageShell";
import { MANDATE_PROBABILITY_SCORES } from "@/data/chartData";
import { Target } from "lucide-react";
import { cn } from "@/lib/cn";

export function MandateProbabilityView() {
  return (
    <PageShell backTo="/banking" backLabel="Back to Deal & Advisory" title="Mandate probability" description="Client engagement scoring, conversion analytics, relationship heat maps.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Target className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Deal scores</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Deal</th>
              <th className="p-4 font-medium">Client</th>
              <th className="p-4 font-medium">Probability</th>
              <th className="p-4 font-medium">Heat</th>
            </tr>
          </thead>
          <tbody>
            {MANDATE_PROBABILITY_SCORES.map((m, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{m.dealId}</td>
                <td className="p-4 text-cordros-text">{m.client}</td>
                <td className="p-4 text-cordros-text">{(m.probability * 100).toFixed(0)}%</td>
                <td className="p-4">
                  <span className={cn("rounded px-2 py-0.5 text-xs font-medium", m.heat === "High" ? "bg-amber-500/10 text-amber-400" : "bg-cordros-accent/10 text-cordros-accent")}>{m.heat}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
