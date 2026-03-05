import { PageShell } from "@/components/ui/PageShell";
import { REGULATORY_REPORTS_QUEUE } from "@/data/chartData";
import { FileBarChart } from "lucide-react";

export function RegulatoryReportingView() {
  return (
    <PageShell backTo="/securities" backLabel="Back to Execution & Surveillance" title="Regulatory reporting" description="Automated reporting with HITL review.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <FileBarChart className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Report queue</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {REGULATORY_REPORTS_QUEUE.map((r, i) => (
            <li key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02]">
              <div>
                <p className="font-medium text-cordros-text">{r.reportId}</p>
                <p className="text-sm text-cordros-textSecondary">{r.type}</p>
              </div>
              <span className="text-amber-400 text-sm">{r.status}</span>
              <span className="text-xs text-cordros-textTertiary">Due {r.due}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
