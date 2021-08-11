<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-count-down :time="time"></cc-count-down>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">分隔符为中文</div>
      <div class="demo-item">
        <cc-count-down separator="zh" :time="time"></cc-count-down>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义样式</div>
      <div class="demo-item">
        <cc-count-down :time="time">
          <template #default="{ timeData }">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </cc-count-down>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let time = ref<number>(1000 * 60 * 60 * 3)
</script>

<style scoped lang='scss'>
.demo {
  margin-bottom: 20px;
  &-title {
    padding: 10px;
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>