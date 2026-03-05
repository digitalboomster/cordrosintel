import { PageShell } from "@/components/ui/PageShell";
import { INSIDER_DETECTION_ALERTS } from "@/data/chartData";
import { UserX } from "lucide-react";

export function InsiderDetectionView() {
  return (
    <PageShell backTo="/securities" backLabel="Back to Execution & Surveillance" title="Insider trading detection" description="Pattern recognition and anomaly alerts.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <UserX className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Pattern alerts</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Account</th>
              <th className="p-4 font-medium">Pattern</th>
              <th className="p-4 font-medium">Score</th>
              <th className="p-4 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {INSIDER_DETECTION_ALERTS.map((a) => (
              <tr key={a.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{a.account}</td>
                <td className="p-4 text-cordros-text">{a.pattern}</td>
                <td className="p-4 text-cordros-text">{(a.score * 100).toFixed(0)}%</td>
                <td className="p-4 text-cordros-textSecondary">{a.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
