<script setup lang="ts">
import * as locales from '@nuxt/ui/locale';

defineOgImageComponent('OgDefault');

const { locale } = useI18n();
const route = useRoute();
const siteConfig = useSiteConfig();

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
      name: 'description',
      content: description,
    },
    {
      property: 'og:url',
      content: `${siteConfig.url}${route.path}`,
    },
    {
      property: 'og:description',
      content: description,
    },
    ...(i18nHead.value.meta || []),
  ],

  link: () => [...(i18nHead.value.link || [])],
});
</script>

<template>
  <UApp :tooltip="{ delayDuration: 100, skipDelayDuration: 150 }">
    <NuxtPage />
  </UApp>
</template>
