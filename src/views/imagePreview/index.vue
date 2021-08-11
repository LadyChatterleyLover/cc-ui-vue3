<template>
  <div>
    <cc-button @click="show = true" type='primary'>打开预览</cc-button>
    <cc-image-preview v-model:value="show" :list="list" :actions="actions"></cc-image-preview>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let show = ref<boolean>(false)
let list = [
  {
    image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
  }
]
let actions = [
  {
    name: '选项一'
  },
  {
    name: '选项二'
  },
  {
    name: '选项三'
  }
]
</script>

<style scoped lang="scss">
</style>