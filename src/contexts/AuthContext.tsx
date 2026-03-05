import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type ArmId = "banking" | "im" | "securities" | "research" | "wealth" | "registrars";

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  arms: ArmId[];
}

interface AuthContextValue {
  user: User | null;
  currentArm: ArmId | null;
  setCurrentArm: (arm: ArmId | null) => void;
  hasAccessToArm: (arm: ArmId) => boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const MOCK_USER: User = {
  id: "1",
  name: "Platform User",
  email: "user@cordros.com",
  roles: ["analyst", "viewer"],
  arms: ["banking", "im", "securities", "research", "wealth", "registrars"],
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user] = useState<User | null>(MOCK_USER);
  const [currentArm, setCurrentArm] = useState<ArmId | null>("banking");

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      currentArm,
      setCurrentArm,
      hasAccessToArm: (arm) => user?.arms.includes(arm) ?? false,
    }),
    [user, currentArm]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
