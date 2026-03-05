import { PageShell } from "@/components/ui/PageShell";
import { AGM_VOTING_ANALYTICS } from "@/data/chartData";
import { Vote } from "lucide-react";

export function AGMVotingView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="AGM voting analytics" description="Voting pattern analytics and turnout insights.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Vote className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Meetings</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Meeting</th>
              <th className="p-4 font-medium">Turnout %</th>
              <th className="p-4 font-medium">Dissent %</th>
              <th className="p-4 font-medium">Resolution</th>
            </tr>
          </thead>
          <tbody>
            {AGM_VOTING_ANALYTICS.map((a, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{a.meeting}</td>
                <td className="p-4 text-cordros-text">{a.turnout}</td>
                <td className="p-4 text-cordros-text">{a.dissentPct}</td>
                <td className="p-4 text-cordros-textSecondary">{a.resolution}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
