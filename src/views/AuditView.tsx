import { useDemoStore } from "@/contexts/DemoStoreContext";
import { User, Clock } from "lucide-react";

function formatTime(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffM = Math.floor(diffMs / 60000);
  if (diffM < 60) return `${diffM}m ago`;
  const diffH = Math.floor(diffM / 60);
  if (diffH < 24) return `${diffH}h ago`;
  return d.toLocaleDateString();
}

export function AuditView() {
  const { auditLog } = useDemoStore();

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Governance
        </p>
        <h2 className="mt-2 text-display-lg font-semibold tracking-tight text-cordros-text">
          Audit trail
        </h2>
        <div className="mt-3 h-px w-12 bg-cordros-accent" aria-hidden />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cordros-textSecondary">
          Immutable log of user and model actions. Demo data — in production this would be backed by a secure audit store.
        </p>
      </header>

      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="border-b border-white/[0.06] px-4 py-3 flex items-center gap-4 text-xs font-medium text-cordros-textTertiary uppercase tracking-wider">
          <span className="w-32">Time</span>
          <span className="w-24">User</span>
          <span className="w-20">Action</span>
          <span className="w-24">Entity</span>
          <span className="flex-1">Details</span>
        </div>
        <ul className="divide-y divide-white/[0.04]">
          {auditLog.map((entry) => (
            <li
              key={entry.id}
              className="flex items-center gap-4 px-4 py-3 text-sm hover:bg-white/[0.02] transition-colors"
            >
              <span className="flex items-center gap-1.5 w-32 text-cordros-textSecondary">
                <Clock className="h-3.5 w-3.5 text-cordros-textTertiary" />
                {formatTime(entry.timestamp)}
              </span>
              <span className="w-24 truncate text-cordros-textSecondary flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-cordros-textTertiary" />
                {entry.userId}
              </span>
              <span className="w-20">
                <span className="rounded-md bg-cordros-accentMuted px-2 py-0.5 text-xs font-medium text-cordros-accent">
                  {entry.action}
                </span>
              </span>
              <span className="w-24 truncate text-cordros-textTertiary">{entry.entityType} {entry.entityId}</span>
              <span className="flex-1 truncate text-cordros-textSecondary">{entry.details}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
