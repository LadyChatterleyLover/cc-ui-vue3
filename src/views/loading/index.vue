<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <div>
          <cc-loading></cc-loading>
        </div>
        <div>
          <cc-loading type='spinner'></cc-loading>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <div>
          <cc-loading color="#0081ff"></cc-loading>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义大小</div>
      <div class="demo-item">
        <div>
          <cc-loading size="30"></cc-loading>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">加载文案</div>
      <div class="demo-item">
        <div>
          <cc-loading>加载中...</cc-loading>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">垂直排列</div>
      <div class="demo-item">
        <div>
          <cc-loading vertical>加载中...</cc-loading>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义文本颜色和大小</div>
      <div class="demo-item">
        <div>
          <cc-loading textColor='#0081ff' textSize='20'>加载中...</cc-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

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
    display: flex;
    div {
      margin-right: 10px;
    }
  }
}
</style>