import { Link } from "react-router-dom";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { RISK_VAR_SERIES, STRESS_TEST_SERIES } from "@/data/chartData";
import { CrossArmLinks } from "@/components/ui/CrossArmLinks";
import { ArrowLeft } from "lucide-react";

const chartTheme = {
  stroke: "#22d3ee",
  fill: "rgba(34,211,238,0.2)",
  grid: "rgba(255,255,255,0.06)",
  text: "#a1a1aa",
};

export function RiskDashboardView() {
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
          Real-time risk dashboard
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          VaR/CVaR, stress testing, correlation. Demo data — in production this would stream from the risk engine.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3 mb-8">
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">1-day VaR (95%)</p>
          <p className="mt-1 text-2xl font-semibold text-cordros-text">2.2%</p>
          <p className="text-xs text-cordros-textSecondary mt-1">Portfolio IM-204</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">CVaR (95%)</p>
          <p className="mt-1 text-2xl font-semibold text-cordros-text">2.9%</p>
          <p className="text-xs text-cordros-textSecondary mt-1">Expected shortfall</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Status</p>
          <p className="mt-1 text-lg font-semibold text-emerald-400">Within limit</p>
          <p className="text-xs text-cordros-textSecondary mt-1">No breach</p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5 mb-6">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">VaR / CVaR (7d)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={RISK_VAR_SERIES} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="varFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartTheme.stroke} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={chartTheme.stroke} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} />
              <XAxis dataKey="name" tick={{ fill: chartTheme.text, fontSize: 11 }} />
              <YAxis tick={{ fill: chartTheme.text, fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
                labelStyle={{ color: "#fafafa" }}
              />
              <Area type="monotone" dataKey="var" stroke={chartTheme.stroke} fill="url(#varFill)" strokeWidth={2} name="VaR %" />
              <Area type="monotone" dataKey="cvar" stroke="#fbbf24" fill="rgba(251,191,36,0.1)" strokeWidth={2} name="CVaR %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">Stress test — P&L impact (%)</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={STRESS_TEST_SERIES} layout="vertical" margin={{ top: 8, right: 24, left: 80, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.grid} />
              <XAxis type="number" tick={{ fill: chartTheme.text, fontSize: 11 }} />
              <YAxis type="category" dataKey="scenario" tick={{ fill: chartTheme.text, fontSize: 11 }} width={78} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              />
              <Bar dataKey="pnl" fill="#22d3ee" radius={[0, 4, 4, 0]} name="P&L %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/[0.06]">
        <CrossArmLinks
          links={[
            { label: "Performance attribution", path: "/im/attribution" },
            { label: "Predictive rebalancing", path: "/im/rebalancing" },
            { label: "Audit trail", path: "/audit" },
            { label: "Explainability (XAI)", path: "/explain" },
          ]}
        />
      </div>
    </div>
  );
}
