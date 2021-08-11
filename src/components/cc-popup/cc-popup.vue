<template>
  <div class="cc-popup" :class="{ show: show, hide: !show }" :style="{ top, display}">
    <div
      class="cc-popup-mask"
      ref="mask"
      @click="clickMask"
      :style="{ top: maskTop, opacity: showMask ? 1 : 0, zIndex: showMask ? 999 : -1 }"
    ></div>
    <div
      class="cc-popup-content"
      :style="{ width: widthValue, height: heightValue, top }"
      :class="[
        'cc-popup-content-' + mode,
        { 'cc-popup-content-padding': !mode },
        { 'cc-popup-content-center': !mode },
        { 'cc-popup-content-round': round && mode === 'bottom' },
        { [showClassName]: show, [hideClassName]: !show },
      ]"
    >
      <slot></slot>
      <div v-if="closeable" @click="close" class="cc-popup-content-close">
        <cc-icon :type="closeIcon" v-if="closeIcon" size="16" color="#909399"></cc-icon>
        <cc-icon v-else type="closeempty" size="16" color="#909399"></cc-icon>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { defineProps, defineEmits, defineExpose, ref, computed, PropType, watch } from 'vue'

type PopupMode = '' | 'left' | 'right' | 'top' | 'bottom'

let props = defineProps({
  // 显示弹框
  show: {
    type: Boolean,
    default: false
  },
  // 弹框出现位置
  mode: {
    type: String as PropType<PopupMode>
  },
  // 显示关闭按钮
  closeable: {
    type: Boolean,
    default: false
  },
  // 自定义关闭图标
  closeIcon: {
    type: String,
    default: ''
  },
  // 宽度
  width: {
    type: [Number, String]
  },
  // 高度
  height: {
    type: [Number, String]
  },
  // 是否圆角按钮
  round: {
    type: Boolean,
    default: false
  },
  // 是否显示遮罩层
  showMask: {
    type: Boolean,
    default: true
  }
})
let emits = defineEmits(['update:show', 'close'])

let display = ref<'block' | 'none'>('none')
let clickMask = () => {
  setTimeout(() => {
    display.value = 'none'
  }, 100)
  emits('update:show', !props.show)
}
let close = () => {
  emits('close')
  setTimeout(() => {
    display.value = 'none'
  }, 100)
  emits('update:show', !props.show)
}
let showClassName = computed(() => 'show-' + props.mode)
let hideClassName = computed(() => 'hide-' + props.mode)

let widthValue = computed(() => {
  if (props.mode === 'left' || !props.mode || props.mode === 'right') {
    return (props.width as number) / 2 + 'px'
  } else return ''
})
let heightValue = computed(() => {
  if (props.mode === 'top' || !props.mode || props.mode === 'bottom') {
    return (props.height as number) / 2 + 'px'
  } else return ''
})
let top = ref<string>('')
let maskTop = ref<string>('')
let head = document.getElementsByTagName('uni-page-head')[0]
if (head) {
  if (props.mode === 'top' || props.mode === 'left' || props.mode === 'right') {
    top.value = '88rpx'
    maskTop.value = '88rpx'
  }
  else if (props.mode === 'bottom') {
    top.value = ''
    maskTop.value = '88rpx'
  }
  else {
    maskTop.value = '88rpx'
    top.value = '50%'
  }
}

watch(() => props.show, val => {
  if (val) display.value = 'block'
  else {
    setTimeout(() => {
    display.value = 'none'
  }, 100)
  }
})

defineExpose({
  clickMask
})
</script>

<style scoped lang="scss">
.cc-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
  opacity: 0;
  &-mask {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999;
  }
  &-content {
    background: #fff;
    z-index: 1000;
    position: fixed;
    overflow: auto;
    &-round {
      border-radius: #{topx(24)} #{topx(24)} 0 0;
    }
    &-padding {
      padding: #{topx(40)} #{topx(30)};
    }
    &-close {
      position: absolute;
      top: #{topx(5)};
      right: #{topx(5)};
      z-index: 1000;
    }
    &-center {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    &-top {
      top: 0;
      right: 0;
      left: 0;
    }
    &-bottom {
      bottom: 0;
      right: 0;
      left: 0;
    }
    &-left {
      top: 0;
      left: 0;
      bottom: 0;
    }
    &-right {
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
  &-mode {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    z-index: -1;
    transform: translateX(-100%);
  }
}
.show {
  animation: show 0.3s linear forwards;
  &.cc-popup {
    z-index: 1000;
  }
}
.hide {
  animation: hide 0.3s linear forwards;
  &.cc-popup {
    z-index: -1;
    display: none;
  }
}
@keyframes show {
  from {
    opacity: 0;
    z-index: -1;
  }
  to {
    opacity: 1;
    z-index: 1000;
  }
}
@keyframes hide {
  from {
    opacity: 1;
    z-index: 1000;
  }
  to {
    z-index: -1;
    opacity: 0;
  }
}

.show-top {
  animation: show-top 0.3s linear forwards;
}
.hide-top {
  animation: hide-top 0.3s linear forwards;
}
@keyframes show-top {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide-top {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

.show-bottom {
  animation: show-bottom 0.3s linear forwards;
}
.hide-bottom {
  animation: hide-bottom 0.3s linear forwards;
}
@keyframes show-bottom {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes hide-bottom {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
}

.show-left {
  animation: show-left 0.3s linear forwards;
}
.hide-left {
  animation: hide-left 0.3s linear forwards;
}
@keyframes show-left {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes hide-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.show-right {
  animation: show-right 0.3s linear forwards;
}
.hide-right {
  animation: hide-right 0.3s linear forwards;
}
@keyframes show-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes hide-right {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>