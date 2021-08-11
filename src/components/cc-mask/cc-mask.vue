<template>
  <div
    class="cc-mask"
    :class="{ 'cc-mask-show': show, 'cc-mask-hide': !show }"
    :style="{ zIndex: Number(zIndex), background: bgColor, top, display, animationDuration: duration + 's' }"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, watch } from 'vue'

let props = defineProps({
  // 是否显示遮罩层
  show: {
    type: Boolean,
    default: false
  },
  // 层级
  zIndex: {
    type: [Number, String],
    default: 1
  },
  // 背景颜色
  bgColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.7)'
  },
  // 遮罩是否可点击
  maskClick: {
    type: Boolean,
    default: true
  },
  // 动画时长
  duration: {
    type: [Number, String],
    default: 0.25
  }
})

let emits = defineEmits(['click', 'update:show'])

let handleClick = () => {
  if (props.maskClick) {
    emits('update:show', !props.show)
    emits('click')
  }
}

let top = ref<string>('')
let head = document.getElementsByTagName('uni-page-head')[0]
if (head) top.value = '88rpx'

let display = ref('')
watch(() => props.show, val => {
  if (val) display.value = 'block'
  else {
    setTimeout(() => {
      display.value = 'none'
    }, 200)
  }
})
</script>

<style scoped lang="scss">
.cc-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  &-show {
    animation: show 0.25s linear forwards;
  }
  &-hide {
    animation: hide 0.25s linear forwards;
    &.cc-mask {
      display: none;
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hide {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>