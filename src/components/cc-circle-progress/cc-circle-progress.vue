<template>
  <div class="cc-circle-progress" :style="{ width: width + 'px', height: height + 'px' }">
    <svg viewBox="0 0 1040 1040">
      <path
        d="M 520 520 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000"
        class="cc-circle-progress-layer"
        style="fill: none;"
        :style="{ strokeWidth: strokeWidth + 'px', stroke: layerColor }"
      />
      <path
        d="M 520 520 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000"
        class="cc-circle-progress-hover"
        :style="{
          strokeWidth: (Number(strokeWidth) + 1) + 'px',
          strokeDasharray,
          stroke: fillColor
        }"
      />
    </svg>
    <slot v-if="$slots.default"></slot>
    <div v-else>{{ percent }}%</div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

let props = defineProps({
  percent: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 100
  },
  height: {
    type: [Number, String],
    default: 100
  },
  strokeWidth: {
    type: [Number, String],
    default: 40
  },
  layerColor: {
    type: String,
    default: '#fff',
  },
  fillColor: {
    type: String,
    default: '#0081ff',
  }
})

let strokeDasharray = computed(() => {
  let x = 314 * Number(props.percent) / 10
  return `${x}px, 3140px`
})
</script>

<style scoped lang="scss">
.cc-circle-progress {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  &-layer {
  }
  &-hover {
    fill: none;
    stroke-linecap: round;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>