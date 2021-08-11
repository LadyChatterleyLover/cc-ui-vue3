<template>
  <div class="cc-switch">
    <div
      class="cc-switch-wrap"
      :class="{ disabled }"
      :style="{ background: value ? activeColor : inactiveColor, fontSize: size + 'px' }"
      @click="clickSwitch"
    >
      <div class="cc-switch-wrap-node" :style="{ transform: `translateX(${move})` }"></div>
    </div>
    <div
      v-if="activeText"
      class="cc-switch-text"
      :style="{ color: value ? activeTextColor : inactiveTextColor }"
    >{{ value ? activeText : inactiveText ? inactiveText : activeText }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from "vue"


let props = defineProps({
  // 选中的值
  value: {
    type: [String, Number, Boolean],
    default: false
  },
  // 显示文字
  text: {
    type: String,
    default: ''
  },
  // 选中时的背景颜色
  activeColor: {
    type: String,
    default: '#0081ff'
  },
  // 未选中时的背景颜色
  inactiveColor: {
    type: String,
    default: '#fff'
  },
  // 选中时的背景颜色
  activeTextColor: {
    type: String,
    default: '#0081ff'
  },
  // 未选中时的背景颜色
  inactiveTextColor: {
    type: String,
    default: '#303133'
  },
  // 选中时的背景颜色
  activeText: {
    type: String,
    default: ''
  },
  // 未选中时的背景颜色
  inactiveText: {
    type: String,
    default: ''
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 尺寸
  size: {
    type: String,
    default: '24'
  }
})
let emits = defineEmits(['update:value', 'change'])

// 移动距离
let move = ref<string>('')
let checked = ref<boolean>(false)

let clickSwitch = () => {
  emits('update:value', !props.value)
}


watch(() => props.value, val => {
  checked.value = val as boolean
  move.value = props.value ? '1em' : '0'
}, { immediate: true })

watch(() => props.value, val => {
  emits('change', val)
})

</script>

<style scoped lang='scss'>
.cc-switch {
  display: flex;
  align-items: center;
  .cc-switch-wrap {
    position: relative;
    display: flex;
    box-sizing: content-box;
    align-items: center;
    width: 2em;
    height: 1em;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 1em;
    transition: background-color 0.3s;
    &-node {
      position: absolute;
      top: 0;
      left: 0;
      width: 1em;
      height: 1em;
      background-color: #fff;
      border-radius: 100%;
      box-shadow: 0 3px 1px 0 rgb(0 0 0 / 5%), 0 2px 2px 0 rgb(0 0 0 / 10%),
        0 3px 3px 0 rgb(0 0 0 / 5%);
      transition: transform 0.3s;
    }
  }
  &-text {
    font-size: 16px;
    margin-left: #{topx(6)};
  }
}
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
}
</style>