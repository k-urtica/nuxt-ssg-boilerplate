<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

const { locale } = useI18n();
</script>

<template>
  <UApp
    :locale="locales[locale]"
    :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }"
  >
    <NuxtPage />
  </UApp>
</template>
