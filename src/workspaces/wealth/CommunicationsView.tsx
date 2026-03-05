import { useState } from "react";
import { Link } from "react-router-dom";
import { CLIENT_DRAFTS } from "@/data/chartData";
import { ArrowLeft, MessageCircle, Send, FileEdit } from "lucide-react";
import { cn } from "@/lib/cn";

const SAMPLE_BODY =
  "Dear Adebayo Family Office,\n\nPlease find below a brief summary of your portfolio and our recommended actions for Q1 2025.\n\nPortfolio performance: +4.2% QTD (benchmark +3.8%). Your equity allocation is currently 2.1% above target; we suggest a small rebalancing trade.\n\nWe have also identified NGN 1.2m in tax-loss harvesting opportunities. I will call this week to discuss timing.\n\nBest regards,\n[Advisor name]";

export function CommunicationsView() {
  const [selectedId, setSelectedId] = useState<string | null>(CLIENT_DRAFTS[0].id);
  const selected = CLIENT_DRAFTS.find((d) => d.id === selectedId);

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
          Client communication copilot
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Draft communications and personalisation. Select a draft to view or edit; status shows Sent or Draft.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
          <div className="p-3 border-b border-white/[0.06]">
            <p className="text-xs font-semibold uppercase tracking-wider text-cordros-textTertiary">Drafts</p>
          </div>
          <ul className="divide-y divide-white/[0.04]">
            {CLIENT_DRAFTS.map((d) => (
              <li key={d.id}>
                <button
                  type="button"
                  onClick={() => setSelectedId(d.id)}
                  className={cn(
                    "w-full text-left p-4 transition-colors hover:bg-white/[0.03]",
                    selectedId === d.id && "bg-white/[0.05] border-l-2 border-cordros-accent -ml-px pl-[15px]"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cordros-goldMuted text-cordros-gold">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-cordros-text truncate">{d.client}</p>
                      <p className="text-xs text-cordros-textTertiary truncate">{d.subject}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={cn(
                      "text-xs font-medium",
                      d.status === "Sent" ? "text-emerald-400" : "text-amber-400"
                    )}>
                      {d.status}
                    </span>
                    <span className="text-xs text-cordros-textTertiary">{d.lastEdited}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
          {selected ? (
            <>
              <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                  <h2 className="font-medium text-cordros-text">{selected.client}</h2>
                  <p className="text-sm text-cordros-textTertiary mt-0.5">{selected.type} · {selected.subject}</p>
                </div>
                <span className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium",
                  selected.status === "Sent" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                )}>
                  {selected.status}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-cordros-textTertiary mb-3">
                  <FileEdit className="h-3.5 w-3.5" /> Draft body (personalised)
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-sm text-cordros-textSecondary whitespace-pre-wrap leading-relaxed">
                    {SAMPLE_BODY}
                  </p>
                </div>
                {selected.status === "Draft" && (
                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 rounded-lg bg-cordros-accent/20 px-4 py-2 text-sm font-medium text-cordros-accent hover:bg-cordros-accent/30"
                    >
                      <Send className="h-4 w-4" /> Send
                    </button>
                    <button
                      type="button"
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-cordros-textSecondary hover:bg-white/[0.03]"
                    >
                      Edit draft
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-12 text-center text-sm text-cordros-textTertiary">
              Select a draft from the list.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
