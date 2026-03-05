import { PageShell } from "@/components/ui/PageShell";
import { FRAUD_TRANSFER_ALERTS } from "@/data/chartData";
import { ShieldAlert } from "lucide-react";

export function FraudTransferView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Fraudulent transfer detection" description="Anomaly detection and alerting.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-rose-400" />
          <span className="text-sm font-medium text-cordros-text">Alerts</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Transfer</th>
              <th className="p-4 font-medium">Anomaly</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {FRAUD_TRANSFER_ALERTS.map((f) => (
              <tr key={f.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{f.transfer}</td>
                <td className="p-4 text-cordros-textSecondary">{f.anomaly}</td>
                <td className="p-4 text-emerald-400">{f.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
