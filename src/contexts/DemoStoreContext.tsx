/**
 * In-memory demo store. No backend — state lives in React; optional localStorage persist for refresh.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  SYNTHETIC_AUDIT,
  SYNTHETIC_HITL,
  type AuditEntry,
  type HITLTask,
} from "@/data/synthetic";

const STORAGE_KEY = "cordros-demo-store";

interface DemoStoreState {
  hitlTasks: HITLTask[];
  auditLog: AuditEntry[];
  addAuditEntry: (entry: Omit<AuditEntry, "id">) => void;
  approveHitl: (id: string) => void;
  rejectHitl: (id: string) => void;
  dismissHitl: (id: string) => void;
  resetDemo: () => void;
}

const DemoStoreContext = createContext<DemoStoreState | null>(null);

function loadPersisted(): { hitl: HITLTask[]; audit: AuditEntry[] } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { hitl: SYNTHETIC_HITL, audit: SYNTHETIC_AUDIT };
    const { hitl, audit } = JSON.parse(raw);
    return {
      hitl: Array.isArray(hitl) ? hitl : SYNTHETIC_HITL,
      audit: Array.isArray(audit) ? audit : SYNTHETIC_AUDIT,
    };
  } catch {
    return { hitl: SYNTHETIC_HITL, audit: SYNTHETIC_AUDIT };
  }
}

function persist(hitl: HITLTask[], audit: AuditEntry[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ hitl, audit }));
  } catch {
    // ignore
  }
}

export function DemoStoreProvider({ children }: { children: ReactNode }) {
  const [hitlTasks, setHitlTasks] = useState<HITLTask[]>(() => loadPersisted().hitl);
  const [auditLog, setAuditLog] = useState<AuditEntry[]>(() => loadPersisted().audit);

  const addAuditEntry = useCallback((entry: Omit<AuditEntry, "id">) => {
    const id = `A-${Date.now()}`;
    const newEntry: AuditEntry = { ...entry, id };
    setAuditLog((prev) => [newEntry, ...prev]);
  }, []);

  const approveHitl = useCallback((id: string) => {
    setHitlTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "approved" as const } : t))
    );
    const task = hitlTasks.find((t) => t.id === id);
    if (task) {
      setAuditLog((prevLog) => [
        {
          id: `A-${Date.now()}`,
          timestamp: new Date().toISOString(),
          userId: "user@cordros.com",
          action: "Approved",
          entityType: "HITL",
          entityId: id,
          details: task.title,
          modelId: undefined,
        },
        ...prevLog,
      ]);
    }
  }, [hitlTasks, auditLog]);

  const rejectHitl = useCallback((id: string) => {
    setHitlTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "rejected" as const } : t))
    );
    const task = hitlTasks.find((t) => t.id === id);
    if (task) {
      setAuditLog((prevLog) => [
        {
          id: `A-${Date.now()}`,
          timestamp: new Date().toISOString(),
          userId: "user@cordros.com",
          action: "Rejected",
          entityType: "HITL",
          entityId: id,
          details: task.title,
          modelId: undefined,
        },
        ...prevLog,
      ]);
    }
  }, [hitlTasks, auditLog]);

  const dismissHitl = useCallback((id: string) => {
    setHitlTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const resetDemo = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setHitlTasks(SYNTHETIC_HITL);
    setAuditLog(SYNTHETIC_AUDIT);
  }, []);

  // Persist to localStorage whenever state changes
  React.useEffect(() => {
    persist(hitlTasks, auditLog);
  }, [hitlTasks, auditLog]);

  const value = useMemo(
    () => ({
      hitlTasks,
      auditLog,
      addAuditEntry,
      approveHitl,
      rejectHitl,
      dismissHitl,
      resetDemo,
    }),
    [hitlTasks, auditLog, addAuditEntry, approveHitl, rejectHitl, dismissHitl, resetDemo]
  );

  return <DemoStoreContext.Provider value={value}>{children}</DemoStoreContext.Provider>;
}

export function useDemoStore() {
  const ctx = useContext(DemoStoreContext);
  if (!ctx) throw new Error("useDemoStore must be used within DemoStoreProvider");
  return ctx;
}
