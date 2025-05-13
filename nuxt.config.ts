// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon'],
  css: ['@/assets/css/main.css'],
  fonts: {
    families: [
      {
        name: 'Noto Serif Display',
        provider: 'google', // or 'none' if self-hosted
        weights: [100, 300, 400, 600]
      },
    ]
  },
  ssr: true,
  nitro: {
    preset: 'static'
  },
})