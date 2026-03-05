import { PageShell } from "@/components/ui/PageShell";
import { BEHAVIORAL_BIAS_SIGNALS } from "@/data/chartData";
import { Brain } from "lucide-react";

export function BehavioralBiasView() {
  return (
    <PageShell backTo="/wealth" backLabel="Back to Wealth & Advice" title="Behavioral bias detection" description="Bias signals, nudges, and advisor prompts.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Brain className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Bias signals & nudges</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {BEHAVIORAL_BIAS_SIGNALS.map((s, i) => (
            <li key={i} className="p-4 hover:bg-white/[0.02]">
              <p className="font-medium text-cordros-text">Client {s.clientId}</p>
              <p className="text-sm text-cordros-textSecondary mt-1">Bias: {s.bias} · Strength: {s.strength}</p>
              <p className="text-xs text-cordros-accent mt-2">Advisor nudge: {s.nudge}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
