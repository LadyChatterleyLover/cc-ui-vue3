<template>
  <div style="background: #f7f7f7;height: 100vh;">
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-contact-list :list="list1" :value="value"></cc-contact-list>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用联系人</div>
      <div class="demo-item">
        <cc-contact-list :list="list2" :value="value"></cc-contact-list>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let value = ref('1')
let list1 = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    isDefault: true
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000'
  }
]
let list2 = [
  {
    id: '1',
    name: '张三',
    tel: '13000000000',
    isDefault: true
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000000',
    disabled: true
  }
]
</script>

<style scoped lang="scss">
.demo {
  &-title {
    padding: 20px;
  }
  &-item {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>