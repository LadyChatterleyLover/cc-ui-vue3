<template>
  <cc-button 
  @click="clickButton" 
  :disabled="disabled"
  :type='type'
  :plain='plain'
  :round='round'
  :block='block'
  :size='size'
  :loading='loading'
  :icon='icon'
  :color='color'
  :customStyle='customStyle'
  :hoverClass='hoverClass'
  >
  <span>{{ cloneText }}</span>
  </cc-button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onUnmounted, PropType, watch, computed } from 'vue'

type ButtonTypeProps = '' | 'primary' | 'success' | 'error' | 'warning' | 'info'
type ButtonSizeProps = '' | 'large' | 'small' | 'mini'


let props = defineProps({
  // 按钮文字
  text: {
    type: String,
    default: '发送'
  },
  // 结束文字
  endText: {
    type: String,
    default: '重新发送'
  },
  // 倒计时过程的文字
  countDownText: {
    type: String,
    default: '秒后重新发送'
  },
  // 倒计时事件
  countDown: {
    type: [String, Number],
    default: 60
  },
  // 是否自定义文字
  customText: {
    type: String,
    default: ''
  },
  // 按钮类型
  type: {
    type: String as PropType<ButtonTypeProps>,
    default: ''
  },
  // 是否是朴素按钮
  plain: {
    type: Boolean,
    default: false
  },
  // 圆形按钮
  round: {
    type: Boolean,
    default: false
  },
  // 块级按钮
  block: {
    type: Boolean,
    default: false
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  // 尺寸
  size: {
    type: String as PropType<ButtonSizeProps>,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  // 图标 和uni-icon一致
  icon: {
    type: String,
  },
  // 自定义颜色
  color: {
    type: String,
    default: ''
  },
  // 自定义样式
  customStyle: {
    type: Object
  },
  // 按钮点击时的样式
  hoverClass: {
    type: String,
  }
})
let emits = defineEmits(['start', 'end', 'change'])

let disabled = ref<boolean>(false)
let time = ref<number>(Number(props.countDown))
let cloneText = ref<string>(props.text)
let cloneCountDownText= computed(() => `${time.value}${props.countDownText}`)
let num = ref<number>(0)

let timer = ref()
let clickButton = () => {
  if (!props.customText) time.value += 1
  emits('start')
  timer.value = setInterval(() => {
    time.value--
    disabled.value = true
    cloneText.value = props.customText ? props.customText : cloneCountDownText.value
    if (time.value === 0) {
      emits('end')
      disabled.value = false
      cloneText.value = props.endText
      time.value = Number(props.countDown)
      clearInterval(timer.value)
    }
  }, 1000)
}
watch(() => time.value, val => {
  num.value ++
  if (val <= props.countDown && num.value > 1) emits('change', val)
}, {immediate: true})

onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

<style scoped lang="scss">
.cc-verify-button {
}
</style>