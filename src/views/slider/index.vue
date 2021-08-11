<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-slider
          v-model:value="sliderValue"
          @touchstart="touchstart"
          @touchend="touchend"
          @change="onChange"
          @input="onInput"
        ></cc-slider>
      </div>
      <div>当前滑块值: {{ sliderValue }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-slider v-model:value="sliderValue" disabled></cc-slider>
      </div>
      <div>当前滑块值: {{ sliderValue }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义样式</div>
      <div class="demo-item">
        <cc-slider v-model:value="sliderValue" activeColor="#ee0a24" inactiveColor="#abc123"></cc-slider>
      </div>
      <div>当前滑块值: {{ sliderValue }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义按钮</div>
      <div class="demo-item">
        <cc-slider v-model:value="sliderValue">
          <template #button>
            <div class="custom-button">{{ sliderValue }}</div>
          </template>
        </cc-slider>
      </div>
      <div>当前滑块值: {{ sliderValue }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">最大值和最小值</div>
      <div class="demo-item">
        <cc-slider min='10' max='80' v-model:value="sliderValue"></cc-slider>
      </div>
      <div>当前滑块值: {{ sliderValue }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">步进</div>
      <div class="demo-item">
        <cc-slider step='5' v-model:value="sliderValue"></cc-slider>
      </div>
      <div>当前滑块值: {{ sliderValue }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义高度</div>
      <div class="demo-item">
        <cc-slider height='6' v-model:value="sliderValue"></cc-slider>
      </div>
      <div>当前滑块值: {{ sliderValue }}</div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let sliderValue = ref<number>(20)

let touchstart = () => {
  console.log('touchstart')
}
let touchend = () => {
  console.log('touchend')
}
let onInput = (val: string) => {
  console.log('input', val)
}
let onChange = (val: string) => {
  console.log('change', val)
}
</script>

<style scoped lang='scss'>
.demo {
  margin-bottom: #{topx(20)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
.custom-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
</style>