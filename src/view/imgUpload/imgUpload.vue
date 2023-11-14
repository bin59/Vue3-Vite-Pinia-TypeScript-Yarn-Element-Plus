<template>
  <div class="wrapper">
    <div class="upload">
      <el-upload
        :action="uploadOptions.url"
        list-type="picture-card"
        :auto-upload="true"
        multiple
        :http-request="uploadRequest"
        :limit="uploadOptions.limit"
      >
        <!--  :headers="uploadHeader" -->
        <el-icon><Plus /></el-icon>

        <template #file="{ file }">
          <div>
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url"
              alt=""
            />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <el-icon><zoom-in /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <el-icon><Download /></el-icon>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <el-icon><Delete /></el-icon>
              </span>
            </span>
          </div>
        </template>
      </el-upload>

      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
      </el-dialog>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'
import type { UploadFile, UploadRequestOptions } from 'element-plus'
import { ref } from 'vue'

const uploadOptions = {
  limit: 9,
  url: 'https://www.imgurl.org/api/v2/upload',
  header: '',
  UID: '32cc2dbe23809641c1d818a164d6b84f',
  Token: '572714bc83103156452c916cc5169bfc',
}
const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)
// 文件列表移除文件时的钩子
const handleRemove = (file: UploadFile) => {
  console.log(file)
}

// 点击文件列表中已上传的文件时的钩子
const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}

// 覆盖默认的 Xhr 行为，允许自行实现上传文件的请求
const uploadRequest = (options: UploadRequestOptions) => {
  console.log(options)
}
</script>
<style lang="scss">
.wrapper {
  .upload {
    width: 50%;
    height: 60%;
    margin: 100px auto;
    border: 1px solid black;
  }
}
</style>
