<template>
  <div class="wrapper">
    <div class="imgBox flex">
      <div v-for="url in imgList">
        <el-image
          :key="url"
          :src="url"
          fit="cover"
          :preview-src-list="[url]"
          hide-on-click-modal
          lazy
        >
          <template #error>
            <div class="image-slot">
              <el-icon><icon-picture /></el-icon>
            </div>
          </template>
        </el-image>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const imgList = [].map(item => (item = item))

const $http: any = inject('$http')
$http.get('jeecg-boot/sys/app', {})
</script>
<style>
/*
 点击预览图片的时候，图片受到_reset.scss里面
    img {
      width: 100%;
    }
    的影响，让宽度为100了，图片会变形
    需要重新设置.el-image-viewer__canvas img的width
    而且在：  style lang="scss" scoped 中写不生效，必须在这里面写
*/
.el-image-viewer__canvas img {
  width: auto;
}
</style>

<style lang="scss" scoped>
.wrapper {
  background-image: linear-gradient(
    102.7deg,
    #fddaff 8.2%,
    #dfadfc 19.6%,
    #adcdfc 36.8%,
    #adfcf4 73.2%,
    #caf8d0 90.9%
  );
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Nunito', sans-serif;
  color: #4f555f;
  display: flex;
  padding: 20px;
  height: 100vh;
  overflow: hidden;
  // 图片展示区域

  .imgBox {
    width: 90%;
    height: 90vh;
    margin: 0 auto;
    flex-wrap: wrap;
    overflow: hidden auto;

    > div {
      width: 400px;
      min-height: 150px;
      padding: 10px 5px 5px 5px;
      .el-image {
      }
      .block {
        padding: 30px 0;
        text-align: center;
        border-right: solid 1px var(--el-border-color);
        display: inline-block;
        width: 20%;
        box-sizing: border-box;
        vertical-align: top;
        &:last-child {
          border-right: none;
        }
      }

      .demonstration {
        display: block;
        color: var(--el-text-color-secondary);
        font-size: 14px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
