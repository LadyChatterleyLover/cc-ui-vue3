<template>
  <div
    class="cc-swiper"
    ref="swiper"
    @touchstart="touchstart"
    @touchend="touchend"
    @touchmove="touchmove"
    :style="{height: height + 'px'}"
  >
    <div
      class="cc-swiper-wrap"
      ref="swiperList"
      :style="wrapStyle"
      :class="{ 'cc-swiper-transition': noLast }"
    >
      <div v-for="(item, index) in swiperData" :key="index" style="width: 100%;" @click="clickItem(item, index)">
        <img :src="item.image" />
      </div>
    </div>
    <div
      class="cc-swiper-dots"
      :class="{ 'cc-swiper-dots-translate': !right }"
      v-if="mode !== 'none' && mode !== 'number'"
      :style="{ bottom: bottom + 'px', right: right + 'px' }"
    >
      <div
        class="cc-swiper-dots-item"
        :class="{
          'cc-swiper-dots-item-round': mode === 'round',
          'cc-swiper-dots-item-rect': mode === 'rect'
        }"
        :style="{ background: activeDot === index ? activeColor : indicatorActiveColor }"
        v-for="(item, index) in list"
        :key="index"
      ></div>
    </div>
    <span v-if="mode === 'number'" class="cc-swiper-dots-number">
      <span>{{ activeDot + 1 }} / {{ list.length }}</span>
    </span>
  </div>
</template>


<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, computed, onMounted, watch, onUnmounted } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface SwiperItem {
  image: string
}

let emits = defineEmits(['change', 'click', 'longpress'])
let props = defineProps({
  // 轮播图数据
  list: {
    type: Array as PropType<SwiperItem[]>,
    required: true
  },
  autoplay: {
    type: Boolean,
    default: true
  },
  // 当前轮播图
  current: {
    type: [Number, String],
    default: 0
  },
  // 轮播图组件高度
  height: {
    type: [String, Number],
    default: 150
  },
  // 滑动间隔时间
  interval: {
    type: [Number, String],
    default: 3000
  },
  // 滑动动画时间
  duration: {
    type: [Number, String],
    default: 500
  },
  // 指示点模式
  mode: {
    type: String as PropType<'none' | 'rect' | 'number' | 'round'>,
    default: 'round'
  },
  // 当前未选中的指示点颜色
  indicatorActiveColor: {
    type: String,
    default: '#ccc'
  },
  // 当前选中指示点颜色
  activeColor: {
    type: String,
    default: '#fff'
  },
  // 指示点距离底部位置
  bottom: {
    type: [String, Number],
    default: 10
  },
  // 指示点距离右边位置
  right: {
    type: [String, Number],
    default: ''
  },
})

let swiperData = ref<SwiperItem[]>(cloneDeep(props.list))
let swiper = ref()
let swiperList = ref()
let swiperWidth = ref<number>(0)

let active = ref<number>(Number(props.current))
let activeDot = ref<number>(Number(props.current))
let noLast = ref<boolean>(true)
let timer = ref<any>()
// 滑动开始坐标
let startX = ref<number>(0)
// 移动偏移值
let offset = ref<number>(0)
let translate = ref<any>()

let longpressTimer = ref()

let wrapStyle = computed(() => {
  translate.value = {
    transform: 'translateX(-' + ((active.value + 1) * 100) + '%)'
  }
  return translate.value
})

// 轮播图列表偏移值
let translateX = computed(() => {
  return (active.value + 1) * Number(swiperWidth.value) * -1
})

let next = () => {
  active.value++
  activeDot.value++
  if (active.value == swiperData.value.length - 2) {
    activeDot.value = 0
    setTimeout(() => {
      noLast.value = false
      active.value = 0
    }, Number(props.duration))
  }
  noLast.value = true
}

//自动播放    
let autoplay = () => {
  timer.value = setInterval(() => {
    next()
  }, Number(props.interval))
}

let touchstart = (e: TouchEvent) => {
  longpressTimer.value = setTimeout(() => {
    emits('longpress', e)
  }, 500)
  clearInterval(timer.value)
  noLast.value = false
  startX.value = e.changedTouches[0].clientX
}
let touchmove = (e: TouchEvent) => {
  clearTimeout(longpressTimer.value)
  longpressTimer.value = null
  offset.value = startX.value - e.changedTouches[0].clientX
  swiperList.value.style.transform = `translateX(${translateX.value - offset.value}px)`
}
let touchend = (e: TouchEvent) => {
  clearTimeout(longpressTimer.value)
  longpressTimer.value = null
  noLast.value = false
  let endX = e.changedTouches[0].clientX
  let width = swiperList.value.offsetWidth
  let dis = endX - startX.value
  if (dis < 0) {
    noLast.value = true
    if (Math.abs(dis) > width / 2) {
      active.value++
      activeDot.value++
      if (active.value === swiperData.value.length - 2) {
        activeDot.value = 0
        setTimeout(() => {
          noLast.value = false
          active.value = 0
        }, Number(props.duration))
      }
    } else {
      swiperList.value.style.transform = 'translateX(0))'
    }
  } else {
    noLast.value = true
    if (dis > width / 2) {
      active.value--
      activeDot.value--
      if (active.value == -1) {
        activeDot.value = swiperData.value.length - 3
        setTimeout(() => {
          noLast.value = false
          active.value = swiperData.value.length - 3
        }, Number(props.duration))
      }
      noLast.value = true
    } else {
      swiperList.value.style.transform = 'translateX(0))'
    }
  }
  offset.value = 0
  props.autoplay && autoplay()
}

let clickItem = (item: SwiperItem, index: number) => {
  emits('click', {
    item,
    index
  })
}

onMounted(() => {
  swiperData.value.unshift(props.list[props.list.length - 1])
  swiperData.value.push(props.list[0])
  swiperWidth.value = swiper.value.offsetWidth
  props.autoplay && autoplay()
})

watch(() => activeDot.value, val => {
  emits('change', val)
}, {immediate: true})

onUnmounted(() => {
  timer.value = null
  clearInterval(timer.value)
})
</script>

<style scoped lang='scss'>
.cc-swiper {
  position: relative;
  overflow: hidden;
  &-wrap {
    display: -webkit-box;
    width: 100%;
    height: 100%;
  }
  &-transition {
    transition: all 0.5s;
  }
  &-dots {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 10px;
    &-translate {
      left: 50%;
      transform: translateX(-50%);
    }
    &-item {
      margin-right: 6px;
      transition: all 0.3s;
      &-round {
        width: 10px;
        height: 10px;
        border-radius: 100%;
      }
      &-rect {
        width: 10px;
        height: 4px;
      }
    }
    &-number {
      padding: 2px 6px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 24px;
      font-size: 12px;
      color: #fff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10px;
    }
  }
}
img {
  width: 100%;
  height: 100%;
}
</style>