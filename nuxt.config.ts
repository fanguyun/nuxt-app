// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'node:path';
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  modules: [
    '@nuxtjs/color-mode',
    '@element-plus/nuxt',
    'nuxt-mongoose',
    '@hebilicious/authjs-nuxt'
  ],
  elementPlus: {
    /** Options */
  },
  mongoose: {
    uri: process.env.MONGODB_URI,
    options: {
      // useUnifiedTopology: true,
      // useNewUrlParser: true
    },
    modelsDir: 'models',
    devtools: true
  },
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET // You can generate one with `openssl rand -base64 32`
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The URL of your deployed app (used for origin Check in production)
        verifyClientOnEveryRequest: true // whether to hit the /auth/session endpoint on every client request
      }
    }
  },
  alias: {
    cookie: resolve(__dirname, 'node_modules/cookie')
  }
});
