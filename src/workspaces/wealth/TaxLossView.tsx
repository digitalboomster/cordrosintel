import { PageShell } from "@/components/ui/PageShell";
import { TAX_LOSS_OPPORTUNITIES } from "@/data/chartData";
import { Receipt } from "lucide-react";
import { cn } from "@/lib/cn";

export function TaxLossView() {
  return (
    <PageShell backTo="/wealth" backLabel="Back to Wealth & Advice" title="Tax-loss harvesting" description="Automated harvesting and wash-sale awareness.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Receipt className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Harvesting opportunities</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Holding</th>
              <th className="p-4 font-medium">Unrealized loss (NGN)</th>
              <th className="p-4 font-medium">Wash-sale</th>
              <th className="p-4 font-medium">Suggested</th>
            </tr>
          </thead>
          <tbody>
            {TAX_LOSS_OPPORTUNITIES.map((t, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{t.holding}</td>
                <td className="p-4 text-cordros-text">{t.unrealizedLoss.toLocaleString()}</td>
                <td className="p-4">{t.washSaleFlag ? "Yes" : "No"}</td>
                <td className="p-4">
                  <span className={cn("rounded px-2 py-0.5 text-xs font-medium", t.suggested === "Harvest" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400")}>{t.suggested}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
