<template>
  <div
    class="cc-avatar"

    :style="{ width: avatarWidth + 'px', height: avatarHeight + 'px',borderRadius: round ? '100%' : '0' }"
  >

    <img :mode='imgMode' @error='handleError' v-if="src && !error"  :style="{ borderRadius: round ? '100%' : '5px' }" class="cc-avatar-img" :src="src" />
    <slot v-else></slot>
  </div>
  
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits, PropType, useSlots, ref } from 'vue'

type AvatarSizeProps = '' | 'large' | 'small' | 'number'

let slots = useSlots()
let props = defineProps({
  // 头像路径
  src: {
    type: String,
    default: ''
  },
  // 是否圆形图片
  round: {
    type: Boolean,
    default: true
  },
  // 尺寸
  size: {
    type: String as PropType<AvatarSizeProps>,
    default: ''
  },
  // 图片模式
  imgMode: {
    type: String,
    default: 'aspectFill'
  }
})
let emits = defineEmits(['error'])
let error = ref<boolean>(false)

let avatarWidth = computed(() => {
  if (!props.size) return 38
  else if (props.size === 'large') return 60
  else if (props.size === 'small') return 30
  else return props.size
})

let avatarHeight = computed(() => {
  if (!props.size) return 38
  else if (props.size === 'large') return 60
  else if (props.size === 'small') return 30
  else return props.size
})


let handleError = () => {
  error.value = true
  emits('error')
}
</script>

<style scoped lang="scss">
.cc-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  background: #c0c4cc;
  &-img {
    width: 100%;
    height: 100%;
  }
}
</style>