<template>
  <div class="cc-sidebar" :style="{ width: width + 'px' }">
    <div
      class="cc-sidebar-item"
      v-for="(item, index) in list"
      :key="index"
      :style="{
        background: active === index ? item.bgColor ? item.bgColor : '#fff' : '#f7f8fa',
        fontSize: item.fontSize ? item.fontSize : 14 + 'px'
      }"
      @click="clickItem(item, index)"
    >
      <cc-badge :dot="item.dot" :content="item.badge" v-if="item.dot || item.badge">
        <div class="cc-sidebar-item-title">{{ item.title }}</div>
      </cc-badge>
      <div
        v-else
        class="cc-sidebar-item-title"
        :class="{'cc-sidebar-item-weight': active === index,  disabled: item.disabled}"
        :style="{ color: active === index ? item.activeColor ? item.activeColor : '#323233' :  item.textColor ? item.textColor : '#323233' }"
      >{{ item.title }}</div>
      <div 
      class="cc-sidebar-item-active"
      :style="{
        background: item.lineColor ? item.lineColor : '#ee0a24',
        width: item.lineWidth ? item.lineWidth + 'px' : '4px',
        height: item.lineHeight ? item.lineHeight + 'px': '16px',
        }"
       v-if="showLine && index === active"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, PropType } from 'vue'

export interface SidebarItem {
  // 标题
  title: string,
  // 是否显示圆点
  dot?: boolean,
  // 徽标内容
  badge?: string | number,
  // 是否禁用
  disabled?: boolean,
  bgColor?: string,
  activeColor?: string,
  fontSize?: string | number,
  // 文字颜色
  textColor?: string,
  // 文字选中颜色
  activeTextColor?: string,
  // 左侧线条颜色
  lineColor?: string,
  // 左侧线条宽度
  lineWidth?: string | number,
  // 左侧线条高度
  lineHeight?: string | number,
}

let props = defineProps({
  // 当前选中项
  current: {
    type: [Number, String],
    default: 0
  },
  // 侧边栏数据
  list: {
    type: Array as PropType<SidebarItem[]>,
    required: true
  },
  // 侧边栏宽度
  width: {
    type: [Number, String],
    default: 80
  },
  // 显示左侧线条
  showLine: {
    type: Boolean,
    default: true
  }
})
let emits = defineEmits(['change'])
let active = ref<number>(0)
if (typeof props.current === 'number') {
  active.value = props.current
} else {
  active.value = props.list.findIndex((item, index) => item.title === props.current || index === Number(props.current))
}


let clickItem = (item: SidebarItem, index: number) => {
  active.value = index
  emits('change', {
    item,
    index
  })
}


</script>

<style lang="scss" scoped>
.cc-sidebar {
  display: flex;
  flex-direction: column;
  &-item {
    position: relative;
    padding: #{topx(20)} #{topx(20)};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    &-active {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    &-weight {
      font-weight: 500;
    }
  }
}
.disabled {
  color: #c8c9cc !important;
  cursor: not-allowed;
  pointer-events: none;
}
</style>