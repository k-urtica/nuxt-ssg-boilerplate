const SITE_NAME = 'Nuxt SSG Boilerplate';
const SITE_DESCRIPTION = 'A simple and fast Nuxt SSG boilerplate.';
const SITE_URL = 'https://example.com';

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    '@nuxt/eslint',
    '@nuxt/scripts',
    '@nuxt/ui',
    'motion-v/nuxt',
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
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      ],
    },
  },

  css: ['@/assets/main.css'],

  site: {
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
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

  linkChecker: {
    enabled: false
  },

  ogImage: {
    enabled: true,
    fonts: ['Noto+Sans+JP:400', 'Noto+Sans+JP:700'],
    zeroRuntime: true,
  },

  seo: {
    meta: {
      author: 'K',
      twitterCard: 'summary_large_image',
      ogType: 'website',
    },
    metaDataFiles: true
  },

  sitemap: {
    autoLastmod: false,
    discoverImages: false,
    sitemaps: false,
  },
});
