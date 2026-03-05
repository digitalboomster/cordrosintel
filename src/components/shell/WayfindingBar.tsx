import { useLocation } from "react-router-dom";
import { getWayfindingContext } from "@/config/wayfinding";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Unified "You are here" strip for the whole platform.
 * Renders the same way on every page so the product feels like one kingdom, not fragments.
 */
export function WayfindingBar() {
  const location = useLocation();
  const ctx = getWayfindingContext(location.pathname);

  if (ctx.type === "overview" && !ctx.armId) {
    return (
      <div className="flex items-center gap-2 px-1 py-2 text-xs">
        <span className="font-medium text-cordros-text">Cordros Nautilus</span>
        <ChevronRight className="h-3.5 w-3.5 text-cordros-textTertiary" />
        <span className="text-cordros-textTertiary">Overview</span>
      </div>
    );
  }

  if (ctx.type === "governance") {
    return (
      <div className="flex items-center gap-2 px-1 py-2 text-xs">
        <span className="font-medium text-cordros-text">Cordros Nautilus</span>
        <ChevronRight className="h-3.5 w-3.5 text-cordros-textTertiary" />
        <span className="text-cordros-textTertiary">Governance</span>
        <ChevronRight className="h-3.5 w-3.5 text-cordros-textTertiary" />
        <span className="text-cordros-text">{ctx.governanceLabel}</span>
      </div>
    );
  }

  if (ctx.type === "arm" && ctx.armShortName) {
    return (
      <div className="flex items-center gap-2 px-1 py-2 text-xs">
        <span className="font-medium text-cordros-text">Cordros Nautilus</span>
        <ChevronRight className="h-3.5 w-3.5 text-cordros-textTertiary" />
        <span className={cn(!ctx.capabilityLabel && "text-cordros-text")}>
          {ctx.armShortName}
        </span>
        {ctx.capabilityLabel && (
          <>
            <ChevronRight className="h-3.5 w-3.5 text-cordros-textTertiary" />
            <span className="text-cordros-text">{ctx.capabilityLabel}</span>
          </>
        )}
      </div>
    );
  }

  return null;
}
