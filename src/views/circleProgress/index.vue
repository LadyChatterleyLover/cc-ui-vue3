<template>
  <div class="contanier">
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-circle-progress :percent="50"></cc-circle-progress>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <cc-circle-progress fillColor="#39b54a" layerColor='#123abc' :percent="60"></cc-circle-progress>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义宽度</div>
      <div class="demo-item">
        <cc-circle-progress strokeWidth="20" :percent="70"></cc-circle-progress>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义内容</div>
      <div class="demo-item" style="font-size: 12px;">
        <cc-circle-progress :percent="80">
          <div>营业额</div>
        </cc-circle-progress>
      </div>
    </div>
  
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.contanier {
  background: #fafafa;
  height: 100vh;
  .demo {
    margin: 10px 0;
    &-title {
      padding: 10px 0;
    }
  }
}
</style>