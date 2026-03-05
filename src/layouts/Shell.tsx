import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { ARMS, getArmById } from "@/config/arms";
import type { ArmId } from "@/contexts/AuthContext";
import { Sidebar } from "@/components/shell/Sidebar";
import { GlobalSearch } from "@/components/shell/GlobalSearch";
import { WayfindingBar } from "@/components/shell/WayfindingBar";
import { CommandPalette } from "@/components/shell/CommandPalette";
import { Notifications } from "@/components/shell/Notifications";
import { UserMenu } from "@/components/shell/UserMenu";
import { HelpPanel } from "@/components/shell/HelpPanel";
import { CapabilityDemoModal } from "@/components/ui/CapabilityDemoModal";
import { HelpCircle } from "lucide-react";

export default function Shell() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setCurrentArm, hasAccessToArm } = useAuth();
  const [commandOpen, setCommandOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const armFromPath = ARMS.find((a) => location.pathname.startsWith(a.path))?.id ?? null;
  const armConfig = armFromPath ? getArmById(armFromPath) : null;
  const isOverview = location.pathname === "/";
  const isAudit = location.pathname === "/audit";
  const isExplain = location.pathname === "/explain";

  const handleArmChange = (path: string, id: ArmId) => {
    if (!hasAccessToArm(id)) return;
    setCurrentArm(id);
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-cordros-bg">
      <Sidebar onArmChange={handleArmChange} />

      <div className="pl-52">
        <header className="relative sticky top-0 z-20 flex h-14 items-center justify-between gap-4 border-b border-white/[0.06] bg-cordros-bg/90 px-6 backdrop-blur-xl">
          {(armConfig || isOverview || isAudit || isExplain) && (
            <div className="min-w-0">
              <h1 className="truncate text-base font-semibold tracking-tight text-cordros-text">
                {isOverview ? "Overview" : isAudit ? "Audit trail" : isExplain ? "Explainability" : armConfig!.shortName}
              </h1>
              <p className="mt-0.5 truncate text-xs text-cordros-textTertiary">
                {isOverview ? "What this platform is and how to use it" : isAudit ? "Immutable action log" : isExplain ? "Model decision explanations" : armConfig!.description}
              </p>
            </div>
          )}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 xl:block">
            <GlobalSearch onOpen={() => setCommandOpen(true)} />
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => setHelpOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-cordros-textTertiary hover:bg-white/[0.06] hover:text-cordros-text"
              aria-label="How it works"
              title="How it works"
            >
              <HelpCircle className="h-5 w-5" strokeWidth={2} />
            </button>
            <GlobalSearch onOpen={() => setCommandOpen(true)} className="xl:hidden" />
            <Notifications />
            <UserMenu />
          </div>
        </header>

        <div className="border-b border-white/[0.04] bg-cordros-bg/50">
          <div className="mx-auto max-w-7xl px-6">
            <WayfindingBar />
          </div>
        </div>
        <main className="min-h-[calc(100vh-4rem)] bg-mesh p-6">
          <div className="mx-auto max-w-7xl animate-fade-in" key={location.pathname}>
            <Outlet />
          </div>
        </main>
      </div>

      <CommandPalette open={commandOpen} onClose={() => setCommandOpen(false)} />
      <HelpPanel open={helpOpen} onClose={() => setHelpOpen(false)} />
      <CapabilityDemoModal />
    </div>
  );
}
