<template>
  <div>
    <div class="container">
      <div class="item">
        <div>普通进度条</div>
        <cc-progress :percentage="35.5"></cc-progress>
      </div>
      <div class="item">
        <div>普通进度条控制高度</div>
        <cc-progress :percentage="62.3" :stroke-width="24"></cc-progress>
      </div>
      <div class="item">
        <div>文字内显</div>
        <cc-progress :percentage="70" :text-inside="true" :stroke-width="24"></cc-progress>
      </div>
      <div class="item">
        <div>文字内显且控制高度</div>
        <cc-progress :percentage="33.8" :text-inside="true" :stroke-width="32"></cc-progress>
      </div>
      <div class="item">
        <div>自定义底色</div>
        <cc-progress :percentage="66" in-bg-color="#abc123"></cc-progress>
      </div>
      <div class="item">
        <div>自定义颜色</div>
        <cc-progress :percentage="66" bg-color="#f46"></cc-progress>
      </div>
      <div class="item">
        <h2>自定义显示内容</h2>
        <cc-progress :percentage="66" bg-color="#f46" :line-data="true">
          <template v-slot:content>
            转化率(日同比 66%)
          </template>
        </cc-progress>
      </div>
      <div class="item">
        <div>不显示进度</div>
        <cc-progress :percentage="66" bg-color="#f46" :noData="true"></cc-progress>
      </div>
      <div class="item">
        <div>进度条加载动画</div>
        <cc-progress :percentage="33.3" bg-color="#f46" :is-animate="true"></cc-progress>
      </div>
      <div class="item">
        <div>设置加载动画时间</div>
        <cc-progress :percentage="50" bg-color="#f46" :is-animate="true" :duration="5000"></cc-progress>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.item {
  margin: 20px 0;
}
</style>