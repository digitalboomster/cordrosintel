import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";
import { TCA_SERIES } from "@/data/chartData";
import { ArrowLeft } from "lucide-react";

const gridStroke = "rgba(255,255,255,0.06)";
const textColor = "#a1a1aa";

export function TCAView() {
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
          Trade cost analysis
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Pre-trade vs post-trade. Demo data.
        </p>
      </header>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
        <h2 className="text-sm font-semibold text-cordros-text mb-4">Pre-trade vs post-trade</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={TCA_SERIES} margin={{ top: 8, right: 8, left: 0, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
              <XAxis dataKey="name" tick={{ fill: textColor, fontSize: 10 }} angle={-15} textAnchor="end" height={60} />
              <YAxis tick={{ fill: textColor, fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#12121a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
              />
              <Legend />
              <Bar dataKey="pre" fill="#22d3ee" radius={[4, 4, 0, 0]} name="Pre-trade" />
              <Bar dataKey="post" fill="rgba(251,191,36,0.8)" radius={[4, 4, 0, 0]} name="Post-trade" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
