import { useEffect } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/cn";

interface GlobalSearchProps {
  onOpen: () => void;
  className?: string;
}

export function GlobalSearch({ onOpen, className }: GlobalSearchProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpen();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onOpen]);

  return (
    <button
      type="button"
      onClick={onOpen}
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-cordros-textSecondary transition-all",
        "hover:border-white/15 hover:bg-white/[0.05] hover:text-cordros-text",
        "focus:outline-none focus:ring-2 focus:ring-cordros-accent/30 focus:ring-offset-2 focus:ring-offset-cordros-bg",
        className
      )}
    >
      <Search className="h-4 w-4 shrink-0 text-cordros-textTertiary" strokeWidth={2} />
      <span>Search</span>
      <kbd className="ml-1 hidden rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] sm:inline">
        ⌘K
      </kbd>
    </button>
  );
}
