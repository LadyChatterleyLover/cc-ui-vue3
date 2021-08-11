<template>
  <div class="cc-checkbox" :class="{ 'cc-checkbox-vertical': vertical }">
    <div class="cc-checkbox-item" v-for="(item, index) in cloneList" :key="index">
      <div
        @click="clickItem(item, index)"
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
      <div v-else @click="clickText(item, index)">
        <cc-icon
          :type="item.icon"
          :color="item.disabled ? '#c8c9cc' : item.checked ? item.checkedColor ? item.checkedColor : '#0081ff' : item.incheckedColor ? item.incheckedColor : '#c8c9cc'"
          :size="item.size ? item.size : '14'"
        ></cc-icon>
      </div>
      <div
        @click="clickItem(item, index)"
        class="cc-checkbox-item-text"
        :class="{ 'cc-checkbox-item-text-disabled': item.labelDisabled }"
      >{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, PropType, watch } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface CheckboxItem {
  // 是否被选中
  checked?: boolean,
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
    type: Array as PropType<CheckboxItem[]>,
    required: true
  },
  // 初始选中值
  checked: {
    type: Array,
    default: []
  },
  // 横向排列
  vertical: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['update:checked', 'change'])
let cloneList = ref<CheckboxItem[]>(cloneDeep(props.list))

let active = ref<any[]>([])

// 初始化数据
cloneList.value.map((item: CheckboxItem) => {
  item.checked = false
  if (!item.checkedColor) item.checkedColor = '#0081ff'
  if (!item.size) item.size = '20'
  if (item.round === undefined) item.round = true
  props.checked.map(((val: any) => {
    if (item.value === val) item.checked = true
  }))
})

let clickItem = (item: CheckboxItem, index: number) => {
  if (item.disabled) return
  item.checked = !item.checked
  if (item.checked) active.value.push(item.value)
  else active.value = active.value.filter(i => i !== item.value)
  emits('change', active.value)
}
let clickText = (item: CheckboxItem, index: number) => {
  if (item.labelDisabled) return
  // active.value = index
  emits('update:checked', item.value)
  emits('change', item.value)
}

watch(() => cloneList, val => {
  val.value.map(item => {
    if (item.checked) {
      active.value.push(item.value)
    }
  })
}, {deep: true, immediate: true })

watch(() => active.value, (val: any) => {
  emits('update:checked', val)
}, { immediate: true })

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