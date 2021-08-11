<template>
  <div>
    <div>
      <div class="title">基础用法</div>
      <div>
        <cc-mask v-model:show="show1" @click="handleClick"></cc-mask>
        <cc-button @click="open1">打开遮罩层</cc-button>
      </div>
    </div>

    <div>
      <div class="title">嵌套内容</div>
      <div>
        <cc-mask v-model:show="show2">
          <div class="content">
            <div class="block"></div>
          </div>
        </cc-mask>
        <cc-button @click="open2">打开遮罩层</cc-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let show1 = ref<boolean>(false)
let show2 = ref<boolean>(false)
let open1 = () => {
  show1.value = true
}
let open2 = () => {
  show2.value = true
}
let handleClick = () => {
  console.log('click')
}
</script>

<style lang="scss" scoped>
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: #{topx(10)};
  div {
    margin: #{topx(5)};
  }
}
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .block {
    width: #{topx(120)};
    height: #{topx(120)};
    background-color: #fff;
  }
}
</style>