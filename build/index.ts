import type { PluginOption } from 'vite'

import vue from '@vitejs/plugin-vue'

// import Inspect from 'vite-plugin-inspect'
// import VueDevTools from 'vite-plugin-vue-devtools'
import { setupAtuoImport } from './plugins'

export function setupVitePlugins(): (PluginOption | PluginOption[])[] {
  return [
    vue(),
    setupAtuoImport(),
  ]
}
