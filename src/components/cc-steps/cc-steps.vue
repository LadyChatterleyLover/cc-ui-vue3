<template>
  <div class="cc-steps" :class="{ 'cc-steps-vertical': vertical }">
    <div
      class="cc-steps-item"
      :class="{ 'cc-steps-item-vertical': vertical }"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="cc-steps-item-index" :class="{ 'cc-steps-item-index-vertical': vertical }">
        <div
          v-if="dot"
          class="cc-steps-item-index-dot"
          :style="{ background: item.activeColor ? item.activeColor : Number(active) >= index ? '#0081ff' : '#909399' }"
        ></div>
        <div
          v-else
          class="cc-steps-item-index-num"
          :style="{
            background: Number(active) >= index ? (item.activeColor ? item.activeColor : '#0081ff') : '#fff',
            color: item.activeColor ? item.activeColor : '#909399',
            border: Number(active) >= index ? 'none' : item.activeColor ? `1px solid ${item.activeColor}` : `1px solid #909399`
          }"
        >
          <div v-if="Number(active) >= index">
            <cc-icon
              v-if="item.icon"
              :type="item.icon"
              size="12"
              :color="Number(active) >= index ? '#fff' : '#909399'"
            ></cc-icon>
            <cc-icon
              v-else
              type="checkmarkempty"
              :color="Number(active) >= index ? '#fff' : '#909399'"
            ></cc-icon>
          </div>
          <div v-else>
            <div v-if="item.icon">
              <cc-icon v-if="item.icon" :type="item.icon" size="12"></cc-icon>
            </div>
            <div v-else>{{ index + 1 }}</div>
          </div>
        </div>

        <div
          class="cc-steps-item-index-line"
          :class="{ 'cc-steps-item-index-line-vertical': vertical }"
        ></div>
      </div>
      <div
        class="cc-steps-item-name"
        :class="{ 'cc-steps-item-name-vertical': vertical }"
        :style="{ color: Number(active) >= index ? (item.activeColor ? item.activeColor : '#0081ff') : '' }"
      >{{ item.name }}</div>
      <div
        class="cc-steps-item-name cc-steps-item-content"
        :class="{ 'cc-steps-item-content-vertical': vertical }"
        :style="{ color: Number(active) >= index ? (item.activeColor ? item.activeColor : '#0081ff') : '' }"
        v-if="item.content"
      >{{ item.content }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

export interface StepsItem {
  name: string,
  icon?: string,
  activeColor?: string,
  content?: string,
}

let props = defineProps({
  // 当前激活项
  active: {
    type: [Number, String],
    default: 0
  },
  // 步骤条数据
  list: {
    type: Array as PropType<StepsItem[]>,
    required: true
  },
  // 以点的形式展现
  dot: {
    type: Boolean,
    default: false
  },
  // 是否是竖向
  vertical: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped lang="scss">
.cc-steps {
  display: flex;
  align-items: center;
  &-vertical {
    flex-direction: column;
    align-items: flex-start;
  }
  &-item {
    flex: 1;
    &-vertical {
      display: flex;
    }
    &-index {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      &-vertical {
        flex-direction: column;
      }
      &-dot {
        width: 8px;
        height: 8px;
        background: #909399;
        border-radius: 100%;
      }
      &-line {
        width: 50%;
        height: 1px;
        margin: 0 5px;
        background: #ebedf0;
        &-vertical {
          width: 1px !important;
          height: 20px !important;
          margin: 5px 0;
        }
      }
      &-num {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        border-radius: 100%;
        color: #fff;
      }
    }
    &-name {
      font-size: 12px;
      margin-top: 10px;
      position: relative;
      left: 6px;
      &-vertical {
        margin-top: 0;
        left: 10px;
      }
    }
    &-content {
      &-vertical {
        position: relative;
        top: 10px;
        left: -14px;
      }
    }
  }
}
</style>