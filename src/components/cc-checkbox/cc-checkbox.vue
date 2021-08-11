<template>
  <div class="cc-checkbox">
    <div class="cc-checkbox-item">
      <div
        @click="clickItem(item)"
        v-if="!item.icon"
        class="cc-checkbox-item-icon"
        :class="{ 'cc-checkbox-item-icon-round': item.round, disabled: item.disabled }"
        :style="{
          background: item.checked ? item.checkedColor : item.incheckedColor ? item.incheckedColor : '#fff',
          border: item.checked ? `1px solid ${item.checkedColor}` : `1px solid ${item.incheckedColor ? item.incheckedColor : '#c8c9cc'}`,
          width: item.size + 'px',
          height: item.size + 'px',
        }"
      >
        <cc-icon
          v-if="item.checked"
          :type="item.icon ? item.icon : 'checkmarkempty'"
          :color="item.disabled ? '#c8c9cc' : '#fff'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </div>
      <div v-else @click="clickText(item)">
        <cc-icon
          :type="item.icon"
          :color="item.disabled ? '#c8c9cc' : item.checked ? item.checkedColor ? item.checkedColor : '#0081ff' : item.incheckedColor ? item.incheckedColor : '#c8c9cc'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </div>
      <div
        @click="clickItem(item)"
        class="cc-checkbox-item-text"
        :class="{ 'cc-checkbox-item-text-disabled': item.labelDisabled }"
      >{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, PropType } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface CheckboxOption {
  // 是否被选中
  checked?: boolean,
  // 选项显示文字
  label: string,
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
  checked: {
    type: Boolean,
    default: false
  },
  option: {
    type: Object as PropType<CheckboxOption>,
    required: true
  }
})
let emits = defineEmits(['update:checked', 'change'])


let item = ref<CheckboxOption>(cloneDeep(props.option))
item.value.checked! = props.checked
if (!item.value.checkedColor) item.value.checkedColor = '#0081ff'
if (!item.value.size) item.value.size = '20'
if (item.value.round === undefined) item.value.round = true


let clickItem = (item: CheckboxOption) => {
  if (item.disabled) return
  item.checked = !item.checked
  emits('change', item.checked)
  emits('update:checked', item.checked)
}
let clickText = (item: CheckboxOption) => {
  if (item.labelDisabled) return
  emits('update:checked', item.checked)
  emits('change', item.checked)
}


</script>

<style scoped lang="scss">
.cc-checkbox {
  &-vertical {
    display: flex;
    align-items: center;
    .cc-checkbox-item {
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