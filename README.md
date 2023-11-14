# Vue3+Vite+Pinia+TypeScript+Yarn+Element Plus

## 介绍

Vue3+Vite+Pinia+TypeScript+Yarn+Element Plus 项目学习

## 一、项目环境

1. [vue3](https://cn.vuejs.org/guide/introduction.html)
   1.1 [vue-route4.x](https://router.vuejs.org/zh/introduction.html)

2. [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)([中文网](https://www.tslang.cn/docs/handbook/basic-types.html))
3. [vite](https://cn.vitejs.dev/)
4. [yarn2.x](https://www.yarnpkg.cn/getting-started)

5. [scss]()

   5.1
   5.2 Vite 和 Webpack 不同，不需要 less-loader 等，只需安装 less
   5.3 配置
   在 vite.config.js 中加入：

   ```
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    hack: `true; @import (reference) "${resolve("src/assets/less/index.less")}";`,
                },
                javascriptEnabled: true,
            },
            },
    },
   ```

6. [Pinia](https://pinia.web3doc.top/)

`yarn add pinia`

7. [Axios](https://www.axios-http.cn/docs/intro) Axios 跟 Vue 版本没有直接关系，安装最新即可

### 二、使用框架\依赖

1. [element-plus](https://element-plus.gitee.io/zh-CN/)

[自动导入组件](https://element-plus.gitee.io/zh-CN/guide/quickstart.html)

`yarn add unplugin-vue-components unplugin-auto-import`

```js
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

2. [Vue-ECharts](https://ecomfe.github.io/vue-echarts/README.zh-Hans.html)
3. [three.js](https://threejs.org/docs/index.html#manual/zh/introduction/Creating-a-scene)

4. [prismjs](https://vuepress.github.io/zh/reference/plugin/prismjs.html)

该插件使用 Prism.js 来为 Markdown 代码块启用代码高亮
安装：yarn add @vuepress/plugin-prismjs@next

5. [v-md-editor](http://ckang1229.gitee.io/vue-markdown-editor/zh/)

## 三、运行项目

1. 下载依赖：`yarn`

2. 运行：`yarn dev`

## 四、项目目录

````
├─public
├─src
│   ├─assets
│   │  └─less
│   ├─components
│   ├─router
│   ├─store
│   ├─utils           # 存放常用的工具函数
│   |  └─ axios.ts       # Axios 配置文件
│   ├─view
│   |  ├─ECharts
│   |  ├─index
│   |  ├─Me
│   |  ├─Surely
│   |  └─Three
│   |
│   ├─App.vue
│   |
│```
````

## 五、代码规范

参考：[vue 官方的风格指南](https://vuejs.bootcss.com/style-guide/)
