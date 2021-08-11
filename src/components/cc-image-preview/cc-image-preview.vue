<template>
  <div
    class="cc-image-preview"
    :class="{ 'cc-image-preview-show': value, 'cc-image-preview-hide': !value }"
    :style="{ display, animationDuration: Number(swipeDuration) / 1000 + 's' }"
  >
    <div class="cc-image-preview-mask" @click="clickMask"></div>
    <div class="cc-image-preview-content">
      <cc-swiper
        :list="list"
        :autoplay="false"
        :current="current"
        @change="handleChange"
        @click="clickItem"
        @longpress="longpress"
      ></cc-swiper>
    </div>
    <div class="cc-image-preview-dot" v-if="showIndex">{{ currentIndex + 1 }} / {{ list.length }}</div>
    <cc-action-sheet @select="handleSelect" :list="actions" v-model:show="showAction"></cc-action-sheet>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, watch } from 'vue'
import { SwiperItem } from '../cc-swiper/cc-swiper.vue';

export interface ActionItem {
  name: string
}

let props = defineProps({
  // 是否显示预览图片
  value: {
    type: Boolean,
    default: false
  },
  // 预览图片数组
  list: {
    type: Array as PropType<SwiperItem[]>,
    required: true
  },
  // 长按菜单
  actions: {
    type: Array as PropType<ActionItem[]>,
    required: true
  },
  // 当前图片下标
  current: {
    type: [Number, String],
    default: 0
  },
  // 动画时长
  swipeDuration: {
    type: [Number, String],
    default: 300
  },
  // 是否显示页码
  showIndex: {
    type: Boolean,
    default: true
  },
  // 指示点模式
  mode: {
    type: String,
    default: 'round'
  },
  // 轮播图组件高度
  height: {
    type: [String, Number],
    default: 150
  },
  // 指示点距离底部位置
  bottom: {
    type: [String, Number],
    default: 20
  },
  // 指示点距离右边位置
  right: {
    type: [String, Number],
    default: ''
  },
  // 当前选中的指示点颜色
  indicatorActiveColor: {
    type: String,
    default: '#ccc'
  },
  // 指示点激活时颜色
  activeColor: {
    type: String,
    default: '#fff'
  },
  // 是否显示关闭图标
  closeable: {
    type: Boolean,
    default: false
  },
  // 是否在点击遮罩层后关闭
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  // 是否在点击图片后关闭
  closeOnImage: {
    type: Boolean,
    default: true
  }
})

let emits = defineEmits(['update:value', 'select', 'click'])

let display = ref<'block' | 'none'>('none')
let currentIndex = ref<number>(Number(props.current))
let showAction = ref<boolean>(false)


let clickMask = () => {
  if (props.closeOnClickOverlay) emits('update:value', !props.value)
}
let handleChange = (index: number) => {
  currentIndex.value = index
}
// 点击图片
let clickItem = (val: SwiperItem) => {
  if (props.closeOnImage) emits('update:value', !props.value)
  emits('click', val)
}
// 长按事件
let longpress = (e: Event) => {
  e.preventDefault()
  if (props.actions && props.actions.length) {
    showAction.value = true
  }
}
let handleSelect = (val: ActionItem) => {
  emits('select', val)
  emits('update:value', !props.value)
}
watch(() => props.value, val => {
  if (val) display.value = 'block'
  else {
    setTimeout(() => {
      display.value = 'none'
    }, 100)
  }
})
</script>

<style scoped lang="scss">
.cc-image-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  &-show {
    animation: show 1s linear forwards;
  }
  &-hide {
    animation: hide 3s linear forwards;
  }
  &-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
  }
  &-content {
    z-index: 1000;
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translate(0, -50%);
  }
  &-dot {
    color: #fff;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
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