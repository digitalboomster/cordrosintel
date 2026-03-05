import { PageShell } from "@/components/ui/PageShell";
import { KYC_VERIFICATION_QUEUE } from "@/data/chartData";
import { Fingerprint } from "lucide-react";

export function IdentityKYCView() {
  return (
    <PageShell backTo="/registrars" backLabel="Back to Registrar Ops" title="Identity & KYC AI" description="Verification and biometric APIs, NDPA-aligned.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Fingerprint className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Verification queue</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Entity</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Method</th>
            </tr>
          </thead>
          <tbody>
            {KYC_VERIFICATION_QUEUE.map((k) => (
              <tr key={k.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{k.entity}</td>
                <td className="p-4 text-emerald-400">{k.status}</td>
                <td className="p-4 text-cordros-textSecondary">{k.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
