import { PageShell } from "@/components/ui/PageShell";
import { ACCOUNT_BEHAVIOR_DEVIATIONS } from "@/data/chartData";
import { UserCog } from "lucide-react";

export function AccountBehaviorView() {
  return (
    <PageShell backTo="/securities" backLabel="Back to Execution & Surveillance" title="Account behavior anomaly" description="Behavioral profiling and deviation alerts.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <UserCog className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Deviations vs baseline</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {ACCOUNT_BEHAVIOR_DEVIATIONS.map((d, i) => (
            <li key={i} className="p-4 hover:bg-white/[0.02]">
              <p className="font-medium text-cordros-text">Account {d.account}</p>
              <p className="text-sm text-cordros-textSecondary mt-1">{d.metric}: {d.deviation} (vs {d.vsBaseline})</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
