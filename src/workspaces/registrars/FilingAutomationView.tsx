import { PageShell } from "@/components/ui/PageShell";
import { REGISTRAR_FILING_QUEUE } from "@/data/chartData";
import { FileCheck } from "lucide-react";

export function FilingAutomationView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Regulatory filing automation" description="Filing generation and submission tracking.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <FileCheck className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Filing queue</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Filing</th>
              <th className="p-4 font-medium">Issuer</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Tracking</th>
            </tr>
          </thead>
          <tbody>
            {REGISTRAR_FILING_QUEUE.map((f, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{f.filing}</td>
                <td className="p-4 text-cordros-text">{f.issuer}</td>
                <td className="p-4 text-emerald-400">{f.status}</td>
                <td className="p-4 text-cordros-textSecondary">{f.tracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
