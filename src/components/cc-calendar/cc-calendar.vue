<template>
  <cc-popup ref="popup" v-model:show="flag" height="800" mode="bottom" closeable @close="close">
    <div class="cc-calendar">
      <div class="cc-calendar-title">{{ title }}</div>
      <div class="cc-calendar-text">
        <div class="cc-calendar-text-year" @click="preYear">
          <cc-icon type="arrowleft" size="10"></cc-icon>
          <cc-icon type="arrowleft" size="10" style="position: relative;right: 6px;"></cc-icon>
        </div>
        <div class="cc-calendar-text-month" @click="preMonth">
          <cc-icon type="arrowleft" size="10"></cc-icon>
        </div>
        <div class="cc-calendar-text-current">{{ time.year }}年{{ time.month + 1 }}月</div>
        <div class="cc-calendar-text-month" @click="nextMonth">
          <cc-icon type="arrowright" size="10"></cc-icon>
        </div>
        <div class="cc-calendar-text-year" @click="nextYear">
          <cc-icon type="arrowright" size="10"></cc-icon>
          <cc-icon style="position: relative;left: -6px;" type="arrowright" size="10"></cc-icon>
        </div>
      </div>
      <div class="cc-calendar-days">
        <div class="cc-calendar-days-item" v-for="(item, index) in days" :key="index">{{ item }}</div>
      </div>
      <div class="cc-calendar-content">
        <div class="cc-calendar-content-item" v-for="i in 6" :key="i">
          <div class="cc-calendar-content-item-text" v-for="j in 7" :key="j">
            <div
              v-if="showDays[(i - 1) * 7 + (j - 1)]"
              @click="chooseDay(showDays[(i - 1) * 7 + (j - 1)])"
              :key="j"
              class="cc-calendar-content-item-text-value"
              :class="{
                'cc-calendar-content-item-text-nocurrent': !isCurrentMonth(showDays[(i - 1) * 7 + (j - 1)]),
                'cc-calendar-content-item-text-today': isToday(showDays[(i - 1) * 7 + (j - 1)])
              }"
              :style="{ background: isToday(showDays[(i - 1) * 7 + (j - 1)]) ? bgColor : '#fff', color: isToday(showDays[(i - 1) * 7 + (j - 1)]) ? '#fff' : '#303133' }"
            >
              <div>{{ showDays[(i - 1) * 7 + (j - 1)].getDate() }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="cc-calendar-value">{{ formatDate }}</div>
      <div class="cc-calendar-btn" @click="confirm">
        <cc-button block round :color="bgColor">{{ buttonText }}</cc-button>
      </div>
    </div>
  </cc-popup>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, watch, onMounted } from 'vue'

let props = defineProps({
  // 是否显示日历
  show: {
    type: Boolean,
    default: false
  },
  // 标题
  title: {
    type: String,
    default: '日期选择'
  },
  // 按钮文字
  buttonText: {
    type: String,
    default: '确认'
  },
  // 按钮颜色
  bgColor: {
    type: String,
    default: '#ee0a24'
  },
  // 是否多选
  range: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['select', 'confirm', 'update:show'])

// 获取时间年月日起
let getYearMonthDay = (date: any) => {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return {
    year,
    month,
    day
  }
}

// 显示弹框
let flag = ref<boolean>(props.show)
// 当前选中日期 默认今天
let value = ref<any>(new Date())
// 当前日期
let days = ref<string[]>(['日', '一', '二', '三', '四', '五', '六'])
let currentDay = ref<string>('')
// 选择的时间
let time = ref<any>({ year: getYearMonthDay(new Date()).year, month: getYearMonthDay(new Date()).month })
let dateValue = ref<any>(null)
let popup = ref()
// 关闭弹框
let close = (val: boolean) => {
  console.log(val)
  emits('update:show', val)
}


// 获取日期
let getDate = (year: number, month: number, day: number) => {
  return new Date(year, month, day)
}
// 判断是否是当前月份
let isCurrentMonth = (date: any) => {
  let { year, month } = getYearMonthDay(date)
  let { year: y, month: m } = getYearMonthDay(getDate(time.value.year, time.value.month, 1))
  return year === y && month === m
}
// 判断是否是今天
let isToday = (date: any) => {
  let { year, month, day } = getYearMonthDay(value.value)
  let { year: y, month: m, day: d } = getYearMonthDay(date)
  return year === y && month === m && day === d
}
// 上一年
let preYear = () => {
  time.value.year--
}
// 下一年
let nextYear = () => {
  time.value.year++
}
// 上一月
let preMonth = () => {
  let d = getDate(time.value.year, time.value.month, 1)
  d.setMonth(d.getMonth() - 1)
  time.value = getYearMonthDay(d)
}
// 下一月
let nextMonth = () => {
  let d = getDate(time.value.year, time.value.month, 1)
  d.setMonth(d.getMonth() + 1)
  time.value = getYearMonthDay(d)
}
// 选择日期
let chooseDay = (item: any) => {
  if (!props.range) {
    value.value = item
    let { year, month, day } = getYearMonthDay(item)
    emits('select', {
      year,
      month: month + 1,
      day
    })
    let isToday = year === new Date().getFullYear() && month === new Date().getMonth() && day === new Date().getDate() ? true : false
    dateValue.value = {
      year,
      month: month + 1,
      day,
      week: item.getDay(),
      date: year + '-' + (month + 1) + '-' + day,
      isToday
    }
  } else {
    // 多选日期
  }
}
// 确认
let confirm = () => {
  emits('confirm', dateValue.value)
  popup.value.clickMask()
}

// 格式化时间
let formatDate = computed(() => {
  let { year, month, day } = getYearMonthDay(value.value)
  return `${year}-${month + 1}-${day}`
})

let showDays = computed(() => {
  let { year, month, day } = getYearMonthDay(getDate(time.value.year, time.value.month, 1))
  // 获取当月第一天
  let firstDay: any = getDate(year, month, 1)
  // 获取当月第一天是星期几
  let week = firstDay.getDay()
  // 开始日期
  let startDay = firstDay - week * 1000 * 60 * 60 * 24
  let arr = []
  // 循环42天 因为日历是6 * 7的布局
  for (let i = 0; i < 42; i++) {
    arr.push(new Date(startDay + i * 1000 * 60 * 60 * 24))
  }
  return arr
})
watch(() => props.show, val => {
  flag.value = val
})
watch(() => flag.value, val => {
  emits('update:show', val)
})

onMounted(() => {
  time.value.year = getYearMonthDay(value.value).year
  time.value.month = getYearMonthDay(value.value).month
  dateValue.value = {
      year: getYearMonthDay(value.value).year,
      month: getYearMonthDay(value.value).month + 1,
      day: value.value.getDate(),
      week: value.value.getDay(),
      date: getYearMonthDay(value.value).year + '-' + (Number(getYearMonthDay(value.value).month) + 1) + '-' + value.value.getDate(),
      isToday: isToday(value.value)
    }
})

</script>

<style scoped lang="scss">
.cc-calendar {
  &-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    background-color: #fff;
    color: #303133;
    width: 100%;
    height: #{topx(44)};
  }
  &-text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin-top: #{topx(10)};
    margin-bottom: #{topx(15)};
    &-current {
      margin: 0 #{topx(8)};
      color: #303133;
      font-weight: 700;
    }
    &-year,
    &-month {
      margin: 0 #{topx(8)};
    }
    &-year {
      color: #909399;
    }
    &-month {
      color: #606266;
    }
  }
  &-days {
    display: flex;
    align-items: center;
    padding: #{topx(6)} 0;
    &-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }
  }
  &-value {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: #{topx(6)} 0;
    color: #909399;
    font-size: 14px;
  }
  &-content {
    height: #{topx(200)};
    display: flex;
    flex-direction: column;
    &-item {
      flex: 1;
      display: flex;
      align-items: center;
      &-text {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        border-radius: #{topx(4)};
        &-nocurrent {
          color: #c8c9cc !important;
        }
        &-value {
          padding: #{topx(6)} #{topx(8)};
        }
        &-today {
          background: #ee0a24;
          color: #fff;
          border-radius: #{topx(4)};
        }
      }
    }
  }
  &-btn {
    padding: 0 #{topx(8)};
  }
}
</style>