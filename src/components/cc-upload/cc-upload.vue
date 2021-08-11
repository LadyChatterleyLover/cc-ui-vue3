<template>
  <div class="cc-upload">
    <div class="cc-upload-filelist">
      <div
        class="cc-upload-filelist-item"
        v-for="(item, index) in list"
        :key="index"
        @click="preview(item, index)"
      >
        <img :src="item.image" />
        <div class="cc-upload-filelist-item-delete" @click.stop="del(item, index)">
          <cc-icon style="left: 1px;" type="closeempty" size="8" color="#fff"></cc-icon>
        </div>
      </div>
    </div>
    <div v-if="$slots.default" style="position: relative;">
      <slot></slot>
      <input class="cc-upload-wrap-input" :name="name" multiple type="file" @change="changFile" />
    </div>
    <div class="cc-upload-wrap" v-else>
      <div class="cc-upload-wrap-icon">
        <cc-icon type="plusempty" size="14"></cc-icon>
      </div>
      <div class="cc-upload-wrap-text">选择图片</div>
      <input class="cc-upload-wrap-input" :name="name" multiple type="file" @change="changFile" />
    </div>
  </div>
  <cc-toast ref="toast"></cc-toast>
  <!-- <cc-image-preview></cc-image-preview> -->
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, PropType, watch } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface FileListItem {
  image: string
}

let props = defineProps({
  action: {
    type: String,
  },
  maxCount: {
    type: [String, Number],
    default: 99
  },
  header: {
    type: Object,
    default: () => { }
  },
  name: {
    type: String,
    default: 'file'
  },
  maxSize: {
    type: [String, Number],
    default: Number.MAX_VALUE
  },
  limitType: {
    type: Array,
    default: ['png', 'jpg', 'jpeg', 'webp', 'gif']
  },
  fileList: {
    type: Array as PropType<FileListItem[]>,
    default: () => []
  }
})

let emits = defineEmits(['oversize', 'delete', 'preview', 'uploadSuccess', 'uploadError', 'listChange'])

let toast = ref()
let list = ref<FileListItem[]>(cloneDeep(props.fileList))



let changFile = (e: Event) => {
  let files: FileList = (e.target as any).files
  if (!files || !files.length) return
  if (Array.from(files).some(file => file.size > Number(props.maxSize))) {
    emits('oversize')
    toast.value.show({
      title: `图片允许最大尺寸为${props.maxSize}kb`,
      type: 'error'
    })
  }
  if (Array.from(files).some(file => !props.limitType.includes(file.type.split('/')[1]))) {
    toast.value.show({
      title: `图片允许上传格式为${props.limitType.join(',')}`,
      type: 'error'
    })
  }
  if (Array.from(files).some(file => !file.type.includes('image'))) {
    toast.value.show({
      title: `只允许上传图片`,
      type: 'error'
    })
  }
  // 上传
  Array.from(files).map((item: File) => {
    let formData = new FormData()
    formData.append(props.name, item)
    fetch(props.action!, {
      method: 'POST',
      headers: {
        ...props.header
      },
      body: formData
    })
      .then(res => res.json())
      .then(res => {
        emits('uploadSuccess', res)
      })
      .catch(err => {
        emits('uploadError', err)
        console.log(err)
      })
  })
}

let preview = (item: FileListItem, index: number) => {
  emits('preview', {
    item,
    index
  })
}

let del = (item: FileListItem, index: number) => {
  list.value.splice(index, 1)
  emits('delete', {
    item,
    index
  })
}

watch(() => props.fileList, val => {
  list.value = cloneDeep(val)
  emits('listChange', list.value)
}, { deep: true })
</script>

<style scoped lang="scss">
.cc-upload {
  display: flex;
  flex-wrap: wrap;
  &-filelist {
    display: flex;
    &-item {
      position: relative;
      width: 80px;
      height: 80px;
      border-radius: 6px;
      margin-right: 10px;
      margin-bottom: 10px;
      &-delete {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 14px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 0 0 0 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &-wrap {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 6px;
    background: #f4f5f6;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-input {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>