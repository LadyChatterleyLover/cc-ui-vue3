<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-coupon-cell @click="show = true" :coupons="coupons">
          <cc-popup height="1000" round v-model:show="show" mode="bottom">
            <cc-coupon-list :coupons="coupons" :disabled-coupons="disabledCoupons"></cc-coupon-list>
          </cc-popup>
        </cc-coupon-cell>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let show = ref<boolean>(false)
let coupons = [
  {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元',
    description: '描述信息'
  },
  {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    reason: '',
    value: 300,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '3.0',
    unitDesc: '元',
    description: '描述信息'
  }
]

let disabledCoupons = [
  {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元',
    reason: '优惠券不可用描述信息'
  },
  {
    available: 1,
    condition: '无使用门槛\n最多优惠12元',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: '1.5',
    unitDesc: '元',
    reason: '优惠券不可用描述信息'
  }
]
</script>

<style scoped lang="scss">
.demo {
  height: 100vh;
  background: #f7f7f7;
  padding: 10px;
  &-title {
    padding: 10px;
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>