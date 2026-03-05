import { PageShell } from "@/components/ui/PageShell";
import { DUE_DILIGENCE_FLAGS } from "@/data/chartData";
import { FileCheck } from "lucide-react";
import { cn } from "@/lib/cn";

export function DueDiligenceView() {
  return (
    <PageShell backTo="/banking" backLabel="Back to Deal & Advisory" title="Due diligence" description="Contract clause extraction, risk flags, litigation exposure scoring.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Flags</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {DUE_DILIGENCE_FLAGS.map((f, i) => (
            <li key={i} className="p-4 hover:bg-white/[0.02]">
              <p className="font-medium text-cordros-text">{f.area}: {f.flag}</p>
              <span className={cn("mt-2 inline-block rounded px-2 py-0.5 text-xs font-medium", f.risk === "Medium" ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400")}>{f.risk} risk</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
