import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unplugin from './unplugin'

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(): (PluginOption | PluginOption[])[] {
  const plugins = [vue(), vueJsx(), ...unplugin()]
  return plugins
}
