<template>
  <div style="padding: 30px 0">
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div>当前选中值: {{ value }}</div>
      <div class="demo-item">
        <cc-dropdown :list="list1" @change="onChange" @open="open" @close="close"></cc-dropdown>
      </div>
    </div>
    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-dropdown :list="list1" disabled></cc-dropdown>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义选中颜色</div>
      <div class="demo-item">
        <cc-dropdown :list="list3" activeColor="#0081ff"></cc-dropdown>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义菜单内容</div>
      <div class="demo-item">
        <cc-dropdown :list="list4" activeColor="#0081ff">
         <template #choose>
          <cc-cell center title="包邮">
            <template #right-icon>
              <cc-switch v-model:value="switch1" size="24" active-color="#ee0a24" />
            </template>
          </cc-cell>
          <cc-cell center title="团购">
            <template #right-icon>
              <cc-switch v-model:value="switch2" size="24" active-color="#ee0a24" />
            </template>
          </cc-cell>
          <div style="padding: 5px 16px;">
            <cc-button type="pimary" block round>确认</cc-button>
          </div>
         </template>
        </cc-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DropdownItem } from '@/components/cc-dropdown/cc-dropdown.vue'
import { ref } from 'vue'

let list1 = ref<DropdownItem[]>([
  {
    value: 1,
    options: [
      { label: '全部商品', value: 0 },
      { label: '新款商品', value: 1 },
      { label: '活动商品', value: 2 },
    ]
  },
  {
    value: 'a',
    options: [
      { label: '默认排序', value: 'a' },
      { label: '好评排序', value: 'b' },
      { label: '销量排序', value: 'c', disabled: true }
    ]
  }
])
let list2 = ref<DropdownItem[]>([
  {
    value: 'a',
    options: [
      { label: '默认排序', value: 'a' },
      { label: '好评排序', value: 'b' },
      { label: '销量排序', value: 'c', disabled: true }
    ]
  }
])
let list3 = ref<DropdownItem[]>([
  {
    value: 1,
    options: [
      { label: '全部商品', value: 0 },
      { label: '新款商品', value: 1 },
      { label: '活动商品', value: 2 },
    ]
  }
])
let list4 = ref<DropdownItem[]>([
  {
    value: 1,
    options: [
      { label: '全部商品', value: 0 },
      { label: '新款商品', value: 1 },
      { label: '活动商品', value: 2 },
    ]
  },
  {
    slots: 'choose',
    title: '筛选'
  }
])



let switch1 = ref<boolean>(false)
let switch2 = ref<boolean>(false)

let value = ref<any>([])

let onChange = (val: any) => {
  value.value = val
}
let open = () => {
  console.log('open')
}
let close = (val: any) => {
  console.log('close')
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(100)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    margin-bottom: 10px;
  }
}
</style>