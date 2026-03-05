import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { SHAREHOLDER_BREAKDOWN } from "@/data/chartData";
import { ArrowLeft } from "lucide-react";

export function ShareholdersView() {
  return (
    <div className="animate-fade-in">
      <Link
        to="/registrars"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Registrar Ops
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">
          Shareholder base
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Ownership breakdown and cap table. Demo data.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2 mb-6">
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Total shareholders</p>
          <p className="mt-1 text-2xl font-semibold text-cordros-text">24,892</p>
        </div>
        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Outstanding shares</p>
          <p className="mt-1 text-2xl font-semibold text-cordros-text">1.2B</p>
        </div>
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">Ownership by type (%)</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={SHAREHOLDER_BREAKDOWN}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, value }: { name: string; value: number }) => `${name} ${value}%`}
                labelLine={{ stroke: "rgba(255,255,255,0.2)" }}
              >
                {SHAREHOLDER_BREAKDOWN.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="rgba(0,0,0,0.2)" strokeWidth={1} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
                formatter={(value: number) => [`${value}%`, "Share"]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
