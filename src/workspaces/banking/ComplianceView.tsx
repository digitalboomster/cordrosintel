import { PageShell } from "@/components/ui/PageShell";
import { COMPLIANCE_RULE_SCORES } from "@/data/chartData";
import { Shield } from "lucide-react";

export function ComplianceView() {
  return (
    <PageShell backTo="/banking" backLabel="Back to Deal & Advisory" title="Compliance automation" description="SEC/CBN rule ingestion, continuous scoring, automated reporting.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Shield className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Rule scores</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Rule</th>
              <th className="p-4 font-medium">Score</th>
              <th className="p-4 font-medium">Last check</th>
            </tr>
          </thead>
          <tbody>
            {COMPLIANCE_RULE_SCORES.map((c, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{c.rule}</td>
                <td className="p-4 text-cordros-text">{(c.score * 100).toFixed(0)}%</td>
                <td className="p-4 text-cordros-textSecondary">{c.lastCheck}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
