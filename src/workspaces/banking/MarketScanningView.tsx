import { PageShell } from "@/components/ui/PageShell";
import { BANKING_MARKET_SCAN_ITEMS } from "@/data/chartData";
import { FileSearch } from "lucide-react";

export function MarketScanningView() {
  return (
    <PageShell backTo="/banking" backLabel="Back to Deal & Advisory" title="Market scanning" description="Regulatory filings, earnings transcripts, thematic tagging.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <FileSearch className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Scan results</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Source</th>
              <th className="p-4 font-medium">Company</th>
              <th className="p-4 font-medium">Theme</th>
              <th className="p-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {BANKING_MARKET_SCAN_ITEMS.map((m, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{m.source}</td>
                <td className="p-4 text-cordros-text">{m.company}</td>
                <td className="p-4 text-cordros-text">{m.theme}</td>
                <td className="p-4 text-cordros-textSecondary">{m.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
