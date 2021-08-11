<template>
  <div class="demo">
    <div class="demo-title">基础语法</div>
    <cc-sidebar :list='list1' @change="clickItem"></cc-sidebar>
  </div>
  <div class="demo">
    <div class="demo-title">不显示左侧线条</div>
    <cc-sidebar :showLine='false' :list='list1'></cc-sidebar>
  </div>
  <div class="demo">
    <div class="demo-title">禁用选项</div>
    <cc-sidebar :list='list2'></cc-sidebar>
  </div>
  <div class="demo">
    <div class="demo-title">徽标提示</div>
    <cc-sidebar :list='list3'></cc-sidebar>
  </div>
  <div class="demo">
    <div class="demo-title">自定义左侧线条显示</div>
    <cc-sidebar width='120' :list='list4'></cc-sidebar>
  </div>
  <div class="demo">
    <div class="demo-title">自定义样式</div>
    <cc-sidebar width='120' :list='list5'></cc-sidebar>
  </div>
</template>

<script setup lang="ts">
import { SidebarItem } from "@/components/cc-sidebar/cc-sidebar.vue";

let list1: SidebarItem[] = [
  {
    title: '标签1'
  },
  {
    title: '标签2'
  },
  {
    title: '标签3'
  },
]

let list2: SidebarItem[] = [
  {
    title: '标签1'
  },
  {
    title: '标签2',
    disabled: true
  },
  {
    title: '标签3'
  },
]

let list3: SidebarItem[] = [
  {
    title: '标签1'
  },
  {
    title: '标签2',
    dot: true
  },
  {
    title: '标签3',
    badge: 5
  },
]

let list4: SidebarItem[] = [
  {
    title: '标签1',
    lineColor: '#765489',
    lineWidth: 10,
    lineHeight: 20
  },
  {
    title: '标签2',
    lineColor: '#765489'
  },
  {
    title: '标签3',
    lineColor: '#765489'
  },
  {
    title: '标签4',
    lineColor: '#765489'
  },
]

let list5: SidebarItem[] = [
  {
    title: '标签1',
    activeColor: 'red',
  },
  {
    title: '标签2',
    bgColor: '#675232',
    activeColor: '#fff'
  },
  {
    title: '标签3',
    textColor: '#976512'
  },
  {
    title: '标签4',
    fontSize: 30,
  },
]

let clickItem = ({item, index}: {item: SidebarItem, index: number}) => {
  console.log(item)
  console.log(index)
}
</script>

<style lang="scss" scoped>
  .demo {
    margin-bottom: #{topx(10)};
    &-title {
      margin: #{topx(10)};
    }
  }
</style>