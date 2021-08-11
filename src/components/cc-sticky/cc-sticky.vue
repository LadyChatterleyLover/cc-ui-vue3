<template>
  <div class="cc-sticky">
    <div class="cc-sticky-content" :style="{...fixedStyle}" ref="content"><slot></slot></div>
    <!-- 占位元素 -->
    <div v-if="fixedStyle" style="z-index: -1;" :style="{width: width + 'px', height: height + 'px'}"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, CSSProperties } from 'vue'

let props = defineProps({
  offsetTop: {
    type: [String, Number],
    default: 0
  }
})

let fixedStyle = ref<CSSProperties | null>(null)
let content = ref()
let left = ref<number>(0)
let top = ref<number>(0)
let width = ref<number>(0)
let height = ref<number>(0)


onMounted(() => {
  top.value = content.value.offsetTop
  left.value= content.value.offsetLeft
  width.value= content.value.clientWidth
  height.value= content.value.clientHeight

  document.addEventListener('scroll', () => {
    let scrollTop: number = document.documentElement.scrollTop
    if (scrollTop > top.value - Number(props.offsetTop)) {
      fixedStyle.value = {
        position: 'fixed',
        top: props.offsetTop + 'px',
        left: left.value + 'px'
      }
    } else {
      fixedStyle.value = null
    }
  })
})

</script>

<style scoped lang="scss">
</style>