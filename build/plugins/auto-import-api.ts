// 自动导入 API
import AutoImport from 'unplugin-auto-import/vite'

export function setupAtuoImport() {
  // 自动导入 相关库的 API
  return AutoImport({
    // 指定要进行自动导入的文件类型
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/, /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    // 指定需自动导入的库
    imports: [
      // 预定义
      'vue', // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      'pinia',
      // 'vue-router',
      // '@vueuse/core',
    ],
    // 指定生成路径 注：需是相对路径
    dts: 'src/types/auto-imports.d.ts',
  })
}
