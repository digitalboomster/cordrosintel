import { Link } from "react-router-dom";
import { SYNTHETIC_DEALS } from "@/data/synthetic";
import { ArrowRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/cn";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function DealsView() {
  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Investment Banking
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Deal pipeline
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Synthetic demo data. In production this would be driven by the Deal Origination Engine and Data Fabric.
        </p>
      </header>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="border-b border-white/[0.06] px-4 py-3 flex items-center gap-4 text-xs font-medium text-cordros-textTertiary uppercase tracking-wider">
          <span className="w-12" />
          <span className="flex-1">Deal</span>
          <span className="w-24">Sector</span>
          <span className="w-20">Type</span>
          <span className="w-20">Status</span>
          <span className="w-24">Value</span>
          <span className="w-20">Score</span>
          <span className="w-28">Updated</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {SYNTHETIC_DEALS.map((deal) => (
            <li key={deal.id}>
              <Link
                to={`/banking/deals/${deal.id}`}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 text-sm transition-colors hover:bg-white/[0.03]"
                )}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cordros-accentMuted text-cordros-accent">
                  <Briefcase className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="flex-1 font-medium text-cordros-text">{deal.name}</span>
                <span className="w-24 text-cordros-textSecondary">{deal.sector}</span>
                <span className="w-20 text-cordros-textSecondary">{deal.type}</span>
                <span className="w-20">
                  <span
                    className={cn(
                      "rounded-md px-2 py-0.5 text-xs font-medium",
                      deal.status === "Live" && "bg-cordros-accentMuted text-cordros-accent",
                      deal.status === "Pipeline" && "bg-white/10 text-cordros-textSecondary",
                      deal.status === "Closed" && "bg-cordros-goldMuted text-cordros-gold"
                    )}
                  >
                    {deal.status}
                  </span>
                </span>
                <span className="w-24 font-mono text-cordros-textSecondary">
                  {deal.valueUsdM != null ? `$${deal.valueUsdM}M` : "—"}
                </span>
                <span className="w-20 font-mono text-cordros-text">{(deal.mandateScore * 100).toFixed(0)}%</span>
                <span className="w-28 text-cordros-textTertiary">{formatDate(deal.updatedAt)}</span>
                <ArrowRight className="h-4 w-4 text-cordros-textTertiary shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
