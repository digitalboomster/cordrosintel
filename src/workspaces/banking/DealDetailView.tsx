import { useParams, Link } from "react-router-dom";
import { SYNTHETIC_DEALS } from "@/data/synthetic";
import { CrossArmLinks } from "@/components/ui/CrossArmLinks";
import { ArrowLeft, Briefcase } from "lucide-react";

export function DealDetailView() {
  const { dealId } = useParams<{ dealId: string }>();
  const deal = SYNTHETIC_DEALS.find((d) => d.id === dealId);

  if (!deal) {
    return (
      <div className="animate-fade-in">
        <p className="text-cordros-textSecondary">Deal not found.</p>
        <Link to="/banking/deals" className="mt-2 inline-block text-sm text-cordros-accent hover:underline">
          ← Back to pipeline
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <Link
        to="/banking/deals"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to pipeline
      </Link>
      <header className="mb-8">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cordros-accentMuted text-cordros-accent">
            <Briefcase className="h-6 w-6" strokeWidth={2} />
          </span>
          <div>
            <h2 className="text-display-sm font-semibold tracking-tight text-cordros-text">
              {deal.name}
            </h2>
            <p className="mt-1 text-sm text-cordros-textSecondary">
              {deal.type} · {deal.sector} · {deal.client}
            </p>
            <div className="mt-3 flex gap-2">
              <span
                className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                  deal.status === "Live"
                    ? "bg-cordros-accentMuted text-cordros-accent"
                    : deal.status === "Pipeline"
                    ? "bg-white/10 text-cordros-textSecondary"
                    : "bg-cordros-goldMuted text-cordros-gold"
                }`}
              >
                {deal.status}
              </span>
              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-cordros-textSecondary">
                Mandate score {(deal.mandateScore * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Client</p>
          <p className="mt-1 text-sm font-medium text-cordros-text">{deal.client}</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Value</p>
          <p className="mt-1 text-sm font-medium text-cordros-text">
            {deal.valueUsdM != null ? `$${deal.valueUsdM}M` : "—"}
          </p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Last updated</p>
          <p className="mt-1 text-sm text-cordros-textSecondary">
            {new Date(deal.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>

      <p className="mt-6 text-xs text-cordros-textTertiary">
        Demo: detail view. In production this would show data room link, comps, DCF, and DD summary from the Data Fabric.
      </p>

      <div className="mt-8 pt-8 border-t border-white/[0.06]">
        <CrossArmLinks
          links={[
            { label: "Research · Screening & comps", path: "/research/screening" },
            { label: "Data room (this deal)", path: "/banking/data-room" },
            { label: "Audit trail", path: "/audit" },
            { label: "Explainability (XAI)", path: "/explain" },
          ]}
        />
      </div>
    </div>
  );
}
