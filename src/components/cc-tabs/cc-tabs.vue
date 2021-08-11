<template>
  <div class="cc-tabs">
    <div class="cc-tabs-wrap">
      <div
        @click="clickItem(item, index)"
        class="cc-tabs-content"
        v-for="(item, index) in list"
        :key="index"
      >
        <div
          class="cc-tabs-content-title"
          :style="{ color: active === index ? activeColor : inactiveColor }"
        >
          {{ item.title }}
          <div
            v-if="active === index"
            class="cc-tabs-content-line"
            :style="{
              width: lineWidth + 'px',
              height: lineHeight + 'px',
              background: lineColor,
            }"
          ></div>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

export interface TabsListItem {
  // 标题
  title: string,
  // 是否禁用
  disabled?: boolean,
  // 是否显示小红点
  dot?: false,
  // 徽标的内容
  badge?: string | number,
  // 标识符
  name?: string | number,
  // 跳转链接地址
  url?: string
}

import { defineProps, defineEmits, ref, PropType, onMounted, watch } from 'vue'
let props = defineProps({
  list: {
    type: Array as PropType<TabsListItem[]>,
    required: true
  },
  // 当前激活项
  current: {
    type: [String, Number],
    default: ''
  },
  // 底部滑块宽度
  lineWidth: {
    type: [Number, String],
    default: 20
  },
  // 底部滑块高度
  lineHeight: {
    type: [Number, String],
    default: 3
  },
  // 底部滑块颜色
  lineColor: {
    type: String,
    default: '#2979ff'
  },
  // 激活时的文字颜色
  activeColor: {
    type: String,
    default: '#2979ff'
  },
  // 标签栏文字
  inactiveColor: {
    type: String,
    default: '#303133'
  }
})
let emits = defineEmits(['change'])


let active = ref<string | number>(0)


onMounted(() => {
  if (!props.current) active.value = 0
  else {
    let index = props.list.findIndex((item, index) => {
      if (typeof props.current === 'number') return props.current === index
      else return item.title === props.current
    })
    active.value = index
  }
})

let clickItem = (item: TabsListItem, index: number) => {
  active.value = index
}

watch(() => active.value, val => {
  emits('change', val)
})
</script>

<style scoped lang="scss">
.cc-tabs {
  &-wrap {
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  &-content {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    &-title {
      padding:8px 10px;
      font-size: 12px;
      position: relative;
    }
    &-line {
      border-radius: 3px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 2px;
      z-index: 1;
    }
  }
}
</style>