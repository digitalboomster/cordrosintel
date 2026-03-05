import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, User, Settings, LogOut, RotateCcw } from "lucide-react";
import { cn } from "@/lib/cn";
import { useAuth } from "@/contexts/AuthContext";
import { useDemoStore } from "@/contexts/DemoStoreContext";
import { ProfilePanel } from "@/components/shell/ProfilePanel";
import { SettingsPanel } from "@/components/shell/SettingsPanel";

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { resetDemo } = useDemoStore();

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <>
      <div className="relative" ref={ref}>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "flex items-center gap-2 rounded-xl px-2.5 py-2 transition-colors",
            "hover:bg-white/[0.06]",
            open && "bg-white/[0.06]"
          )}
          aria-expanded={open}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cordros-accentMuted text-cordros-accent font-semibold text-sm">
            {user?.name?.charAt(0) ?? "U"}
          </span>
          <span className="hidden max-w-[120px] truncate text-sm font-medium text-cordros-text sm:inline">
            {user?.name ?? "Guest"}
          </span>
          <ChevronDown
            className={cn("h-4 w-4 text-cordros-textTertiary transition-transform", open && "rotate-180")}
            strokeWidth={2}
          />
        </button>
        {open && (
          <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-cordros-surfaceElevated shadow-card animate-fade-in-up">
            <div className="border-b border-white/5 px-4 py-3">
              <p className="text-sm font-semibold text-cordros-text">{user?.name ?? "Guest"}</p>
              <p className="truncate text-xs text-cordros-textTertiary">{user?.email ?? ""}</p>
            </div>
            <div className="p-1">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setProfileOpen(true);
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-cordros-textSecondary hover:bg-white/[0.04] hover:text-cordros-text"
              >
                <User className="h-4 w-4" strokeWidth={2} />
                Profile
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setSettingsOpen(true);
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-cordros-textSecondary hover:bg-white/[0.04] hover:text-cordros-text"
              >
                <Settings className="h-4 w-4" strokeWidth={2} />
                Settings
              </button>
              <button
                type="button"
                onClick={() => {
                  resetDemo();
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-cordros-textSecondary hover:bg-white/[0.04] hover:text-cordros-text"
              >
                <RotateCcw className="h-4 w-4" strokeWidth={2} />
                Reset demo
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  navigate("/");
                }}
                className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm text-cordros-textSecondary hover:bg-white/[0.04] hover:text-cordros-text"
              >
                <LogOut className="h-4 w-4" strokeWidth={2} />
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
      <ProfilePanel open={profileOpen} onClose={() => setProfileOpen(false)} />
      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}
