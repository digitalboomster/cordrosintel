<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="h-14 border-b border-cordros-slate bg-cordros-slate/50 flex items-center justify-between px-4 shrink-0"
    >
      <div class="flex items-center gap-6">
        <a href="/" class="text-lg font-semibold text-white tracking-tight">Cordros Intelligence</a>
        <ArmNav
          :current-path="route.path"
          :has-access-to-arm="authStore.hasAccessToArm"
          @arm-change="onArmChange"
        />
      </div>
      <div class="flex items-center gap-3">
        <GlobalSearch />
        <Notifications />
        <span class="text-sm text-slate-400">{{ authStore.user?.name ?? "Guest" }}</span>
      </div>
    </header>

    <div class="flex-1 flex flex-col">
      <div
        v-if="armConfig"
        class="px-4 py-2 bg-cordros-slate/30 border-b border-cordros-slate"
      >
        <h1 class="text-sm font-medium text-slate-300">
          {{ armConfig.shortName }}
          <span class="text-slate-500 font-normal ml-2">— {{ armConfig.description }}</span>
        </h1>
      </div>
      <main class="flex-1 p-4 overflow-auto">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { ARMS, getArmById } from "@/config/arms";
import type { ArmId } from "@/config/arms";
import ArmNav from "@/components/shell/ArmNav.vue";
import GlobalSearch from "@/components/shell/GlobalSearch.vue";
import Notifications from "@/components/shell/Notifications.vue";

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const armFromPath = computed(() => ARMS.find((a) => route.path.startsWith(a.path))?.id ?? null);
const armConfig = computed(() => {
  const id = armFromPath.value ?? authStore.currentArm;
  return id ? getArmById(id) : undefined;
});

function onArmChange(path: string, id: ArmId) {
  if (!authStore.hasAccessToArm(id)) return;
  authStore.setCurrentArm(id);
  router.push(path);
}
</script>
