import { PageShell } from "@/components/ui/PageShell";
import { CHURN_RISK_SCORES } from "@/data/chartData";
import { UserMinus } from "lucide-react";
import { cn } from "@/lib/cn";

export function ChurnPredictionView() {
  return (
    <PageShell
      backTo="/wealth"
      backLabel="Back to Wealth & Advice"
      title="Churn prediction"
      description="Churn risk scoring and retention actions. Client-level risk and suggested actions."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <UserMinus className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Churn risk scores</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Client</th>
              <th className="p-4 font-medium">Score</th>
              <th className="p-4 font-medium">Risk</th>
              <th className="p-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {CHURN_RISK_SCORES.map((c, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{c.clientId}</td>
                <td className="p-4 text-cordros-text">{(c.score * 100).toFixed(0)}%</td>
                <td className="p-4">
                  <span className={cn(
                    "rounded px-2 py-0.5 text-xs font-medium",
                    c.risk === "High" ? "bg-rose-500/10 text-rose-400" : "bg-emerald-500/10 text-emerald-400"
                  )}>
                    {c.risk}
                  </span>
                </td>
                <td className="p-4 text-cordros-textSecondary">{c.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
