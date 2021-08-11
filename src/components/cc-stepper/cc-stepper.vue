<template>
  <div class="cc-stepper">
    <div
      class="cc-stepper-button"
      v-if="showPlus"
      :class="{
        disabled: value <= minValue  || disablePlus,
        'cc-stepper-button-round': round
      }"
      :style="{
        width: buttonSize + 'px',
        height: buttonSize + 'px',
      }"
      @click="minus"
    >-</div>
    <input
      class="cc-stepper-value"
      :class="{
        disabled: disabled || disableInput,
        'cc-stepper-value-round': round
      }"
      :style="{
        width: inputWidth + 'px',
        height: buttonSize + 'px',
      }"
      type="number"
      v-model="activeValue"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
    />
    <div
      v-if="showMinus"
      class="cc-stepper-button"
      :class="{
        disabled: value >= maxValue  || disableMinus,
        'cc-stepper-button-round': round
      }"
      :style="{
        width: buttonSize + 'px',
        height: buttonSize + 'px',
      }"
      @click="plus"
    >+</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from 'vue'

let props = defineProps({
  // 当前值
  value: {
    type: [Number, String],
    default: ''
  },
  // 最小值
  min: {
    type: [Number, String],
    default: 1
  },
  // 最大值
  max: {
    type: [Number, String],
    default: ''
  },
  // 步进
  step: {
    type: [Number, String],
    default: 1
  },
  // 加减按钮尺寸
  buttonSize: {
    type: [Number, String],
    default: 28
  },
  // 输入框宽度
  inputWidth: {
    type: [Number, String],
    default: 32
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 禁用输入框
  disableInput: {
    type: Boolean,
    default: false
  },
  // 限制输入整数
  integer: {
    type: Boolean,
    default: false
  },
  decimalLength: {
    type: [String, Number],
    default: Infinity
  },
  // 是否禁用增加按钮
  disablePlus: {
    type: Boolean,
    default: false
  },
  // 是否禁用减少按钮
  disableMinus: {
    type: Boolean,
    default: false
  },
  // 显示增加按钮
  showPlus: {
    type: Boolean,
    default: true
  },
  // 显示减少按钮
  showMinus: {
    type: Boolean,
    default: true
  },
  // 圆角按钮
  round: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['update:value', 'minus', 'plus', 'change', 'focus', 'blur'])
let activeValue = ref<number | string>(props.value)
let minValue = ref<number>(0)
let maxValue = ref<number>(0)

if (props.min === undefined || !props.min) minValue.value = -Infinity
else minValue.value = Number(props.min)
if (props.max === undefined || !props.max) maxValue.value = Infinity
else maxValue.value = Number(props.max)

// 点击减少按钮
let minus = () => {
  if (props.step) (activeValue.value as number) -= Number((props.step as number))
  else (activeValue.value as number)--
  emits('minus', activeValue.value)
  if (activeValue.value <= minValue.value) {
    emits('update:value', minValue.value)
    return
  }
}
// 点击增加按钮
let plus = () => {
  if (props.step) (activeValue.value as number) += Number((props.step as number))
  else (activeValue.value as number)++
  emits('plus', activeValue.value)
  if (activeValue.value >= maxValue.value) emits('update:value', maxValue.value)
}

// 获取焦点事件
let onFocus = (e: FocusEvent) => {
  emits('focus', e)
}
// 失去焦点事件
let onBlur = (e: FocusEvent) => {
  if (Number(activeValue.value) <= minValue.value) {
    activeValue.value = minValue.value
  }
  if (Number(activeValue.value) >= maxValue.value) {
    activeValue.value = maxValue.value
  }
  emits('update:value', Number(activeValue.value))
  emits('blur', e)
}
// 输入事件
let onInput = (e: Event) => {
  if (props.integer) {
    let str = '' + activeValue.value
    if (str.indexOf('.') !== -1) {
      let arr = str.split('')
      arr.splice(arr.length - 1)
      let str2 = arr.join('')
      activeValue.value = +str2
    }
  }
  if (props.decimalLength && props.decimalLength !== Infinity) {
    let num = String(activeValue.value).split('.')[0]
    let str = String(activeValue.value).split('.')[1]
    if (str && str.length > props.decimalLength) {
      activeValue.value = num + '.' + str.substring(0, (props.decimalLength as number))
    }
  }
}

watch(() => activeValue.value, val => {
  emits('update:value', val)
  emits('change', val)
})
watch(() => props.value, val => {
  activeValue.value = val
})

</script>

<style scoped lang="scss">
.cc-stepper {
  display: flex;
  align-items: center;
  &-button {
    background: #f2f3f5;
    color: #323233;
    display: flex;
    align-items: center;
    justify-content: center;
    &-round {
      color: #ee0a24 !important;
      background-color: #fff !important;
      border: 1px solid #ee0a24 !important;
      border-radius: 100% !important;
    }
    &:first-child {
      border-radius: #{topx(4) 0 0 #{topx(4)}};
    }
    &:last-child {
      border-radius: 0 #{topx(4) #{topx(4)}} 0;
    }
  }
  &-value {
    margin: 0 #{topx(2)};
    color: #323233;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    &-round {
      background-color: transparent !important;
    }
  }
}
.disabled {
  color: #c8c9cc;
  background-color: #f7f8fa;
  cursor: not-allowed;
  pointer-events: none;
}
</style>