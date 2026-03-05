import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useDemoStore } from "@/contexts/DemoStoreContext";
import { cn } from "@/lib/cn";

const SETTINGS_KEY = "cordros-demo-settings";

interface SettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

export function SettingsPanel({ open, onClose }: SettingsPanelProps) {
  const { resetDemo } = useDemoStore();
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (typeof data.notificationsOn === "boolean") setNotificationsOn(data.notificationsOn);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ notificationsOn }));
      setSaved(true);
      const t = setTimeout(() => setSaved(false), 2000);
      return () => clearTimeout(t);
    } catch {
      // ignore
    }
  }, [open, notificationsOn]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in" aria-hidden onClick={onClose} />
      <div
        className="fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto border-l border-white/10 bg-cordros-surfaceElevated shadow-card animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-label="Settings"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-cordros-surfaceElevated px-4 py-3">
          <h2 className="text-base font-semibold text-cordros-text">Settings</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-cordros-textTertiary hover:bg-white/10 hover:text-cordros-text"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-cordros-text">Notifications</p>
              <p className="text-xs text-cordros-textTertiary mt-0.5">Show HITL and alert notifications in the bell</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={notificationsOn}
              onClick={() => setNotificationsOn((v) => !v)}
              className={cn(
                "relative h-6 w-11 shrink-0 rounded-full transition-colors",
                notificationsOn ? "bg-cordros-accent/30" : "bg-white/10"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform",
                  notificationsOn ? "left-6" : "left-1"
                )}
              />
            </button>
          </div>
          {saved && (
            <p className="text-xs text-emerald-400">Preferences saved.</p>
          )}
          <div className="pt-4 border-t border-white/5">
            <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary mb-2">Demo</p>
            <button
              type="button"
              onClick={() => {
                resetDemo();
                onClose();
              }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-cordros-textSecondary hover:bg-white/10 hover:text-cordros-text transition-colors"
            >
              Reset demo data
            </button>
            <p className="mt-2 text-xs text-cordros-textTertiary">
              Restores initial notifications and audit log.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
