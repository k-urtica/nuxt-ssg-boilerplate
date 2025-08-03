<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    description?: string;
    showSiteName?: boolean;
  }>(),
  {
    showSiteName: true,
  }
);
</script>

<template>
  <div
    class="bg-white"
    style="
      background-image:
        linear-gradient(to right, rgb(229 231 235 / 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(229 231 235 / 0.4) 1px, transparent 1px);
      background-size: 30px 30px;
    "
  >
    <div class="flex h-full items-center justify-center">
      <div class="text-center text-6xl font-black text-black">
        {{ title }}
      </div>

      <div class="mt-10 px-20 text-center text-2xl text-balance text-zinc-900">
        {{ description }}
      </div>

      <div v-if="showSiteName" class="absolute right-8 bottom-4 text-2xl font-bold">
        Nuxt SSG Boilerplate
      </div>
    </div>
  </div>
</template>
