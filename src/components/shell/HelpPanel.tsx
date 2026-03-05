import { useEffect } from "react";
import { X } from "lucide-react";

interface HelpPanelProps {
  open: boolean;
  onClose: () => void;
}

export function HelpPanel({ open, onClose }: HelpPanelProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in" aria-hidden onClick={onClose} />
      <div
        className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-white/10 bg-cordros-surfaceElevated shadow-card animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-label="How it works"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-cordros-surfaceElevated px-4 py-3">
          <h2 className="text-base font-semibold text-cordros-text">How it works</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-cordros-textTertiary hover:bg-white/10 hover:text-cordros-text"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-4 space-y-6 text-sm">
          <div>
            <h3 className="font-semibold text-cordros-text mb-2">What is this?</h3>
            <p className="text-cordros-textSecondary leading-relaxed">
              Cordros Nautilus is one web platform for six business arms: Investment Banking, Investment Management,
              Securities, Research, Private Wealth, and Registrars. Everyone uses the same data, models, and governance.
              You switch areas via the left sidebar.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-cordros-text mb-2">Sidebar</h3>
            <p className="text-cordros-textSecondary leading-relaxed">
              <strong className="text-cordros-text">Business arms</strong> — Click any arm to open that workspace (deals, risk, research, etc.).
              Each workspace has capability cards; some have extra links (e.g. Banking → Deal pipeline).
            </p>
            <p className="text-cordros-textSecondary leading-relaxed mt-2">
              <strong className="text-cordros-text">Governance</strong> — <strong>Audit</strong> shows who did what and when;
              <strong> Explain</strong> shows why a model made a recommendation. Click <strong className="text-cordros-text">Overview</strong> (or the logo) to return to the welcome guide.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-cordros-text mb-2">Top bar</h3>
            <ul className="text-cordros-textSecondary space-y-1 list-disc list-inside">
              <li><strong className="text-cordros-text">Search (⌘K)</strong> — Find deals, documents, entities; or jump to a workspace.</li>
              <li><strong className="text-cordros-text">Notifications</strong> — Pending approvals (HITL). Approve or Reject to update the audit trail.</li>
              <li><strong className="text-cordros-text">Profile</strong> — Reset demo, sign out.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-cordros-text mb-2">Demo data</h3>
            <p className="text-cordros-textSecondary leading-relaxed">
              This MVP uses synthetic data only; there is no backend. Deals, audit log, and notifications are in-memory
              (and saved in the browser). Use <strong className="text-cordros-text">Reset demo</strong> in your profile to start over.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
