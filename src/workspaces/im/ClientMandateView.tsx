import { PageShell } from "@/components/ui/PageShell";
import { CLIENT_MANDATE_CONSTRAINTS } from "@/data/chartData";
import { BarChart2 } from "lucide-react";
import { cn } from "@/lib/cn";

export function ClientMandateView() {
  return (
    <PageShell backTo="/im" backLabel="Back to Portfolio & Risk" title="Client mandate engine" description="Constraint-aware optimisation, tax-sensitive rebalancing.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <BarChart2 className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Mandate constraints</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {CLIENT_MANDATE_CONSTRAINTS.map((m, i) => (
            <li key={i} className="p-4 flex items-center justify-between hover:bg-white/[0.02]">
              <div>
                <p className="font-medium text-cordros-text">Mandate {m.mandateId}</p>
                <p className="text-sm text-cordros-textSecondary mt-1">{m.constraint}</p>
                <p className="text-xs mt-1">Current: {m.current}%</p>
              </div>
              <span className={cn("rounded px-2 py-0.5 text-xs font-medium", m.status === "OK" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400")}>{m.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
