import { PageShell } from "@/components/ui/PageShell";
import { KNOWLEDGE_GRAPH_ENTITIES } from "@/data/chartData";
import { Network } from "lucide-react";

export function KnowledgeGraphView() {
  return (
    <PageShell
      backTo="/research"
      backLabel="Back to Research Studio"
      title="Sector knowledge graph"
      description="Interlinkages and entity relationships. Entities and link counts by sector."
    >
      <div className="rounded-2xl border border-white/[0.06] bg-cordros-surface/80 overflow-hidden">
        <div className="p-3 border-b border-white/[0.06] flex items-center gap-2">
          <Network className="h-4 w-4 text-cordros-accent" />
          <span className="text-sm font-medium text-cordros-text">Entity graph (sample)</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-cordros-textTertiary uppercase">
              <th className="p-4 font-medium">Entity</th>
              <th className="p-4 font-medium">Sector</th>
              <th className="p-4 font-medium">Links</th>
            </tr>
          </thead>
          <tbody>
            {KNOWLEDGE_GRAPH_ENTITIES.map((e) => (
              <tr key={e.id} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                <td className="p-4 text-cordros-text">{e.entity}</td>
                <td className="p-4 text-cordros-textSecondary">{e.sector}</td>
                <td className="p-4 text-cordros-text">{e.links}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-cordros-textTertiary">
        Graph supports precedent retrieval and relationship heat maps; entities are indexed from research and filings.
      </p>
    </PageShell>
  );
}
