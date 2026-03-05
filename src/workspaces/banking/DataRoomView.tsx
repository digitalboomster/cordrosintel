import { useState } from "react";
import { Link } from "react-router-dom";
import { DATA_ROOM_DOCS } from "@/data/chartData";
import { ArrowLeft, Search, FileText } from "lucide-react";
import { cn } from "@/lib/cn";

export function DataRoomView() {
  const [query, setQuery] = useState("");

  const filtered = DATA_ROOM_DOCS.filter(
    (d) =>
      !query.trim() ||
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="animate-fade-in">
      <Link
        to="/banking"
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Deal & Advisory
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">
          Data room
        </h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">
          Document list and semantic search. Demo data — Eko Petrochemicals.
        </p>
      </header>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] flex items-center gap-3 px-3 py-2.5 mb-6 max-w-md">
        <Search className="h-4 w-4 text-cordros-textTertiary" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documents…"
          className="flex-1 bg-transparent text-sm text-cordros-text placeholder:text-cordros-textTertiary focus:outline-none"
        />
      </div>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <ul className="divide-y divide-white/[0.04]">
          {filtered.map((doc) => (
            <li key={doc.id}>
              <button
                type="button"
                className={cn(
                  "flex w-full items-center gap-4 px-4 py-4 text-left transition-colors hover:bg-white/[0.03]"
                )}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cordros-accentMuted text-cordros-accent">
                  <FileText className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-cordros-text truncate">{doc.name}</p>
                  <p className="text-xs text-cordros-textTertiary mt-0.5">{doc.type} · {doc.date} · {doc.size}</p>
                </div>
                <span className="text-cordros-textTertiary text-sm">View</span>
              </button>
            </li>
          ))}
        </ul>
        {filtered.length === 0 && (
          <p className="p-8 text-center text-sm text-cordros-textTertiary">No documents match your search.</p>
        )}
      </div>
    </div>
  );
}
