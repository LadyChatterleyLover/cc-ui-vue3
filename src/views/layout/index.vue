<template>
  <div>
    <div class="title">基础用法</div>
    <div class="demo">
      <cc-row>
        <cc-col span="8">span: 8</cc-col>
        <cc-col span="8">span: 8</cc-col>
        <cc-col span="8">span: 8</cc-col>
      </cc-row>
    </div>

    <div class="demo">
      <cc-row>
        <cc-col span="4">span: 4</cc-col>
        <cc-col span="10" offset="4">offset: 4, span: 10</cc-col>
      </cc-row>
    </div>

    <div class="demo">
      <cc-row>
        <cc-col offset="12" span="12">offset: 12, span: 12</cc-col>
      </cc-row>
    </div>
  </div>

  <div>
    <div class="title">列元素间距</div>
    <div class="demo">
      <cc-row gutter="20">
        <cc-col span="8">span: 8</cc-col>
        <cc-col span="8">span: 8</cc-col>
        <cc-col span="8">span: 8</cc-col>
      </cc-row>
    </div>
  </div>

  <div>
    <div class="title">flex布局</div>
    <div>左对齐</div>
    <div class="demo">
      <cc-row >
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
      </cc-row>
    </div>

    <div>居中</div>
    <div class="demo">
      <cc-row  justify="center">
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
      </cc-row>
    </div>

    <div>右对齐</div>
    <div class="demo">
      <cc-row  justify="end">
      <cc-col span="6">span: 6</cc-col>
      <cc-col span="6">span: 6</cc-col>
      <cc-col span="6">span: 6</cc-col>
    </cc-row>
    </div>

    <div>两端对齐</div>
    <div class="demo">
      <cc-row  justify="space-between">
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
      </cc-row>
    </div>

    <div>每个元素的两侧间隔相等</div>
    <div class="demo">
      <cc-row  justify="space-around">
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
        <cc-col span="6">span: 6</cc-col>
      </cc-row>
    </div>
  </div>

  <div>
    <div class="title">自定义标签(ul、li为例)</div>
    <div class="demo">
      <cc-row tag='ul'>
        <cc-col tag='li' span="8">li标签</cc-col>
        <cc-col tag='li' span="8">li标签</cc-col>
        <cc-col tag='li' span="8">li标签</cc-col>
      </cc-row>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.title {
  margin: #{topx(20)};
}
.demo {
  width: 100%;
  height: #{topx(40)};
  margin: #{topx(10)} 0;
  .cc-col {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;
  }
  .cc-col:nth-child(odd) {
    background-color: #39a9ed;
  }
  .cc-col:nth-child(even) {
    background-color: #66c6f2;
  }
}
</style>