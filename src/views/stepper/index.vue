<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-stepper @minus="minus" @plus="plus" v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">设置步长</div>
      <div class="demo-item">
        <cc-stepper step="5" v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">最小值和最大值</div>
      <div class="demo-item">
        <cc-stepper min='5' max='15' v-model:value="value1"></cc-stepper>
      </div>
      <div>当前值: {{ value1 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-stepper disabled v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用输入框</div>
      <div class="demo-item">
        <cc-stepper disable-input v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">限制输入整数</div>
      <div class="demo-item">
        <cc-stepper integer v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">限制小数位位数</div>
      <div class="demo-item">
        <cc-stepper decimalLength='3' v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义大小</div>
      <div class="demo-item">
        <cc-stepper input-width="40" button-size="32" v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">圆角按钮</div>
      <div class="demo-item">
        <cc-stepper disable-input round v-model:value="value"></cc-stepper>
      </div>
      <div>当前值: {{ value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let value = ref<number>(1)
let value1 = ref<number>(8)


let minus = () => {
  console.log('minus')
}
let plus = () => {
  console.log('plus')
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(20)};
  padding: #{topx(10)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>