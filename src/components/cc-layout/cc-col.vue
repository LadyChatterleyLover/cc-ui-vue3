<template>
  <component
    class="cc-col"
    :is="tag"
    :style="{  
    width,
      'margin-left': offset,
      'padding-left': padding,
      'padding-right': padding
    }"
  >
   <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed, getCurrentInstance } from 'vue'

let props = defineProps({
  span: {
    type: [Number, String],
    default: ''
  },
  offset: {
    type: [Number, String],
    default: ''
  },
  tag: {
    type: String,
    default: 'div'
  }
})

// 获取组件实例
let instance = getCurrentInstance()
// 拿到父组件的gutter
let gutter = instance?.parent?.props.gutter && instance?.parent?.props.gutter
// 计算宽度
let width = computed(() => {
  return ((props.span as number) / 24 * 100)  === 0 ? '100%' : ((props.span as number) / 24 * 100) + '%'
})
// 计算传了gutter的padding值
let padding = computed(() => {
  if (gutter) {
    return (gutter as number / 2) + 'px'
  }
  return 0
})
// 计算偏移量
let offset = computed(() => {
  if (props.offset) {
    return ((props.offset as number) / 24 * 100) + '%'
  }
  return 0
})

</script>

<style scoped lang="scss">
.cc-col {
  width: 100%;
}
</style>