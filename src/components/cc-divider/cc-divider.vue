<template>
  <div v-if="!slot" class="cc-divider-nocontent" :style="{ width: widthValue }"></div>
  <div v-else class="cc-divider-content">
    <div
      class="cc-divider-content-left-line"
      :class="{ 'f-1': !width || position === 'left', 'f-8': position === 'right' }"
      :style="{ width: widthValue, background: color }"
    ></div>
    <div>
      <slot></slot>
    </div>
    <div
      class="cc-divider-content-right-line"
      :class="{ 'f-1': !width || position === 'right', 'f-8': position === 'left' }"
      :style="{ width: widthValue, background: color }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed, onMounted, ref, PropType, useSlots } from 'vue'

type Align = 'center' | 'left' | 'right'

let props = defineProps({
  // 分割线宽度
  width: {
    type: [String, Number],
    default: ''
  },
  // 文字位置
  position: {
    type: String as PropType<Align>,
    default: 'center',
  },
  // 边框颜色
  color: {
    type: String,
    default: '#ebedf0'
  }
})
let slots = useSlots()


let widthValue = computed(() => {
  if (String(props.width).includes('%')) return props.width
  else return (props.width as number) / 2 + 'px'
})
let slot = ref()
onMounted(() => {
  if (slots.default) slot.value = slots.default
})




</script>

<style scoped lang="scss">
.cc-divider {
  width: 100%;
  &-nocontent {
    height: #{topx(1)};
    background: #ebedf0;
    width: 100%;
  }
  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    &-left-line,
    &-right-line {
      height: #{topx(1)};
    }
    &-left-line {
      margin-right: #{topx(15)};
    }
    &-right-line {
      margin-left: #{topx(15)};
    }
  }
}
.f-1 {
  flex: 1;
}
.f-8 {
  flex: 8;
}
</style>