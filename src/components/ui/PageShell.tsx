import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageShellProps {
  backTo: string;
  backLabel: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PageShell({ backTo, backLabel, title, description, children }: PageShellProps) {
  return (
    <div className="animate-fade-in">
      <Link
        to={backTo}
        className="inline-flex items-center gap-2 text-sm text-cordros-textSecondary hover:text-cordros-text mb-6"
      >
        <ArrowLeft className="h-4 w-4" /> {backLabel}
      </Link>
      <header className="mb-8">
        <h1 className="text-display-sm font-semibold tracking-tight text-cordros-text">{title}</h1>
        <p className="mt-2 text-sm text-cordros-textSecondary">{description}</p>
      </header>
      {children}
    </div>
  );
}
