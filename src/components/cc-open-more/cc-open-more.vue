<template>
  <div class="cc-open-more">
    <div class="cc-open-more-content" :style="{ textIndent: textIndent, height: height }">
      <slot></slot>
    </div>
    <div class="cc-open-more-btn" @click="toggle">
      <div v-if="!flag" :style="{ color: color }">{{ closeText }}</div>
      <div v-if="flag && showToggle" :style="{ color: color }">{{ openText }}</div>
      <div class="cc-open-more-btn-icon">
        <cc-icon :type="icon" :color="color" size="12"></cc-icon>
      </div>
    </div>
    <div class="cc-open-more-mask" v-if="mask"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

let props = defineProps({
  // 文字首行缩进
  textIndent: {
    type: String,
    default: '2em'
  },
  // 内容超出此高度才会显示展开全文按钮
  openHeight: {
    type: [String, Number],
    default: 200
  },
  // 文字颜色
  color: {
    type: String,
    default: '#2979ff'
  },
  // 关闭时的提示文字
  closeText: {
    type: String,
    default: '展开更多'
  },
  // 展开时的提示文字
  openText: {
    type: String,
    default: '收起'
  },
  // 展开后是否显示收起按钮
  showToggle: {
    type: Boolean,
    default: true
  },
  // 显示遮罩层
  showMask: {
    type: Boolean,
    default: true
  }
})

let emits = defineEmits(['open', 'close'])

let height = ref<string>(props.openHeight + 'px')
let mask = ref<boolean>(props.showMask)
let icon = ref<string>('arrowdown')
let flag = ref<boolean>(false)


let toggle = () => {
  flag.value = !flag.value
  mask.value = !mask.value
  height.value = height.value !== 'auto' ? 'auto' : props.openHeight + 'px'
  icon.value = icon.value === 'arrowdown' ? 'arrowup' : 'arrowdown'
  if (flag.value) emits('open')
  else emits('close')
}
</script>

<style scoped lang="scss">
.cc-open-more {
  position: relative;
  &-content {
    font-size: 12px;
    overflow: hidden;
    background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 80%
    );
    padding-top: 54px;
    margin-top: -54px;
  }
  &-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    margin-top: 10px;
    &-icon {
      margin-left: 3px;
    }
  }
  &-mask {
    position: absolute;
    background-image: linear-gradient(
      -180deg,
      rgba(255, 255, 255, 0) 0%,
      rgb(255, 255, 255) 80%
    );
    width: 100%;
    height: 50px;
    bottom: 16px;
  }
}
</style>