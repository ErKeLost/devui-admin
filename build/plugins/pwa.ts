import { VitePWA } from 'vite-plugin-pwa'

export default function setupVitePwa() {
  return VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico'],
    manifest: {
      name: 'DevUIAdmin',
      short_name: 'DevUIAdmin',
      theme_color: '#fff',
      icons: [
        {
          src: '/devui.svg',
          sizes: '192x192',
          type: 'image/svg'
        },
        {
          src: '/devui.svg',
          sizes: '512x512',
          type: 'image/svg'
        },
        {
          src: '/devui.svg',
          sizes: '512x512',
          type: 'image/svg',
          purpose: 'any maskable'
        }
      ]
    }
  })
}
