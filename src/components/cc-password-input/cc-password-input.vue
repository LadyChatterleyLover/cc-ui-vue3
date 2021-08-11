<template>
  <div class="cc-password-input">
    <div
      class="cc-password-input-content"
      :class="{ 'cc-password-input-content-show': value, 'cc-password-input-content-hide': !value }"
      :style="{ display: contentDisplay }"
    >
      <div
        class="cc-password-input-content-item"
        :class="{ 'cc-password-input-content-item-noborder': Number(gutter) === 0 && index < list.length - 1 }"
        v-for="(item, index) in list"
        :key="index"
        :style="{ marginRight: gutter + 'px' }"
      >
        <div
          class="cc-password-input-content-item-content"
          :class="{ 'cc-password-input-content-item-content-mask': mask }"
          v-if="item"
        >
          <div class="cc-password-input-content-item-content-nomask" v-if="!mask">{{ item }}</div>
        </div>
      </div>
      <div @click="close" class="cc-password-input-content-close" v-if="closeable">
        <cc-icon type="closeempty" size="22"></cc-icon>
      </div>
    </div>
    <cc-number-keyboard
      :showTooltip="false"
      v-model:value="value"
      extra-key
      @change="handleChange"
      @backspace="backspace"
      ref="keyboard"
    ></cc-number-keyboard>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch, ref, PropType } from 'vue'

let props = defineProps({
  // 是否显示密码输入框
  value: {
    type: Boolean,
    default: false
  },
  // 自定义长度
  length: {
    type: [String, Number],
    default: 6
  },
  // 显示关闭按钮
  closeable: {
    type: Boolean,
    default: true
  },
  // 格子间距
  gutter: {
    type: [String, Number],
    default: 10
  },
  // 是否明文显示
  mask: {
    type: Boolean,
    default: true
  },
  // 初始值
  initValue: {
    type: String,
    default: ''
  },
})
let emits = defineEmits(['update:value', 'complete', 'change', 'backspace'])
let list = ref<string[]>([])
let display = ref<'block' | 'none'>('none')
let contentDisplay = ref<'flex' | 'none'>('none')
let clickNum = ref<number>(-1)

let keyboard = ref()

if (!props.initValue) list.value = Array(Number(props.length)).fill('') as string[]
else {
  let strArr: string[] = props.initValue.split('')
  list.value = [...strArr, ...Array(Number(Number(props.length) - props.initValue.length)).fill('') as string[]]
  clickNum.value = props.initValue.length - 1
}

// 输入值的时候
let handleChange = (val: string) => {
  clickNum.value++
  list.value[clickNum.value] = val
  if (clickNum.value >= 5) {
    clickNum.value = -1
    emits('update:value', !props.value)
    emits('complete', list.value.join(''))
  }
}
// 点后退按钮
let backspace = () => {
  console.log(clickNum.value)
  list.value[clickNum.value] = ''
  clickNum.value--
  if (list.value !== []) emits('backspace', list.value.join(''))
  if (clickNum.value <= -1) {
    clickNum.value = -1
  }
}

// 点击关闭按钮
let close = () => {
  list.value = list.value = Array(Number(props.length)).fill('') as string[]
  keyboard.value.closeMask()
  clickNum.value = -1
}
// 点击遮罩层
let clickMask = () => {
  list.value = list.value = Array(Number(props.length)).fill('') as string[]
  emits('update:value', !props.value)
}


watch(() => list.value, val => {
  let valArr = Object.values(val)
  let list = Array(Number(props.length)).fill('')
  if (props.value && JSON.stringify(valArr) !== JSON.stringify(list)) emits('change', val.join(''))

}, { deep: true })

watch(() => props.value, val => {
  if (val) {
    display.value = 'block'
    contentDisplay.value = 'flex'
  }
  else {
    setTimeout(() => {
      display.value = 'none'
      contentDisplay.value = 'none'
      list.value = Array(Number(props.length)).fill('') as string[]
    }, 80)
  }
  emits('update:value', val)
})
</script>

<style scoped lang="scss">
.cc-password-input {
  &-content {
    position: fixed;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    background: #fff;
    display: flex;
    align-items: center;
    padding: #{topx(28)} #{topx(24)};
    opacity: 0;
    z-index: 2000;
    &-close {
      position: absolute;
      right: #{topx(4)};
      top: #{topx(4)};
      z-index: 99;
    }
    &-show {
      animation: show-content 0.3s linear forwards;
    }
    &-hide {
      animation: hide-content 0.3s linear forwards;
    }
    &-item {
      width: #{topx(40)};
      height: #{topx(40)};
      background: #fff;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      &-noborder {
        border-right: 0;
      }
      &-content {
        width: #{topx(10)};
        height: #{topx(10)};
        &-mask {
          background: #000;
          border-radius: 100%;
        }
        &-nomask {
          position: relative;
          top: #{topx(-4)};
          left: #{topx(1)};
        }
      }
    }
  }
}
@keyframes show {
  from {
    opacity: 0;
    bottom: 0;
  }
  to {
    opacity: 1;
    bottom: #{topx(222)};
  }
}
@keyframes hide {
  from {
    opacity: 1;
    bottom: #{topx(222)};
  }
  to {
    opacity: 0;
    bottom: 0;
  }
}
@keyframes show-content {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hide-content {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>