import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js'
// import zh from './lang/zh-CN'
// import en from './lang/en-US'
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}
export default createI18n({
  legacy: false,
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages
})
