import { useNavigate } from "react-router-dom";
import { ARMS } from "@/config/arms";
import { FileCheck, HelpCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export function OverviewView() {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in max-w-4xl">
      <section className="mb-12">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cordros-accent/40 to-transparent" aria-hidden />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cordros-gold/90">The platform</span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cordros-accent/40 to-transparent" aria-hidden />
        </div>
        <h1 className="text-display-lg font-semibold tracking-tight text-cordros-text">
          One intelligence. Six arms. One platform.
        </h1>
        <p className="mt-4 text-lg text-cordros-textSecondary">
          Cordros Intelligence is a single kingdom: one data fabric, one audit trail, one explainability layer.
          Every workspace is a region of the same territory — search, notifications, and governance span the whole.
        </p>
        <p className="mt-4 text-sm text-cordros-textSecondary/90">
          Use the map in the sidebar to jump to any arm. The bar above shows where you are at all times.
          Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">⌘K</kbd> to search across deals, research, and more.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cordros-textTertiary mb-2">
          Map of the kingdom
        </h2>
        <p className="text-sm text-cordros-textSecondary mb-4">
          Six business arms, each with its own capabilities. Click a region to enter.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {ARMS.map((arm) => {
            const Icon = arm.icon;
            return (
              <button
                key={arm.id}
                type="button"
                onClick={() => navigate(arm.path)}
                className={cn(
                  "group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-4 text-left transition-all duration-200",
                  "hover:border-cordros-accent/20 hover:bg-cordros-surface hover:shadow-card"
                )}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cordros-accentMuted text-cordros-accent transition-colors group-hover:bg-cordros-accent/20">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-cordros-text">{arm.shortName}</p>
                  <p className="text-xs text-cordros-textTertiary mt-0.5">{arm.description}</p>
                </div>
                <span className="text-cordros-textTertiary transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cordros-textTertiary mb-4">
          Governance
        </h2>
        <p className="text-sm text-cordros-textSecondary mb-4">
          Audit trail and explainability are shared across all arms.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate("/audit")}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-cordros-surface/80 px-4 py-3 text-sm font-medium text-cordros-text transition-all",
              "hover:border-white/[0.1] hover:bg-cordros-surface"
            )}
          >
            <FileCheck className="h-4 w-4 text-cordros-accent" />
            Audit trail
          </button>
          <button
            type="button"
            onClick={() => navigate("/explain")}
            className={cn(
              "inline-flex items-center gap-2 rounded-xl border border-white/[0.06] bg-cordros-surface/80 px-4 py-3 text-sm font-medium text-cordros-text transition-all",
              "hover:border-white/[0.1] hover:bg-cordros-surface"
            )}
          >
            <HelpCircle className="h-4 w-4 text-cordros-accent" />
            Explainability (XAI)
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-cordros-accent/20 bg-cordros-accentMuted/30 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-cordros-accent mb-3">
          Try the demo
        </h2>
        <p className="text-sm text-cordros-textSecondary mb-4">
          This MVP uses synthetic data and no backend. Follow these steps to see the platform in action.
        </p>
        <ol className="space-y-3 text-sm text-cordros-textSecondary">
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cordros-accent/20 text-cordros-accent text-xs font-semibold">1</span>
            <span><strong className="text-cordros-text">Search:</strong> Press <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">⌘K</kbd> and type e.g. “eko” or “Q1”. Click a result to jump to a deal or workspace.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cordros-accent/20 text-cordros-accent text-xs font-semibold">2</span>
            <span><strong className="text-cordros-text">Deal pipeline:</strong> Open <strong className="text-cordros-text">Deal & Advisory</strong> in the sidebar, then click “View deal pipeline” to see synthetic deals. Click a row for detail.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cordros-accent/20 text-cordros-accent text-xs font-semibold">3</span>
            <span><strong className="text-cordros-text">Notifications:</strong> Click the bell in the top bar. Approve or Reject a pending item — it will update the audit trail.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cordros-accent/20 text-cordros-accent text-xs font-semibold">4</span>
            <span><strong className="text-cordros-text">Audit & Explain:</strong> Open <strong className="text-cordros-text">Audit</strong> to see the log of actions. Open <strong className="text-cordros-text">Explain</strong> to see why a model recommended something.</span>
          </li>
        </ol>
        <p className="mt-4 text-xs text-cordros-textTertiary">
          To start over: open your profile (top right) → <strong>Reset demo</strong>.
        </p>
      </section>
    </div>
  );
}
