import path from 'node:path'
import { defineConfig } from 'vite'
import { setupVitePlugins } from '~/build'

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: setupVitePlugins(),
  build: {
    reportCompressedSize: false,
    sourcemap: false,
    commonjsOptions: {
      ignoreTryCatch: false
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src')
    }
  }
}))
