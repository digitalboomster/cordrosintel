import { PageShell } from "@/components/ui/PageShell";
import { SENTIMENT_TONE_SERIES } from "@/data/chartData";
import { Smile } from "lucide-react";
import { cn } from "@/lib/cn";

export function SentimentToneView() {
  return (
    <PageShell
      backTo="/research"
      backLabel="Back to Research Studio"
      title="Sentiment & tone shifts"
      description="Tone analysis, sentiment scoring, and trend detection across earnings and communications."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 p-5 mb-6">
        <h2 className="text-sm font-semibold text-cordros-text mb-4 flex items-center gap-2">
          <Smile className="h-4 w-4 text-cordros-accent" />
          Sentiment scores by name
        </h2>
        <ul className="space-y-3">
          {SENTIMENT_TONE_SERIES.map((row) => (
            <li
              key={row.name}
              className="flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3"
            >
              <span className="font-medium text-cordros-text">{row.name}</span>
              <span className="text-cordros-textSecondary text-sm">{row.date}</span>
              <span className={cn(
                "rounded px-2 py-0.5 text-xs font-medium",
                row.sentiment >= 0.6 ? "bg-emerald-500/10 text-emerald-400" : row.sentiment >= 0.4 ? "bg-amber-500/10 text-amber-400" : "bg-rose-500/10 text-rose-400"
              )}>
                {(row.sentiment * 100).toFixed(0)}%
              </span>
              {row.toneShift && (
                <span className="text-xs text-amber-400">Tone shift detected</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-xs text-cordros-textTertiary">
        Sentiment is computed per transcript; tone shift flags indicate material change between sections (e.g. opening vs Q&A).
      </p>
    </PageShell>
  );
}
