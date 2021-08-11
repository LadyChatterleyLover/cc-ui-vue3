<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-button @click="show1 = true">打开键盘</cc-button>
        <cc-password-input
          v-model:value="show1"
          @complete="handleComplete"
          @change="handleChange"
          @backspace="handleBackspace"
        ></cc-password-input>
      </div>
      <div>当前输入值: {{ value1 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义长度</div>
      <div class="demo-item">
        <cc-button @click="show2 = true">打开键盘</cc-button>
        <cc-password-input v-model:value="show2" length="4"></cc-password-input>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义间距</div>
      <div class="demo-item">
        <cc-button @click="show3 = true">打开键盘</cc-button>
        <cc-password-input v-model:value="show3" gutter="0"></cc-password-input>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">明文显示</div>
      <div class="demo-item">
        <cc-button @click="show4 = true">打开键盘</cc-button>
        <cc-password-input v-model:value="show4" :mask="false"></cc-password-input>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">设置初始值</div>
      <div class="demo-item">
        <cc-button @click="show5 = true">打开键盘</cc-button>
        <cc-password-input v-model:value="show5" initValue="1234" :mask='false'></cc-password-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let show1 = ref<boolean>(false)
let show2 = ref<boolean>(false)
let show3 = ref<boolean>(false)
let show4 = ref<boolean>(false)
let show5 = ref<boolean>(false)
let show6 = ref<boolean>(false)
let value1 = ref<string>('')

let handleComplete = (val: string) => {
  console.log('complete', val)
}
let handleChange = (val: string) => {
  console.log('change', val)
}
let handleBackspace = (val: string) => {
  console.log('backspace', val)
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