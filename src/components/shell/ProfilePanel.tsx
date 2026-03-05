import { X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

interface ProfilePanelProps {
  open: boolean;
  onClose: () => void;
}

export function ProfilePanel({ open, onClose }: ProfilePanelProps) {
  const { user } = useAuth();

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in" aria-hidden onClick={onClose} />
      <div
        className="fixed right-0 top-0 z-50 h-full w-full max-w-sm overflow-y-auto border-l border-white/10 bg-cordros-surfaceElevated shadow-card animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-label="Profile"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-cordros-surfaceElevated px-4 py-3">
          <h2 className="text-base font-semibold text-cordros-text">Profile</h2>
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
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Name</p>
            <p className="mt-1 text-sm font-medium text-cordros-text">{user?.name ?? "Guest"}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Email</p>
            <p className="mt-1 text-sm text-cordros-textSecondary">{user?.email ?? "—"}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Roles</p>
            <p className="mt-1 text-sm text-cordros-textSecondary">
              {user?.roles?.length ? user.roles.join(", ") : "—"}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-cordros-textTertiary">Access</p>
            <p className="mt-1 text-sm text-cordros-textSecondary">
              {user?.arms?.length ? "All business arms" : "—"}
            </p>
          </div>
          <p className="text-xs text-cordros-textTertiary pt-2 border-t border-white/5">
            Demo: profile data is mock. In production this would come from SSO and your permissions.
          </p>
        </div>
      </div>
    </>
  );
}
