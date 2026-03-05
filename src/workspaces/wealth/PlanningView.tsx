import { Link } from "react-router-dom";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { WEALTH_AUM_TREND } from "@/data/chartData";
import { ArrowLeft } from "lucide-react";

const gridStroke = "rgba(255,255,255,0.06)";
const textColor = "#a1a1aa";

export function PlanningView() {
  return (
    <div className="animate-fade-in">
      <Link
        to="/wealth"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Wealth & Advice
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">
          Goal-based planning
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          AUM trend and client planning. Demo data.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Total AUM (demo)</p>
          <p className="mt-1 text-2xl font-semibold text-cordros-text">$135M</p>
          <p className="text-xs text-emerald-400 mt-1">+8.9% vs prior period</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Active goals</p>
          <p className="mt-1 text-2xl font-semibold text-cordros-text">12</p>
          <p className="text-xs text-cordros-textSecondary mt-1">On track</p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">AUM trend ($M)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={WEALTH_AUM_TREND} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="aumFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="month" tick={{ fill: textColor, fontSize: 11 }} />
              <YAxis tick={{ fill: textColor, fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              />
              <Area type="monotone" dataKey="aum" stroke="#22d3ee" fill="url(#aumFill)" strokeWidth={2} name="AUM $M" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
