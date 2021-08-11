<template>
  <div class="demo">
    <cc-nav-bar fixed placeholder leftArrow leftText="倾城" title="普通成熟时" rightText="无条件"></cc-nav-bar>
    <div>占位之后的内容: 岁月如歌</div>
    <div class="item1">
      <cc-nav-bar
        @clickTitle="click"
        @clickRight="right"
        @clickLeft="left"
        leftText="单车"
        title="富士山下"
        rightText="人来人往"
      ></cc-nav-bar>
    </div>
    <div class="item2">
      <cc-nav-bar leftArrow leftText="十年" title="不要说话" rightText="浮夸"></cc-nav-bar>
    </div>
    <div class="item3">
      <cc-nav-bar
        leftArrow
        leftIcon="search"
        leftIconColor="#acf967"
        leftTextColor="#1989fa"
        titleColor="red"
        leftText="K歌之王"
        rightColor="#976622"
        title="苦瓜"
        rightText="你的背包"
      ></cc-nav-bar>
    </div>
    <div class="item4">
      <cc-nav-bar background="#1989fa" leftArrow leftText="十年" title="不要说话" rightText="浮夸"></cc-nav-bar>
    </div>
    <div class="item5">
      <cc-nav-bar title="陈奕迅林夕黄伟文陪你度过漫长岁月"></cc-nav-bar>
    </div>
    <div class="item6">
      <cc-nav-bar>
        <template #left>
          <cc-tag>内疚</cc-tag>
        </template>
        <template #default>
          <div class="demo-rate"><cc-rate v-model:value="value"></cc-rate></div>
        </template>
        <template #right>
          <cc-tag type='success'>陀飞轮</cc-tag>
        </template>
      </cc-nav-bar>
    </div>
  </div>
</template>

<script setup lang="ts">
let value = 3
let click = () => {
  console.log('click')
}
let right = () => {
  console.log('right')
}
let left = () => {
  console.log('left')
}
</script>

<style scoped lang="scss">
.demo {
  background: #f7f8fa;
  height: 100vh;
  position: relative;
  &-rate {
    display: flex;
    justify-content: center;
  }
  .item1 {
    position: absolute;
    top: 100px;
    width: 100%;
  }
  .item2 {
    position: absolute;
    top: 200px;
    width: 100%;
  }
  .item3 {
    position: absolute;
    top: 300px;
    width: 100%;
  }
  .item4 {
    position: absolute;
    top: 400px;
    width: 100%;
  }
  .item5 {
    position: absolute;
    top: 500px;
    width: 100%;
  }
  .item6 {
    position: absolute;
    top: 600px;
    width: 100%;
  }
}
</style>