<template>
  <div class="cc-tree-select">
    <template v-if="isMultiple">
      <div class="cc-tree-select-index">
        <div
          @click="clickNav(item, index)"
          v-for="(item, index) in list"
          :key="index"
          class="cc-tree-select-index-container"
          :class="{ 'cc-tree-select-index-active': currentIndex === index, 'cc-tree-select-disabled': item.disabled }"
        >
          <cc-badge
            v-if="item.dot || item.badge"
            :dot="item.dot"
            :content="item.badge"
          >{{ item.text }}</cc-badge>
          <text v-else>{{ item.text }}</text>
        </div>
      </div>
      <div class="cc-tree-select-content" v-if="currentItem && currentItem.children">
        <div
          class="cc-tree-select-content-item"
          v-for="(item, index) in currentItem.children"
          :key="index"
          @click="clickItem(item, index)"
        >
          <div
            class="cc-tree-select-content-item-text"
            :class="{ 'cc-tree-select-disabled': item.disabled }"
            :style="{ color: item.checked ? activeColor : '#000' }"
          >{{ item.text }}</div>
          <div v-if="item.checked">
            <cc-icon :type="selectedIcon" :color="activeColor" size="16"></cc-icon>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="cc-tree-select-index">
        <div
          @click="clickNav(item, index)"
          v-for="(item, index) in list"
          :key="index"
          class="cc-tree-select-index-container"
          :class="{ 'cc-tree-select-index-active': currentIndex === index, 'cc-tree-select-disabled': item.disabled }"
        >
          <cc-badge
            v-if="item.dot || item.badge"
            :dot="item.dot"
            :content="item.badge"
          >{{ item.text }}</cc-badge>
          <text v-else>{{ item.text }}</text>
        </div>
      </div>
      <div class="cc-tree-select-content" v-if="currentItem && currentItem.children">
        <div
          class="cc-tree-select-content-item"
          v-for="(item, index) in currentItem.children"
          :key="index"
          @click="clickItem(item, index)"
        >
          <div
            class="cc-tree-select-content-item-text"
            :class="{ 'cc-tree-select-disabled': item.disabled }"
            :style="{ color: currentItem.currentChildIndex === index ? activeColor : '#000' }"
          >{{ item.text }}</div>
          <div v-if="currentItem.currentChildIndex === index">
            <cc-icon :type="selectedIcon" :color="activeColor" size="16"></cc-icon>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, computed, onMounted } from 'vue';
import cloneDeep from 'lodash/cloneDeep'


export interface TreeSelectItem {
  id: string | number,
  text: string,
  disabled?: boolean,
  dot?: boolean,
  badge?: string | number,
  index?: number,
  checked?: boolean,
  currentChildIndex?: number,
  children?: TreeSelectItem[]
}

let props = defineProps({
  // 分类数据
  items: {
    type: Array as PropType<TreeSelectItem[]>,
    default: () => []
  },
  // 左侧选中项的索引
  mainActiveIndex: {
    type: Number,
    default: 0
  },
  // 右侧选中项的 id，支持传入数组
  activeId: {
    type: [Number, String, Array],
    default: 0
  },
  // 选中时的图标
  selectedIcon: {
    type: String,
    default: 'checkmarkempty'
  },
  // 激活时颜色
  activeColor: {
    type: String,
    default: '#ee0a24'
  }
})
let emits = defineEmits(['clickNav', 'clickItem'])


let currentIndex = ref<number>(-1)
let currentItem = ref<TreeSelectItem>()
let list = ref<TreeSelectItem[]>(cloneDeep(props.items))

let clickNav = (item: TreeSelectItem, index: number) => {
  if (item.disabled) return
  if (isMultiple.value) {
    currentIndex.value = index
    currentItem.value = list.value[currentIndex.value]
    list.value.map((item: TreeSelectItem) => {
      if ((props.activeId as any[]).includes(item.id)) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
  } else {
    currentIndex.value = index
    currentItem.value = list.value[currentIndex.value]
    currentItem.value!.index = index
  }
  emits('clickNav', list.value)
}
let clickItem = (item: TreeSelectItem, index: number) => {
  if (isMultiple.value) {
    list.value.map((item1: TreeSelectItem) => {
      item1.children && item1.children && item1.children!.map((item2: TreeSelectItem) => {
        if (item1.index !== currentIndex.value) {
          item2.checked = false
        }
      })
    })
    item.checked = !item.checked
    emits('clickItem', list.value)
  } else {
    list.value.map((item: TreeSelectItem) => {
      if (item.index !== currentIndex.value) {
        item.currentChildIndex = -1
      } else {
        item.currentChildIndex = index
      }
    })
    emits('clickItem', item)
  }
}

onMounted(() => {
  if (isMultiple.value) {
    list.value.map((item: TreeSelectItem, index: number) => {
      item.index = index
      if (item.children && item.children.length) {
        item.children.map((item1: TreeSelectItem) => {
          item1.checked = false
          item1.index = index
          if (String(props.activeId).includes(String(item1.id))) {
            item1.checked = true
          }
        })
      }
    })
    currentIndex.value = props.mainActiveIndex
    currentItem.value = list.value[props.mainActiveIndex]
  } else {
    list.value.map((item: TreeSelectItem, index: number) => {
      item.index = index
    })
    currentIndex.value = props.mainActiveIndex
    currentItem.value = list.value[props.mainActiveIndex]
    currentItem.value.currentChildIndex = Number(props.activeId)
  }
})

let isMultiple = computed(() => {
  return Array.isArray(props.activeId)
})
</script>

<style scoped lang="scss">
.cc-tree-select {
  width: 100%;
  display: flex;
  &-disabled {
    color: #c8c9cc !important;
    cursor: not-allowed;
  }
  &-index {
    flex: 1;
    &-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 48px;
      background-color: #f7f8fa;
    }
    &-active {
      background: #fff;
    }
  }
  &-content {
    flex: 2;
    background: #fff;
    &-item {
      height: 48px;
      padding: 0 32px 0 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>