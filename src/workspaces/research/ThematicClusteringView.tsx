import { PageShell } from "@/components/ui/PageShell";
import { THEMATIC_CLUSTERS } from "@/data/chartData";
import { GitBranch } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThematicClusteringView() {
  return (
    <PageShell
      backTo="/research"
      backLabel="Back to Research Studio"
      title="Thematic trend clustering"
      description="Industry thematic clustering and trend signals. Names grouped by theme with trend direction."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <GitBranch className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Theme clusters</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {THEMATIC_CLUSTERS.map((c, i) => (
            <li key={i} className="p-4 hover:bg-white/[0.02]">
              <p className="font-medium text-cordros-text">{c.theme}</p>
              <p className="text-sm text-cordros-textSecondary mt-1">
                Names: {c.names.join(", ")}
              </p>
              <span className={cn(
                "mt-2 inline-block rounded px-2 py-0.5 text-xs font-medium",
                c.trend === "Rising" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
              )}>
                Trend: {c.trend}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs text-cordros-textTertiary">
        Clustering is updated on new research and market data; trend signals drive screening and ideas.
      </p>
    </PageShell>
  );
}
