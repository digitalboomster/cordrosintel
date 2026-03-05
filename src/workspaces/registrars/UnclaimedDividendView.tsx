import { PageShell } from "@/components/ui/PageShell";
import { UNCLAIMED_DIVIDEND_LIST } from "@/data/chartData";
import { Search } from "lucide-react";

export function UnclaimedDividendView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Unclaimed dividend recovery" description="Recovery intelligence and outreach support.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Search className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Unclaimed list</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Beneficiary</th>
              <th className="p-4 font-medium">Amount</th>
              <th className="p-4 font-medium">Years</th>
              <th className="p-4 font-medium">Outreach</th>
            </tr>
          </thead>
          <tbody>
            {UNCLAIMED_DIVIDEND_LIST.map((u, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{u.beneficiary}</td>
                <td className="p-4 text-cordros-text">{u.amount.toLocaleString()}</td>
                <td className="p-4 text-cordros-text">{u.years}</td>
                <td className="p-4 text-amber-400">{u.outreach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
