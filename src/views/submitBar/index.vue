<template>
  <div>
    <div class="item">普通用法</div>
    <cc-submit-bar :price="3050" @submit="submit"></cc-submit-bar>
    <div class="item">禁止提交</div>
    <cc-submit-bar :price="3050" :disabled="true" @submit="submit"></cc-submit-bar>
    <div class="item">加载状态</div>
    <cc-submit-bar :price="3050" :loading="true"></cc-submit-bar>
    <div class="item">控制显示小数点位数</div>
    <cc-submit-bar :price="3050" :decimalLength="1"></cc-submit-bar>
    <div class="item">控制显示货币符号</div>
    <cc-submit-bar :price="3050" :decimalLength="1" currency="$"></cc-submit-bar>
    <div class="item">自定义按钮颜色和文字</div>
    <cc-submit-bar :price="3050" buttonColor="#07c160" buttonText="结算"></cc-submit-bar>
    <div class="item">自定义内容</div>
    <cc-submit-bar :price="3050">
      <input type="checkbox"  checked/>全选
    </cc-submit-bar>
    <div class="item">自定义顶部内容</div>
    <cc-submit-bar :price="3050">
      <template v-slot:tip>
        你的收货地址不支持同城送,
        <text style="color: #007AFF;">修改地址</text>
      </template>
    </cc-submit-bar>
  </div>
</template>

<script setup lang="ts">
let submit = () => {
  console.log('submit')
}
</script>

<style scoped>
.item {
  font-size: 18px;
  font-weight: 700;
}
</style>