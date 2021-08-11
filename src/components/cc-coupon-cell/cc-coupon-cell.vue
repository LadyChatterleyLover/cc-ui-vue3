<template>
  <div class="cc-coupon-cell">
    <cc-cell :title="cellTitle" :value="cellValue" isLink @click="clickCell"></cc-cell>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, computed, onMounted } from 'vue'
import events from '@/utils/events'

export interface CouponItemRadioListItem {
  value: string | number,
  checkedColor: string
}

export interface CouponItem {
  id: string,
  name: string,
  condition?: string,
  startAt?: number,
  endAt?: number,
  description?: string,
  reason?: string,
  value?: number,
  valueDesc?: string,
  unitDesc?: string,
  startTime?: string,
  endTime?: string,
  radioList: CouponItemRadioListItem[]
}


let props = defineProps({
  // 单元格标题
  title: {
    type: String,
    default: '优惠券'
  },
  // 当前选中优惠券的索引
  chosenCoupon: {
    type: [Number, String],
    default: -1
  },
  coupons: {
    type: Array as PropType<CouponItem[]>,
    default: () => []
  },
  // 货币符号
  currency: {
    type: String,
    default: '￥'
  }
})
let emits = defineEmits(['click'])

let cellTitle = ref<string>(props.title)
let cellValue = ref<string>('')

let clickCell = () => {
  emits('click')
}

onMounted(() => {
  cellValue.value = `${props.coupons.length}张可用`
  events.on('changeCoupon', (val: any) => {
    if (val) cellValue.value = `-${props.currency} ${(val.value / 100).toFixed(2)}`
    else cellValue.value = `${props.coupons.length}张可用`
  })
})
</script>

<style scoped lang="scss">
</style>