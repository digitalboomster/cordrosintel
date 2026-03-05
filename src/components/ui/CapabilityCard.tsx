import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import { ArrowUpRight } from "lucide-react";
import { useDemoModal } from "@/contexts/DemoModalContext";
import { defaultSample } from "@/lib/demoSample";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  feature?: boolean;
  accent?: "cyan" | "gold";
  sample?: ReactNode;
  /** When set, the card navigates to this route instead of opening the modal. */
  to?: string;
  className?: string;
}

export function CapabilityCard({
  icon: Icon,
  title,
  description,
  feature = false,
  accent = "cyan",
  sample,
  to,
  className,
}: CapabilityCardProps) {
  const { openCapabilityDemo } = useDemoModal();

  const handleClick = (e: React.MouseEvent) => {
    if (to) return; // Link handles navigation
    e.preventDefault();
    openCapabilityDemo({ title, description, sample: sample ?? defaultSample });
  };

  const content = (
    <>
      {feature && (
        <span
          className={cn(
            "absolute left-0 top-0 h-full w-0.5 rounded-r-full opacity-80",
            accent === "gold" ? "bg-cordros-gold" : "bg-cordros-accent"
          )}
          aria-hidden
        />
      )}
      <div className={cn("flex items-start justify-between gap-3", feature && "pl-1")}>
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-xl transition-colors",
            feature ? "h-12 w-12 bg-cordros-accent/15 text-cordros-accent" : "h-11 w-11 bg-cordros-accentMuted text-cordros-accent",
            feature && accent === "gold" && "bg-cordros-goldMuted text-cordros-gold",
            !feature && "group-hover:bg-cordros-accent/20"
          )}
        >
          <Icon className={feature ? "h-6 w-6" : "h-5 w-5"} strokeWidth={2} />
        </span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-cordros-textTertiary opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </span>
      </div>
      <h3
        className={cn(
          "font-semibold text-cordros-text",
          feature ? "mt-4 text-lg tracking-tight" : "mt-3 text-sm"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "leading-relaxed text-cordros-textSecondary",
          feature ? "mt-2 text-sm" : "mt-1 text-xs"
        )}
      >
        {description}
      </p>
    </>
  );

  const baseClass = cn(
    "group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-cordros-surface/80 transition-all duration-200 text-left",
    "hover:border-white/[0.1] hover:shadow-cardHover hover:-translate-y-0.5",
    "focus:outline-none focus:ring-2 focus:ring-cordros-accent/20 focus:ring-offset-2 focus:ring-offset-cordros-bg",
    feature && "p-6 sm:col-span-2 border-cordros-accent/20 bg-cordros-surface",
    feature && accent === "gold" && "border-cordros-gold/20",
    className
  );

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={baseClass}>
      {content}
    </button>
  );
}
