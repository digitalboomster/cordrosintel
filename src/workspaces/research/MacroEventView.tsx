import { PageShell } from "@/components/ui/PageShell";
import { MACRO_EVENTS } from "@/data/chartData";
import { Zap } from "lucide-react";

export function MacroEventView() {
  return (
    <PageShell
      backTo="/research"
      backLabel="Back to Research Studio"
      title="Macro event impact"
      description="Event-driven impact modeling on sectors and names. Upcoming events and sector impact scores."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Zap className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Scheduled events & impact</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Event</th>
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Sector impact</th>
              <th className="p-4 font-medium">Impact score</th>
            </tr>
          </thead>
          <tbody>
            {MACRO_EVENTS.map((e) => (
              <tr key={e.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{e.event}</td>
                <td className="p-4 text-cordros-textSecondary">{e.date}</td>
                <td className="p-4 text-cordros-text">{e.sectorImpact}</td>
                <td className="p-4 text-cordros-text">{(e.impactScore * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-cordros-textTertiary">
        Time-series ensembles and FX/inflation predictive models feed into sector and name-level impact.
      </p>
    </PageShell>
  );
}
