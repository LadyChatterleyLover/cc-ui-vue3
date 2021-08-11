<template>
  <div
    class="cc-tabbar"
    :class="{ 'cc-tabbar-fixed': fixed, 'cc-tabbar-border': border }"
    :style="{
      height: height + 'px',
      background: bgColor,
      zIndex: Number(zIndex)
    }"
  >
    <div
      class="cc-tabbar-item"
      v-for="(item, index) in cloneList"
      :key="index"
      @click="clickItem(item, index)"
    >
      <div class="cc-tabbar-item-icon" :class="{ 'cc-tabbar-item-midbtn': item.midButton }">
        <div class="cc-tabbar-item-dot" v-if="item.dot"></div>
        <div class="cc-tabbar-item-count" v-if="Number(item.count) > 0">{{ item.count }}</div>
        <slot v-if="item.slots" :name="item.slots" :item='item'></slot>
        <cc-icon
          v-else
          :type="item.icon"
          :color="router ? route.path === item.url ? activeColor : inactiveColor : currentIndex === index ? activeColor : inactiveColor"
          :size="iconSize"
        ></cc-icon>
      </div>
      <div
        class="cc-tabbar-item-text"
        :style="{ color: router ? route.path === item.url ? activeColor : inactiveColor : currentIndex === index ? activeColor : inactiveColor }"
      >{{ item.text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, useSlots, PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import cloneDeep from 'lodash/cloneDeep'

export interface TabbarListItem {
  // 图标
  icon?: string,
  // 显示的文字
  text: string,
  // 跳转路径
  url?: string,
  // 徽标显示的数字
  count?: string | number,
  // 徽标是否显示红点
  dot?: boolean,
  // 中间凸起按钮
  midButton?: boolean,
  // 插槽
  slots?: string,
  active?: boolean
}

let route = useRoute()
let iRouter = useRouter()

let props = defineProps({
  // 当前激活菜单索引
  value: {
    type: [String, Number],
    default: 0
  },
  // tabbar配置数组
  list: {
    type: Array as PropType<TabbarListItem[]>,
    required: true
  },
  // 是否固定在底部
  fixed: {
    type: Boolean,
    default: false
  },
  // 是否显示上边框
  border: {
    type: Boolean,
    default: true
  },
  // 开启路由模式
  router: {
    type: Boolean,
    default: false
  },
  // 选中标签的颜色
  activeColor: {
    type: String,
    default: '#0081ff'
  },
  // 未选中标签的颜色
  inactiveColor: {
    type: String,
    default: '#7d7e80'
  },
  // 图标尺寸
  iconSize: {
    type: [String, Number],
    default: 20
  },
  // 导航栏高度
  height: {
    type: [String, Number],
    default: 50
  },
  // 背景颜色
  bgColor: {
    type: String,
    default: '#fff'
  },
  zIndex: {
    type: [Number, String],
    default: 999
  }
})
let emits = defineEmits(['change'])
let slots = useSlots()

let cloneList = ref<TabbarListItem[]>(props.list)
let currentIndex = ref<number | string>(Number(props.value))


cloneList.value.map((item: TabbarListItem, index: number) => {
  if (currentIndex.value === index) item.active = true
  else item.active = false
})

let clickItem = (item: TabbarListItem, index: number) => {
  if (props.router && item.url) {
    iRouter.push(item.url)
    currentIndex.value = item.url
  }
  cloneList.value.map((i: TabbarListItem) => {
    i.active = false
  })
  item.active = true
  currentIndex.value = index
  emits('change', {
    item,
    index
  })
  console.log(item)
}
</script>

<style scoped lang="scss">
.cc-tabbar {
  display: flex;
  align-items: center;
  width: 100%;
  &-fixed {
    position: fixed;
    left: 0;
    bottom: 0;
  }
  &-border {
    border-top: 1px solid #eee;
  }
  &-item {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    padding: #{topx(4)} 0;
    &-midbtn {
      width: 37px;
      height: 37px;
      border-radius: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: #fff;
      top: -16px;
      left: 0;
      z-index: 6;
    }
    &-icon {
      position: relative;
    }
    &-count {
      position: absolute;
      top: #{topx(8)};
      right: #{topx(-8)};
      box-sizing: border-box;
      min-width: #{topx(16)};
      padding: 0 #{topx(3)};
      color: #fff;
      font-weight: 500;
      font-size: 12px;
      text-align: center;
      background-color: #ee0a24;
      border: 1px solid #fff;
      border-radius: #{topx(16)};
      transform: translate(50%, -50%);
      transform-origin: 100%;
    }
    &-dot {
      position: absolute;
      width: #{topx(8)};
      height: #{topx(8)};
      background: #ee0a24;
      border-radius: 100%;
      top: #{topx(4)};
      right: #{topx(-6)};
      transform: translate(50%, -50%);
      transform-origin: 100%;
    }
  }
}
</style>