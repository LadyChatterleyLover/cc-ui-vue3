<template>
  <div class="cc-collapse">
    <div class="cc-collapse-item" v-for="(item, index) in cloneList" :key="index">
      <cc-cell
        :title="item.title"
        :value="item.value"
        :label="item.label"
        :icon="item.icon"
        :border="item.border"
        :size="item.size"
        :iconSize="item.iconSize"
        @click="clickItem(item, index)"
        :isLink="false"
        :class="{ disabled: item.disabled }"
        :name="item.name"
      >
        <template #title>
          <slot name="title" v-if="item.titleSlot"></slot>
        </template>
        <template #value>
          <div>
            <slot name="value" v-if="item.rightSlot"></slot>
          </div>
        </template>
        <template #right-icon>
          <div v-if="item.arrow" class="cc-collapse-item-icon">
            <div
              class="cc-collapse-item-icon-content"
              :class="{ 'cc-collapse-item-icon-active': item.show }"
            >
              <cc-icon
                :color="item.disabled ? '#c8c9cc' : item.arrowColor ? item.arrowColor : '#969799'"
                type="arrowdown"
                :size="item.arrowSize ? item.arrowSize : 16"
              ></cc-icon>
            </div>
          </div>
        </template>
      </cc-cell>
      <div class="cc-collapse-item-wrap" :style="{ height: item.show ? height + 'px' : 0 }">
        <div :id="`cc-collapse-item-content-${uid}-${index}`" class="cc-collapse-item-content">
          <slot v-if="item.contentSlot" name="content"></slot>
          <div v-else>{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref, nextTick, getCurrentInstance, watch } from 'vue'
import cloneDeep from 'lodash/cloneDeep'


export interface CollapseItem {
  // 是否展开
  show?: boolean,
  // 标题
  title?: string,
  // 内容
  content?: string,
  // 标识符
  name?: string | number,
  // 右侧内容
  value?: string,
  // 标题下方描述
  label?: string,
  // 左侧图标
  icon?: string,
  // 图标大小
  iconSize?: string | number,
  // 是否显示边框
  border?: boolean,
  // 尺寸
  size?: '' | 'large',
  // 显示右侧箭头
  arrow?: boolean,
  // 右侧箭头颜色
  arrowColor?: string,
  // 右侧箭头大小
  arrowSize?: string | number,
  // 是否禁用
  disabled?: boolean,
  // 标题插槽
  titleSlot?: boolean,
  // 内容插槽
  contentSlot?: boolean,
  // 右侧插槽
  rightSlot?: boolean
}

let props = defineProps({
  // 选项数组
  list: {
    type: Array as PropType<CollapseItem[]>,
    required: true
  },
  // 默认展开选项
  current: {
    type: [String, Number],
    default: ''
  },
  // 手风琴模式
  accordion: {
    type: Boolean,
    default: false
  }
})
let height = ref<number>(0)
let cloneList = ref<CollapseItem[]>([])
let uid = getCurrentInstance()!.uid
let active = ref<number | string>(0)

cloneList.value = cloneDeep(props.list)

nextTick(() => {
  cloneList.value.map((item: CollapseItem, index: number) => {
    if (item.arrow === undefined) item.arrow = true
    if (item.border === undefined) item.border = true
    if (!item.iconSize) item.iconSize = '16'
    if (!item.arrowColor) item.arrowColor = '#969799'
    if (!item.name) item.name = index
  })

  if (!props.current) {
    active.value = ''
  }
  else {
    if (typeof props.current === 'number') {
      active.value = props.current
    } else {
      active.value = props.list.findIndex((item, index) => item.name === props.current || index === Number(props.current))
    }
  }
})

watch(() => active.value, val => {
  cloneList.value.map((item: CollapseItem, index: number) => {
    if (val === index) {
      item.show = true
      let content = document.getElementById(`cc-collapse-item-content-${uid}-${index}`)
      height.value = (content as HTMLElement).offsetHeight
    }
    else item.show = false
  })
})



let clickItem = (item: CollapseItem, index: number) => {
  if (props.accordion) {
    active.value = index
    item.show = !item.show
    cloneList.value.map((i: CollapseItem) => {
      if (active.value !== index) i.show = false
    })
  } else {
    item.show = !item.show
  }
  nextTick(() => {
    let content = document.getElementById(`cc-collapse-item-content-${uid}-${index}`)
    height.value = (content as HTMLElement).offsetHeight
  })
}
</script>

<style scoped lang='scss'>
.cc-collapse {
  width: 100%;
  .cc-collapse-item {
    width: 100%;
    &-icon {
      display: flex;
      align-items: center;
      &-content {
        transition: all 0.3s;
        margin-left: #{topx(4)};
      }
      &-active {
        transform: rotate(180deg);
      }
    }
    &-wrap {
      height: 0;
      transition: all 0.3s;
      overflow: hidden;
    }
    &-content {
      padding: #{topx(12)} #{topx(16)};
      color: #969799;
      font-size: 14px;
    }
  }
  .disabled {
    color: #c8c9cc;
    pointer-events: none;
    cursor: not-allowed;
  }
}
</style>