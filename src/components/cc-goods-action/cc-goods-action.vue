<template>
  <div class="flex a-center container">
    <div class="flex icon">
      <div
        class="flex f-col a-center icon-item"
        v-for="(item,index) in cloneOptions"
        :key="index"
        @click="handleClick(item, index)"
      >
        <div>
          <cc-icon :type="item.icon" :color="item.iconColor"></cc-icon>
          <text
            class="info"
            v-if="item.info"
            :style="{ background: item.infoColor }"
          >{{ item.info }}</text>
          <div class="dot" v-if="item.dot"></div>
        </div>
        <div class="text flex a-center j-center">{{ item.text }}</div>
      </div>
    </div>
    <div class="f-1 flex a-center btn">
      <div
        class="btn-icon flex a-center j-center"
        :class="{ 'f-btn': !cloneButtons[0].background }"
        :style="{ background: cloneButtons[0].background }"
        @click="clickButton(cloneButtons[0], 0)"
      >{{ cloneButtons[0].text }}</div>
      <div
        v-if="cloneButtons[1]"
        class="btn-icon flex a-center j-center"
        :class="{ 'l-btn': !cloneButtons[1].background }"
        :style="{ background: cloneButtons[1].background }"
        @click="clickButton(cloneButtons[1], 1)"
      >{{ cloneButtons[1].text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, PropType, onMounted } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface GoodsActionOptionItem {
  text: string,
  icon: string,
  dot?: boolean,
  info?: string | number,
  iconColor?: string,
  infoColor?: string
}

export interface GoodsActionButtonItem {
  text: string,
  background?: string
}

let props = defineProps({
  options: {
    type: Array as PropType<GoodsActionOptionItem[]>,
    required: true
  },
  buttons: {
    type: [Array, Object] as PropType<GoodsActionButtonItem[]>,
    required: true
  }
})

let emits = defineEmits(['click', 'clickButton'])

let cloneOptions = ref<GoodsActionOptionItem[]>(cloneDeep(props.options))
let cloneButtons = ref<GoodsActionButtonItem[]>(cloneDeep(props.buttons))

let handleClick = (item: GoodsActionOptionItem, index: number) => {
  emits('click', {
    item,
    index
  })
}
let clickButton = (item: GoodsActionButtonItem | GoodsActionButtonItem[0], index: number) => {
  emits('clickButton', {
    item,
    index
  })
}

onMounted(() => {
  cloneOptions.value.map((item: GoodsActionOptionItem) => {
    if (!item.iconColor) item.iconColor = '#323233'
    if (item.info && !item.infoColor) item.infoColor = '#ee0a24'
  })
  cloneButtons.value.map((item: GoodsActionButtonItem, index: number) => {
    if (index === 0 && !item.background) item.background = '#ff8917'
    if (index === 1 && !item.background) item.background = '#ee0a24'
  })
})
</script>

<style scoped lang="scss">
.container {
  height: 50px;
  width: 100%;
  padding: 3px;
}

.flex {
  display: flex;
}

.f-col {
  flex-direction: column;
}

.a-center {
  align-items: center;
}

.j-center {
  justify-content: center;
}

.f-1 {
  flex: 1;
}

.icon {
  min-width: 48px;
  .icon-item {
    margin: 5px 12px;
    font-size: 14px;
    position: relative;
    top: 5px;
    .dot {
      width: 8px;
      min-width: 0;
      height: 8px;
      background-color: #ee0a24;
      border-radius: 100%;
      position: absolute;
      top: -4px;
      right: -2px;
    }
    .text {
      color: #646566;
    }
    .info {
      position: absolute;
      top: -6px;
      right: -4px;
      box-sizing: border-box;
      min-width: 16px;
      padding: 0 3px;
      color: #fff;
      font-weight: 500;
      font-size: 12px;
      font-family: -apple-system-font, Helvetica Neue, Arial, sans-serif;
      line-height: 1.2;
      text-align: center;
      border: 1px solid #fff;
      border-radius: 16px;
    }
  }
}

.btn {
  color: #fff;
  height: 50px;
  width: 100%;
  font-size: 14px;

  .btn-icon {
    height: 40px;
    width: 100%;
    position: relative;
    top: 5px;

    &:first-child {
      border-top-left-radius: 999px;
      border-bottom-left-radius: 999px;
    }

    &:last-child {
      border-top-right-radius: 999px;
      border-bottom-right-radius: 999px;
      margin-right: 5px;
    }
  }
}
.f-btn {
  background: #ff8917 !important;
}
.l-btn {
  background: #ee0a24 !important;
}
</style>