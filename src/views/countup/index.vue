<template>
  <div>
    <div>
      <div class="title">基础用法</div>
      <div class="item">
        <cc-countup :end='end' :startVal="0" :endVal="1000"></cc-countup>
      </div>
      <div class="item">
        <cc-countup :startVal="100" :endVal="500"></cc-countup>
      </div>
    </div>

    <div>
      <div class="title">千分位分隔符</div>
      <div class="item">
        <cc-countup :startVal="0" :endVal="3000"></cc-countup>
      </div>
      <div class="item">
        <cc-countup :startVal="0" :endVal="3000" separator="."></cc-countup>
      </div>
      <div class="item">
        <cc-countup :startVal="0" :useGrouping="false" :endVal="3000"></cc-countup>
      </div>
    </div>

    <div>
      <div class="title">小数位和分割符号</div>
      <div class="item">
        <cc-countup :decimalPlaces="2" :startVal="0" :endVal="3000.55"></cc-countup>
      </div>
      <div class="item">
        <cc-countup :decimalPlaces="5" :startVal="0" :endVal="3000.55"></cc-countup>
      </div>
      <div class="item">
        <cc-countup :startVal="0" :decimalPlaces="2" decimal="," :endVal="3000.55"></cc-countup>
      </div>
    </div>

    <div>
      <div class="title">使用过渡动画</div>
      <div class="item">
        <cc-countup :startVal="0" :endVal="3000"></cc-countup>
      </div>
      <div class="item">
        <cc-countup :startVal="0" :useEasing="false" :endVal="3000"></cc-countup>
      </div>
    </div>

    <div>
      <div class="title">前缀和后缀内容</div>
      <div class="item">
        <cc-countup prefix="￥" :startVal="0" :endVal="3000"></cc-countup>
      </div>
      <div class="item">
        <cc-countup :startVal="0" suffix="元" :endVal="3000"></cc-countup>
      </div>
    </div>

    <div>
      <div class="title">滚动持续时长</div>
      <div class="item">
        <cc-countup :duration="5" :startVal="0" :endVal="3000"></cc-countup>
      </div>
      <div class="item">
        <cc-countup :duration="1" :startVal="0" :endVal="3000"></cc-countup>
      </div>
    </div>

    <div>
      <div class="title">逆向滚动</div>
      <div class="item">
        <cc-countup :startVal="3000" :endVal="0"></cc-countup>
      </div>
    </div>

    <div>
      <div class="title">实例方法</div>
      <div class="item">
        <cc-countup :end='end' :autoplay="false" ref="countup" :startVal="0" :endVal="10000"></cc-countup>
      </div>
      <div class="item">
        <cc-button type="primary" size="small" @click="start">开始</cc-button>
        <cc-button type="primary" size="small" @click="pauseResume">暂停</cc-button>
        <cc-button type="primary" size="small" @click="reset">重置</cc-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let countup = ref()

let end = () => {
  console.log('end')
}
let start = () => {
  countup.value.countup.start(end)
}
let pauseResume = () => {
  countup.value.countup.pauseResume()
}
let reset = () => {
  countup.value.countup.reset()
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