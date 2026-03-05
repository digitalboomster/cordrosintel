import { cn } from "@/lib/cn";

interface WorkspaceSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function WorkspaceSection({ title, subtitle, children, className }: WorkspaceSectionProps) {
  return (
    <section className={cn("mb-10", className)}>
      <div className="mb-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1 text-sm text-cordros-textSecondary">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
