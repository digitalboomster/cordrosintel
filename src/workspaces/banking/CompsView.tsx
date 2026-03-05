import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { COMPS_PEERS } from "@/data/chartData";
import { ArrowLeft } from "lucide-react";

const gridStroke = "rgba(255,255,255,0.06)";
const textColor = "#a1a1aa";

export function CompsView() {
  return (
    <div className="animate-fade-in">
      <Link
        to="/banking"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Deal & Advisory
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">
          Comparable analytics
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Peer set and multiples. Demo data — Eko Petrochemicals context.
        </p>
      </header>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5 mb-6">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">EV/EBITDA — Peer set</h2>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={COMPS_PEERS} margin={{ top: 8, right: 8, left: 0, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="name" tick={{ fill: textColor, fontSize: 9 }} angle={-25} textAnchor="end" height={70} />
              <YAxis tick={{ fill: textColor, fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              />
              <Bar dataKey="evEbitda" fill="#22d3ee" radius={[4, 4, 0, 0]} name="EV/EBITDA" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase tracking-wider">
              <th className="p-4 font-medium">Peer</th>
              <th className="p-4 font-medium">Sector</th>
              <th className="p-4 font-medium">EV/EBITDA</th>
              <th className="p-4 font-medium">P/E</th>
            </tr>
          </thead>
          <tbody className="text-cordros-textSecondary">
            {COMPS_PEERS.map((row) => (
              <tr key={row.name} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 font-medium text-cordros-text">{row.name}</td>
                <td className="p-4">{row.sector}</td>
                <td className="p-4">{row.evEbitda}x</td>
                <td className="p-4">{row.pe}x</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
