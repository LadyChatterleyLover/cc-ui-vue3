<template>
  <div class="cc-skeleton" v-if="loading">
    <div
      v-if="avatar"
      class="cc-skeleton-avatar"
      :class="{ 'cc-skeleton-avatar-round': round, 'cc-skeleton-animate': animate }"
      :style="{ width: avatarSize + 'px', height: avatarSize + 'px', background: bgColor }"
    ></div>
    <div class="cc-skeleton-wrap" :class="{ 'cc-skeleton-wrap-hasavatar': avatar }">
      <div
        v-if="title"
        class="cc-skeleton-content cc-skeleton-title"
        :class="{ 'cc-skeleton-animate': animate }"
        :style="{ background: bgColor }"
      ></div>
      <template v-if="row > 0">
        <div
          v-for="item in row"
          :key="item"
          class="cc-skeleton-content cc-skeleton-row"
          :class="{ 'cc-skeleton-row-last': item === row, 'cc-skeleton-animate': animate }"
          :style="{background: bgColor}"
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

let props = defineProps({
  // 段落占位图行数
  row: {
    type: Number,
    default: 0,
  },
  // 是否开启动画
  animate: {
    type: Boolean,
    default: false
  },
  // 是否显示标题占位图
  title: {
    type: Boolean,
    default: false
  },
  // 是否显示头像占位图
  avatar: {
    type: Boolean,
    default: false
  },
  // 是否显示骨架屏，传 false 时会展示子组件内容
  loading: {
    type: Boolean,
    default: true
  },
  // 头像占位图大小
  avatarSize: {
    type: [Number, String],
    default: 32,
  },
  // 头像是否圆形
  round: {
    type: Boolean,
    default: true
  },
  // 骨架组件背景颜色
  bgColor: {
    type: String,
    default: '#f2f3f5'
  }
})
</script>

<style scoped lang="scss">
.cc-skeleton {
  width: 100%;
  display: flex;
  &-animate {
    animation: skeleton-animate 1.2s ease-in-out infinite;
  }
  &-title {
    width: 40%;
  }
  &-wrap {
    flex: 1;
    &-hasavatar {
      padding-top: #{topx(8)};
    }
  }
  &-content {
    height: 16px;
  }
  &-avatar {
    margin-right: #{topx(16)};
    &-round {
      border-radius: 100%;
    }
  }
  &-row {
    width: 100%;
    margin-top: #{topx(20)};
    &-last {
      width: 60%;
    }
  }
}
@keyframes skeleton-animate {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.6;
  }
}
</style>