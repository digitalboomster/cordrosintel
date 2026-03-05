import { PageShell } from "@/components/ui/PageShell";
import { REGISTRAR_DATA_CLEANSING_JOBS } from "@/data/chartData";
import { Users } from "lucide-react";

export function DataCleansingView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Shareholder data cleansing" description="Deduplication, normalisation, quality scoring.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Users className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Cleansing jobs</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Job</th>
              <th className="p-4 font-medium">Register</th>
              <th className="p-4 font-medium">Duplicates</th>
              <th className="p-4 font-medium">Quality score</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {REGISTRAR_DATA_CLEANSING_JOBS.map((j) => (
              <tr key={j.jobId} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{j.jobId}</td>
                <td className="p-4 text-cordros-text">{j.register}</td>
                <td className="p-4 text-cordros-text">{j.duplicates}</td>
                <td className="p-4 text-cordros-text">{(j.qualityScore * 100).toFixed(0)}%</td>
                <td className="p-4 text-emerald-400">{j.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
