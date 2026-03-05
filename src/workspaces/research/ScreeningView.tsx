import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { SCREENING_RESULTS } from "@/data/chartData";
import { ArrowLeft } from "lucide-react";

const gridStroke = "rgba(255,255,255,0.06)";
const textColor = "#a1a1aa";

export function ScreeningView() {
  const chartData = SCREENING_RESULTS.map((r) => ({
    name: r.ticker,
    momentum: r.momentum,
    value: r.value,
    quality: r.quality,
  }));

  return (
    <div className="animate-fade-in">
      <Link
        to="/research"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Research Studio
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">
          Quant screening
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Factor scores and screening results. Demo data.
        </p>
      </header>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5 mb-6">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">Factor scores by name</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="name" tick={{ fill: textColor, fontSize: 11 }} />
              <YAxis tick={{ fill: textColor, fontSize: 11 }} domain={[0, 1]} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              />
              <Bar dataKey="momentum" fill="#22d3ee" radius={[4, 4, 0, 0]} name="Momentum" />
              <Bar dataKey="value" fill="#fbbf24" radius={[4, 4, 0, 0]} name="Value" />
              <Bar dataKey="quality" fill="#a78bfa" radius={[4, 4, 0, 0]} name="Quality" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase tracking-wider">
              <th className="p-4 font-medium">Ticker</th>
              <th className="p-4 font-medium">Sector</th>
              <th className="p-4 font-medium">Momentum</th>
              <th className="p-4 font-medium">Value</th>
              <th className="p-4 font-medium">Quality</th>
            </tr>
          </thead>
          <tbody className="text-cordros-textSecondary">
            {SCREENING_RESULTS.map((row) => (
              <tr key={row.ticker} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 font-medium text-cordros-text">{row.ticker}</td>
                <td className="p-4">{row.sector}</td>
                <td className="p-4">{(row.momentum * 100).toFixed(0)}%</td>
                <td className="p-4">{(row.value * 100).toFixed(0)}%</td>
                <td className="p-4">{(row.quality * 100).toFixed(0)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
