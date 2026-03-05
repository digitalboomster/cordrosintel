import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export interface CrossArmLink {
  label: string;
  path: string;
}

interface CrossArmLinksProps {
  title?: string;
  links: CrossArmLink[];
  className?: string;
}

/**
 * "Elsewhere on the platform" — ties the kingdom together by linking to other arms/capabilities.
 */
export function CrossArmLinks({ title = "Elsewhere on the platform", links, className = "" }: CrossArmLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={`rounded-2xl border border-white/[0.06] bg-cordros-surface/60 p-4 ${className}`}>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-cordros-textTertiary mb-3">
        {title}
      </p>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className="flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-accent transition-colors"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
