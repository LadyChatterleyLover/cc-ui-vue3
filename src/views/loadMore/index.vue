<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-load-more text="点击或上拉加载更多"></cc-load-more>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义样式</div>
      <div class="demo-item">
        <cc-load-more lineWidth="120" color="red" fontSize="20" text="点击或上拉加载更多"></cc-load-more>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">加载更多</div>
      <div class="demo-item">
        <cc-load-more loading text="加载中"></cc-load-more>
        <cc-load-more loading text="加载中" loadingType="spinner"></cc-load-more>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">显示点</div>
      <div class="demo-item">
        <cc-load-more dot></cc-load-more>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.demo {
  &-title {
    padding: 10px;
  }
  &-item {
    margin-bottom: 30px;
  }
}
</style>