import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './utils/axios'
// VMdEditor Start
// @ts-ignore
import VueMarkdownEditor from '@kangc/v-md-editor'
// @ts-ignore
import VMdEditor from '@kangc/v-md-editor/lib/codemirror-editor'
import '@kangc/v-md-editor/lib/style/codemirror-editor.css'
// @ts-ignore
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import '@kangc/v-md-editor/lib/theme/style/github.css'
// @ts-ignore
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
// @ts-ignore
import Prism from 'prismjs'
// highlightjs
import hljs from 'highlight.js'

// codemirror 编辑器的相关资源
// @ts-ignore
import Codemirror from 'codemirror'
// mode
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/vue/vue'
// edit
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/edit/matchbrackets'
// placeholder
import 'codemirror/addon/display/placeholder'
// active-line
import 'codemirror/addon/selection/active-line'
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/addon/scroll/simplescrollbars.css'
// style
import 'codemirror/lib/codemirror.css'

// VMdEditor End

// highlightjs

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
})
// 自定义组件方法 Start
import CompleteDeepClone from './utils/tools/CompleteDeepClone'
import FormatDate from './utils/tools/FormatDate' //单据模块详情的计算逻辑
import FormatDate2 from './utils/tools/FormatDate2' //单据模块详情的计算逻辑
// 自定义组件方法 End

VMdEditor.Codemirror = Codemirror
VMdEditor.use(githubTheme, {
  Hljs: hljs,
})

const app = createApp(App)
app.use(router)
app.use(VueMarkdownEditor)
app.use(VMdEditor)

// 将组件或者方法、变量挂载在全局
//1.(不推荐)  通过app.config.globalProperties将组件或者方法、变量挂载在全局
app.config.globalProperties.$FormatDate2 = FormatDate2
// 2.provide / inject （推荐） 通过provide将组件或者方法、变量挂载在全局
app.provide('FormatDate', FormatDate)
app.provide('CompleteDeepClone', CompleteDeepClone)
app.provide('$http', axios)

app.mount('#app')
// 把vue实例挂载在window.vm,方便使用vue的实例
// 会报错？
// window.vm = app;
