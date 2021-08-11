<template>
  <div
    class="cc-cell"
    :class="[
      { 'cc-cell-large': size },
      { 'cc-cell-border': border }
    ]"
    @click="onClick"
  >
    <div>
      <div class="cc-cell-title">
        <div v-if="icon" class="cc-cell-left-icon">
          <cc-icon :size="iconSize" :type="icon" color="#323233"></cc-icon>
          <slot name="left-icon"></slot>
        </div>
        <div >
          {{ title }}
          <slot  name="title" v-if="!title"></slot>
        </div>
      </div>
      <div class="cc-cell-label">
        {{ label }}
        <slot name="label" v-if="!label"></slot>
      </div>
    </div>
    <div class="cc-cell-value">
      <div class="cc-cell-value-wrap">
        {{ value }}
        <slot name="value" v-if="!value"></slot>
      </div>
      <div class="cc-cell-right-icon">
        <cc-icon color="#969799" v-if="isLink" :type="`arrow${arrowDirection}`" :size="iconSize"></cc-icon>
        <slot name="right-icon"></slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { defineProps, defineEmits, PropType } from 'vue'

type CellSizeProps = '' | 'large'
type CellArrowDirectionProps = 'right' | 'left' | 'up' | 'down'

let props = defineProps({
  // 标题
  title: {
    type: String
  },
  // 右侧内容
  value: {
    type: String
  },
  // 标题下方描述
  label: {
    type: String
  },
  // 左侧图标
  icon: {
    type: String
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: true
  },
  // 尺寸
  size: {
    type: String as PropType<CellSizeProps>,
  },
  // 显示右侧箭头
  isLink: {
    type: Boolean,
    default: false
  },
  // 箭头方向
  arrowDirection: {
    type: String as PropType<CellArrowDirectionProps>,
    default: 'right',
  },
  iconSize: {
    type: String,
    default: '16'
  },
})
let emits = defineEmits(['click'])
let onClick = () => {
  emits('click')
}
</script>

<style lang="scss" scoped>
.cc-cell {
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  color: #323233;
  font-size: 14px;
  background-color: #fff;
  &-border::after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 16px;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid #ebedf0;
    transform: scaleY(0.5);
  }
  &-left-icon {
    margin-right: 4px;
    flex-shrink: 0;
  }
  &-large {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  &-title,
  &-value {
    flex: 1;
  }
  &-title {
    display: flex;
    align-items: center;
  }
  &-value {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: hidden;
    color: #969799;
    text-align: right;
    vertical-align: middle;
    word-wrap: break-word;
    &-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .cc-cell-right-icon {
      position: relative;
      top: 1px;
      margin-left: 4px;
    }
  }
  &-label {
    margin-top: 4px;
    color: #969799;
    font-size: 12px;
    line-height: 18px;
  }
}
</style>