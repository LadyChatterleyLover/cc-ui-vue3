<template>
  <div>
    <div class="title">基础用法</div>
    <div class="item">
      <cc-skeleton title :row="3"></cc-skeleton>
    </div>
  </div>

  <div>
    <div class="title">展示头像</div>
    <div class="item">
      <cc-skeleton title avatar :row="3"></cc-skeleton>
    </div>
  </div>

  <div>
    <div class="title">头像大小</div>
    <div class="item">
      <cc-skeleton title avatar avatarSize="40" :row="3"></cc-skeleton>
    </div>
  </div>

  <div>
    <div class="title">方形头像</div>
    <div class="item">
      <cc-skeleton title avatar avatarSize="40" :round="false" :row="3"></cc-skeleton>
    </div>
  </div>

  <div>
    <div class="title">展示动画</div>
    <div class="item">
      <cc-skeleton animate title avatar :row="5"></cc-skeleton>
    </div>
  </div>

  <div>
    <div class="title">自定义颜色</div>
    <div class="item">
      <cc-skeleton bgColor='red' title avatar :row="5"></cc-skeleton>
    </div>
  </div>

  <div>
    <div class="title">控制显示</div>
    <cc-button size='small' type='primary' @click="handleClick">
      点击2秒之后骨架屏消失
      </cc-button>
    <div class="item" v-if="loading">
      <cc-skeleton :loading='loading' title :row="3"></cc-skeleton>
    </div>
    <div v-if="!loading">
      你的背包,让我走的好缓慢
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let loading = ref<boolean>(true)
let handleClick = () => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

</script>

<style scoped lang='scss'>
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  button {
    margin-right: #{topx(5)};
  }
}
</style>