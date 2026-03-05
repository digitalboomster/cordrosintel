import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/cn";
import { ARMS } from "@/config/arms";
import type { ArmId } from "@/contexts/AuthContext";
import { useAuth } from "@/contexts/AuthContext";
import { Sparkles, LayoutDashboard, FileCheck, HelpCircle } from "lucide-react";

interface SidebarProps {
  onArmChange: (path: string, id: ArmId) => void;
}

export function Sidebar({ onArmChange }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { hasAccessToArm } = useAuth();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-30 flex h-full w-52 flex-col border-r border-white/[0.06] bg-cordros-surface",
        "bg-noise"
      )}
    >
      <button
        type="button"
        onClick={() => navigate("/")}
        className="flex h-14 w-full items-center gap-2.5 border-b border-white/[0.06] px-4 text-left hover:bg-white/[0.03] transition-colors"
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cordros-accent/15 text-cordros-accent">
          <Sparkles className="h-4 w-4" strokeWidth={2.5} />
        </div>
        <div className="min-w-0">
          <span className="block truncate text-sm font-semibold tracking-tight text-cordros-text">Cordros</span>
          <span className="text-[10px] font-medium uppercase tracking-widest text-cordros-gold/90">Nautilus</span>
        </div>
      </button>

      <div className="border-b border-white/[0.06] px-3 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-cordros-textTertiary/80">
          One intelligence · Six arms
        </p>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {ARMS.map((arm) => {
            const active = location.pathname.startsWith(arm.path);
            const allowed = hasAccessToArm(arm.id);
            const Icon = arm.icon;
            return (
              <button
                key={arm.id}
                type="button"
                disabled={!allowed}
                onClick={() => {
                  if (!allowed) return;
                  onArmChange(arm.path, arm.id);
                }}
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg py-1.5 transition-all duration-200",
                  "hover:bg-white/[0.04]",
                  active ? "bg-cordros-accent/15 ring-1 ring-cordros-accent/30" : "bg-white/[0.02]",
                  !allowed && "cursor-not-allowed opacity-40"
                )}
                title={arm.shortName}
              >
                <Icon className={cn("h-3.5 w-3.5 shrink-0", active ? "text-cordros-accent" : "text-cordros-textTertiary")} strokeWidth={2} />
                <span className={cn("mt-0.5 truncate w-full text-[9px] text-center", active ? "text-cordros-text font-medium" : "text-cordros-textTertiary")}>
                  {arm.shortName.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-3">
        <button
          type="button"
          onClick={() => navigate("/")}
          className={cn(
            "relative flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-all",
            "hover:bg-white/[0.04]",
            location.pathname === "/" ? "bg-white/[0.06] text-cordros-text" : "text-cordros-textSecondary"
          )}
        >
          {location.pathname === "/" && (
            <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r-full bg-cordros-accent" />
          )}
          <LayoutDashboard className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          Overview
        </button>
        <p className="mb-1.5 mt-2 px-2.5 text-[10px] font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Business arms
        </p>
        {ARMS.map((arm) => {
          const active = location.pathname.startsWith(arm.path);
          const allowed = hasAccessToArm(arm.id);
          const Icon = arm.icon;
          return (
            <button
              key={arm.id}
              type="button"
              disabled={!allowed}
              onClick={() => {
                if (!allowed) return;
                onArmChange(arm.path, arm.id);
              }}
              className={cn(
                "relative flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-all duration-200",
                "hover:bg-white/[0.04]",
                active
                  ? "bg-white/[0.06] text-cordros-text"
                  : "text-cordros-textSecondary",
                !allowed && "cursor-not-allowed opacity-40"
              )}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r-full bg-cordros-accent" />
              )}
              <span
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors",
                  active ? "bg-cordros-accent/20 text-cordros-accent" : "bg-white/[0.04] text-cordros-textTertiary"
                )}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="truncate">{arm.shortName}</span>
            </button>
          );
        })}
      </nav>

      <div className="border-t border-white/[0.06] px-2 py-2">
        <p className="mb-1.5 px-2.5 text-[10px] font-semibold uppercase tracking-widest text-cordros-textTertiary">
          Governance
        </p>
        <button
          type="button"
          onClick={() => navigate("/audit")}
          className={cn(
            "relative flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-all",
            "hover:bg-white/[0.04]",
            location.pathname === "/audit" ? "bg-white/[0.06] text-cordros-text" : "text-cordros-textSecondary"
          )}
        >
          {location.pathname === "/audit" && (
            <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r-full bg-cordros-accent" />
          )}
          <FileCheck className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          Audit
        </button>
        <button
          type="button"
          onClick={() => navigate("/explain")}
          className={cn(
            "relative flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm font-medium transition-all",
            "hover:bg-white/[0.04]",
            location.pathname === "/explain" ? "bg-white/[0.06] text-cordros-text" : "text-cordros-textSecondary"
          )}
        >
          {location.pathname === "/explain" && (
            <span className="absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 rounded-r-full bg-cordros-accent" />
          )}
          <HelpCircle className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          Explain
        </button>
      </div>
    </aside>
  );
}
