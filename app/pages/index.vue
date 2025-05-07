<script setup lang="ts">
import { motion } from 'motion-v';

useSeoMeta({
  titleTemplate: null,
});
</script>

<template>
  <div class="min-h-svh py-20">
    <UContainer>
      <motion.h1 v-bind="slideUp()" class="text-3xl font-bold">
        My Nuxt SSG Boilerplate👋
      </motion.h1>

      <div class="mt-10">
        <UButton
          :label="$t('About')"
          icon="i-lucide-info"
          trailing-icon="i-lucide-arrow-right"
          variant="subtle"
          :to="$localePath('about')"
        />
      </div>

      <div class="mt-10 flex flex-col gap-5 border-y py-6">
        <ThemeSwitcher />

        <LangSwitcher />
      </div>
    </UContainer>
  </div>
</template>
