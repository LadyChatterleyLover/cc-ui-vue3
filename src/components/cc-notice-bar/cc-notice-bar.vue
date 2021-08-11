<template>
  <div class="cc-notify-bar" :style="{ background: bgColor }">
    <div class="cc-notify-bar-left" @click="clickLeft">
      <div v-if="volume">
        <cc-icon :color="color" type="sound" size="16"></cc-icon>
      </div>
      <div v-else>
        <slot name="left" v-if="leftSlot"></slot>
        <cc-icon :color="color" v-else :type="leftIcon"></cc-icon>
      </div>
    </div>
    <div class="cc-notify-bar-wrap" @click="onClick">
      <div class="cc-notify-bar-wrap-content" :style="{ color, animationDuration }">
        <slot v-if="textSlot"></slot>
        <div v-else>{{ text }}</div>
      </div>
    </div>
    <div class="cc-notify-bar-right" @click="clickRight">
      <div v-if="closeable || link">
        <cc-icon v-if="closeable" type="closeempty" :color="color" size="16"></cc-icon>
        <cc-icon v-else type="arrowright" :color="color" size="16"></cc-icon>
      </div>
      <div v-else>
        <slot name="right" v-if="rightSlot"></slot>
        <cc-icon v-else :type="rightSlot"></cc-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, nextTick, onMounted, PropType, ref, useSlots } from 'vue'


let props = defineProps({
  // 声音图标
  volume: {
    type: Boolean,
    default: false,
  },
  // 可关闭
  closeable: {
    type: Boolean,
    default: false,
  },
  // 右侧箭头
  link: {
    type: Boolean,
    default: false,
  },
  // 通知文字
  text: {
    type: String
  },
  // 背景颜色
  bgColor: {
    type: String,
    default: '#fff7cc'
  },
  // 文字颜色
  color: {
    type: String,
    default: '#f60'
  },
  // 左侧图标
  leftIcon: {
    type: String,
  },
  // 滚动速度
  speed: {
    type: [Number, String],
    default: 60
  },
  // 垂直滚动
  vertical: {
    type: Boolean,
    default: false
  }
})
let slots = useSlots()
let emits = defineEmits(['click', 'clickLeft', 'clickRight'])

// 文字插槽
let textSlot = ref()
// 左侧插槽
let leftSlot = ref()
// 右侧插槽
let rightSlot = ref()
// 定时器
let timer = ref()

// 滚动的文字宽度
let textWidth = ref<number>(0)
// 动画时长
let animationDuration = ref<string>('10s')

// 初始化动画时长
let init = () => {
  let content: any = document.getElementsByClassName('cc-notify-bar-wrap-content')[0]
  textWidth.value = content.clientWidth
  animationDuration.value = (textWidth.value / (props.speed as number)) + 's'
}

// 点击通知栏
let onClick = () => {
  emits('click')
}
// 点击左侧图标
let clickLeft = () => {
  if (props.volume) emits('clickLeft')
}

// 点击右侧图标
let clickRight = () => {
  if (props.closeable || props.link) emits('clickRight')
}

onMounted(() => {
  if (slots.default) textSlot.value = slots.default
  if (slots.left) leftSlot.value = slots.left
  if (slots.right) rightSlot.value = slots.right
  nextTick(() => {
    init()
  })
})
</script>

<style lang="scss" scoped>
.cc-notify-bar {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 #{topx(16)};
  font-size: 14px;
  width: 100%;
  &-left {
    margin-right: #{topx(8)};
  }
  &-wrap {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    overflow: hidden;
    &-content {
      white-space: nowrap;
      position: absolute;
      padding-left: 100%;
      animation: loop 10s linear infinite both;
    }
  }
  &-right {
    position: relative;
    left: #{topx(8)};
  }
}
@keyframes loop {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>