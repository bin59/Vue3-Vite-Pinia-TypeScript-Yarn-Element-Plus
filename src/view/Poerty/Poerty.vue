<template>
  <div>
    <v-md-editor v-model="text" height="400px"></v-md-editor>
    <v-md-preview v-if="md" :text="md"></v-md-preview>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
let text = '# 123' // 输入的markdown
let md = ''

axios.get('/src/assets/md/Poerty.md').then(res => {
  md = res.data
  console.log(md)
})
</script>
