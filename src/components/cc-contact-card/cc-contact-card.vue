<template>
  <div class="cc-contact-card" @click="handleClick">
    <div class="cc-contact-card-icon" v-if="type === 'add'">
      <cc-icon type="plusempty" color="#fff" size="24"></cc-icon>
    </div>
    <div v-else>
      <cc-icon type="person" size="18" style="margin-right: 15px;"></cc-icon>
    </div>
    <div class="cc-contact-card-content">
      <div v-if="type === 'add'">{{ addText }}</div>
      <div v-else style="color: #323233;">
        <div>姓名: {{ name }}</div>
        <div>电话: {{ tel }}</div>
      </div>
    </div>
    <div class="cc-contact-card-arrow" v-if="editable">
      <cc-icon type="arrowright" color="#969799"></cc-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue'

let props = defineProps({
  // 类型
  type: {
    type: String as PropType<'add' | 'edit'>,
    default: 'edit'
  },
  // 联系人姓名
  name: {
    type: String,
    default: ''
  },
  // 联系人手机号
  tel: {
    type: String,
    default: ''
  },
  // 添加时的文案提示
  addText: {
    type: String,
    default: '添加联系人'
  },
  // 是否可编辑
  editable: {
    type: Boolean,
    default: true
  }
})
let emits = defineEmits(['click'])

let handleClick = () => {
  if (!props.editable) return
  emits('click')
}
</script>

<style scoped lang="scss">
.cc-contact-card {
  display: flex;
  align-items: center;
  padding: 24px;
  position: relative;
  background: #fff;
  &::before {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: -webkit-repeating-linear-gradient(
      135deg,
      #ff6c6c 0,
      #ff6c6c 20%,
      transparent 0,
      transparent 25%,
      #1989fa 0,
      #1989fa 45%,
      transparent 0,
      transparent 50%
    );
    background: repeating-linear-gradient(
      -45deg,
      #ff6c6c 0,
      #ff6c6c 20%,
      transparent 0,
      transparent 25%,
      #1989fa 0,
      #1989fa 45%,
      transparent 0,
      transparent 50%
    );
    background-size: 80px;
    content: "";
  }
  &-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1989fa;
    border-radius: 5px;
    margin-right: 15px;
  }
  &-content {
    flex: 1;
    font-size: 14px;
    color: #323233;
  }
}
</style>