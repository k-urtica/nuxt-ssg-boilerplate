<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

defineOgImageComponent('OgDefault');

const { locale } = useI18n();

const SITE_NAME = 'Nuxt SSG Boilerplate';
const description = computed(() => $t('A simple and fast Nuxt SSG boilerplate.'));

const i18nHead = useLocaleHead({
  dir: true,
  lang: true,
  seo: true,
});

useHead({
  htmlAttrs: {
    lang: () => i18nHead.value.htmlAttrs!.lang,
    dir: () => locales[locale.value].dir,
  },
  title: SITE_NAME,
  titleTemplate: '%s | ' + SITE_NAME,
  meta: () => [
    {
      key: 'description',
      name: 'description',
      content: description,
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: description,
    },
    ...(i18nHead.value.meta || []),
  ],

  link: () => [...(i18nHead.value.link || [])],
});
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
