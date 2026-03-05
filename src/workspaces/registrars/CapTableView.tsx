import { PageShell } from "@/components/ui/PageShell";
import { CAP_TABLE_INTEGRITY_LOG } from "@/data/chartData";
import { Table2 } from "lucide-react";

export function CapTableView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Cap table integrity" description="Integrity monitoring and audit trail.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Table2 className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Integrity log</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Date</th>
              <th className="p-4 font-medium">Check</th>
              <th className="p-4 font-medium">Result</th>
              <th className="p-4 font-medium">Audit ID</th>
            </tr>
          </thead>
          <tbody>
            {CAP_TABLE_INTEGRITY_LOG.map((c, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{c.date}</td>
                <td className="p-4 text-cordros-text">{c.check}</td>
                <td className="p-4 text-emerald-400">{c.result}</td>
                <td className="p-4 text-cordros-textSecondary">{c.auditId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
