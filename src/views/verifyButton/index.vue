<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-verify-button @start='start' @end='end' @change='change'></cc-verify-button>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义文字和时间</div>
      <div class="demo-item">
        <cc-verify-button
          text='发送验证码'
          countDownText='s后重新获取'
          countDown='5'
          endText='再次发送'
        ></cc-verify-button>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义内容</div>
      <div class="demo-item">
        <cc-verify-button @change='handleChange' :customText='text'></cc-verify-button>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义按钮</div>
      <div class="demo-item">
        <cc-verify-button type='primary'></cc-verify-button>
      </div>
      <div class="demo-item">
        <cc-verify-button type='primary' size='mini'></cc-verify-button>
      </div>
      <div class="demo-item">
        <cc-verify-button type='success' plain></cc-verify-button>
      </div>
      <div class="demo-item">
        <cc-verify-button type='warning' round></cc-verify-button>
      </div>
      <div class="demo-item">
        <cc-verify-button type='primary' icon='phone'></cc-verify-button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

  let text = ref<string>('')
  let time = ref<number>(0)
  let start = () => {
    console.log('start')
  }
  let end = () => {
    console.log('end')
  }
  let change = (val: number) => {
    console.log('change', val)
  }
  let handleChange = (val: number) => {
    time.value = val
    text.value = `时间的沙漏开始走了${time.value}s`
  }
</script>

<style scoped lang='scss'>
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