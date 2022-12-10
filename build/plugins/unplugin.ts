// import Components from 'unplugin-vue-components/vite'
// import { DevUiResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import unocss from 'unocss/vite'
// import IconsResolver from 'unplugin-icons/resolver'
import Imagemin from 'unplugin-imagemin/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { getSrcPath } from '../utils'
// const collectionName = VITE_ICON_LOCAL_PREFFIX.replace(
// `${VITE_ICON_PREFFIX}-`,
// ''
// )
const srcPath = getSrcPath()
// const localIconPath = `${srcPath}/assets/svg-icon`
export default function unplugin() {
  return [
    // Components({
    //   dts: true,
    //   resolvers: [DevUiResolver()]
    // })
    Icons({
      compiler: 'vue3',
      customCollections: {
        // [collectionName]: FileSystemIconLoader(localIconPath)
      },
      scale: 1,
      defaultClass: 'inline-block'
    }),
    unocss(),
    Imagemin(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/head', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true
    })
  ]
}
