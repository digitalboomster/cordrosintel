import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, CheckCircle, AlertCircle, Info, Check, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { useDemoStore } from "@/contexts/DemoStoreContext";

const iconMap = {
  approval: CheckCircle,
  override: AlertCircle,
  info: Info,
};

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

export function Notifications() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { hitlTasks, approveHitl, rejectHitl, dismissHitl } = useDemoStore();

  const pending = hitlTasks.filter((t) => t.status === "pending");

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-xl transition-colors",
          "hover:bg-white/[0.06] text-cordros-textSecondary hover:text-cordros-text",
          open && "bg-white/[0.06] text-cordros-text"
        )}
        aria-label="Notifications"
        aria-expanded={open}
      >
        <Bell className="h-5 w-5" strokeWidth={2} />
        {pending.length > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-cordros-accent text-[10px] font-bold text-cordros-bg">
            {pending.length}
          </span>
        )}
      </button>
      {open && (
        <div
          className={cn(
            "absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-cordros-surfaceElevated shadow-card animate-fade-in-up"
          )}
        >
          <div className="border-b border-white/5 px-4 py-3">
            <h3 className="text-sm font-semibold text-cordros-text">Notifications</h3>
            <p className="text-xs text-cordros-textTertiary">HITL approvals · Risk alerts · Compliance</p>
          </div>
          <ul className="max-h-80 overflow-y-auto">
            {pending.length === 0 ? (
              <li className="px-4 py-6 text-center text-sm text-cordros-textTertiary">
                No pending actions
              </li>
            ) : (
              pending.map((item) => {
                const Icon = iconMap[item.type as keyof typeof iconMap] ?? Info;
                const isInfo = item.type === "info";
                return (
                  <li key={item.id}>
                    <div className="flex gap-3 px-4 py-3 hover:bg-white/[0.03]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cordros-accentMuted text-cordros-accent">
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-cordros-text">{item.title}</p>
                        <p className="text-xs text-cordros-textSecondary">{item.body}</p>
                        <p className="mt-0.5 text-[11px] text-cordros-textTertiary">
                          {formatTime(item.createdAt)}
                        </p>
                        {!isInfo && (
                          <div className="mt-2 flex gap-2">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                approveHitl(item.id);
                              }}
                              className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400 hover:bg-emerald-500/30"
                            >
                              <Check className="h-3 w-3" /> Approve
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                rejectHitl(item.id);
                              }}
                              className="inline-flex items-center gap-1 rounded-lg bg-white/10 px-2 py-1 text-xs font-medium text-cordros-textSecondary hover:bg-white/15"
                            >
                              <X className="h-3 w-3" /> Reject
                            </button>
                          </div>
                        )}
                        {isInfo && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              dismissHitl(item.id);
                            }}
                            className="mt-2 text-xs font-medium text-cordros-textTertiary hover:text-cordros-text"
                          >
                            Dismiss
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })
            )}
          </ul>
          <div className="border-t border-white/5 px-4 py-2">
            <button
              type="button"
              className="text-xs font-medium text-cordros-accent hover:underline"
              onClick={() => {
                setOpen(false);
                navigate("/audit");
              }}
            >
              View audit trail
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
