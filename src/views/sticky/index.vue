<template>
  <div class="container">
    <div>2002年的第一场雪</div>
    <cc-sticky>
      <div class="sticky">比以往时候来的更晚一些</div>
    </cc-sticky>
    <div style="margin-left: 100px;">
      <cc-sticky :offset-top="50">
        <div class="sticky">停靠在8楼的2路汽车</div>
      </cc-sticky>
      <div>带走了最后一片飘落的黄叶</div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  height: 200vh;
  margin-top: 75px;
}

.sticky {
  width: 100px;
  background-color: #2979ff;
  color: #fff;
  padding: 12px;
  text-align: center;
}
</style>