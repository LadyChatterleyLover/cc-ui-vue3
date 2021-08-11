<template>
  <div>
    我的
    <cc-tabbar :list='list3' router fixed></cc-tabbar>
  </div>
</template>

<script setup lang="ts">
import { TabbarListItem } from "@/components/cc-tabbar/cc-tabbar.vue"

let list3: TabbarListItem[] = [
  {
    text: '首页',
    icon: 'home',
    url: '/tabbar'
  },
  {
    text: '分类',
    icon: 'bars',
    url: '/category'
  },
  {
    text: '购物车',
    icon: 'cart',
    url: '/cart'
  },
  {
    text: '我的',
    icon: 'person',
    url: '/my'
  }
]
</script>

<style scoped>

</style>