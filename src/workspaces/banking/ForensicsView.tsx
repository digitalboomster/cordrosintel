import { PageShell } from "@/components/ui/PageShell";
import { FORENSICS_QUALITY_FLAGS } from "@/data/chartData";
import { BookOpen } from "lucide-react";

export function ForensicsView() {
  return (
    <PageShell backTo="/banking" backLabel="Back to Deal & Advisory" title="Financial forensics" description="Earnings quality, accrual anomaly detection, revenue recognition flags.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Quality flags</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Company</th>
              <th className="p-4 font-medium">Metric</th>
              <th className="p-4 font-medium">Flag</th>
              <th className="p-4 font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {FORENSICS_QUALITY_FLAGS.map((f, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{f.company}</td>
                <td className="p-4 text-cordros-text">{f.metric}</td>
                <td className="p-4 text-cordros-textSecondary">{f.flag}</td>
                <td className="p-4 text-cordros-text">{(f.score * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
