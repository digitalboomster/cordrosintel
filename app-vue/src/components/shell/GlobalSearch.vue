<template>
  <div class="relative">
    <button
      type="button"
      class="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 text-slate-400 hover:text-slate-200 text-sm"
      @click="open = !open"
    >
      <span class="opacity-80">⌘K</span>
      <span>Search</span>
    </button>
    <template v-if="open">
      <div class="fixed inset-0 z-40" aria-hidden @click="open = false" />
      <div
        class="absolute right-0 top-full mt-1 z-50 w-96 rounded-lg border border-cordros-slate bg-cordros-navy shadow-xl p-2"
      >
        <input
          v-model="query"
          type="text"
          placeholder="Search deals, documents, entities…"
          class="w-full px-3 py-2 rounded bg-cordros-slate/50 border border-cordros-slate text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cordros-accent"
          autofocus
        />
        <p class="mt-2 text-xs text-slate-500">Unified search across Data Fabric (role-scoped).</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
const query = ref("");
</script>
