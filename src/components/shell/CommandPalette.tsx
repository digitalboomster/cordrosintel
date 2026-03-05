import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, FileText, Briefcase, Building2, LayoutDashboard } from "lucide-react";
import { ARMS } from "@/config/arms";
import { SYNTHETIC_SEARCH_INDEX } from "@/data/synthetic";
import { cn } from "@/lib/cn";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

function normalize(s: string) {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const hits = useMemo(() => {
    const q = normalize(query);
    if (!q) return [];
    return SYNTHETIC_SEARCH_INDEX.filter(
      (h) =>
        normalize(h.title).includes(q) ||
        (h.subtitle && normalize(h.subtitle).includes(q)) ||
        (h.snippet && normalize(h.snippet).includes(q))
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setQuery("");
      inputRef.current?.focus();
    }
  }, [open]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in"
        aria-hidden
        onClick={onClose}
      />
      <div
        className="fixed left-1/2 top-[18%] z-50 w-full max-w-xl -translate-x-1/2 animate-fade-in-up rounded-2xl border border-white/10 bg-cordros-surfaceElevated p-2 shadow-card"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] px-3 py-2.5">
          <Search className="h-5 w-5 shrink-0 text-cordros-textTertiary" strokeWidth={2} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search deals, documents, entities…"
            className="min-w-0 flex-1 bg-transparent text-sm text-cordros-text placeholder:text-cordros-textTertiary focus:outline-none"
          />
          <kbd className="hidden rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-cordros-textTertiary sm:inline">
            ESC
          </kbd>
        </div>
        <div className="mt-2 max-h-72 overflow-y-auto">
          {query.trim() ? (
            <>
              {hits.length > 0 ? (
                <>
                  <p className="px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-cordros-textTertiary">
                    Results
                  </p>
                  {hits.slice(0, 8).map((h) => (
                    <button
                      key={h.id}
                      type="button"
                      onClick={() => {
                        navigate(h.path);
                        onClose();
                      }}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-white/[0.04]"
                      )}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                        {h.type === "deal" && <Briefcase className="h-4 w-4 text-cordros-textTertiary" />}
                        {h.type === "document" && <FileText className="h-4 w-4 text-cordros-textTertiary" />}
                        {h.type === "entity" && <Building2 className="h-4 w-4 text-cordros-textTertiary" />}
                        {h.type === "workspace" && <Search className="h-4 w-4 text-cordros-textTertiary" />}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-cordros-text truncate">{h.title}</p>
                        {h.subtitle && (
                          <p className="text-xs text-cordros-textTertiary truncate">{h.subtitle}</p>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-cordros-textTertiary" />
                    </button>
                  ))}
                </>
              ) : (
                <p className="px-3 py-4 text-sm text-cordros-textTertiary">No results. Try another query.</p>
              )}
            </>
          ) : (
            <>
              <p className="px-3 py-2 text-[11px] font-medium uppercase tracking-wider text-cordros-textTertiary">
                Jump to
              </p>
              <button
                type="button"
                onClick={() => { navigate("/"); onClose(); }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-cordros-textSecondary transition-colors hover:bg-white/[0.04] hover:text-cordros-text"
                )}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <LayoutDashboard className="h-4 w-4 text-cordros-textTertiary" strokeWidth={2} />
                </span>
                <span className="flex-1 font-medium">Overview</span>
                <ArrowRight className="h-4 w-4 text-cordros-textTertiary" />
              </button>
              {ARMS.map((arm) => {
                const Icon = arm.icon;
                return (
                  <button
                    key={arm.id}
                    type="button"
                    onClick={() => {
                      navigate(arm.path);
                      onClose();
                    }}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-cordros-textSecondary transition-colors hover:bg-white/[0.04] hover:text-cordros-text"
                    )}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                      <Icon className="h-4 w-4 text-cordros-textTertiary" strokeWidth={2} />
                    </span>
                    <span className="flex-1 font-medium">{arm.shortName}</span>
                    <ArrowRight className="h-4 w-4 text-cordros-textTertiary" />
                  </button>
                );
              })}
            </>
          )}
        </div>
        <p className="mt-2 border-t border-white/5 px-3 pt-2 text-[11px] text-cordros-textTertiary">
          {query.trim() ? "Synthetic data · Demo" : "Unified search · Role-scoped"}
        </p>
      </div>
    </>
  );
}
