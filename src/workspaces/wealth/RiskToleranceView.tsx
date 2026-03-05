import { PageShell } from "@/components/ui/PageShell";
import { RISK_TOLERANCE_PROFILES } from "@/data/chartData";
import { Gauge } from "lucide-react";
import { cn } from "@/lib/cn";

export function RiskToleranceView() {
  return (
    <PageShell
      backTo="/wealth"
      backLabel="Back to Wealth & Advice"
      title="Risk tolerance profiling"
      description="Assessment, dynamic profiling, and alignment checks. Client risk scores and portfolio alignment."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Gauge className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Client profiles</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {RISK_TOLERANCE_PROFILES.map((p, i) => (
            <li key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02]">
              <div>
                <p className="font-medium text-cordros-text">Client {p.clientId}</p>
                <p className="text-xs text-cordros-textTertiary mt-1">Last assessed: {p.lastAssessed}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cordros-text font-medium">Score: {p.score}</span>
                <span className={cn(
                  "rounded px-2 py-0.5 text-xs font-medium",
                  p.alignment === "On track" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                )}>
                  {p.alignment}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
