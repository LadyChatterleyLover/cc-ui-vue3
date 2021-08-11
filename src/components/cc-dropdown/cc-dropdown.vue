<template>
  <div class="cc-dropdown">
    <div class="cc-dropdown-item" v-for="(item, index) in cloneList" :key="index">
      <div
        class="cc-dropdown-item-mask"
        :class="{ 'cc-dropdown-item-mask-active': item.activeItem?.actived }"
        :style="{ display: item.activeItem?.display }"
        @click="clickMask(item)"
      ></div>
      <div
        class="cc-dropdown-item-header"
        :class="{ 'cc-dropdown-item-header-active': zIndex }"
        @click="clickHeader(item)"
      >
        <div
          class="cc-dropdown-item-header-title"
          :class="{ disabled }"
          :style="{ color: item.activeItem?.actived ? activeColor : '#323233' }"
        >{{ item.title ? item.title : item.activeItem?.label }}</div>
        <div
          class="cc-dropdown-item-header-icon"
          :class="{ 'cc-dropdown-item-header-icon-active': item.activeItem?.actived }"
        >
          <cc-icon
            type="arrowdown"
            :color="item.activeItem?.actived ? activeColor : '#c0c4cc'"
            size="14"
          ></cc-icon>
        </div>
      </div>
      <div
        class="cc-dropdown-item-wrap"
        :class="{ 'cc-dropdown-item-wrap-active': item.activeItem?.actived }"
      >
        <slot v-if="item.slots && item.activeItem?.actived" :name="item.slots"></slot>
        <template v-if="!item.slots">
          <div
            class="cc-dropdown-item-wrap-content"
            v-for="(item1, index1) in item.options"
            :key="index1"
            :style="{ display: item.activeItem?.display }"
          >
            <cc-cell @click="clickItem(item, item1, index, index1)">
              <template #title>
                <div
                  :style="{ color: item.activeIndex === index1 ? activeColor : '#323233' }"
                >{{ item1.label }}</div>
              </template>
              <template #right-icon>
                <cc-icon
                  v-if="item.activeIndex === index1"
                  type="checkmarkempty"
                  size="16"
                  :color="item.activeIndex === index1 ? activeColor : '#323233'"
                ></cc-icon>
              </template>
            </cc-cell>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, useSlots, ref, PropType, watch } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface DropdownOptionItem {
  value: string | number | boolean,
  label: string,
  disabled?: boolean,
  actived?: boolean,
  display?: 'none' | 'block'
}

export interface DropdownItem {
  value?: string | number | boolean,
  // 标题
  title?: string,
  options?: DropdownOptionItem[],
  // 每一组数据当前选中项
  activeItem?: DropdownOptionItem,
  // 每一组数据当前选中下标
  activeIndex?: number,
  // 插槽名
  slots?: string
}

let props = defineProps({
  list: {
    type: Array as PropType<DropdownItem[]>,
    required: true
  },
  // 文字激活颜色
  activeColor: {
    type: String,
    default: '#ee0a24'
  },
  // 是否在点击遮罩层后关闭菜单
  closeOnClickOverlay: {
    type: Boolean,
    default: true
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  }

})
let emits = defineEmits(['change', 'open', 'close'])
let slots = useSlots()
let cloneList = ref<DropdownItem[]>(cloneDeep(props.list))
let checked = ref<any[]>([])
// 点击加上层级
let zIndex = ref<boolean>(false)

cloneList.value.map((item: DropdownItem) => {
  if (item.options && item.options.length) {
    item.options.map((item1: DropdownOptionItem, index1: number) => {
      if (item1.value === item.value) {
        item.activeIndex = index1
        item.activeItem = item1
        item.activeItem.actived = false
        item.activeItem.display = 'none'
        checked.value.push(item1.value)
      }
    })
  } else {
    item.activeItem = {
      value: '',
      label: '',
      disabled: false,
      actived: false,
      display: 'none'
    }
  }
})

// 点击头部
let clickHeader = (item: DropdownItem) => {
  if (props.disabled) return
  item.activeItem!.actived = !item.activeItem!.actived
  item.activeItem!.display === 'none' ? item.activeItem!.display = 'block' : setTimeout(() => {
    item.activeItem!.display = 'none'
  }, 80)
  cloneList.value.map(((i: DropdownItem) => {
    if (item !== i) {
      i.activeItem!.actived = false
      i.activeItem!.display = 'none'
    }
  }))
  if (item.activeItem!.actived) {
    emits('open')
    zIndex.value = true
  } else {
    emits('close')
    zIndex.value = false
  }
}


// 点击菜单
let clickItem = (item: DropdownItem, item1: DropdownOptionItem, index: number, index1: number) => {
  item.activeItem = item1
  item.activeItem.actived = false
  item.activeIndex = index1
  setTimeout(() => {
    item.activeItem!.display = 'none'
  }, 80)
  if (item.value !== item1.value) {
    item.value = item1.value
    checked.value[index] = item1.value
    emits('change', checked.value)
  }
  emits('close')
  zIndex.value = false
}

let clickMask = (item: DropdownItem) => {
  if (props.closeOnClickOverlay) clickHeader(item)
}

watch(() => checked.value, val => {
  emits('change', val)
}, { deep: true, immediate: true })
</script>

<style scoped lang="scss">
.cc-dropdown {
    display: flex;
    .cc-dropdown-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      flex: 1;
      position: relative;
      &-mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: all 0.3s;
        opacity: 0;
        z-index: 100;
        &-active {
          opacity: 1;
        }
      }
      &-header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: #fff;
        box-shadow: 0 2px 12px #fff;
        height: #{topx(48)};
        &-active {
          z-index: 999;
        }
        &-title {
          height: 100%;
          display: flex;
          align-items: center;
        }
        &-icon {
          transition: all 0.3s;
          margin-left: #{topx(6)};
          &-active {
            transform: rotate(180deg);
          }
        }
      }
      &-wrap {
        width: 100%;
        position: absolute;
        top: 0;
        transition: all 0.3s;
        z-index: 999;
        background: #fff;
        &-active {
          top: #{topx(48)};
        }
      }
    }
  }
  .disabled {
    color: #969799 !important;
    pointer-events: none;
  }
</style>