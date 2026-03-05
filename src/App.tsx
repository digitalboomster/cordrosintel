import { Routes, Route, Navigate } from "react-router-dom";
import Shell from "@/layouts/Shell";
import { WorkspaceRoutes } from "@/routes/WorkspaceRoutes";
import { OverviewView } from "@/views/OverviewView";
import { AuditView } from "@/views/AuditView";
import { ExplainView } from "@/views/ExplainView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<OverviewView />} />
        <Route path="banking/*" element={<WorkspaceRoutes arm="banking" />} />
        <Route path="im/*" element={<WorkspaceRoutes arm="im" />} />
        <Route path="securities/*" element={<WorkspaceRoutes arm="securities" />} />
        <Route path="research/*" element={<WorkspaceRoutes arm="research" />} />
        <Route path="wealth/*" element={<WorkspaceRoutes arm="wealth" />} />
        <Route path="registrars/*" element={<WorkspaceRoutes arm="registrars" />} />
        <Route path="audit" element={<AuditView />} />
        <Route path="explain" element={<ExplainView />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
