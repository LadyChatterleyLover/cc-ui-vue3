<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-radio @change='onChange' v-model:value='value1' :list='list1'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>

    <div class="demo">
      <div class="demo-title">横向排列</div>
      <div class="demo-item">
        <cc-radio vertical v-model:value='value1' :list='list1'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-radio v-model:value='value2' :list='list2'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>

    <div class="demo">
      <div class="demo-title">方型单选框</div>
      <div class="demo-item">
        <cc-radio v-model:value='value1' :list='list3'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <cc-radio v-model:value='value1' :list='list4'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义大小</div>
      <div class="demo-item">
        <cc-radio v-model:value='value1' :list='list5'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义图标</div>
      <div class="demo-item">
        <cc-radio v-model:value='value1' :list='list6'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>

    <div class="demo">
      <div class="demo-title">文本禁用点击</div>
      <div class="demo-item">
        <cc-radio v-model:value='value1' :list='list7'></cc-radio>
      </div>
      <div>当前选中值: {{value1}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RadioItem } from '@/components/cc-radio/cc-radio.vue'
import { ref } from 'vue'

let list1 = ref<RadioItem[]>([
  {
    label: '选项1',
    value: 1
  },
  {
    label: '选项2',
    value: 2
  }
])
let list2 = ref<RadioItem[]>([
  {
    label: '选项1',
    value: 1,
    disabled: true
  },
  {
    label: '选项2',
    value: 2,
    disabled: true
  }
])
let list3 = ref<RadioItem[]>([
  {
    label: '选项1',
    value: 1,
    round: false
  },
  {
    label: '选项2',
    value: 2,
    round: false
  }
])
let list4 = ref<RadioItem[]>([
  {
    label: '选项1',
    value: 1,
    incheckedColor: '#39b54a',
    checkedColor: '#ee0a24'
  },
  {
    label: '选项2',
    value: 2,
    incheckedColor: '#39b54a',
    checkedColor: '#ee0a24'
  }
])
let list5 = ref<RadioItem[]>([
  {
    label: '选项1',
    value: 1,
    size: '30'
  },
  {
    label: '选项2',
    value: 2,
    size: '30'
  }
])
let list6 = ref<RadioItem[]>([
  {
    label: '选项1',
    value: 1,
    icon: 'person'
  },
  {
    label: '选项2',
    value: 2,
    icon: 'search'
  }
])
let list7 = ref<RadioItem[]>([
  {
    label: '选项1',
    value: 1,
    labelDisabled: true
  },
  {
    label: '选项2',
    value: 2,
    labelDisabled: true
  }
])


let value1 = ref<number>(1)
let value2 = ref<number>(1)


let onChange = (val: any) => {
  console.log(val)
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(20)};
  padding: #{topx(10)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>