import { PageShell } from "@/components/ui/PageShell";
import { ESG_CONTROVERSY_SCORES } from "@/data/chartData";
import { Leaf } from "lucide-react";

export function ESGView() {
  return (
    <PageShell backTo="/im" backLabel="Back to Portfolio & Risk" title="ESG integration" description="NLP controversy detection, sustainability metrics normalisation.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Leaf className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-medium text-cordros-text">Controversy scores (E/S/G)</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Name</th>
              <th className="p-4 font-medium">Env</th>
              <th className="p-4 font-medium">Social</th>
              <th className="p-4 font-medium">Gov</th>
              <th className="p-4 font-medium">Controversy</th>
            </tr>
          </thead>
          <tbody>
            {ESG_CONTROVERSY_SCORES.map((e, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{e.name}</td>
                <td className="p-4 text-cordros-text">{e.env}</td>
                <td className="p-4 text-cordros-text">{e.social}</td>
                <td className="p-4 text-cordros-text">{e.gov}</td>
                <td className="p-4 text-cordros-text">{e.controversy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
