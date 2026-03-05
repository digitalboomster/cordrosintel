import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { ATTRIBUTION_FACTORS } from "@/data/chartData";
import { ArrowLeft } from "lucide-react";

const gridStroke = "rgba(255,255,255,0.06)";
const textColor = "#a1a1aa";

export function AttributionView() {
  return (
    <div className="animate-fade-in">
      <Link
        to="/im"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Portfolio & Risk
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">
          Performance attribution
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Factor decomposition and allocation contribution. Demo data.
        </p>
      </header>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5 mb-6">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">Factor contribution (bps)</h2>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ATTRIBUTION_FACTORS} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="name" tick={{ fill: textColor, fontSize: 11 }} />
              <YAxis tick={{ fill: textColor, fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              />
              <Legend />
              <Bar dataKey="contribution" fill="#22d3ee" radius={[4, 4, 0, 0]} name="Contribution (bps)" />
              <Bar dataKey="allocation" fill="rgba(251,191,36,0.8)" radius={[4, 4, 0, 0]} name="Allocation" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase tracking-wider">
              <th className="p-4 font-medium">Factor</th>
              <th className="p-4 font-medium">Contribution (bps)</th>
              <th className="p-4 font-medium">Allocation</th>
            </tr>
          </thead>
          <tbody className="text-cordros-textSecondary">
            {ATTRIBUTION_FACTORS.map((row) => (
              <tr key={row.name} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 font-medium text-cordros-text">{row.name}</td>
                <td className="p-4">{row.contribution}</td>
                <td className="p-4">{(row.allocation * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
