<template>
  <div ref="cToast" class="cc-toast" v-if="showToast">
    <div class="cc-toast-content" :style="{ background: bgColor, top }">
      <div class="cc-toast-icon" v-if="iconValue" :class="{ loading: isLoading }">
        <cc-icon :type="iconValue" color="#fff" size="14"></cc-icon>
      </div>
      <div>{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted, defineExpose } from 'vue'
import { useRouter } from 'vue-router'

export interface ToastOptions {
  title: string,
  type?: 'primary' | 'success' | 'error' | 'warning' | 'info',
  icon?: boolean,
  customIcon?: string,
  loading?: boolean,
  duration?: number,
  position?: 'top' | 'bottom' | 'center',
  url?: string,
  back?: boolean,
  query?: any,
  callback?: () => void
}

let cToast = ref()
let router = useRouter()
// 显示toast
let showToast = ref(false)
// toast内容
let text = ref('')
// toast背景颜色
let bgColor = ref()
// 销毁toast定时器
let timer = ref()
// 图标
let iconValue = ref('')
// toast出现位置
let top = ref('')
// 是否加载状态
let isLoading = ref(false)

// 显示toast方法
let show = (options: ToastOptions) => {
  showToast.value = true
  let { title, type = 'info', icon = true, customIcon = '', loading = false, duration = 2000, position = 'center', url = '', back = false, query = {}, callback } = options
  if (position === 'top') {
    top.value = '30%'
  }
  if (position === 'bottom') {
    top.value = '70%'
  }
  if (position === 'center') {
    top.value = '50%'
  }
  if (type === 'primary') {
    bgColor.value = '#0081ff'
    if (customIcon) iconValue.value = customIcon
    else if (loading) {
      iconValue.value = 'spinner-cycle'
      isLoading.value = true
    }
    else iconValue.value = ''
  }
  if (type === 'success') {
    bgColor.value = '#39b54a'
    if (customIcon) iconValue.value = customIcon
    else if (loading) {
      iconValue.value = 'spinner-cycle'
      isLoading.value = true
    }
    else {
      if (icon) iconValue.value = 'checkbox'
      else iconValue.value = ''
    }
  }
  if (type === 'error') {
    bgColor.value = '#e54d42'
    if (customIcon) iconValue.value = customIcon
    else if (loading) {
      iconValue.value = 'spinner-cycle'
      isLoading.value = true
    }
    else {
      if (icon) iconValue.value = 'close'
      else iconValue.value = ''
    }
  }
  if (type === 'warning') {
    bgColor.value = '#f37b1d'
    if (customIcon) iconValue.value = customIcon
    else if (loading) {
      iconValue.value = 'spinner-cycle'
      isLoading.value = true
    }
    else {
      if (icon) iconValue.value = 'info'
      else iconValue.value = ''
    }
  }
  if (type === 'info') {
    bgColor.value = '#333'
    if (customIcon) iconValue.value = customIcon
    else if (loading) {
      iconValue.value = 'spinner-cycle'
      isLoading.value = true
    }
    else iconValue.value = ''
  }
  text.value = title
  timer.value = setTimeout(() => {
    showToast.value = false
    if (back) {
      router.back()
    } else {
      if (url) {
        router.push({
          path: url,
          query
        })
      }
    }
    if (callback) callback()
    isLoading.value = false
  }, duration)
}

defineExpose({
  show
})

onUnmounted(() => {
  timer.value = null
  clearTimeout(timer.value)
})
</script>

<style scoped lang='scss'>
.cc-toast {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  .cc-toast-content {
    position: absolute;
    font-size: 14px;
    padding: #{topx(10)} #{topx(25)};
    border-radius: 4rpx;
    color: #fff;
    display: flex;
    align-items: center;
    transform: translateY(-50%);
    .cc-toast-icon {
      margin-right: #{topx(4)};
      position: relative;
      top: #{topx(1)};
    }
  }
}
.loading {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>