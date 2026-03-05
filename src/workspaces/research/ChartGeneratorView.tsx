import { PageShell } from "@/components/ui/PageShell";
import { CHART_TEMPLATES } from "@/data/chartData";
import { BarChart3 } from "lucide-react";

export function ChartGeneratorView() {
  return (
    <PageShell
      backTo="/research"
      backLabel="Back to Research Studio"
      title="Chart & visualisation generator"
      description="Automated charts and standardised templates. Pick a template to generate a chart."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHART_TEMPLATES.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5 hover:border-white/[0.1] transition-colors"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cordros-accentMuted text-cordros-accent mb-3">
              <BarChart3 className="h-6 w-6" />
            </div>
            <h3 className="font-medium text-cordros-text">{t.name}</h3>
            <p className="text-xs text-cordros-textTertiary mt-1">{t.category}</p>
            <button
              type="button"
              className="mt-4 rounded-lg bg-white/[0.06] px-3 py-2 text-xs font-medium text-cordros-text hover:bg-white/[0.1]"
            >
              Use template
            </button>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-cordros-textTertiary">
        Templates enforce house style; data can be bound from screening or comps.
      </p>
    </PageShell>
  );
}
