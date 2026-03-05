import { PageShell } from "@/components/ui/PageShell";
import { LIFE_EVENT_SIGNALS } from "@/data/chartData";
import { Calendar } from "lucide-react";

export function LifeEventView() {
  return (
    <PageShell backTo="/wealth" backLabel="Back to Wealth & Advice" title="Life event signals" description="Life event prediction and proactive planning.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Calendar className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Predicted life events</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {LIFE_EVENT_SIGNALS.map((s, i) => (
            <li key={i} className="p-4 hover:bg-white/[0.02]">
              <p className="font-medium text-cordros-text">Client {s.clientId}</p>
              <p className="text-sm text-cordros-textSecondary mt-1">{s.event}</p>
              <p className="text-xs mt-2">Probability: {(s.probability * 100).toFixed(0)}% · Suggested: {s.suggestedAction}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
