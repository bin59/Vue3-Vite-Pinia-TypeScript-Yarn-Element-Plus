import Picture from '@/view/Picture/Picture.vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Picture', //使用redirect重定向，默认系统显示的第一页
  },
  {
    name: 'Picture',
    path: '/Picture',
    component: Picture,
    meta: { title: '首页' },
    children: [
      {
        name: 'ECharts',
        path: '/ECharts',
        component: () => import('@/view/ECharts/ECharts.vue'),
        meta: { title: 'ECharts.js' },
      },
      {
        name: 'Three',
        path: '/Three',
        component: () => import('@/view/Three/Three.vue'),
        meta: { title: 'Three.js' },
      },
      {
        name: 'Me',
        path: '/Me',
        component: () => import('@/view/Me/Me.vue'),
        meta: { title: 'Me' },
      },

      {
        name: 'Bookmarks',
        path: '/Bookmarks',
        component: () => import('@/view/Bookmarks/Bookmarks.vue'),
        meta: { title: 'Bookmarks' },
      },
      {
        name: 'Piano',
        path: '/Piano',
        component: () => import('@/view/Piano/Piano.vue'),
        meta: { title: 'Piano' },
      },
      {
        name: 'Picture',
        path: '/Picture',
        component: () => import('@/view/Picture/Picture.vue'),
        meta: { title: 'Picture' },
      },
      {
        name: 'Music',
        path: '/Music',
        component: () => import('@/view/Music/Music.vue'),
        meta: { title: 'Music' },
      },
      {
        name: 'Poerty',
        path: '/Poerty',
        component: () => import('@/view/Poerty/Poerty.vue'),
        meta: { title: 'Poerty' },
      },
      {
        name: 'login',
        path: '/login',
        component: () => import('@/view/login/login.vue'),
        meta: { title: 'login' },
      },
      {
        name: 'imgUpload',
        path: '/imgUpload',
        component: () => import('@/view/imgUpload/imgUpload.vue'),
        meta: { title: 'imgUpload' },
      },
      {
        name: 'Table',
        path: '/Table',
        component: () => import('@/view/Table/Table.vue'),
        meta: { title: 'Table' },
      },
    ],
  },
] //路由写法与vue2版本一样，下边在补充

const router = createRouter({
  history: createWebHistory(), //history模式   导航栏地址不带-#
  // history: createWebHashHistory(),//hash模式 导航栏地址带-#
  routes,
})

export default router
