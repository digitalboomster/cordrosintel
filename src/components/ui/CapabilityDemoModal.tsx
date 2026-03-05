import { useEffect } from "react";
import { X } from "lucide-react";
import { useDemoModal } from "@/contexts/DemoModalContext";

export function CapabilityDemoModal() {
  const { capabilityDemo, closeCapabilityDemo } = useDemoModal();

  useEffect(() => {
    if (!capabilityDemo) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCapabilityDemo();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [capabilityDemo, closeCapabilityDemo]);

  if (!capabilityDemo) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-fade-in"
        aria-hidden
        onClick={closeCapabilityDemo}
      />
      <div
        className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-cordros-surfaceElevated p-6 shadow-card animate-fade-in-up"
        role="dialog"
        aria-modal="true"
        aria-label={capabilityDemo.title}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-cordros-text">{capabilityDemo.title}</h3>
          <button
            type="button"
            onClick={closeCapabilityDemo}
            className="rounded-lg p-2 text-cordros-textTertiary hover:bg-white/10 hover:text-cordros-text"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-3 text-sm text-cordros-textSecondary leading-relaxed">
          {capabilityDemo.description}
        </p>
        {capabilityDemo.sample ? (
          <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">
              Sample output (demo data)
            </p>
            {capabilityDemo.sample}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <p className="text-xs text-cordros-textTertiary">
              In production this would connect to the Data Fabric and AI Middleware to show live results.
              This demo uses synthetic data only.
            </p>
          </div>
        )}
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={closeCapabilityDemo}
            className="rounded-xl bg-cordros-accent/20 px-4 py-2 text-sm font-medium text-cordros-accent hover:bg-cordros-accent/30 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
