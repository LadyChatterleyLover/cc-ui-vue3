<template>
  <div
    class="cc-swipe-cell"
    @touchstart="touchStart"
    @touchend="touchEnd"
    @touchmove="touchMove"
  >
    <div class="cc-swipe-cell-wrap" :style="{ transform: `translateX(${slideX}px)`, transitionDuration }">
      <div class="cc-swipe-cell-wrap-left">
        <slot name="left"></slot>
      </div>
      <div class="cc-swipe-cell-wrap-content" @click="handleClick">
        <slot></slot>
      </div>
      <div class="cc-swipe-cell-wrap-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
let slideX = ref<number>(0)
let startSlideX = ref<number>(0)
let btnWidth = ref<number>(0)
let startX = ref<number>(0)
let lastX = ref<number>(0)
let startTime = ref<number>(0)
let transitionDuration = ref<string>('0.6s')

let emits = defineEmits(['click'])

onMounted(() => {
  let right = document.getElementsByClassName('cc-swipe-cell-wrap-right')[0]
  let left = document.getElementsByClassName('cc-swipe-cell-wrap-left')[0]
  btnWidth.value = right.clientWidth * -1
})
// 滑动开始
let touchStart = (e: TouchEvent) => {
  startTime.value = e.timeStamp
  //记录滑块的初始位置
  startSlideX.value = slideX.value
  startX.value = e.touches[0].pageX
  lastX.value = startX.value
  transitionDuration.value = '0s'
}
// 滑动中
let touchMove = (e: TouchEvent) => {
  let endX = e.touches[0].pageX
  let distance = endX - lastX.value
  let dis = slideX.value + distance
  if (dis <= 0 && dis >= btnWidth.value) {
    slideX.value = dis
  }
  lastX.value = endX
  transitionDuration.value = '0s'
}
// 滑动结束
let touchEnd = (e: TouchEvent) => {
  let distance = 10
  let endTime = e.timeStamp
  let endX = startX.value - lastX.value
  if (Math.abs(endTime - startTime.value) > 200) {
    distance = btnWidth.value / -2
  }
  if (endX > distance) {
    slideX.value = btnWidth.value
  } else if (endX < distance * -1) {
    slideX.value = 0
  } else {
    slideX.value = startSlideX.value
  }
  transitionDuration.value = '0.6s'
}

let handleClick = () => {
  slideX.value = 0
  emits('click')
}
</script>

<style scoped lang="scss">
.cc-swipe-cell {
  position: relative;
  overflow: hidden;
  cursor: grab;
  &-wrap {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    transition: all 0.6s linear;
    &-left {
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-100%);
    }
    &-right {
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
    }
    &-content {
      flex: 1;
    }
  }
}
</style>