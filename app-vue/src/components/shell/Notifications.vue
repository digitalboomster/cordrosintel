<template>
  <div class="relative">
    <button
      type="button"
      class="p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-white/5"
      aria-label="Notifications"
      @click="open = !open"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m-6 0H9"
        />
      </svg>
    </button>
    <template v-if="open">
      <div class="fixed inset-0 z-40" aria-hidden @click="open = false" />
      <div
        class="absolute right-0 top-full mt-1 z-50 w-80 rounded-lg border border-cordros-slate bg-cordros-navy shadow-xl p-2"
      >
        <p class="text-sm font-medium text-slate-300 px-2 py-1">Notifications</p>
        <p class="text-xs text-slate-500 px-2 py-2">HITL approvals, risk alerts, compliance tasks.</p>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const open = ref(false);
</script>
