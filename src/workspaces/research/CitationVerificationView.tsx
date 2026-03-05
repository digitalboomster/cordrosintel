import { PageShell } from "@/components/ui/PageShell";
import { CITATION_QUEUE } from "@/data/chartData";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export function CitationVerificationView() {
  return (
    <PageShell
      backTo="/research"
      backLabel="Back to Research Studio"
      title="Citation verification"
      description="Cross-check citations and reduce hallucination. Verification queue for draft claims."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06]">
          <span className="text-sm font-medium text-cordros-text">Verification queue</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {CITATION_QUEUE.map((v) => (
            <li key={v.id} className="p-4 flex items-center justify-between gap-4 hover:bg-white/[0.02]">
              <div>
                <p className="font-medium text-cordros-text">{v.source}</p>
                <p className="text-sm text-cordros-textSecondary mt-1">Claim: {v.claim}</p>
              </div>
              <span className={cn(
                "flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium shrink-0",
                v.status === "Verified" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
              )}>
                {v.status === "Verified" && <CheckCircle className="h-3.5 w-3.5" />}
                {v.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4 text-xs text-cordros-textTertiary">
        Each claim in a draft is cross-referenced to source documents; unverified items are flagged before publish.
      </p>
    </PageShell>
  );
}
