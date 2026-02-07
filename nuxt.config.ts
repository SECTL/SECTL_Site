// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2026-01-29',
  
  // SSG 模式
  ssr: true,
  nitro: {
    preset: 'static'
  },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],

  // i18n 配置
  i18n: {
    defaultLocale: 'zh-CN',
    langDir: 'locales',
    locales: [
      { code: 'zh-CN', name: '中文', file: 'zh-CN.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
  },

  // 颜色模式配置
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storage: 'sessionStorage',
    storageKey: 'nuxt-color-mode'
  },

  // 站点地图配置
  site: {
    url: 'https://sectl.org',
    name: 'SECTL'
  },

  // CSS 样式
  css: [
    '~/assets/css/main.css'
  ],

  // 应用配置
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#2495f7' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
