<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <cc-swiper :list="list" @change='onChange'></cc-swiper>
    </div>

    <div class="demo">
      <div class="demo-title">指示点样式</div>
      <cc-swiper :list="list" mode="number"></cc-swiper>
      <br />
      <cc-swiper :list="list" mode="rect"></cc-swiper>
      <br />
      <cc-swiper :list="list" mode="none"></cc-swiper>
    </div>

    <div class="demo">
      <div class="demo-title">指示点位置和样式</div>
      <cc-swiper :list="list" bottom="30" right="30" activeColor="red" indicatorActiveColor="blue"></cc-swiper>
    </div>

  </div>
</template>

<script setup lang="ts">
let list = [
  {
    image: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
  },
  {
    image: 'https://cdn.uviewui.com/uview/swiper/3.jpg'
  }
]
let onChange = (val: number) => {
  console.log(val)
}
</script>

<style scoped lang="scss">
.demo {
  margin: 10px 0;
  &-title {
    margin: 10px 0;
  }
}
</style>