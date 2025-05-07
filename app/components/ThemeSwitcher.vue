<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <ClientOnly>
    <USwitch
      v-model="isDark"
      label="Theme"
      checked-icon="i-lucide-moon"
      unchecked-icon="i-lucide-sun"
      color="neutral"
    />
    <template #fallback>
      <USkeleton class="h-5 w-32" />
    </template>
  </ClientOnly>
</template>
