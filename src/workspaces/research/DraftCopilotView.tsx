import { Link } from "react-router-dom";
import { DRAFT_PRECEDENTS } from "@/data/chartData";
import { ArrowLeft, FileText, CheckCircle, BookOpen } from "lucide-react";
import { cn } from "@/lib/cn";

const SAMPLE_DRAFT = `Eko Petrochemicals Ltd — Q4 FY24 Results Note

We maintain our Buy rating following Q4 results. Revenue of NGN 42.1bn (+18% y/y) was ahead of our estimate; gross margin expanded 120bp on better product mix.

Key themes from the earnings call: (1) Capacity expansion on track for Phase 2 by Q2 2025; (2) Management expressed confidence on pricing power in the downstream segment; (3) Tone shifted from cautious in opening remarks to more constructive in Q&A.

[Citation: Eko Petrochemicals — Initiation, Cordros Research]
[Citation: FY24 Results — Earnings note, Cordros Research]

Valuation: EV/EBITDA of 8.2x remains below peer median. PT NGN 85 unchanged.`;

export function DraftCopilotView() {
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
          Research draft copilot
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          RAG-backed drafting with precedent retrieval and citation verification. Edit in the draft area; citations appear in the panel.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
          <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
            <FileText className="h-4 w-4 text-cordros-accent" />
            <span className="text-sm font-medium text-cordros-text">Draft</span>
          </div>
          <textarea
            readOnly
            className="w-full min-h-[320px] p-5 bg-transparent text-sm text-cordros-textSecondary leading-relaxed resize-none focus:outline-none focus:ring-0"
            value={SAMPLE_DRAFT}
          />
        </div>

        <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
          <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-cordros-gold" />
            <span className="text-sm font-medium text-cordros-text">Precedent & citations</span>
          </div>
          <ul className="divide-y divide-white/[0.04] p-2">
            {DRAFT_PRECEDENTS.map((p) => (
              <li key={p.id} className="p-3 rounded-lg hover:bg-white/[0.03]">
                <div className="flex items-start gap-2">
                  {p.used && (
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" aria-label="Cited" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-cordros-text">{p.title}</p>
                    <p className="mt-1 text-xs text-cordros-textTertiary leading-snug">{p.snippet}</p>
                    <span className={cn(
                      "mt-2 inline-block text-xs",
                      p.used ? "text-emerald-400" : "text-cordros-textTertiary"
                    )}>
                      {p.used ? "Cited in draft" : "Available"}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="p-3 text-xs text-cordros-textTertiary border-t border-white/[0.06]">
            Citations are cross-checked to reduce hallucination. Add or remove precedent via the panel.
          </p>
        </div>
      </div>
    </div>
  );
}
