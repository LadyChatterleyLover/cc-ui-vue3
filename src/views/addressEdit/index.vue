<template>
  <div class="demo">
    <div>
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-address-edit></cc-address-edit>
      </div>
    </div>

    <div>
      <div class="demo-title">设置初始值</div>
      <div class="demo-item">
        <cc-address-edit :addressInfo="addressInfo"></cc-address-edit>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let addressInfo = {
  name: 'admin',
  tel: '13588888888',
  province: '北京市',
  city: '北京市',
  county: '东城区',
  addressDetail: '乌托邦',
  areaCode: '',
  postalCode: '100000',
  isDefault: true
}
</script>

<style scoped lang="scss">
.demo {
  background: #f7f7f7;
  &-title {
    padding: 10px;
  }
  &-item {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>