<template>
  <div class="cc-badge">
    <slot></slot>
    <div
      :style="{ background: bgColor, color, top: offset[0] + 'px', right: offset[1] + 'px' }"
      class="cc-badge-content"
      v-if="!dot"
    >
      <template v-if="content">{{ showContent }}</template>
      <slot name="content" v-else></slot>
    </div>
    <div
      v-else
      class="cc-badge-dot"
      :style="{
        background: bgColor,
        top:offset[0] + 'px',
        right: offset[1] + 'px'
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, defineComponent } from 'vue'

let props = defineProps({
  // 内容
  content: {
    type: [Number, String],
  },
  // 最大值
  max: {
    type: [Number, String],
  },
  // 显示点
  dot: {
    type: Boolean,
    default: false
  },
  // 自定义背景颜色
  bgColor: {
    type: String,
  },
  // 内容颜色
  color: {
    type: String,
  },
  // 偏移量
  offset: {
    type: Array,
    default: []
  }
})

let showContent = computed(() => {
  if (props.max && typeof props.content === 'number') {
    if (props.content < props.max) return props.content
    else return props.max + '+'
  } else {
    return props.content
  }
})
</script>

<style scoped lang="scss">
.cc-badge {
  position: relative;
  &-content {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 #{topx(4)};
    border-radius: 100%;
    z-index: 99;
    font-size: 12px;
    background: #ee0a24;
    color: #fff;
    transform: translate(50%, -50%);
    transform-origin: 100%;
  }
  &-dot {
    width: #{topx(8)};
    min-width: 0;
    height: #{topx(8)};
    background-color: #ee0a24;
    border-radius: 100%;
    position: absolute;
    top: #{topx(-4)};
    right: #{topx(-4)};
    transform: translate(0, 0);
  }
}
</style>