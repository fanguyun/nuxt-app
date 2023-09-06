// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  modules: ['@nuxtjs/color-mode', '@element-plus/nuxt', 'nuxt-mongoose'],
  elementPlus: {
    /** Options */
  },
  mongoose: {
    uri: 'mongodb+srv://289696260:Q8JnSB9IUk0Sh62D@cluster0.yky513c.mongodb.net/',
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    modelsDir: 'models',
    devtools: true
  }
});
