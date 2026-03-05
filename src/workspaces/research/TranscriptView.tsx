import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TRANSCRIPT_SUMMARIES,
  TRANSCRIPT_SAMPLE_SECTIONS,
  type TranscriptSummary,
} from "@/data/chartData";
import { ArrowLeft, MessageSquare, TrendingUp, Minus, AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

const sentimentConfig = {
  positive: { label: "Positive", Icon: TrendingUp, color: "text-emerald-400", bg: "bg-emerald-500/10" },
  neutral: { label: "Neutral", Icon: Minus, color: "text-amber-400", bg: "bg-amber-500/10" },
  cautious: { label: "Cautious", Icon: AlertCircle, color: "text-rose-400", bg: "bg-rose-500/10" },
} as const;

export function TranscriptView() {
  const [selected, setSelected] = useState<TranscriptSummary | null>(TRANSCRIPT_SUMMARIES[0]);

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
          Earnings transcript intelligence
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Ingested transcripts with key theme extraction, structuring, and sentiment or tone shift detection.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1 rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
          <div className="p-3 border-b border-white/[0.06]">
            <p className="text-xs font-semibold uppercase tracking-wider text-cordros-textTertiary">Transcripts</p>
          </div>
          <ul className="divide-y divide-white/[0.04]">
            {TRANSCRIPT_SUMMARIES.map((t) => {
              const conf = sentimentConfig[t.sentiment];
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(t)}
                    className={cn(
                      "w-full text-left p-4 transition-colors hover:bg-white/[0.03]",
                      selected?.id === t.id && "bg-white/[0.05] border-l-2 border-cordros-accent -ml-px pl-[15px]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cordros-accentMuted text-cordros-accent">
                        <MessageSquare className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-cordros-text truncate">{t.company}</p>
                        <p className="text-xs text-cordros-textTertiary">{t.quarter} · {t.date}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className={cn("inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium", conf.bg, conf.color)}>
                        <conf.Icon className="h-3 w-3" /> {conf.label}
                      </span>
                      {t.toneShift && (
                        <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-xs text-amber-400">Tone shift</span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-6">
          {selected && (
            <>
              <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5">
                <h2 className="text-sm font-semibold text-cordros-text mb-3">Key themes (extracted)</h2>
                <ul className="flex flex-wrap gap-2">
                  {selected.keyThemes.map((theme) => (
                    <li
                      key={theme}
                      className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-sm text-cordros-text"
                    >
                      {theme}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-4 text-sm">
                  <span className="text-cordros-textTertiary">Sentiment score</span>
                  <span className="font-medium text-cordros-text">{(selected.sentimentScore * 100).toFixed(0)}%</span>
                  <span className={cn("font-medium", sentimentConfig[selected.sentiment].color)}>
                    {sentimentConfig[selected.sentiment].label}
                  </span>
                  {selected.toneShift && (
                    <span className="text-amber-400">Tone shift detected in Q&A</span>
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
                <div className="p-3 border-b border-white/[0.06]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cordros-textTertiary">
                    Structured transcript
                  </p>
                </div>
                <div className="p-5 space-y-5">
                  {TRANSCRIPT_SAMPLE_SECTIONS.map((sec, i) => (
                    <section key={i}>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-cordros-accent mb-2">
                        {sec.heading}
                      </h3>
                      <p className="text-sm text-cordros-textSecondary leading-relaxed">{sec.body}</p>
                    </section>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
