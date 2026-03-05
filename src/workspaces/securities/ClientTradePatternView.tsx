import { PageShell } from "@/components/ui/PageShell";
import { CLIENT_TRADE_PATTERNS } from "@/data/chartData";
import { Users } from "lucide-react";

export function ClientTradePatternView() {
  return (
    <PageShell backTo="/securities" backLabel="Back to Execution & Surveillance" title="Client trade pattern intelligence" description="Client-level analytics and best execution.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Users className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Client patterns</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Client</th>
              <th className="p-4 font-medium">Best execution %</th>
              <th className="p-4 font-medium">Avg slippage (bp)</th>
              <th className="p-4 font-medium">Period</th>
            </tr>
          </thead>
          <tbody>
            {CLIENT_TRADE_PATTERNS.map((c, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{c.clientId}</td>
                <td className="p-4 text-cordros-text">{c.bestExecutionPct}%</td>
                <td className="p-4 text-cordros-text">{c.avgSlippageBp}</td>
                <td className="p-4 text-cordros-textSecondary">{c.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
