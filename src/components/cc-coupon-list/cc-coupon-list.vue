<template>
  <div class="cc-coupon-list">
    <div class="cc-coupon-list-exchange">
      <div class="cc-coupon-list-exchange-search">
        <cc-search
          round
          :showAction="false"
          :placeholder="inputPlaceholder"
          v-model:value="inputValue"
        ></cc-search>
      </div>
      <div class="cc-coupon-list-exchange-btn">
        <cc-button
          :disabled="disabled"
          :loading="exchangeButtonLoading"
          :style="{ color: exchangeButtonColor }"
          size="small"
          @click="exchange"
        >{{ exchangeButtonText }}</cc-button>
      </div>
    </div>
    <div class="cc-coupon-list-tabs">
      <cc-tabs
        :list="tabs"
        :current="current"
        activeColor="#323233"
        inactiveColor="#646566"
        :lineColor="lineColor"
        @change="changeTab"
      >
        <div class="cc-coupon-list-content">
          <div v-if="current === 0">
            <div
              class="cc-coupon-list-content-enable"
              v-for="(item, index) in cloneCoupons"
              :key="index"
              @click="clickItem(item, index)"
            >
              <div class="cc-coupon-list-content-enable-info">
                <div class="cc-coupon-list-content-enable-info-left">
                  <div class="cc-coupon-list-content-enable-info-left-price">
                    {{ item.valueDesc }}
                    <text style="font-size: 12px;">{{ item.unitDesc }}</text>
                  </div>
                  <div
                    class="cc-coupon-list-content-enable-info-left-condition"
                  >{{ item.condition }}</div>
                </div>
                <div class="cc-coupon-list-content-enable-info-center">
                  <div class="cc-coupon-list-content-enable-info-center-name">{{ item.name }}</div>
                  <div
                    class="cc-coupon-list-content-enable-info-center-time"
                  >{{ item.startTime }} - {{ item.endTime }}</div>
                </div>
                <div
                  class="cc-coupon-list-content-enable-info-right"
                  v-if="item.radioList && item.radioList.length"
                >
                  <cc-radio v-model:value="currentValue" :list="item.radioList"></cc-radio>
                </div>
              </div>
              <div class="cc-coupon-list-content-enable-label">{{ item.description }}</div>
            </div>
          </div>
          <div v-if="current === 1">
            <div
              class="cc-coupon-list-content-enable"
              v-for="(item, index) in cloneDisableCoupons"
              :key="index"
            >
              <div class="cc-coupon-list-content-enable-info">
                <div class="cc-coupon-list-content-enable-info-left" style="color: inherit;">
                  <div class="cc-coupon-list-content-enable-info-left-price">
                    {{ item.valueDesc }}
                    <text style="font-size: 12px;">{{ item.unitDesc }}</text>
                  </div>
                  <div
                    class="cc-coupon-list-content-enable-info-left-condition"
                  >{{ item.condition }}</div>
                </div>
                <div class="cc-coupon-list-content-enable-info-center">
                  <div class="cc-coupon-list-content-enable-info-center-name">{{ item.name }}</div>
                  <div
                    class="cc-coupon-list-content-enable-info-center-time"
                  >{{ item.startTime }} - {{ item.endTime }}</div>
                </div>
              </div>
              <div class="cc-coupon-list-content-enable-label">{{ item.reason }}</div>
            </div>
          </div>
        </div>
      </cc-tabs>
    </div>
    <div class="cc-coupon-list-btn" @click="close">
      <cc-button round block :color="closeButtonColor">{{ closeButtonText }}</cc-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, PropType, getCurrentInstance, onMounted } from 'vue'
import dayjs from 'dayjs'
import cloneDeep from 'lodash/cloneDeep'
import events from '@/utils/events'

import { CouponItem } from '../cc-coupon-cell/cc-coupon-cell.vue';

let props = defineProps({
  // 当前输入的兑换码
  value: {
    type: String,
    default: ''
  },
  // 当前选中优惠券的索引
  chosenCoupon: {
    type: Number,
    default: -1
  },
  // 当前选中优惠券的索引
  coupons: {
    type: Array as PropType<CouponItem[]>,
    default: () => []
  },
  // 不可用优惠券列表
  disabledCoupons: {
    type: Array as PropType<CouponItem[]>,
    default: () => []
  },
  // 可用优惠券列表标题
  enabledTitle: {
    type: String,
    default: '可用'
  },
  // 不可用优惠券列表标题
  disabledTitle: {
    type: String,
    default: '不可用'
  },
  // 兑换按钮颜色
  exchangeButtonColor: {
    type: String,
    default: '#ee0a24'
  },
  // 兑换按钮文字
  exchangeButtonText: {
    type: String,
    default: '兑换'
  },
  // 是否显示兑换按钮加载动画
  exchangeButtonLoading: {
    type: Boolean,
    default: false
  },
  // 是否禁用兑换按钮
  exchangeButtonDisabled: {
    type: Boolean,
    default: false
  },
  // 兑换码最小长度
  exchangeMinLength: {
    type: Number,
    default: 1
  },
  // 是否显示列表底部按钮
  showCloseButton: {
    type: Boolean,
    default: true
  },
  // 列表底部按钮文字	
  closeButtonText: {
    type: String,
    default: '不使用优惠'
  },
  // 列表底部按钮颜色
  closeButtonColor: {
    type: String,
    default: '#ee0a24'
  },
  // 输入框文字提示
  inputPlaceholder: {
    type: String,
    default: '请输入优惠码'
  },
  // 是否展示兑换栏
  showExchangeBar: {
    type: Boolean,
    default: true
  },
  // tabs滑块颜色
  lineColor: {
    type: String,
    default: '#ee0a24'
  }
})
let emits = defineEmits(['change', 'changeCoupon', 'exchange'])
let instance = getCurrentInstance()

let current = ref<number>(0)
let cloneCoupons = ref<CouponItem[]>([])
let cloneDisableCoupons = ref<CouponItem[]>([])
let currentValue = ref<number>(props.chosenCoupon)
let inputValue = ref<string>(props.value)


let changeTab = (val: number) => {
  current.value = val
}
// 选中优惠券
let clickItem = (item: CouponItem, index: number) => {
  (instance!.parent! as any).ctx.close()
  currentValue.value = index
  emits('change', { item, index })
  events.emit('changeCoupon', item)
}
// 点击兑换按钮
let exchange = () => {
  if (!props.exchangeButtonDisabled || !inputValue.value || !inputValue.value.length) return
  emits('exchange', inputValue.value)
}
// 点击不使用优惠券按钮
let close = () => {
  (instance!.parent! as any).ctx.close()
  events.emit('changeCoupon', null)
}

onMounted(() => {
  cloneCoupons.value = cloneDeep(props.coupons)
  cloneDisableCoupons.value = cloneDeep(props.disabledCoupons)

  cloneCoupons.value.map((item: CouponItem, index: number) => {
    item.startTime = dayjs(item.startAt).format('YYYY.MM.DD')
    item.endTime = dayjs(item.endAt).format('YYYY.MM.DD')
    item.radioList = [{ value: index, checkedColor: '#e54d42' }]
  })

  cloneDisableCoupons.value.map((item: CouponItem) => {
    item.startTime = dayjs(item.startAt).format('YYYY.MM.DD')
    item.endTime = dayjs(item.endAt).format('YYYY.MM.DD')
  })
})

let tabs = computed(() => {
  let arr = []
  arr.push({
    title: props.enabledTitle
  })
  arr.push({
    title: props.disabledTitle
  })
  return arr
})

let disabled = computed(() => props.exchangeButtonDisabled || !inputValue.value || !inputValue.value.length)
</script>

<style scoped lang="scss">
.cc-coupon-list {
  &-exchange {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 6px 10px;
    &-search {
      flex: 1;
    }
  }
  &-content {
    background: #f7f8fa;
    height: 430px;
    padding: 10px 15px;
    &-enable {
      margin: 0 12px 12px;
      overflow: hidden;
      background: #fff;
      border-radius: 8px;
      &-info {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        min-height: 84px;
        padding: 14px;
        color: #323233;
        position: relative;
        &-left {
          color: #ee0a24;
          min-width: 96px;
          display: flex;
          flex-direction: column;
          align-items: center;
          &-price {
            font-weight: 500;
            font-size: 30px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            margin-bottom: 6px;
          }
          &-condition {
            text-align: center;
            font-size: 12px;
            line-height: 16px;
            white-space: pre-wrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        &-center {
          &-name {
            font-weight: 700;
            font-size: 14px;
            margin-bottom: 10px;
          }
          &-time {
            font-size: 12px;
          }
        }
        &-right {
          position: absolute;
          top: 35px;
          right: 25px;
        }
      }
      &-label {
        padding: 8px 16px;
        font-size: 12px;
        border-top: 1px dashed #ebedf0;
        color: #323233;
      }
    }
  }
  &-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px 15px;
  }
}
.cc-button {
  border: none;
  background: #fff;
}
</style>