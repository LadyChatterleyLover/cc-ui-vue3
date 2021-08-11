<template>
  <div
    class="cc-gap"
    :style="{
      background: bgColor,
      height: height + 'px',
      marginTop: marginTop + 'px',
      marginBottom: marginBottom + 'px'
    }"
  ></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

let props = defineProps({
  // 背景颜色
  bgColor: {
    type: String,
    default: 'transparent'
  },
  // 间隔槽高度
  height: {
    type: [String, Number],
    default: 30
  },
  // 与前一个元素的距离
  marginTop: {
    type: [String, Number],
    default: 0
  },
  // 与后一个元素的距离
  marginBottom: {
    type: [String, Number],
    default: 0
  }
})
</script>

<style scoped lang="scss">
</style>