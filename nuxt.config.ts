// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'sr',

    locales: [
      {
        code: 'sr',
        name: 'Srpski',
        file: 'sr.json'
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json'
      }
    ],
    customRoutes: 'config',
    pages: {
      about: {
        sr: '/o-nama',
        en: '/about'
      },
      services: {
        sr: '/usluge',
        en: '/services'
      },
      contact: {
        sr: '/kontakt',
        en: '/contact'
      },
      education: {
        sr: '/edukacija',
        en: '/education'
      }
    },
    lazy: true,
    langDir: 'locales/',
  },
  image: {
    format: ['webp'],
  },
  css: ['@/assets/css/main.css'],
  fonts: {
    families: [
      {
        name: 'Noto Serif Display',
        provider: 'google', // or 'none' if self-hosted
        weights: [100, 200, 300, 400, 500, 600],
        subsets: ['latin']
      },
    ]
  },
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      title: 'Bioglow',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }
})