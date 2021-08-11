<template>
  <div :id="id" class="cc-countup"></div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, getCurrentInstance, computed, ref, nextTick } from 'vue'
import { CountUp, CountUpOptions } from 'countup.js'

let instance = getCurrentInstance()

let props = defineProps({
  // 是否自动滚动
  autoplay: {
    type: Boolean,
    default: true
  },
  // 滚动开始值
  startVal: {
    type: Number,
  },
  // 滚动结束值
  endVal: {
    type: Number,
  },
  // 滚动持续时长
  duration: {
    type: Number,
    default: 2
  },
  // 使用过渡动画
  useEasing: {
    type: Boolean,
    default: true
  },
  // 千分位分隔符
  useGrouping: {
    type: Boolean,
    default: true
  },
  // 千分位分割符号
  separator: {
    type: String,
    default: ','
  },
  // 小数位数
  decimalPlaces: {
    type: Number,
    default: 0
  },
  // 小数位分割符号
  decimal: {
    type: String,
    default: '.'
  },
  // 前缀内容
  prefix: {
    type: String,
    default: ''
  },
  // 后缀内容
  suffix: {
    type: String,
    default: ''
  },
  end: {
    type: Function
  }
})

let id = computed(() => 'cc-countup ' + instance!.uid)
let options: CountUpOptions = {
  startVal: props.startVal!,
  duration: props.duration,
  useEasing: props.useEasing,
  useGrouping: props.useGrouping,
  separator: props.separator,
  decimalPlaces: props.decimalPlaces,
  decimal: props.decimal,
  prefix: props.prefix,
  suffix: props.suffix,
  
}

let countup = ref()

onMounted(() => {
  countup.value = new CountUp(id.value, props.endVal!, options)
  if (!countup.value.error) {
    if (props.autoplay) countup.value.start(props.end)
  } else {
    console.error(countup.value.error)
  }
})

defineExpose({
  countup
})

</script>

<style scoped lang="scss">
</style>