import { PageShell } from "@/components/ui/PageShell";
import { INSTITUTIONAL_MEMORY_DEALS } from "@/data/chartData";
import { Archive } from "lucide-react";

export function InstitutionalMemoryView() {
  return (
    <PageShell backTo="/banking" backLabel="Back to Deal & Advisory" title="Institutional memory" description="Indexed deal database, precedent retrieval, lessons-learned inference.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Archive className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Similar deals</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {INSTITUTIONAL_MEMORY_DEALS.map((d) => (
            <li key={d.id} className="p-4 hover:bg-white/[0.02]">
              <p className="font-medium text-cordros-text">{d.name}</p>
              <p className="text-sm text-cordros-textSecondary mt-1">Sector: {d.sector}</p>
              <p className="text-xs text-cordros-accent mt-2">Lesson: {d.lesson}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
