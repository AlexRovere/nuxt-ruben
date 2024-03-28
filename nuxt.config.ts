export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY

    },
  },
  css: [
    '~/assets/css/styles.scss'
  ],
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt'],
  quasar: {
    plugins: [
      'Notify',
      'Loading'
    ],
    sassVariables: '~/assets/css/quasar.variables.scss'
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.ico" }
      ]
    }
  }
})
