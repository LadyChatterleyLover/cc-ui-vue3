<template>
  <div>
    <cc-tabs :current='current' :list="list"></cc-tabs>
  </div>
</template>

<script setup lang="ts">
import { TabsListItem } from "@/components/cc-tabs/cc-tabs.vue";

let list: TabsListItem[] = [
  {
    title: '明年今日',
  },
  {
    title: '圣诞节'
  },
  {
    title: '无条件'
  },
  {
    title: '沙龙'
  },
  {
    title: '谢谢侬'
  },
  {
    title: '人来人往'
  },
  {
    title: '最佳损友'
  },
]
let current = 0
</script>

<style scoped lang='scss'>
</style>