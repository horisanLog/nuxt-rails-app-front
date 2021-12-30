export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/sass/app.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['plugins/axios'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
  i18n: {
    // 対応言語の指定
    locales: ['ja', 'en'],
    // デフォルトで使用する言語を指定
    defaultLocale: 'ja',
    // Doc: https://kazupon.github.io/vue-i18n/api/#properties
    vueI18n: {
      fallbackLocale: 'ja',
      // i18nの健康を完全に表示しない(default: false)
      // silentTranslationWarn: true,

      // フォールバック時に傾向句を発生させる
      // trueだと警告を発生させない
      silentFallbackWarn: true,
      // 翻訳データ
      messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        // 値として false を渡すことによりプラグインを無効化します
        'postcss-url': false,
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'postcss-hexrgba': {}
      },
      preset: {
        // postcss-preset-env 設定を変更します
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
