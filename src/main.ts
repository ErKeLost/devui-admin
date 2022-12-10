import { createApp } from 'vue'
import { setupStore } from '@/store'
import { setupAssets } from '@/plugins'
import { setupRouter } from '@/router'
import i18n from '@/plugins/locales/index'
import App from './App.vue'

async function setupApp() {
  // import assets: js、css
  setupAssets()

  const app = createApp(App)

  // store plugin: pinia
  setupStore(app)

  // vue router
  await setupRouter(app)
  app.use(i18n)
  // mount app
  app.mount('#app')
}

setupApp()
