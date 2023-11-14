<template>
  <div>Three</div>
</template>
<script setup lang="ts">
/* 
    导入的时候产生报错：Could not find a declaration file for module 'three'，
    需要在xxx.d.ts 文件里添加
        declare module 'three'
        declare module 'three/examples/jsm/controls/OrbitControls.js'
    */
// import * as THREE from "three";
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'
</script>
