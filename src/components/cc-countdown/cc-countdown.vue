<template>
  <div class="cc-count-down">
    <slot v-if="defaultSlots" :timeData="timeData"></slot>
    <template v-else>
      <div v-if="showDays && day > 0">{{ dayValue }}</div>
      <div
        v-if="showDays && day > 0"
        :style="{ fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }"
      >{{ separator === 'colon' ? ':' : '天' }}</div>
      <div v-if="showHours">{{ hourValue }}</div>
      <div
        v-if="showHours"
        :style="{ fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }"
      >{{ separator === 'colon' ? ':' : '时' }}</div>
      <div v-if="showMinutes">{{ minuteValue }}</div>
      <div
        v-if="showMinutes"
        :style="{ fontSize: separatorSize + 'px', color: separatorColor, margin: `0 ${gutter}rpx` }"
      >{{ separator === 'colon' ? ':' : '分' }}</div>
      <div v-if="showSeconds">{{ secondValue }}</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, useSlots, computed, onMounted, onUnmounted, watch } from 'vue'

let props = defineProps({
  // 倒计时时间
  time: {
    type: Number,
    default: 0
  },
  // 分隔符 可选择 zh
  separator: {
    type: String,
    default: 'colon'
  },
  // 分隔符大小
  separatorSize: {
    type: [Number, String],
    default: 16
  },
  // 分割符颜色
  separatorColor: {
    type: String,
    default: '#000'
  },
  // 分割符与文字之间的间距
  gutter: {
    type: [Number, String],
    default: 0
  },
  // 是否显示倒计时的天
  showDays: {
    type: Boolean,
    default: true
  },
  // 是否显示倒计时的时
  showHours: {
    type: Boolean,
    default: true
  },
  // 是否显示倒计时的分
  showMinutes: {
    type: Boolean,
    default: true
  },
  // 是否显示倒计时的秒
  showSeconds: {
    type: Boolean,
    default: true
  },
})
let slots = useSlots()
let emits = defineEmits(['end', 'change'])

let day = ref<number>(0)
let hour = ref<number>(0)
let minute = ref<number>(0)
let second = ref<number>(0)
let timer = ref<any>()
let timeValue = ref<number>(0)
let timeData = ref<any>({})


let defaultSlots = ref()


let formatNum = (num: number) => {
  return num < 10 ? '0' + num : '' + num
}


let countDowm = () => {
  clearInterval(timer.value)
  timer.value = setInterval(() => {
    if (hour.value === 0) {
      if (minute.value !== 0 && second.value === 0) {
        second.value = 59
        minute.value -= 1
      } else if (minute.value === 0 && second.value === 0) {
        second.value = 0
        emits('end')
        clearInterval(timer.value)
      } else {
        second.value -= 1
      }
    } else {
      if (minute.value !== 0 && second.value === 0) {
        second.value = 59
        minute.value -= 1
      } else if (minute.value === 0 && second.value === 0) {
        hour.value -= 1
        minute.value = 59
        second.value = 59
      } else {
        second.value -= 1
      }
    }
    timeValue.value = hour.value * 1000 * 3600 + minute.value * 1000 * 60 + second.value * 1000
    emits('change', timeValue.value)
  }, 1000)
}

let dayValue = computed(() => formatNum(day.value))
let hourValue = computed(() => formatNum(hour.value))
let minuteValue = computed(() => formatNum(minute.value))
let secondValue = computed(() => formatNum(second.value))

onMounted(() => {
  if (slots.default) defaultSlots.value = slots.default
  if (props.time > 0 && props.time < 1000 * 60 * 60 * 24) {
    day.value = 0
    hour.value = Math.floor((props.time / 3600 / 1000) % 24)
    minute.value = Math.floor((props.time / 60 / 1000) % 60)
    second.value = Math.floor((props.time / 1000) % 60)
  } else {
    // 如果时间大于1天
    // 如果刚好是整数天
    if (props.time % (1000 * 60 * 60 * 24) === 0) {
      day.value = props.time / (1000 * 60 * 60 * 24)
      hour.value = 24 * day.value
      minute.value = 0
      second.value = 0
    } else {
      day.value = Math.floor(props.time / (1000 * 60 * 60 * 24))
      hour.value = day.value * 24 + Math.floor((props.time / 3600 / 1000) % 24)
      minute.value = Math.floor((props.time / 60 / 1000) % 60)
      second.value = Math.floor((props.time / 1000) % 60)
    }
  }
  timeData.value.days = dayValue.value
  timeData.value.hours = hourValue.value
  timeData.value.minutes = minuteValue.value
  timeData.value.seconds = secondValue.value
  countDowm()
})

onUnmounted(() => {
  clearInterval(timer.value)
  timer.value = null
})

watch(() => timeValue.value, () => {
  timeData.value.days = dayValue.value
  timeData.value.hours = hourValue.value
  timeData.value.minutes = minuteValue.value
  timeData.value.seconds = secondValue.value
}, { deep: true })
</script>

<style scoped lang="scss">
.cc-count-down {
  display: flex;
  align-items: center;
}
</style>