<template>
  <div
    class="cc-pull-refresh"
    :style="{ height: `calc(100vh - ${headHeight}px)` }"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  >
    <div
      class="cc-pull-refresh-wrap"
      :style="{ transitionDuration: duration + 's', transform: `translateY(${moveY}px)` }"
    >
      <div class="cc-pull-refresh-wrap-head" :style="{ height: headHeight + 'px' }">
        <div v-if="end">{{ tips }}</div>
        <template v-else>
          <div v-if="moveY <= 60">{{ pullingText }}</div>
          <div v-if="moveY > 60">{{ loosingText }}</div>
        </template>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

let props = defineProps({
  // 顶部内容高度
  headHeight: {
    type: [Number, String],
    default: 50
  },
  // 下拉过程提示文案	
  pullingText: {
    type: String,
    default: '下拉即可刷新...'
  },
  // 释放过程提示文案
  loosingText: {
    type: String,
    default: '释放即可刷新...'
  },
  // 加载过程提示文案	
  loadingText: {
    type: String,
    default: '加载中...'
  },
  // 刷新成功提示文案	
  successText: {
    type: String,
    default: ''
  }
})

let emits = defineEmits(['refresh'])

let duration = ref<number>(0.3)
let startY = ref<number>(0)
let moveY = ref<number>(0)
// 下拉结束
let end = ref<boolean>(false)
let tips = ref<string>(props.loadingText)

let touchstart = (e: TouchEvent) => {
  duration.value = 0
  startY.value = e.changedTouches[0].clientY
}
let touchmove = (e: TouchEvent) => {
  let move = e.changedTouches[0].clientY
  let dis = startY.value - move
  if (dis > 0) return
  moveY.value = -Math.floor(dis)
}
let touchend = (e: TouchEvent) => {
  duration.value = 0.3
  end.value = true
  moveY.value = Number(props.headHeight)
  if (props.successText) {
    setTimeout(() => {
      tips.value = props.successText
      emits('refresh')
    }, 800)
  }
  setTimeout(() => {
    moveY.value = 0
  }, 1000)
  setTimeout(() => {
    end.value = false
    tips.value = props.loadingText
  }, 1100)
}
</script>

<style scoped lang="scss">
.cc-pull-refresh {
  overflow: hidden;
  &-wrap {
    height: 100%;
    position: relative;
    transition-property: transform;
    &-head {
      position: absolute;
      left: 0;
      width: 100%;
      overflow: hidden;
      color: #969799;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(-100%);
    }
  }
}
</style>