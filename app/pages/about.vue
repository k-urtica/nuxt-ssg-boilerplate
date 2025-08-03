<script setup lang="ts">
import { motion } from 'motion-v';

defineOgImageComponent('OgDefault');

useSeoMeta({
  title: () => $t('About'),
});
</script>

<template>
  <div class="min-h-svh py-20">
    <UContainer>
      <motion.h1 v-bind="slideUp()" class="text-3xl font-bold">
        {{ $t('About') }}
      </motion.h1>

      <div class="mt-10">
        <UButton
          label="Home"
          icon="i-lucide-home"
          trailing-icon="i-lucide-arrow-right"
          variant="subtle"
          :to="$localePath('index')"
        />
      </div>
    </UContainer>
  </div>
</template>
