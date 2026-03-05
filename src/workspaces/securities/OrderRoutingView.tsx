import { Link } from "react-router-dom";
import { ORDER_ROUTES, VENUE_SUMMARY } from "@/data/chartData";
import { ArrowLeft, Route, Zap } from "lucide-react";

export function OrderRoutingView() {
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
          Smart order routing
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Low-latency execution and venue selection. Orders, routes, and latency by venue — no TCA chart here.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        {VENUE_SUMMARY.map((v) => (
          <div key={v.venue} className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
            <div className="flex items-center gap-2">
              <Route className="h-4 w-4 text-cordros-accent" />
              <span className="text-sm font-medium text-cordros-text">{v.venue}</span>
            </div>
            <p className="mt-2 text-2xl font-semibold text-cordros-text">{v.sharePct}%</p>
            <p className="text-xs text-cordros-textTertiary">Share of volume (last 24h)</p>
            <p className="mt-2 flex items-center gap-1 text-xs text-cordros-textSecondary">
              <Zap className="h-3.5 w-3.5" /> Avg latency {v.avgLatencyMs} ms
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06]">
          <p className="text-xs font-semibold uppercase tracking-wider text-cordros-textTertiary">Recent routes</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase tracking-wider">
                <th className="p-4 font-medium">Order ID</th>
                <th className="p-4 font-medium">Symbol</th>
                <th className="p-4 font-medium">Side</th>
                <th className="p-4 font-medium">Qty</th>
                <th className="p-4 font-medium">Venue</th>
                <th className="p-4 font-medium">Latency</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Avg price</th>
              </tr>
            </thead>
            <tbody>
              {ORDER_ROUTES.map((r) => (
                <tr key={r.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                  <td className="p-4 font-mono text-cordros-text">{r.orderId}</td>
                  <td className="p-4 text-cordros-text">{r.symbol}</td>
                  <td className="p-4 text-cordros-text">{r.side}</td>
                  <td className="p-4 text-cordros-text">{r.qty.toLocaleString()}</td>
                  <td className="p-4 text-cordros-text">{r.venue}</td>
                  <td className="p-4 text-cordros-text">{r.latencyMs} ms</td>
                  <td className="p-4">
                    <span className={r.status === "Filled" ? "text-emerald-400" : "text-amber-400"}>{r.status}</span>
                  </td>
                  <td className="p-4 text-cordros-text">{r.avgPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="p-3 text-xs text-cordros-textTertiary border-t border-white/[0.06]">
          Venue selection is driven by liquidity, latency, and cost. Override available in trading UI.
        </p>
      </div>
    </div>
  );
}
