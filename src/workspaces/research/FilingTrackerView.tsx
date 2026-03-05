import { PageShell } from "@/components/ui/PageShell";
import { FILING_ALERTS } from "@/data/chartData";
import { FileText } from "lucide-react";

export function FilingTrackerView() {
  return (
    <PageShell
      backTo="/research"
      backLabel="Back to Research Studio"
      title="Regulatory filing tracker"
      description="Filing alerts, change detection, and summarisation. Stay on top of material disclosures."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <FileText className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Recent filing changes</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {FILING_ALERTS.map((f) => (
            <li key={f.id} className="p-4 hover:bg-white/[0.02]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-cordros-text">{f.company} · {f.filing}</p>
                  <p className="text-sm text-cordros-textSecondary mt-1">{f.change}</p>
                </div>
                <span className="text-xs text-cordros-textTertiary shrink-0">{f.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs text-cordros-textTertiary">
        Alerts are triggered on new filings and material amendments; summaries are generated for quick scan.
      </p>
    </PageShell>
  );
}
