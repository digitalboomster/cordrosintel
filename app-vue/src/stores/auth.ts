import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { ArmId } from "@/config/arms";

export interface User {
  id: string;
  name: string;
  email: string;
  roles: string[];
  arms: ArmId[];
}

const MOCK_USER: User = {
  id: "1",
  name: "Platform User",
  email: "user@cordros.com",
  roles: ["analyst", "viewer"],
  arms: ["banking", "im", "securities", "research", "wealth", "registrars"],
};

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(MOCK_USER);
  const currentArm = ref<ArmId | null>("banking");

  const hasAccessToArm = computed(() => (arm: ArmId) => user.value?.arms.includes(arm) ?? false);

  function setCurrentArm(arm: ArmId | null) {
    currentArm.value = arm;
  }

  return { user, currentArm, hasAccessToArm, setCurrentArm };
});
