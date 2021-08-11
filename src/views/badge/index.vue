<template>
  <div>
    <div>
      <div class="title">基础语法</div>
      <div>
        <div class="demo">
          <div class="demo-item">
            <cc-badge :content="8">
              <div class="child"></div>
            </cc-badge>
          </div>
          <div class="demo-item">
            <cc-badge :content="50">
              <div class="child"></div>
            </cc-badge>
          </div>
          <div class="demo-item">
            <cc-badge content="hot">
              <div class="child"></div>
            </cc-badge>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="title">最大值</div>
      <div class="demo">
        <div class="demo-item">
          <cc-badge :content="8" :max="5">
            <div class="child"></div>
          </cc-badge>
        </div>
        <div class="demo-item">
          <cc-badge :content="50" :max="20">
            <div class="child"></div>
          </cc-badge>
        </div>
        <div class="demo-item">
          <cc-badge :content="100" :max="99">
            <div class="child"></div>
          </cc-badge>
        </div>
      </div>
    </div>

    <div>
      <div class="title">自定义颜色</div>
      <div class="demo">
        <div class="demo-item">
          <cc-badge :content="8" bgcolor="#1989fa">
            <div class="child"></div>
          </cc-badge>
        </div>
        <div class="demo-item">
          <cc-badge :content="50" :max="20" bgcolor="red" color="green">
            <div class="child"></div>
          </cc-badge>
        </div>
      </div>
    </div>

    <div>
      <div class="title">显示圆点</div>
      <div class="demo">
        <div class="demo-item">
          <cc-badge :content="8" dot>
            <div class="child"></div>
          </cc-badge>
        </div>
        <div class="demo-item">
          <cc-badge :content="50" dot bgcolor="#1989fa">
            <div class="child"></div>
          </cc-badge>
        </div>
      </div>
    </div>

    <div>
      <div class="title">自定义内容</div>
      <div class="demo">
        <div class="demo-item">
          <cc-badge>
            <div class="child"></div>
            <template #content>
              <cc-icon type="person" color="#fff" size="12"></cc-icon>
            </template>
          </cc-badge>
        </div>
        <div class="demo-item">
          <cc-badge bgcolor="#1989fa">
            <div class="child"></div>
            <template #content>
              <cc-icon type="search" color="#fff" size="12"></cc-icon>
            </template>
          </cc-badge>
        </div>
      </div>
    </div>

    <div>
      <div class="title">偏移量</div>
      <div class="demo">
        <div class="demo-item">
          <cc-badge content="8" :offset="[20, 20]">
            <div class="child"></div>
          </cc-badge>
        </div>
        <div class="demo-item">
          <cc-badge dot :offset="[8, 20]">
            <div class="child"></div>
          </cc-badge>
        </div>
        <div class="demo-item">
          <cc-badge bgcolor="#1989fa" content="50" :offset="[-20, -20]">
            <div class="child"></div>
          </cc-badge>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang='scss'>
.title {
  margin: #{topx(10)};
}
.demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &-item {
    margin-left: #{topx(15)};
  }
}
.child {
  width: #{topx(40)};
  height: #{topx(40)};
  background: #f2f3f5;
  border-radius: #{topx(4)};
}
</style>