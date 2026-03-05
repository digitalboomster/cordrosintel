<template>
  <nav class="flex items-center gap-1">
    <button
      v-for="arm in ARMS"
      :key="arm.id"
      type="button"
      :disabled="!hasAccessToArm(arm.id)"
      :class="[
        'px-3 py-1.5 rounded-md text-sm font-medium transition-colors',
        isActive(arm.path)
          ? 'bg-cordros-accent/20 text-cordros-accent'
          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5',
        !hasAccessToArm(arm.id) && 'opacity-50 cursor-not-allowed',
      ]"
      @click="$emit('arm-change', arm.path, arm.id)"
    >
      {{ arm.shortName }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { ARMS } from "@/config/arms";
import type { ArmId } from "@/config/arms";

const route = useRoute();

defineProps<{
  currentPath: string;
  hasAccessToArm: (arm: ArmId) => boolean;
}>();

defineEmits<{
  (e: "arm-change", path: string, id: ArmId): void;
}>();

function isActive(path: string) {
  return route.path.startsWith(path);
}
</script>
