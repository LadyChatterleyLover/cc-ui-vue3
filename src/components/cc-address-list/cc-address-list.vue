<template>
  <div class="cc-address-list">
    <div
      class="cc-address-list-item"
      @click="clickItem(item, index)"
      v-for="(item, index) in addressList"
      :key="item.id"
    >
      <div class="cc-address-list-item-content">
        <div
          class="cc-address-list-item-content-radio"
          v-if="item.radioList && item.radioList.length"
        >
          <cc-radio v-model:value="currentValue" :list="item.radioList"></cc-radio>
        </div>
        <div class="cc-address-list-item-content-info">
          <div class="cc-address-list-item-content-info-top">
            <div>{{ item.name }}</div>
            <div style="margin-left: 8px;">{{ item.tel }}</div>
            <div v-if="currentIndex === index" style="margin-left: 8px;">
              <cc-tag round type="error">{{ defaultTagText }}</cc-tag>
            </div>
          </div>
          <div class="cc-address-list-item-content-info-address">{{ item.address }}</div>
        </div>
        <div class="cc-address-list-item-edit" @click.stop="edit(item, index)">
          <cc-icon type="paperclip" color="#969799"></cc-icon>
        </div>
      </div>
    </div>

    <div class="cc-address-list-disabled-text">{{ disabledText }}</div>

    <div
      class="cc-address-list-item cc-address-list-item-disabled"
      @click="clickDisabledItem(item, index)"
      v-for="(item, index) in disabledList"
      :key="item.id"
    >
      <div class="cc-address-list-item-content">
        <div class="cc-address-list-item-content-info">
          <div class="cc-address-list-item-content-info-top">
            <div>{{ item.name }}</div>
            <div style="margin-left: 8px;">{{ item.tel }}</div>
          </div>
          <div class="cc-address-list-item-content-info-address">{{ item.address }}</div>
        </div>
        <div class="cc-address-list-item-edit" @click.stop="editDisabled(item, index)">
          <cc-icon type="paperclip" color="#969799"></cc-icon>
        </div>
      </div>
    </div>

    <div class="cc-address-list-btn" @click="add">
      <cc-button :color="addButtonColor" round block>{{ addButtonText }}</cc-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, onMounted } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

export interface AddressListItemRadioList {
  value: string,
  checkedColor: string
}

export interface AddressListItem {
  id: string,
  name: string,
  tel: string,
  address: string,
  isDefault?: boolean,
  radioList?: AddressListItemRadioList[]
}


let props = defineProps({
  // 当前选中地址
  value: {
    type: [Number, String],
    default: ''
  },
  // 地址列表
  list: {
    type: Array as PropType<AddressListItem[]>,
    default: () => []
  },
  // 不可配送地址列表
  disabledList: {
    type: Array as PropType<AddressListItem[]>,
    default: () => []
  },
  // 不可配送提示文案
  disabledText: {
    type: String,
    default: ''
  },
  // 是否允许切换地址
  switchable: {
    type: Boolean,
    default: true
  },
  // 底部按钮文字
  addButtonText: {
    type: String,
    default: '新增地址'
  },
  addButtonColor: {
    type: String,
    default: '#e54d42'
  },
  // 默认地址标签文字
  defaultTagText: {
    type: String,
    default: ''
  }
})

let emits = defineEmits(['click', 'select', 'edit', 'add', 'edit-disabled', 'select-disabled'])

let addressList = ref<AddressListItem[]>(cloneDeep(props.list))
let currentIndex = ref<number>(-1)
let currentValue = ref<string>('')


let clickItem = (item: AddressListItem, index: number) => {
  emits('click', { item, index })
  currentValue.value = item.id
  if (currentValue.value === item.id) {
    emits('select', { item, index })
  }
}
let edit = (item: AddressListItem, index: number) => {
  emits('edit', { item, index })
}
let add = () => {
  emits('add')
}
let editDisabled = (item: AddressListItem, index: number) => {
  emits('edit-disabled', { item, index })
}
let clickDisabledItem = (item: AddressListItem, index: number) => {
  emits('click', { item, index })
  emits('select-disabled', { item, index })
}

onMounted(() => {
  addressList.value.map((item: AddressListItem, index: number)=> {
    item.radioList = [{value: item.id, checkedColor: '#e54d42' }]
    if (props.value === item.id) {
      currentValue.value = item.id
      currentIndex.value = index
    }
  })
})
</script>

<style scoped lang="scss">
.cc-address-list {
  &-item {
    position: relative;
    padding: 12px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 12px;
    border-radius: 8px;
    &:last-child {
      margin-bottom: 0;
    }
    &-disabled {
      opacity: 0.4;
    }
    &-edit {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 999;
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-right: 40px;
      &-info {
        flex: 1;
        &-top {
          display: flex;
          align-items: center;
        }
        &-address {
          font-size: 12px;
          color: #323233;
          margin-top: 10px;
        }
      }
    }
  }
  &-disabled-text {
    padding: 20px 0 16px;
    color: #969799;
    font-size: 14px;
  }
  &-btn {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 100%;
    padding: 10px 16px;
    background: #fff;
  }
}
</style>