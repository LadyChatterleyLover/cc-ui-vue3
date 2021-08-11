<template>
  <div class="demo">
    <div class="title">基础用法</div>
    <div class="content">
      <cc-notice-bar
        volume 
        closeable
        @click="clickBar"
        @clickLeft="clickLeft"
        @clickRight='clickRight'
        >闭起双眼你最挂念谁,眼睛张开身边竟是谁,感激车站里,尚有月台能让我们满足到落泪</cc-notice-bar>
    </div>
    <div class="content">
      <cc-notice-bar volume link>闭起双眼你最挂念谁,眼睛张开身边竟是谁,感激车站里,尚有月台能让我们满足到落泪</cc-notice-bar>
    </div>
  </div>

  <div class="demo">
    <div class="title">滚动速度</div>
    <div class="content">
      <cc-notice-bar text="拥不拥有也会记住谁,快不快乐有天总过去" speed="160" volume link></cc-notice-bar>
    </div>
  </div>

  <div class="demo">
    <div class="title">无图标</div>
    <div class="content">
      <cc-notice-bar text="拥不拥有也会记住谁,快不快乐有天总过去" volume></cc-notice-bar>
    </div>
    <div class="content">
      <cc-notice-bar text="拥不拥有也会记住谁,快不快乐有天总过去"></cc-notice-bar>
    </div>
  </div>

  <div class="demo">
    <div class="title">自定义内容</div>
    <div class="content">
      <cc-notice-bar text="当你孤单你会想起谁">
        <template #left>
          <cc-icon type='person'></cc-icon>
        </template>
      </cc-notice-bar>
    </div>
    <div class="content">
      <cc-notice-bar bgColor='#ecf9ff'>
        <template #default>
          <div style="color: #1989fa">你想不想找个人来陪</div>
        </template>
      </cc-notice-bar>
    </div>
    <div class="content">
      <cc-notice-bar text="你的快乐伤悲,只有我能体会">
        <template #right>
          <div class="text">体会</div>
        </template>
      </cc-notice-bar>
    </div>
  </div>
</template>

<script setup lang='ts'>
 let clickBar = () => {
  console.log('click')
 }
 let clickLeft = () => {
  console.log('clickLeft')
 }
 let clickRight = () => {
  console.log('clickRight')
}
</script>

<style lang="scss" scoped>
.demo {
  margin: #{topx(20)} 0;
}
.title {
  margin: #{topx(10)};
}
.content {
  margin: #{topx(10)};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  div {
    margin: #{topx(5)};
  }
}
.text {
  height: #{topx(40)};
  line-height:  #{topx(40)};
}
</style>