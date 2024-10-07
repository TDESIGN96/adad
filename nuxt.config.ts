// nuxt.config.ts or nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Idad",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
          defer: true,
        },
      ]
    }
  },

  css: [
    "bootstrap/scss/bootstrap.scss",
    "swiper/css/bundle",
    "@/assets/css/font-awesome-pro.css",
    "@/assets/css/nice-select.css",
    "@/assets/scss/main.scss",
    "@/assets/css/style-en.scss",
  ],

  

  
})
