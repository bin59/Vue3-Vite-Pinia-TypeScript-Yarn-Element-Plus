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
// ImgUrl   https://www.imgurl.org/vip/manage/upload  图片托管网站
const baseImgUrl = new String('https://s3.bmp.ovh/imgs/')
const imgList = [
  '2024/01/14/fc42a833e1a8bfbb.jpg',
  '2024/01/14/e2f4a51db64005bd.jpg',
  '2024/01/14/6bdc547a4979a35c.jpg',
  '2024/01/14/095739704eaa8a96.png',
  '2024/01/14/798b63741d519d60.png',
  '2024/01/14/a7ad8fe6884df1f9.jpg',
  '2024/01/14/8231d78588c54174.jpg',
  '2024/01/14/dfb63b984600a672.jpg',
  '2024/01/14/5452fdabc55dfebc.png',
  '2024/01/14/9130a01569b44a75.jpg',
  '2024/01/14/4296e30b551256bc.jpg',
  '2024/01/14/3c170ea71b054125.jpg',
  '2024/01/14/75b9f77e7eb76697.jpg',
  '2024/01/14/3ba3ec25859d4d4a.jpg',
].map(item => (item = baseImgUrl + item))
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
