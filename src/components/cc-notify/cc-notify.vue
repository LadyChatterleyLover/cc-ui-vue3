<template>
  <div
    class="cc-notify"
    :class="{ 'cc-notify-show': showNotify, 'cc-notify-hide': !showNotify, 'cc-notify-radius': radius }"
    :style="{ background: bgColor, top }"
  >
    <div class="cc-notify-content" :style="{ color: textColor }">{{ text }}</div>
  </div>
</template>

<script setup lang='ts'>
import { defineExpose, onUnmounted, ref } from 'vue'

export interface NotifyOptions {
  title: string,
  type?: 'primary' | 'success' | 'error' | 'warning' | 'info',
  duration?: number,
  color?: string,
  background?: string,
  showRadius?: boolean
}

let showNotify = ref<boolean>(false)
// 通知内容
let text = ref<string>('')
// 背景颜色
let bgColor = ref<string>('')
let textColor = ref<string>('')
let timer = ref()
// 是否显示圆角
let radius = ref<boolean>(false)

let show = (options: NotifyOptions) => {
  showNotify.value = true
  let { title, type = 'primary', duration = 2000, color = '', background = '', showRadius } = options
  text.value = title
  radius.value = showRadius!
  if (color) textColor.value = color
  else textColor.value = '#fff'
  if (background) {
    bgColor.value = background
  } else {
    if (type === 'primary') {
      bgColor.value = '#0081ff'
    }
    if (type === 'success') {
      bgColor.value = '#39b54a'
    }
    if (type === 'error') {
      bgColor.value = '#e54d42'
    }
    if (type === 'warning') {
      bgColor.value = '#f37b1d'
    }
    if (type === 'info') {
      bgColor.value = '#909399'
    }
  }
  timer.value = setTimeout(() => {
    showNotify.value = false
  }, duration)
}
onUnmounted(() => {
  timer.value = null
  clearTimeout(timer.value)
})
let top = ref<string>('')
let head = document.getElementsByTagName('uni-page-head')[0]
if (head) top.value = '88rpx'

defineExpose({
  show
})
</script>

<style scoped lang='scss'>
.cc-notify {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: #{topx(8)} 0;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-100%);
  z-index: 999;
  &-content {
    font-size: 14px;
  }
  &-radius {
    border-radius: #{topx(10)} #{topx(10)} 0 0;
  }
}
.cc-notify-show {
  animation: show 0.35s linear forwards;
}
.cc-notify-hide {
  animation: hide 0.35s linear;
}
@keyframes show {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}
</style>