import { PageShell } from "@/components/ui/PageShell";
import { MACRO_FORECAST_SERIES } from "@/data/chartData";
import { Globe } from "lucide-react";

export function MacroForecastView() {
  return (
    <PageShell backTo="/im" backLabel="Back to Portfolio & Risk" title="Macro forecast layer" description="Time-series ensembles, FX and inflation predictive models.">
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Globe className="h-4 w-4 text-cordros-gold" />
          <span className="text-sm font-medium text-cordros-text">Forecast (demo)</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Variable</th>
              <th className="p-4 font-medium">Current</th>
              <th className="p-4 font-medium">Forecast 1m</th>
              <th className="p-4 font-medium">Horizon</th>
            </tr>
          </thead>
          <tbody>
            {MACRO_FORECAST_SERIES.map((m, i) => (
              <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{m.variable}</td>
                <td className="p-4 text-cordros-text">{m.current}</td>
                <td className="p-4 text-cordros-text">{m.forecast1m}</td>
                <td className="p-4 text-cordros-textSecondary">{m.horizon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}
