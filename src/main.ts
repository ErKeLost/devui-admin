import { createApp } from 'vue'
import DevUI from 'vue-devui'
import { ThemeServiceInit, infinityTheme } from 'devui-theme'
/** 重置样式 这里引入自定义的重置样式也可 */
// import '@unocss/reset/tailwind.css'
import { setupStore } from '@/store'
import { setupAssets } from '@/plugins'
import { setupRouter } from '@/router'
import i18n from '@/plugins/locales/index'
import App from './App.vue'
import 'vue-devui/style.css'
import 'uno.css'
import '@devui-design/icons/icomoon/devui-icon.css'
async function setupApp() {
  // import assets: js、css
  setupAssets()

  const app = createApp(App)

  // store plugin: pinia
  setupStore(app)

  ThemeServiceInit({ infinityTheme }, 'infinityTheme')
  // vue router
  await setupRouter(app)
  app.use(i18n)
  app.use(DevUI)
  // mount app
  app.mount('#app')
}

setupApp()
