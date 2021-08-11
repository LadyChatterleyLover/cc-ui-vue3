<template>
  <div>
    <div class="demo">
      <div class="demo-title">
        基础用法
      </div>
      <cc-upload :fileList="fileList" :action="action" @uploadSuccess="uploadSuccess"></cc-upload>
    </div>

    <div class="demo">
      <div class="demo-title">
        自定义样式
      </div>
      <cc-upload :action="action">
        <cc-button type='primary' round>上传图片</cc-button>
      </cc-upload>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FileListItem } from "@/components/cc-upload/cc-upload.vue"
import { ref } from "vue"

let fileList = ref<FileListItem[]>([
  {
    image: 'https://img01.yzcdn.cn/vant/sand.jpg'
  }
])
let action = 'http://localhost:3000/upload'

let uploadSuccess = (val: any) => {
  fileList.value.push({
    image: val.path
  })
  console.log(val)
  console.log(fileList.value)
}
</script>

<style scoped lang="scss">
.demo {
  margin: 20px;
  &-title {
    margin-bottom: 10px;
  }
}
</style>