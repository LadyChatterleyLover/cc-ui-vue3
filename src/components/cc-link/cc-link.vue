<template>
  <div
    @click="goto"
    class="cc-link"
    :style="{ fontSize: fontSize + 'px', color, borderBottom: underLine ? `1px solid ${lineColor}` : 'none' }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

let props = defineProps({
  // 链接地址
  href: {
    type: String,
    required: true
  },
  // 文字颜色
  color: {
    type: String,
    default: '#0081ff'
  },
  // 字体大小
  fontSize: {
    type: [String, Number],
    default: '14'
  },
  // 是否显示下划线
  underLine: {
    type: Boolean,
    default: true
  },
  // 下划线颜色
  lineColor: {
    type: String,
    default: '#0081ff'
  },
  // 小程序平台复制提示
  mpTips: {
    type: String,
    default: '链接已复制, 请在浏览器打开'
  }
})

let goto = () => {
  window.open(props.href)
}
</script>

<style scoped lang="scss">
.cc-link {
  width: fit-content;
}
</style>