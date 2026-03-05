import { PageShell } from "@/components/ui/PageShell";
import { DIVIDEND_RECON_EXCEPTIONS } from "@/data/chartData";
import { Coins } from "lucide-react";

export function DividendReconView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Dividend reconciliation" description="Automated reconciliation and exception handling.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Coins className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Exceptions</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Issuer</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Exception</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {DIVIDEND_RECON_EXCEPTIONS.map((d) => (
              <tr key={d.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{d.issuer}</td>
                <td className="p-4 text-cordros-text">{d.amount.toLocaleString()}</td>
                <td className="p-4 text-cordros-textSecondary">{d.exception}</td>
                <td className="p-4 text-emerald-400">{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
