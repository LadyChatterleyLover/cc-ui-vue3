<template>
  <div
    :class="{ 'cc-dialog-mask-show': show, 'cc-dialog-mask-hide': !show && num > 0 }"
    class="cc-dialog-mask"
    :style="{ top }"
    @click="clickMask"
  ></div>
  <div
    :class="{ 'cc-dialog-show': show, 'cc-dialog-hide': !show && num > 0 }"
    class="cc-dialog"
    :style="{ width: width + 'rpx' }"
  >
    <div class="cc-dialog-content">
      <div
        :class="{ 'cc-dialog-content-nocontent': !content && !contentSlot }"
        class="cc-dialog-content-title"
        v-if="title"
      >{{ title }}</div>
      <div
        :class="{ 'cc-dialog-content-content-padding': !contentSlot }"
        class="cc-dialog-content-content"
        v-if="content || contentSlot"
      >
        <slot v-if="contentSlot" name="content"></slot>
        <div v-else>{{ content }}</div>
      </div>
      <div class="cc-dialog-content-button">
        <div>
          <slot v-if="btnSlot" name="button"></slot>
          <template v-else>
            <div
              v-if="showCancelButton"
              class="cc-dialog-content-button-cancel"
              :style="{ color: cancelColor }"
              @click="cancel"
            >{{ cancelText }}</div>
            <div
              v-if="showConfirmButton"
              class="cc-dialog-content-button-confirm"
              :style="{ color: confirmColor }"
              @click="confirm"
            >
              <div class="loading" v-if="loading">
                <cc-icon type="spinner-cycle" size="16" color="#c8c9cc"></cc-icon>
              </div>
              <div v-else>{{ confirmText }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, useSlots, ref, watch } from 'vue'

let props = defineProps({
  // 是否显示弹框
  show: {
    type: Boolean,
    required: true
  },
  // 弹框标题
  title: {
    type: String
  },
  // 弹框内容
  content: {
    type: String
  },
  width: {
    type: [Number, String],
    default: 640
  },
  // 是否展示确认按钮	
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  // 是否展示取消按钮	
  showCancelButton: {
    type: Boolean,
    default: false
  },
  // 确认按钮文字
  confirmText: {
    type: String,
    default: '确认'
  },
  // 取消按钮文字
  cancelText: {
    type: String,
    default: '取消'
  },
  // 确认按钮颜色
  confirmColor: {
    type: String,
    default: '#2979ff'
  },
  // 取消按钮颜色
  cancelColor: {
    type: String,
    default: '#000'
  },
  // 点击遮罩层是否关闭
  closeOnClickOverlay: {
    type: Boolean,
    default: false
  },
  // 是否异步关闭
  asyncClose: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['confirm', 'cancel', 'update:show'])
let slots = useSlots()

let loading = ref<boolean>(false)
// 内容插槽
let contentSlot = ref()
// 按钮插槽
let btnSlot = ref()
let num = ref(0)

// 确认事件
let confirm = () => {
  if (props.asyncClose) {
    loading.value = true
  } else {
    emits('update:show', !props.show)
    loading.value = false
  }
  emits('confirm')
}
// 取消事件
let cancel = () => {
  emits('update:show', !props.show)
  emits('cancel')
}
// 点击遮罩层
let clickMask = () => {
  if (props.closeOnClickOverlay) emits('update:show', !props.show)
}
// 关闭
let close = () => {
  emits('update:show', !props.show)
}
watch(() => props.show, val => {
  if (val === false) loading.value = false
  if (val) {
    num.value++
    if (slots.content) {
      contentSlot.value = slots.content
    }
    if (slots.button) {
      btnSlot.value = slots.button
    }
  }
})

let top = ref<string>('')
let head = document.getElementsByTagName('uni-page-head')[0]
if (head) top.value = '88rpx'

defineExpose({
  close
})

</script>

<style scoped lang="scss">
.cc-dialog {
  position: fixed;
  top: 34%;
  left: 6%;
  right: 6%;
  overflow: hidden;
  font-size: 16px;
  background-color: #fff;
  border-radius: #{topx(16)};
  transform: translate3d(-50%, -50%, 0);
  min-width: #{topx(36)};
  min-height: #{topx(36)};
  opacity: 0;
  z-index: -1;
  &-show {
    animation: show 0.2s linear forwards;
    &.cc-dialog {
      z-index: 999;
    }
  }
  &-hide {
    animation: hide 0.2s linear forwards;
    &.cc-dialog {
      z-index: -1;
    }
  }
  &-mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    &-show {
      animation: mask-show 0.2s linear forwards;
    }
    &-hide {
      animation: mask-hide 0.2s linear forwards;
    }
  }
  &-content {
    &-title {
      padding-top: #{topx(26)};
      font-weight: 500;
      line-height: #{topx(12)};
      text-align: center;
    }
    &-nocontent {
      padding-bottom: #{topx(26)};
    }
    &-content {
      white-space: pre-wrap;
      text-align: center;
      word-wrap: break-word;
      color: #646566;
      font-size: 14px;
      &-padding {
        padding: #{topx(17)};
      }
    }
    &-button {
      height: #{topx(48)};
      border: 1px solid #ebedf0;
      display: flex;
      align-items: center;
      div {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      &-cancel {
        border-right: 1px solid #ebedf0;
      }
    }
  }
}
.loading {
  animation: loading 1.5s linear infinite;
}
@keyframes mask-show {
  from {
    opacity: 0;
    z-index: -1;
  }
  to {
    opacity: 1;
    z-index: 998;
  }
}
@keyframes mask-hide {
  from {
    opacity: 1;
    z-index: 998;
  }
  to {
    opacity: 0;
    z-index: -1;
  }
}
@keyframes show {
  from {
    transform: scale(0);
    z-index: -1;
    opacity: 0;
  }
  to {
    transform: scale(1);
    z-index: 999;
    opacity: 1;
  }
}
@keyframes hide {
  from {
    transform: scale(1);
    z-index: 999;
    opacity: 1;
  }
  to {
    transform: scale(0);
    z-index: -1;
    opacity: 0;
  }
}
@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>