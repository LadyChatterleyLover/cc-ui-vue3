<template>
  <div class="cc-popover">
    <div class="cc-popover-placement">
      <div ref="reference" @click="handleClick">
        <slot name="reference"></slot>
      </div>
      <div
        :style="{ display, ...contentStyle }"
        class="cc-popover-content"
        ref="content"
        :class="[
          {
            'cc-popover-content-show': value,
            'cc-popover-content-hide': !value,
            'cc-popover-content-dark': theme === 'dark',
          },
          `cc-popover-content-${placement}`,
          ,
        ]"
      >
        <div
          class="cc-popover-content-arrow-top"
          :class="[`cc-popover-content-arrow-top-${placement}`,
          {
            'cc-popover-content-arrow-top-dark': theme === 'dark',
          }]"
          v-if="placement.includes('bottom')"
          :style="{ display }"
        ></div>
        <div
          class="cc-popover-content-arrow-bottom"
          :class="[`cc-popover-content-arrow-bottom-${placement}`,
          {
            'cc-popover-content-arrow-bottom-dark': theme === 'dark',
          }]"
          v-if="placement.includes('top')"
          :style="{ display }"
        ></div>
        <div
          class="cc-popover-content-arrow-right"
          :class="[`cc-popover-content-arrow-right-${placement}`,
          {
            'cc-popover-content-arrow-right-dark': theme === 'dark',
          }]"
          v-if="placement.includes('left')"
          :style="{ display }"
        ></div>
        <div
          class="cc-popover-content-arrow-left"
          :class="[`cc-popover-content-arrow-left-${placement}`,
          {
            'cc-popover-content-arrow-left-dark': theme === 'dark',
          }]"
          v-if="placement.includes('right')"
          :style="{ display }"
        ></div>
        <div class="cc-popover-wrap">
          <slot v-if="slots.default"></slot>
          <template v-else>
            <div
              class="cc-popover-item"
              :class="{ disabled: item.disabled }"
              v-for="(item, index) in actions"
              :key="index"
              @click="clickItem(item, index)"
            >
              <div class="cc-popover-item-icon">
                <cc-icon :color="item.disabled ? '#c8c9cc' : '#333'" :type="item.icon" size="16"></cc-icon>
              </div>
              <div class="cc-popover-item-text">{{ item.text }}</div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, useSlots, ref, watch, nextTick, CSSProperties } from 'vue'

export interface ActionItem {
  text: string,
  icon?: string,
  disabled?: boolean
}

type PopoverPlacement =
  'top' | 'top-start' | 'top-end' | 'left' |
  'top-start' | 'left-end' | 'right' | 'right-start' |
  'bottom' | 'bottom-start' | 'bottom-end'

let props = defineProps({
  // 显示菜单
  value: {
    type: Boolean,
    default: false
  },
  // 菜单项
  actions: {
    type: Array as PropType<ActionItem[]>,
    required: true
  },
  // 触发方式
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'click'
  },
  // 弹出位置
  placement: {
    type: String as PropType<PopoverPlacement>,
    default: 'bottom'
  },
  // 主题
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  },
  // 是否在点击选项后关闭
  closeOnClickAction: {
    type: Boolean,
    default: true
  }
})
let emits = defineEmits(['update:value', 'select'])
let slots = useSlots()

let display = ref<'block' | 'none'>('none')
let reference = ref()
let contentStyle = ref<CSSProperties>()

let handleClick = () => {
  emits('update:value', !props.value)
}

let clickItem = (item: ActionItem, index: number) => {
  if (item.disabled) return
  emits('select', {
    item,
    index
  })
  if (props.closeOnClickAction) emits('update:value', !props.value)
}

watch(() => props.value, val => {
  if (val) {
    nextTick(() => {
      if (props.placement === 'top-start' || props.placement === 'bottom-start') {
        contentStyle.value = { left: 0 }
      } else if (props.placement === 'top' || props.placement === 'bottom') {
        contentStyle.value = { left: ((reference.value as HTMLElement).offsetWidth - 128) / 2 + 'px' }
      } else if (props.placement === 'top-end' || props.placement === 'bottom-end') {
        contentStyle.value = { right: '-16px' }
      } else if (props.placement === 'left' || props.placement === 'right') {
        contentStyle.value = { top: ((reference.value as HTMLElement).offsetHeight - 128) / 2 + 'px' }
        if (props.placement === 'right') {
          contentStyle.value = { left: ((reference.value as HTMLElement).offsetWidth) + 12 + 'px', top: -(reference.value as HTMLElement).offsetHeight + 'px' }
        }
      } else if (props.placement.includes('right')) {
        contentStyle.value = { left: ((reference.value as HTMLElement).offsetWidth) + 12 + 'px' }
      }
      display.value = 'block'
    })
  }
  else setTimeout(() => {
    display.value = 'none'
  }, 30)
})

</script>

<style scoped lang="scss">
.cc-popover {
  &-placement {
    position: relative;
  }
  &-content {
    position: absolute;
    border-radius: #{topx(12)};
    background: #fff;
    box-shadow: 0 2px 12px rgb(50 50 51 / 12%);
    z-index: 999;
    transform-origin: left top;
    transform: translateX(-50%);
    width: #{topx(128)};
    &-bottom,
    &-bottom-start,
    &-bottom-end {
      bottom: #{topx(-142)};
    }
    &-top,
    &-top-start,
    &-top-end {
      top: #{topx(-140)};
    }
    &-left,
    &-left-start,
    &-left-end {
      left: #{topx(-140)};
    }
    // 箭头朝上的三角形
    &-arrow-top {
      position: absolute;
      width: 0;
      height: 0;
      border-left: #{topx(6)} solid transparent;
      border-right: #{topx(6)} solid transparent;
      border-bottom: #{topx(10)} solid #fff;
      top: #{topx(-10)};
      &-dark {
        border-bottom-color: #4a4a4a;
      }
      &-bottom-start {
        left: #{topx(16)};
      }
      &-bottom-end {
        right: #{topx(24)};
      }
      &-bottom {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    // 箭头朝下的三角形
    &-arrow-bottom {
      position: absolute;
      width: 0;
      height: 0;
      border-left: #{topx(6)} solid transparent;
      border-right: #{topx(6)} solid transparent;
      border-top: #{topx(10)} solid #fff;
      bottom: #{topx(-8)};
      &-dark {
        border-top-color: #4a4a4a;
      }
      &-top-start {
        left: #{topx(16)};
      }
      &-top-end {
        right: #{topx(24)};
      }
      &-top {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    // 箭头朝右的三角形
    &-arrow-right {
      position: absolute;
      width: 0;
      height: 0;
      border-left: #{topx(12)} solid #fff;
      border-bottom: #{topx(6)} solid transparent;
      border-top: #{topx(6)} solid transparent;
      &-dark {
        border-left-color: #4a4a4a;
      }
      &-left-start {
        right: #{topx(-12)};
        top: #{topx(6)};
      }
      &-left-end {
        right: #{topx(-12)};
        top: #{topx(12)};
      }
      &-left {
        top: 50%;
        transform: translateY(-50%);
        right: #{topx(-12)};
      }
    }
    // 箭头朝左的三角形
    &-arrow-left {
      position: absolute;
      width: 0;
      height: 0;
      border-right: #{topx(12)} solid #fff;
      border-bottom: #{topx(6)} solid transparent;
      border-top: #{topx(6)} solid transparent;
      &-dark {
        border-right-color: #4a4a4a;
      }
      &-right-start {
        left: #{topx(-12)};
        top: #{topx(12)};
      }
      &-right-end {
        left: #{topx(-12)};
        top: #{topx(12)};
      }
      &-right {
        top: 50%;
        transform: translateY(-50%);
        right: #{topx(-12)};
      }
    }
    &-dark {
      background: #4a4a4a;
      color: #fff;
    }
    &-bottom-end {
      right: #{topx(-16)};
      transform-origin: right bottom;
    }
    &-bottom {
      transform-origin: center;
    }
    &-top-start {
      transform-origin: left bottom;
    }
    &-top {
      transform-origin: center;
    }
    &-top-end {
      right: #{topx(-16)};
      transform-origin: right bottom;
    }
    &-left-start {
      top: 0;
      transform-origin: top;
    }
    &-left-end {
      transform-origin: top;
      bottom: #{topx(-100)};
    }
    &-left {
      transform-origin: center;
    }
    &-right-start {
      top: 0;
      transform-origin: left top;
      left: #{topx(94)};
    }
    &-right-end {
      transform-origin: left top;
      bottom: #{topx(-100)};
    }
    &-right {
      transform-origin: center;
    }
    &-show {
      animation: show 0.15s linear forwards;
    }
    &-hide {
      animation: hide 0.15s linear forwards;
    }
  }
  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 #{topx(16)};
    height: #{topx(44)};
    width: #{topx(128)};
    &-text {
      margin-left: #{topx(8)};
    }
    &-icon {
      position: relative;
      left: #{topx(-10)};
    }
  }
}

@keyframes show {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.disabled {
  color: #c8c9cc;
  cursor: not-allowed;
}
@keyframes hide {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
}
</style>