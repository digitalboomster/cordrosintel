import { PageShell } from "@/components/ui/PageShell";
import { CORPORATE_ACTION_PREDICTIONS } from "@/data/chartData";
import { CalendarClock } from "lucide-react";

export function CorporateActionView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Corporate action prediction" description="Event prediction and impact modelling.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <CalendarClock className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Predictions</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Issuer</th>
              <th className="p-4 font-medium">Event</th>
              <th className="p-4 font-medium">Prob</th>
              <th className="p-4 font-medium">Expected date</th>
            </tr>
          </thead>
          <tbody>
            {CORPORATE_ACTION_PREDICTIONS.map((c, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{c.issuer}</td>
                <td className="p-4 text-cordros-text">{c.event}</td>
                <td className="p-4 text-cordros-text">{(c.prob * 100).toFixed(0)}%</td>
                <td className="p-4 text-cordros-textSecondary">{c.expectedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
