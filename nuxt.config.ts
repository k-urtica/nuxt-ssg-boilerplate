const SITE_NAME = 'Nuxt SSG Boilerplate';
const SITE_URL = 'https://example.com';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/ui',
    'motion-v/nuxt',
    'nuxt-og-image',
  ],

  // $production: {
  //   scripts: {
  //     registry: {
  //       googleAnalytics: {
  //         id: 'G-XXXXXXXXXX',
  //       },
  //     },
  //   },
  // },

  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        prefix: 'og: http://ogp.me/ns#',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:url', content: SITE_URL },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '48x48',
        },
        {
          rel: 'icon',
          href: '/favicon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
        },
      ],
    },
  },

  css: ['@/assets/main.css'],

  site: {
    name: SITE_NAME,
    url: SITE_URL,
  },

  ui: {
    colorMode: true,
    fonts: true,
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-07-15',

  vite: {
    optimizeDeps: {
      entries: ['pages/**/*.vue', 'components/**/*.vue'],
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  i18n: {
    baseUrl: SITE_URL,
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.yaml',
      },
      {
        code: 'ja',
        language: 'ja-JP',
        name: '日本語',
        file: 'ja.yaml',
      },
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
  },

  icon: {
    provider: 'iconify',
    clientBundle: {
      scan: true,
    },
    serverBundle: false,
  },

  ogImage: {
    enabled: true,
    fonts: ['Noto+Sans+JP:400', 'Noto+Sans+JP:700'],
    zeroRuntime: true,
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});
