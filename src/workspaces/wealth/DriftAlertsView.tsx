import { PageShell } from "@/components/ui/PageShell";
import { DRIFT_ALERTS } from "@/data/chartData";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export function DriftAlertsView() {
  return (
    <PageShell
      backTo="/wealth"
      backLabel="Back to Wealth & Advice"
      title="Portfolio drift alerts"
      description="Drift thresholds and rebalancing prompts. Portfolios that have drifted beyond threshold."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <AlertCircle className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Drift status</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {DRIFT_ALERTS.map((d, i) => (
            <li key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02]">
              <div>
                <p className="font-medium text-cordros-text">{d.portfolio}</p>
                <p className="text-sm text-cordros-textSecondary">
                  Drift: {d.driftPct}% · Threshold: {d.threshold}%
                </p>
              </div>
              <span className={cn(
                "rounded px-2 py-0.5 text-xs font-medium",
                d.driftPct > d.threshold ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400"
              )}>
                {d.action}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
