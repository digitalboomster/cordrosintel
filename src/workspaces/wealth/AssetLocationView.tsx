import { PageShell } from "@/components/ui/PageShell";
import { ASSET_LOCATION_VIEW } from "@/data/chartData";
import { MapPin } from "lucide-react";

export function AssetLocationView() {
  return (
    <PageShell
      backTo="/wealth"
      backLabel="Back to Wealth & Advice"
      title="Asset location optimisation"
      description="Tax-aware location across accounts. Current allocation and tax efficiency by account."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <MapPin className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Location by account</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Account</th>
              <th className="p-4 font-medium">Equity %</th>
              <th className="p-4 font-medium">Fixed income %</th>
              <th className="p-4 font-medium">Tax efficiency</th>
            </tr>
          </thead>
          <tbody>
            {ASSET_LOCATION_VIEW.map((a, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{a.account}</td>
                <td className="p-4 text-cordros-text">{a.equity}</td>
                <td className="p-4 text-cordros-text">{a.fixedIncome}</td>
                <td className="p-4 text-cordros-text">{a.taxEfficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
