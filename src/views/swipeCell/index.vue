<template>
  <div>
    <cc-swipe-cell>
      <cc-cell :border="false" title="单元格" value="内容" />
      <template #right>
        <cc-button type="error">删除</cc-button>
        <cc-button type="success">收藏</cc-button>
      </template>
    </cc-swipe-cell>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
</style>