<template>
  <component
    :is="tag"
    class="cc-row"
    :style="{
      'margin-left': margin,
      'margin-right': margin,
      'justify-content': justifyValue
    }"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { defineProps, computed, PropType } from 'vue'

type RowJustifyProps = '' | 'end' | 'center' | 'space-around' | 'space-between'

let props = defineProps({
  gutter: {
    type: [Number, String],
    default: ''
  },
  tag: {
    type: String,
    default: 'div'
  },
  justify: {
    type: String as PropType<RowJustifyProps>,
    default: ''
  }
})
let margin = computed(() => {
  if (props.gutter) {
    return '-' + ((props.gutter as number) / 2) + 'px'
  }
  return 0
})

let justifyValue = computed(() => {
  if (!props.justify) return 'flex-start'
  else if (props.justify === 'end') return 'flex-end'
  else return props.justify
})

</script>

<style scoped lang="scss">
.cc-row {
  display: flex;
  height: 100%;
}
</style>