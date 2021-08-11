<template>
  <div class="cc-grid" :style="{ paddingLeft: gutter + 'px' }">
    <slot v-if="$slots.default"></slot>
    <template v-else>
      <div
        class="cc-grid-item"
        v-for="(item, index) in list"
        @click="clickItem(item, index)"
        :key="index"
        :style="{
          flexBasis: basis,
          paddingRight: gutter + 'px',
          marginBottom: gutter + 'px'
        }"
      >
        <div>
          <slot v-if="$slots.default"></slot>
          <div v-else :style="{ flexDirection: vertical ? 'row' : 'column' }" class="cc-grid-item-content">
            <div class="cc-grid-item-icon">
              <cc-badge :dot="item.dot" :content="item.badge" v-if="item.dot || item.badge">
                <cc-icon :type="item.icon" :color="item.iconColor" :size="item.iconSize"></cc-icon>
              </cc-badge>
              <cc-icon v-if="!item.dot && !item.badge" :type="item.icon" :color="item.iconColor" :size="item.iconSize"></cc-icon>
            </div>
            <div class="cc-grid-item-text" :class="{ 'cc-grid-item-content': vertical }" :style="{ fontSize: item.textSize + 'px', color: item.textColor }">{{ item.text }}</div>
          </div>
        </div>
        <div class="cc-grid-item-border-right" v-if="!gutter"></div>
        <div class="cc-grid-item-border-bottom" v-if="!gutter"></div>
      </div>
    </template>
  </div>
</template>

<script setup lang='ts'>
import {defineProps, defineEmits, PropType, computed} from 'vue'

export interface GridItem {
  text?: string,
  icon?: string,
  textColor?: string,
  iconColor?: string,
  textSize?: string,
  dot?: boolean,
  badge?: number | string
}

let props = defineProps({
    // 宫格数据
    list: {
      type: Array as PropType<GridItem[]>,
    },
    // 列数
    column: {
      type: Number,
      default: 4
    },
    // 间距
    gutter: {
      type: [Number, String],
      default: 0
    },
    // 内容是否横向排列
    vertical: {
      type: Boolean,
      default: false
    }
})
let emits = defineEmits(['clickItem'])

let clickItem = (item: GridItem, index: number) => {
  emits('clickItem', {
    item, 
    index
  })
}
let basis = computed(() => 100 / props.column + '%')
</script>

<style scoped lang="scss">
.cc-grid {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .cc-grid-item {
    box-sizing: border-box;
    position: relative;
    &-content {
      padding: #{topx(16)} #{topx(8)};
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
    }
    &-content-row {
      margin-left: #{topx(8)};
    }
    &-border-right {
      position: absolute;
      height: 100%;
      width: #{topx(1)};
      background: #ebedf0;
      right: 0;
      top: 0;
      bottom: 0;
    }
    &-border-bottom {
      position: absolute;
      height: #{topx(1)};
      width: 100%;
      background: #ebedf0;
      bottom: 0;
    }
  }
}
</style>
