import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export interface CapabilityDemoPayload {
  title: string;
  description: string;
  sample?: ReactNode;
}

interface DemoModalContextValue {
  openCapabilityDemo: (payload: CapabilityDemoPayload) => void;
  closeCapabilityDemo: () => void;
  capabilityDemo: CapabilityDemoPayload | null;
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [capabilityDemo, setCapabilityDemo] = useState<CapabilityDemoPayload | null>(null);

  const openCapabilityDemo = useCallback((payload: CapabilityDemoPayload) => {
    setCapabilityDemo(payload);
  }, []);

  const closeCapabilityDemo = useCallback(() => {
    setCapabilityDemo(null);
  }, []);

  return (
    <DemoModalContext.Provider
      value={{ openCapabilityDemo, closeCapabilityDemo, capabilityDemo }}
    >
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}
