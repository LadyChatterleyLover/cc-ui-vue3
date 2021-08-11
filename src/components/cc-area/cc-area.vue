<template>
  <div class="cc-area">
    <div class="cc-area-btn">
      <div class="cc-area-btn-cancel">{{ cancelText }}</div>
      <div class="cc-area-btn-title">{{ title }}</div>
      <div class="cc-area-btn-confirm">{{ confirmText }}</div>
    </div>
    <div class="cc-area-content">
      <div class="cc-area-content-column">
        <div
          class="cc-area-content-column-wrap"
          :style="{ transform: `translateY(${translateY}px)` }"
        >
          <div class="cc-area-content-column-item" v-for="(item, index) in regionList" :key="index">
            <div class="cc-area-content-column-item-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="cc-area-content-column">
        <div
          class="cc-area-content-column-wrap"
          :style="{ transform: `translateY(${translateY}px)` }"
        >
          <div class="cc-area-content-column-item" v-for="(item, index) in regionList" :key="index">
            <div class="cc-area-content-column-item-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="cc-area-content-column">
        <div
          class="cc-area-content-column-wrap"
          :style="{ transform: `translateY(${translateY}px)` }"
        >
          <div class="cc-area-content-column-item" v-for="(item, index) in regionList" :key="index">
            <div class="cc-area-content-column-item-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import area, { AreaItem } from './area'
import cloneDeep from 'lodash/cloneDeep'


let props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  // 显示列数，3-省市区，2-省市，1-省
  columnsNum: {
    type: Number,
    default: 3
  },
  // 列占位提示文字
  columnsPlaceholder: {
    type: Array,
    default: () => []
  }
})

let regionList = ref<AreaItem[]>([])

let translateY = ref<number>(110)

onMounted(() => {
  regionList.value = cloneDeep(area)
})
</script>

<style scoped lang="scss">
.cc-area {
  position: relative;
  &-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    padding: 0 16px;
    &-title {
      font-weight: 500;
    }
    &-cancel {
      font-size: 14px;
      color: #969799;
    }
    &-confirm {
      font-size: 14px;
      color: #576b95;
    }
  }
  &-content {
    position: relative;
    display: flex;
    height: 300px;
    &-column {
      flex: 1;
      overflow: hidden;
      &-item {
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 4px;
        &-name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>