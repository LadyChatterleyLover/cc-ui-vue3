<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-button @click="show1 = true">打开键盘</cc-button>
        <cc-number-keyboard @backspace="backspace" @change="handleChange" v-model:value="show1"></cc-number-keyboard>
      </div>
      <div>当前输入值: {{ value1 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">身份证键盘</div>
      <div class="demo-item">
        <cc-button @click="show2 = true">打开键盘</cc-button>
        <cc-number-keyboard extra-key='x' v-model:value="show2"></cc-number-keyboard>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">随机数字键盘</div>
      <div class="demo-item">
        <cc-button @click="show3 = true">打开键盘</cc-button>
        <cc-number-keyboard random  v-model:value="show3"></cc-number-keyboard>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">不显示遮罩层</div>
      <div class="demo-item">
        <cc-button @click="show4 = true">打开键盘</cc-button>
        <cc-number-keyboard :showMask='false'  v-model:value="show4"></cc-number-keyboard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let show1 = ref<boolean>(false)
let show2 = ref<boolean>(false)
let show3 = ref<boolean>(false)
let show4 = ref<boolean>(false)
let value1 = ref<string>('')


let handleChange = (val: string) => {
  value1.value += val
}
// 退格键被点击
let backspace = () => {
  // 删除value的最后一个字符
  if (value1.value.length) value1.value = value1.value.substr(0, value1.value.length - 1)
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