<template>
  <div class="cc-contact-list">
    <div
      class="cc-contact-list-item"
      :class="{ 'cc-contact-list-item-disabled': item.disabled }"
      v-for="(item, index) in contactList"
      :key="item.id"
      @click="clickItem(item, index)"
    >
      <div class="cc-contact-list-item-wrap">
        <div class="cc-contact-list-item-edit" @click.stop="edit(item, index)">
          <cc-icon type="paperclip" color="#969799"></cc-icon>
        </div>
        <div class="cc-contact-list-item-wrap-name">{{ item.name }},</div>
        <div class="cc-contact-list-item-wrap-tel">{{ item.tel }}</div>
        <div v-if="item.isDefault">
          <cc-tag type="error" round>{{ defaultTagText }}</cc-tag>
        </div>
      </div>
      <div class="cc-contact-list-check" v-if="item.radioList">
        <cc-radio v-model:value="currentValue" :list="item.radioList"></cc-radio>
      </div>
    </div>
    <div class="cc-contact-list-button" @click="add">
      <cc-button round block :color="addButtonColor">{{ addText }}</cc-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, PropType, onMounted } from 'vue'
import cloneDeep from 'lodash/cloneDeep'

interface ContactListItemRadioList {
  value: string,
  checkedColor: string,
  disabled?: boolean
}

export interface ContactListItem {
  id: string,
  name: string,
  tel: string,
  isDefault?: boolean,
  disabled?: boolean,
  checked?: boolean,
  radioList?: ContactListItemRadioList[]
}

let props = defineProps({
  // 当前选中联系人的 id
  value: {
    type: [Number, String],
    default: ''
  },
  // 联系人列表
  list: {
    type: Array as PropType<ContactListItem[]>,
    required: true
  },
  // 添加按钮文案
  addText: {
    type: String,
    default: '新建联系人'
  },
  // 添加按钮颜色
  addButtonColor: {
    type: String,
    default: '#ee0a24'
  },
  // 默认联系人标签文案
  defaultTagText: {
    type: String,
    default: '默认'
  }
})
let emits = defineEmits(['select', 'edit', 'add'])

let contactList = ref<ContactListItem[]>(cloneDeep(props.list))
let currentValue = ref<string>('')
let currentIndex = ref<number>(0)

let init = () => {
  contactList.value.map((item: ContactListItem, index: number) => {
    item.checked = false
    if (item.disabled) item.radioList = [{ value: item.id, checkedColor: '#e54d42', disabled: true }]
    else item.radioList = [{ value: item.id, checkedColor: '#e54d42' }]

    if (props.value === item.id) {
      currentIndex.value = index
      currentValue.value = item.id
      item.checked = true
    }
  })
}

let clickItem = (item: ContactListItem, index: number) => {
  if (item.disabled) return
  currentValue.value = item.id
  emits('select', { item, index })
}

let edit = (item: ContactListItem, index: number) => {
  if (item.disabled) return
  emits('edit', { item, index })
}
let add = () => {
  emits('add')
}
onMounted(() => {
  init()
})
</script>

<style scoped lang="scss">
.cc-contact-list {
  background: #fff;
  &-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    &-disabled {
      opacity: 0.6;
    }
    &-wrap {
      display: flex;
      align-items: center;
      &-name {
        margin: 0 15px;
      }
      &-tel {
        margin-right: 15px;
      }
    }
  }
  &-button {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 8px 15px;
  }
}
</style>