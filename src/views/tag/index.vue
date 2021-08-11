<template>
  <div class="container">
    <div>
      <div class="title">基础语法</div>
      <div class="content">
        <div>
          <cc-tag @click="onClick">标签</cc-tag>
        </div>
        <div>
          <cc-tag type="success">标签</cc-tag>
        </div>
        <div>
          <cc-tag type="warning">标签</cc-tag>
        </div>
        <div>
          <cc-tag type="info">标签</cc-tag>
        </div>
        <div>
          <cc-tag type="error">标签</cc-tag>
        </div>
      </div>
    </div>

    <div>
      <div class="title">空心样式</div>
      <div class="content">
        <div>
          <cc-tag plain>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="success" plain>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="warning" plain>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="info" plain>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="error" plain>标签</cc-tag>
        </div>
      </div>
    </div>

    <div>
      <div class="title">圆角样式</div>
      <div class="content">
        <div>
          <cc-tag round>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="success" round>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="warning" round>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="info" round>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="error" round>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="primary" circleLeft>标签</cc-tag>
        </div>
        <div>
          <cc-tag type="error" circleRight>标签</cc-tag>
        </div>
      </div>
    </div>

    <div>
      <div class="title">标签尺寸</div>
      <div class="content">
        <div>
          <cc-tag>普通标签</cc-tag>
        </div>
        <div>
          <cc-tag size="medium">中号标签</cc-tag>
        </div>
        <div>
          <cc-tag type="success" size="large">大号标签</cc-tag>
        </div>
      </div>
    </div>

    <div>
      <div class="title">自定义颜色</div>
      <div class="content">
        <div>
          <cc-tag color="#7232dd">标签</cc-tag>
        </div>
        <div>
          <cc-tag color="#7232dd" plain>标签</cc-tag>
        </div>
        <div>
          <cc-tag color="#ffe1e1" text-color="#ad0000">标签</cc-tag>
        </div>
      </div>
    </div>

    <div>
      <div class="title">可关闭</div>
      <div class="content">
        <div>
          <cc-tag closeable @close="onClick">标签</cc-tag>
        </div>
        <div>
          <cc-tag closeable type="success">标签</cc-tag>
        </div>
        <div>
          <cc-tag closeable plain>标签</cc-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let onClick = () => {
  console.log(111)
}
</script>

<style lang="scss" scoped>
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
</style>