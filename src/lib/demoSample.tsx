import React from "react";

/** Generates a small synthetic table for capability demo modals so every card feels "live". */
export function makeSampleTable(
  headers: [string, string, string],
  rows: [string, string, string][]
): React.ReactNode {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs">
        <thead>
          <tr className="border-b border-white/10 text-cordros-textTertiary">
            {headers.map((h) => (
              <th key={h} className="pb-2 pr-4 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="text-cordros-textSecondary">
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/[0.04]">
              {row.map((cell, j) => (
                <td key={j} className="py-2 pr-4">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Default sample for capabilities that don't need a custom table. */
export const defaultSample = (
  <table className="w-full text-left text-xs">
    <thead>
      <tr className="border-b border-white/10 text-cordros-textTertiary">
        <th className="pb-2 pr-4 font-medium">Metric</th>
        <th className="pb-2 pr-4 font-medium">Value</th>
        <th className="pb-2 pr-4 font-medium">Status</th>
      </tr>
    </thead>
    <tbody className="text-cordros-textSecondary">
      <tr className="border-b border-white/[0.04]"><td className="py-2 pr-4">Sample 1</td><td className="py-2 pr-4">—</td><td className="py-2 pr-4">Active</td></tr>
      <tr className="border-b border-white/[0.04]"><td className="py-2 pr-4">Sample 2</td><td className="py-2 pr-4">—</td><td className="py-2 pr-4">Pending</td></tr>
      <tr className="border-b border-white/[0.04]"><td className="py-2 pr-4">Sample 3</td><td className="py-2 pr-4">—</td><td className="py-2 pr-4">Active</td></tr>
    </tbody>
  </table>
);
