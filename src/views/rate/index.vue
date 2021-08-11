<template>
  <div>
    <div class="title">基础用法</div>
    <div class="item">
      <cc-rate @change="change" v-model:value="value1"></cc-rate>
    </div>
  </div>

  <div>
    <div class="title">星星总数</div>
    <div class="item">
      <cc-rate :count='10' v-model:value="value2"></cc-rate>
    </div>
  </div>

  <div>
    <div class="title">自定义图标</div>
    <div class="item">
      <cc-rate activeIcon='heart-filled' inactiveIcon='heart' v-model:value="value1"></cc-rate>
    </div>
  </div>

  <div>
    <div class="title">禁用状态</div>
    <div class="item">
      <cc-rate disabled v-model:value="value1"></cc-rate>
    </div>
  </div>

  <div>
    <div class="title">只读状态</div>
    <div class="item">
      <cc-rate readonly v-model:value="value1"></cc-rate>
    </div>
  </div>

  <div>
    <div class="title">最小选择数</div>
    <div class="item">
      <cc-rate :min-count='5' :count='10' v-model:value="value1"></cc-rate>
    </div>
  </div>
</template>

<script setup lang="ts">
let value1 = 3
let value2 = 6

let change = (val: number) => {
  console.log('change', val)
}
</script>

<style scoped lang="scss">
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  button {
    margin-right: #{topx(5)};
  }
}
</style>