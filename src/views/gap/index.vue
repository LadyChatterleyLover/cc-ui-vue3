<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-gap bg-color="#ccc"></cc-gap>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">上下间距</div>
      <div class="demo-item">
        <cc-gap bg-color="#ccc" marginBottom="30" marginTop="30"></cc-gap>
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
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>