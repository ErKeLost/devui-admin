import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupAssets } from './plugins'
import { setupStore } from './store'
import i18n from './plugins/locales/index'

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
