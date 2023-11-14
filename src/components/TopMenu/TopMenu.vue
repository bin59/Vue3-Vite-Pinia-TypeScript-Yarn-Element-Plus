<template>
  <!-- 
      这里出现红色下划波浪线的话, 在tsconfig.json增加配置项即可：
      "vueCompilerOptions": {
        "experimentalDisableTemplateSupport": true
      },
     -->
  <div class="home-top flex spb ali-center">
    <div>晚霞的博客</div>
    <div class="navBar flex spb ali-center">
      <div class="flex spb ali-center">
        <template v-for="(item, idx) in routerList" :key="idx">
          <el-dropdown>
            <span class="el-dropdown-link">
              {{ item.title }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu
                v-if="item.contents?.length"
                v-for="(content, i) in item.contents"
                :key="i"
              >
                <el-dropdown-item v-on:click="">{{ content }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </div>

      <router-link to="/Me">
        <el-avatar :src="touxiang" />
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
// vue3.0取消了2.0部分api，所以路由跳转传值方式有所不同。
// vue3.0新增API：useRouter(路由跳转)和useRoute（有参数的话，在接收页面引入API--useRoute）
import { useRouter } from 'vue-router'

const touxiang = '/src/assets/picture/img1.jpg'
const router = useRouter()
// 左侧菜单
const routerList = [
  {
    title: 'ECharts',
    contents: [],
    sorter: 1,
  },
  {
    title: 'Three',
    contents: [],
    sorter: 1,
  },
  {
    title: 'Bookmarks',
    content: [],
    sorter: 1,
  },
  {
    title: 'Piano',
    contents: [],
    sorter: 1,
  },
  {
    title: 'Picture',
    contents: [],
    sorter: 1,
  },
  {
    title: 'Music',
    contents: [],
    sorter: 1,
  },
  {
    title: 'Poerty',
    contents: [],
    sorter: 1,
  },
  {
    title: 'login',
    contents: [],
    sorter: 1,
  },
  {
    title: 'imgUpload',
    scontent: [],
    sorter: 1,
  },
  {
    title: 'Table',
    contents: [],
    sorter: 1,
  },
]

// 路由跳转方法
const toRouter = (path: String) => {
  router.push(`/${path}`)
}

let mon = '🌗🌘🌑🌒🌓🌔🌕🌖'
let cat = [
  ' 　　　　　  ＿＿',
  ' 　　　　　／＞　　フ',
  ' 　　　　　|  _　 _ l',
  ' 　 　　　／  ミ＿xノ',
  ' 　　 　 /　　　 　 |',
  ' 　　　 /　 ヽ　　 ﾉ',
  ' 　 　 │　　|　|　|',
  ' 　／￣|　　 |　|　|',
  ' 　| (￣ヽ＿_ヽ_)__)',
  ' 　＼二つ',
]

console.log(mon)
console.log(cat.join('\n'))
</script>
<style lang="scss" scoped>
// 菜单
.home-top {
  height: 5%;
}
</style>

<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
