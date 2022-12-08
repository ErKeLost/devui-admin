import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

/** setup vue router. - [安装vue路由] */
export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
