import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { SURVEILLANCE_ALERTS, ALERTS_OVER_TIME } from "@/data/chartData";
import { ArrowLeft } from "lucide-react";

const gridStroke = "rgba(255,255,255,0.06)";
const textColor = "#a1a1aa";

export function SurveillanceView() {
  return (
    <div className="animate-fade-in">
      <Link
        to="/securities"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Execution & Surveillance
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">
          Surveillance & detection
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Alerts and anomaly scores. Demo data — in production this would stream from the surveillance engine.
        </p>
      </header>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5 mb-6">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">Alerts by hour (today)</h2>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ALERTS_OVER_TIME} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="hour" tick={{ fill: textColor, fontSize: 11 }} />
              <YAxis tick={{ fill: textColor, fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              />
              <Bar dataKey="count" fill="#22d3ee" radius={[4, 4, 0, 0]} name="Alerts" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <h2 className="text-sm font-semibold text-cordros-text p-4 border-b border-white/[0.06]">Open alerts</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase tracking-wider">
              <th className="p-4 font-medium">Time</th>
              <th className="p-4 font-medium">Account</th>
              <th className="p-4 font-medium">Type</th>
              <th className="p-4 font-medium">Score</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="text-cordros-textSecondary">
            {SURVEILLANCE_ALERTS.map((row) => (
              <tr key={row.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 font-mono">{row.time}</td>
                <td className="p-4 font-medium text-cordros-text">{row.account}</td>
                <td className="p-4">{row.type}</td>
                <td className="p-4">{(row.score * 100).toFixed(0)}%</td>
                <td className="p-4">
                  <span className={row.status === "Open" ? "text-amber-400" : "text-cordros-textTertiary"}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
