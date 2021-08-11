<template>
  <div class="cc-rate">
    <div
      v-for="item in activeConut"
      :key="item"
      :style="{ marginRight: gutter + 'px' }"
      class="cc-rate-active"
      @click="clickActive(item)"
    >
      <cc-icon :class="{ disabled }" :type="activeIcon" :color="disabled ? '#c8c9cc' : activeColor"></cc-icon>
    </div>
    <div
      v-for="item in (count - activeConut)"
      :key="item"
      :style="{ marginRight: gutter + 'px' }"
      class="cc-rate-inactive"
      @click="clickInActive(item)"
    >
      <cc-icon :type="inactiveIcon" :color="disabled ? '#c8c9cc' : inactiveColor"></cc-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'
let props = defineProps({
  // 当前分值
  value: {
    type: Number,
    required: true
  },
  // 图标总数
  count: {
    type: Number,
    default: 5
  },
  // 选中时的图标名称
  activeIcon: {
    type: String,
    default: 'star-filled'
  },
  // 选中时的图标名称
  inactiveIcon: {
    type: String,
    default: 'star'
  },
  // 选中时的颜色
  activeColor: {
    type: String,
    default: '#ffd21e'
  },
  // 未选中的颜色
  inactiveColor: {
    type: String,
    default: '#c8c9cc'
  },
  // 星星之间的距离
  gutter: {
    type: [String, Number],
    default: '4'
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false
  },
  // 只读状态
  readonly: {
    type: Boolean,
    default: false
  },
  allowHalf: {
    type: Boolean,
    default: false
  },
  minCount: {
    type: Number,
    default: 0
  }
})
let emits = defineEmits(['change'])


let activeConut = ref<number>(props.value)

  if (props.minCount && props.value <= props.minCount) activeConut.value = props.minCount

let clickActive = (item: number) => {
  if (props.disabled || props.readonly) return
  if (activeConut.value === 1) {
    if (activeConut.value == 1) {
      activeConut.value = 0
    } else {
      activeConut.value = 1
    }
  } else {
    activeConut.value = item
  }
  if (props.minCount && activeConut.value < props.minCount) activeConut.value = props.minCount
}
let clickInActive = (item: number) => {
  if (props.disabled || props.readonly) return
  activeConut.value += item
  if (activeConut.value === props.count) activeConut.value = props.count
}

watch(() => activeConut.value, val => {
  emits('change', val)
})

</script>

<style scoped lang="scss">
.cc-rate {
  display: flex;
  align-items: center;
}
</style>