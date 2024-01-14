<template>
  <TopMenu />
  <div class="content">
    <router-view />
  </div>
  <div class="bottom">
    Apache Licensed | Copyright © 2023-present zhubin
    <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备2023022695号</a>
  </div>
</template>

<script setup lang="ts">
import TopMenu from '@components/TopMenu/TopMenu.vue'
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#home {
  padding: 15px;
  height: 100vh;
  font-family: 'Nunito', sans-serif;
  color: #4f555f;
  overflow-y: scroll;
}

.bottom {
  height: 1%;
  /* font-size: 14px; */
  text-align: center;
  a {
    outline: none;
    color: #99d8fd;
    text-decoration: underline;
  }
}
</style>
