<template>
  <div class="container">
    <div class="title">
      <div class="title">基础语法</div>
      <div>
        <cc-cell title="单元格" value="内容"></cc-cell>
      </div>
      <div>
        <cc-cell title="单元格" label="描述信息" value="内容"></cc-cell>
      </div>
      <div>
        <cc-cell icon="person" title="单元格" label="描述信息" value="内容"></cc-cell>
      </div>
    </div>

    <div class="title">
      <div class="title">单元格尺寸</div>
      <div>
        <cc-cell size="large" title="单元格" value="内容"></cc-cell>
      </div>
      <div>
        <cc-cell size="large" title="单元格" label="描述信息" value="内容"></cc-cell>
      </div>
    </div>

    <div class="title">
      <div class="title">无边框</div>
      <div>
        <cc-cell title="单元格" value="内容" :border="false"></cc-cell>
      </div>
    </div>

    <div class="title">
      <div class="title">右侧箭头</div>
      <div>
        <cc-cell title="单元格" isLink></cc-cell>
      </div>
      <div>
        <cc-cell title="单元格" value="内容" isLink></cc-cell>
      </div>
      <div>
        <cc-cell title="单元格" value="内容" isLink arrowDirection="left"></cc-cell>
      </div>
      <div>
        <cc-cell title="单元格" value="内容" isLink arrowDirection="up"></cc-cell>
      </div>
      <div>
        <cc-cell title="单元格" value="内容" isLink arrowDirection="down"></cc-cell>
      </div>
    </div>

    <div class="title">
      <div class="title">插槽内容</div>
      <div>
        <cc-cell value="内容">
          <template #title>
            <text class="custom-title">单元格</text>
            <text class="danger">标签</text>
          </template>
        </cc-cell>
      </div>
      <div>
        <cc-cell title="单元格">
          <template #right-icon>
            <cc-icon type='search'></cc-icon>
          </template>
        </cc-cell>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.title {
  margin: #{topx(10)};
}
.custom-title {
  margin-right: #{topx(2)};
  vertical-align: middle;
  color: #ee0a24;
}
.danger {
  background-color: #ee0a24;
  padding: 0 #{topx(2)};
  color: #fff;
  font-size: 12px;
  line-height: #{topx(32)};
  border-radius: #{topx(1)};
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
</style>