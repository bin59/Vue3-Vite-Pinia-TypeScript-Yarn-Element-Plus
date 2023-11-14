// 关于 Vite 更多配置项及用法，请查看 Vite 官网 vitejs.dev/config/ 。

import vue from '@vitejs/plugin-vue'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
import { defineConfig } from 'vite'
// Element Plus自动引入组件配置
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Element Plus自动引入组件配置
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      // '@components': join(root, '/components'),
      '@': resolve(__dirname, 'src'), //在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径。
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 写在这里比.vue页面里面style标签里面的后生效？覆盖它的样式
        // 这里先写在index.html里面
        // additionalData: `@use "@/assets/scss/_reset.scss";`, // 此处全局的scss文件
      },
    },
  },
})
