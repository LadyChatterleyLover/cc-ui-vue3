<template>
  <cc-address-list
    :value="chosenAddressId"
    :list="addressList"
    :disabled-list="disabledList"
    disabled-text="以下地址超出配送范围"
    default-tag-text="默认"
  ></cc-address-list>
</template>

<script setup lang="ts">

let chosenAddressId = '1'
let addressList = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    isDefault: true
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    address: '浙江省杭州市拱墅区莫干山路 50 号'
  }
]
let disabledList = [
  {
    id: '3',
    name: '王五',
    tel: '1320000000',
    address: '浙江省杭州市滨江区江南大道 15 号'
  }
]
</script>

<style scoped>
</style>