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
const arr = new Array(20).fill(0)
const imgList = new Array()

// ImgUrl   https://www.imgurl.org/vip/manage/upload
const ImgUrl = [
  'https://s3.bmp.ovh/imgs/2023/01/02/c91f77312319146d.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/61ebe5c035d38276.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/cb6b50612c739dde.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/ce63f2538e4b9cf8.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/3dd162d7d25778fb.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/97d5dad1e1b290f2.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/04d65851461797cb.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/14db0f9cb5bc8876.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/7712cc3a3eba3a64.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/3c55cd28edac6814.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/eed5f76b11df19f2.jpg',
  'https://s3.bmp.ovh/imgs/2023/01/02/460320a1eb93518f.jpg',
]

// 路过图床  https://imgse.com/binbin59
const imgse = [
  'https://s1.ax1x.com/2022/06/12/Xg6PbV.jpg',
  'https://s1.ax1x.com/2022/12/31/pSCiOO0.jpg',
]
imgList.push(...ImgUrl, ...imgse)

arr.forEach((item, idx) => {
  imgList.push(`/src/assets/picture/img${idx + 1}.jpg`)
})
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
