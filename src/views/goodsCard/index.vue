<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-goods-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        ></cc-goods-card>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">营销信息</div>
      <div class="demo-item">
        <cc-goods-card
          num="2"
          tag="标签"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
          origin-price="10.00"
        ></cc-goods-card>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义内容</div>
      <div class="demo-item">
        <cc-goods-card
          num="2"
          :price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <cc-tag plain type="error" style="margin-right: 10rpx;">标签</cc-tag>
            <cc-tag plain type="error">标签</cc-tag>
          </template>
          <template #footer>
            <cc-tag size="mini" style="margin-right: 5px;">按钮</cc-tag>
            <cc-tag size="mini">按钮</cc-tag>
          </template>
        </cc-goods-card>
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