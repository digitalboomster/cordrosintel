import { PageShell } from "@/components/ui/PageShell";
import { FRAUD_FLAGS } from "@/data/chartData";
import { AlertTriangle } from "lucide-react";

export function FraudFlaggingView() {
  return (
    <PageShell backTo="/securities" backLabel="Back to Execution & Surveillance" title="Fraudulent transaction flagging" description="Real-time fraud signals, rule + ML.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-rose-400" />
          <span className="text-sm font-medium text-cordros-text">Flagged transactions</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Transaction</th>
              <th className="p-4 font-medium">Rule</th>
              <th className="p-4 font-medium">ML score</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {FRAUD_FLAGS.map((f) => (
              <tr key={f.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{f.transaction}</td>
                <td className="p-4 text-cordros-textSecondary">{f.rule}</td>
                <td className="p-4 text-cordros-text">{(f.mlScore * 100).toFixed(0)}%</td>
                <td className="p-4 text-amber-400">{f.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
