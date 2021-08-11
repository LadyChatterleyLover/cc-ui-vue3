<template>
  <cc-popup ref="popup" mode="bottom" :closeable="closeable" :round="round" v-model:show="visible">
    <div class="cc-action-sheet">
      <div v-if="title" class="cc-action-sheet-title">{{ title }}</div>
      <div>
        <slot v-if="slots" name="content"></slot>
        <template v-else>
          <div v-if="description" class="cc-action-sheet-description">
            <div>{{ description }}</div>
            <div class="cc-action-sheet-description-line"></div>
          </div>
          <div
            @click="clickItem(item, index)"
            class="cc-action-sheet-content"
            v-for="(item, index) in list"
            :key="index"
          >
            <div
              :style="{ color: item.color, fontSize: item.fontSize && item.fontSize / 2 + 'px' }"
              :class="{ disabled: item.disabled }"
            >
              <div class="cc-action-sheet-content-loading" v-if="item.loading">
                <cc-icon type="spinner-cycle" size="16" color="#c8c9cc"></cc-icon>
              </div>
              <div v-else>{{ item.name }}</div>
            </div>
            <div class="cc-action-sheet-content-subname" v-if="item.subname">{{ item.subname }}</div>
          </div>
          <div v-if="showCancel" class="cc-action-sheet-cancel" @click="cancel">
            <div class="cc-action-sheet-cancel-line"></div>
            <div class="cc-action-sheet-cancel-text">{{ cancelText }}</div>
          </div>
        </template>
      </div>
    </div>
  </cc-popup>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch, useSlots, PropType } from 'vue'

export interface ListItem {
  // 标题
  name: string,
  // 二级标题	
  subname?: string,
  // 文字颜色
  color?: string,
  // 是否禁用
  disabled?: boolean,
  // 文字大小
  fontSize?: number
  // 加载状态
  loading?: boolean
}

let props = defineProps({// 操作菜单数组
  list: {
    type: Array as PropType<ListItem[]>,
  },
  // 显示菜单
  show: {
    type: Boolean,
    required: true
  },
  // 标题
  title: {
    type: String,
    default: ''
  },
  // 圆角菜单
  round: {
    type: Boolean,
    required: false
  },
  // 描述信息
  description: {
    type: String,
    default: ''
  },
  // 关闭按钮
  closeable: {
    type: Boolean,
    default: false
  },
  // 显示底部取消按钮
  showCancel: {
    type: Boolean,
    default: false
  },
  // 取消文字
  cancelText: {
    type: String,
    default: '取消'
  },
  // 是否在点击选项后关闭
  closeOnClickAction: {
    type: Boolean,
    default: true
  }
})
let emits = defineEmits(['select', 'update:show'])
let slotList = useSlots()

let visible = ref(false)
let popup = ref()
// 插槽内容
let slots = ref()
// 父组件show改变 改变当前组件显示 因为不能直接修改父组件的值
watch(() => props.show, val => {
  visible.value = val
  if (slotList.content) slots.value = slotList.content
})
// 改变父组件的show
watch(() => visible.value, val => {
  emits('update:show', val)
  if (slotList.content) slots.value = slotList.content
})

// 取消
let cancel = () => {
  if (props.closeOnClickAction) {
    popup.value.clickMask()
  }
}
// 点击每一项
let clickItem = (item: ListItem, index: number) => {
  if (!item.disabled) {
    emits('select', {
      item,
      index
    })
    popup.value.clickMask()
  }
}
</script>

<style scoped lang="scss">
.cc-action-sheet {
  &-title {
    font-weight: 500;
    font-size: 16px;
    line-height: #{topx(48)};
    text-align: center;
  }
  &-description {
    position: relative;
    padding: #{topx(20)} 0 #{topx(10)} 0;
    color: #969799;
    font-size: 14px;
    line-height: #{topx(10)};
    text-align: center;
    &-line {
      width: 92%;
      margin-left: 4%;
      height: #{topx(1)};
      background: #ebedf0;
      margin-top: #{topx(15)};
    }
  }
  &-content {
    width: 100%;
    padding: #{topx(14)} 0;
    font-size: 16px;
    background-color: #fff;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-loading {
      animation: loading 1.5s linear infinite;
    }
    &-subname {
      margin-top: #{topx(8)};
      color: #969799;
      font-size: 12px;
      line-height: #{topx(18)};
    }
  }
  &-cancel {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: #{topx(7)} 0 #{topx(14)} 0;
    font-size: 16px;
    background-color: #fff;
    border: none;
    &-line {
      width: 100%;
      height: #{topx(8)};
      background-color: #f7f8fa;
    }
    &-text {
      margin-top: #{topx(10)};
    }
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
.disabled {
  color: #c8c9cc;
  cursor: not-allowed;
  pointer-events: none;
}
</style>