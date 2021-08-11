<template>
  <div
    class="cc-slider"
    :id="`cc-slider-${id}`"
    :style="{ background: inactiveColor, height: height + 'px' }"
    @click="clickSlider"
  >
    <div
      class="cc-slider-wrap"
      :class="{ 'cc-slider-wrap-transition': isTransition }"
      :style="{ width: move + '%', background: activeColor }"
    >
      <div
        class="cc-slider-button-wrap"
        :style="{ right: buttonPosition + '%', }"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
      >
        <slot v-if="slots.button" name="button"></slot>
        <div v-else class="cc-slider-button-wrap-content"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed, getCurrentInstance, nextTick, watch, useSlots } from 'vue'


let id = getCurrentInstance()!.uid
let props = defineProps({
  value: {
    type: [Number, String],
    default: 0
  },
  // 步进
  step: {
    type: [Number, String],
    default: 1
  },
  // 滑块激活时的颜色
  activeColor: {
    type: String,
    default: '#0081ff'
  },
  // 滑块未激活时的颜色
  inactiveColor: {
    type: String,
    default: '#e5e5e5'
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 最小值
  min: {
    type: [Number, String],
    default: 0
  },
  // 最大值
  max: {
    type: [Number, String],
    default: 100
  },
  // 滑动按钮的高度
  height: {
    type: [String, Number],
    default: 2
  }
})
let emits = defineEmits(['update:value', 'change', 'input', 'touchstart', 'touchend'])
let slots = useSlots()
let sliderValue = ref<number | string>(props.value)

// 滑块移动占比
let move = ref<number | string>(0)
// 按钮定位位置
let buttonPosition = computed(() => 100 - Number(move.value))
// 外层滑块宽度
let containerWidth = ref<number>(0)
// 是否需要动画
let isTransition = ref<boolean>(true)
// 拖动状态
let touchStatus = ref<'' | 'end'>('')

nextTick(() => {
  containerWidth.value = document.getElementById(`cc-slider-${id}`)!.offsetWidth * 1
})


// 开始位置
let startX = ref<number>(0)

// 拖动开始
let touchstart = (e: TouchEvent) => {
  startX.value = e.touches[0].pageX
  emits('touchstart')
}
// 拖动中
let touchmove = (e: TouchEvent) => {
  isTransition.value = false
  let dis: number = Math.ceil(startX.value - e.touches[0].pageX)
  if (props.step === undefined) {
    move.value = Math.abs((((dis - startX.value) / containerWidth.value) as any).toFixed(2) * 100).toFixed(0)
  } else {
    let d = Math.abs((((dis - startX.value) / containerWidth.value) as any).toFixed(2) * 100).toFixed(0)
    let percent = Math.round((Number(d) + Number(props.step)) / Number(props.step)) * Number(props.step)
    if (percent % Number(props.step) === 0) {
      move.value = percent
    }
  }
  if (props.max) {
    if (Number(move.value) >= Number(props.max)) move.value = Number(props.max)
  } else {
    if (Number(move.value) >= 100) move.value = 100
  }
  if (props.min) {
    if (Number(move.value) <= Number(props.min)) move.value = Number(props.min)
  } else {
    if (Number(move.value) <= 0) move.value = 0
  }

  emits('input', Number(move.value))
}

// 拖动结束
let touchend = (e: TouchEvent) => {
  isTransition.value = true
  touchStatus.value = 'end'
  emits('touchend')
}

// 点击滑块
let clickSlider = (e: MouseEvent) => {
  isTransition.value = false
  let dis: number = Math.ceil(startX.value - e.pageX)
  let d = Math.abs((((dis - startX.value) / containerWidth.value) as any).toFixed(2) * 100).toFixed(0)
  let percent = Math.round((Number(d) + Number(props.step)) / Number(props.step)) * Number(props.step)
  if (percent % Number(props.step) === 0) {
    move.value = percent
  }
}

watch(() => [move.value, touchStatus.value], val => {
  emits('update:value', val[0])
  if (val[1] === 'end') emits('change', Number(val[0]))
})
watch(() => props.value, val => {
  move.value = val
}, { immediate: true })



</script>

<style scoped lang="scss">
.cc-slider {
  position: relative;
  width: 100%;
  background-color: #ebedf0;
  border-radius: 999px;
  cursor: pointer;
  &-wrap {
    width: 100%;
    height: 100%;
    background-color: #1989fa;
    border-radius: inherit;
    &-transition {
      transition: all 0.2s;
    }
  }
  &-button-wrap {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    &-content {
      height: 20px;
      width: 20px;
      background-color: rgb(255, 255, 255);
      border-radius: 50%;
      box-shadow: 0 1px 2px rgb(0 0 0 / 50%);
    }
  }
}
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
}
</style>