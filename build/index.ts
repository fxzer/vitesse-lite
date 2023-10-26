import type { PluginOption} from 'vite'
// import { createHtmlPlugin } from 'vite-plugin-html'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'
// import UnoCSS from 'unocss/vite'
// import Icons from 'unplugin-icons/vite'

// import Inspect from 'vite-plugin-inspect'
// import VueDevTools from 'vite-plugin-vue-devtools'
import { setupAtuoImport} from './plugins'
export function setupVitePlugins(): (PluginOption | PluginOption[])[] {
  return [
    vue(),
    setupAtuoImport(),
  ]
}
