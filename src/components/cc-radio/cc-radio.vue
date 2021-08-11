<template>
  <div class="cc-radio" :class="{ 'cc-radio-vertical': vertical }">
    <div
      class="cc-radio-item"
      v-for="(item, index) in list"
      :key="index"
    >
      <div
       @click="clickItem(item, index)"
        v-if="!item.icon"
        class="cc-radio-item-icon"
        :class="{ 'cc-radio-item-icon-round': item.round, disabled: item.disabled }"
        :style="{
          background: active === index ? item.checkedColor : item.incheckedColor ? item.incheckedColor : '#fff',
          border: active === index ? `1px solid ${item.checkedColor}` : `1px solid ${item.incheckedColor ? item.incheckedColor : '#c8c9cc'}`,
          width: item.size + 'px',
          height: item.size + 'px',
        }"
      >
        <cc-icon
          v-if="active === index"
          :type="item.icon ? item.icon : 'checkmarkempty'"
          :color="item.disabled ? '#c8c9cc' : '#fff'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </div>
      <div v-else @click="clickText(item, index)">
        <cc-icon
          :type="item.icon"
          :color="item.disabled ? '#c8c9cc' : active === index ? item.checkedColor ? item.checkedColor : '#0081ff' : item.incheckedColor ? item.incheckedColor : '#c8c9cc'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </div>
      <div 
      @click="clickItem(item, index)"
      class="cc-radio-item-text"
      :class="{'cc-radio-item-text-disabled': item.labelDisabled}"
      >{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, PropType, watch } from 'vue'

export interface RadioItem {
  // 选项显示文字
  label: string,
  // 选项值
  value: string | number | boolean,
  // 是否禁用
  disabled?: boolean,
  // 单选框尺寸
  size?: string | number,
  // 未选中颜色
  incheckedColor?: string,
  // 选中颜色
  checkedColor?: string,
  // 是否圆形
  round?: boolean,
  // 选项图标
  icon?: string,
  // 文本禁用点击
  labelDisabled?: boolean
}

let props = defineProps({
  // 单选框数据数组
  list: {
    type: Array as PropType<RadioItem[]>,
    required: true
  },
  // 初始选中值
  value: {
    type: [String, Number, Boolean],
    default: ''
  },
  // 横向排列
  vertical: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['update:value', 'change'])


let active = ref<number>(0)
props.list.map((item: RadioItem) => {
  if (!item.checkedColor) item.checkedColor = '#0081ff'
  if (!item.size) item.size = '20'
  if (item.round === undefined) item.round = true
  active.value = props.list.findIndex(i => i.value === props.value)
})

let clickItem = (item: RadioItem, index: number) => {
  if (item.disabled) return
  active.value = index
  emits('update:value', item.value)
  emits('change', item.value)
}
let clickText = (item: RadioItem, index: number) => {
  if (item.labelDisabled) return
  active.value = index
  emits('update:value', item.value)
  emits('change', item.value)
}

watch(() => props.value, (val: any) => {
  active.value = props.list.findIndex(item => item.value === val)
})

</script>

<style scoped lang="scss">
.cc-radio {
  &-vertical {
    display: flex;
    align-items: center;
    .cc-radio-item {
      margin-bottom: 0;
      height: 100%;
      margin-left: #{topx(12)};
      &:first-child {
        margin-left: 0;
      }
    }
  }
  &-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: #{topx(6)};
    &:last-child {
      margin-bottom: 0;
    }
    &-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      &-round {
        border-radius: 100%;
      }
    }
    &-text {
      margin-left: #{topx(10)};
      &-disabled {
        pointer-events: none;
      }
    }
  }
}
.disabled {
  background: #ebedf0 !important;
  border-color: #c8c9cc !important;
  pointer-events: none;
}
</style>