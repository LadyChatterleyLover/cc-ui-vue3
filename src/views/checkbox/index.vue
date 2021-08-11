<template>
  <div>
    <div>普通多选框</div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-checkbox @change="handleChange" v-model:checked="check1" :option="item1"></cc-checkbox>
      </div>
      <div>当前选中值: {{ check1 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-checkbox v-model:checked="check2" :option="item2"></cc-checkbox>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">方型单选框</div>
      <div class="demo-item">
        <cc-checkbox v-model:checked="check3" :option="item3"></cc-checkbox>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <cc-checkbox v-model:checked="check4" :option="item4"></cc-checkbox>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义图标</div>
      <div class="demo-item">
        <cc-checkbox v-model:checked="check5" :option="item5"></cc-checkbox>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">文本禁用点击</div>
      <div class="demo-item">
        <cc-checkbox v-model:checked="check6" :option="item6"></cc-checkbox>
      </div>
    </div>

    <div>多选框组</div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-checkbox-group v-model:checked="checked1" :list="list1"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked1 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">横向排列</div>
      <div class="demo-item">
        <cc-checkbox-group vertical v-model:checked="checked2" :list="list1"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked2 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-checkbox-group v-model:checked="checked3" :list="list2"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked3 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">方型单选框</div>
      <div class="demo-item">
        <cc-checkbox-group v-model:checked="checked4" :list="list3"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked4 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <cc-checkbox-group v-model:checked="checked5" :list="list4"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked5 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义大小</div>
      <div class="demo-item">
        <cc-checkbox-group v-model:checked="checked6" :list="list5"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked6 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义图标</div>
      <div class="demo-item">
        <cc-checkbox-group v-model:checked="checked7" :list="list6"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked7 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">文本禁用点击</div>
      <div class="demo-item">
        <cc-checkbox-group v-model:checked="checked8" :list="list7"></cc-checkbox-group>
      </div>
      <div>当前选中值: {{ checked8 }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { CheckboxOption } from '@/components/cc-checkbox/cc-checkbox.vue'
import { CheckboxItem } from '@/components/cc-checkbox/cc-checkbox-group.vue'
import { ref } from 'vue'

let list1 = ref<CheckboxItem[]>([
  {
    label: '选项1',
    value: 1
  },
  {
    label: '选项2',
    value: 2
  },
  {
    label: '选项3',
    value: 3
  },
  {
    label: '选项4',
    value: 4
  }
])
let list2 = ref<CheckboxItem[]>([
  {
    label: '选项1',
    value: 1,
    disabled: true
  },
  {
    label: '选项2',
    value: 2,
    disabled: true
  },
  {
    label: '选项3',
    value: 3,
  },
])
let list3 = ref<CheckboxItem[]>([
    {
      label: '选项1',
      value: 1,
      round: false
    },
    {
      label: '选项2',
      value: 2,
      round: false
    },
    {
      label: '选项3',
      value: 3,
      round: false
    }
])
let list4 = ref<CheckboxItem[]>([
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
  },
  {
    label: '选项3',
    value: 3,
    incheckedColor: '#645367',
    checkedColor: '#ee0a24'
  }
])
let list5 = ref<CheckboxItem[]>([
  {
    label: '选项1',
    value: 1,
    size: '30'
  },
  {
    label: '选项2',
    value: 2,
    size: '30',
    round: false
  },
  {
    label: '选项3',
    value: 3,
    size: '30',
    round: false
  },
  {
    label: '选项4',
    value: 4,
    size: '30'
  }
])
let list6 = ref<CheckboxItem[]>([
  {
    label: '选项1',
    value: 1,
    icon: 'person'
  },
  {
    label: '选项2',
    value: 2,
    icon: 'search'
  },
  {
    label: '选项3',
    value: 3,
    icon: 'chat'
  }
])
let list7 = ref<CheckboxItem[]>([
  {
    label: '选项1',
    value: 1,
    labelDisabled: true
  },
  {
    label: '选项2',
    value: 2,
    labelDisabled: true
  },
  {
    label: '选项3',
    value: 3,
    labelDisabled: true
  }
])


let item1 = ref<CheckboxOption>({
  label: '选项1'
})
let item2 = ref<CheckboxOption>({
  label: '选项1',
  disabled: true
})
let item3 = ref<CheckboxOption>({
  label: '选项1',
  round: false
})
let item4 = ref<CheckboxOption>({
  label: '选项1',
  incheckedColor: '#39b54a',
  checkedColor: '#ee0a24'
})
let item5 = ref<CheckboxOption>({
  label: '选项1',
  icon: 'person'
})
let item6= ref<CheckboxOption>({
  label: '选项1',
  labelDisabled: true
})
let check1 = ref<boolean>(false)
let check2 = ref<boolean>(true)
let check3 = ref<boolean>(false)
let check4 = ref<boolean>(false)
let check5 = ref<boolean>(false)
let check6 = ref<boolean>(false)
let check7 = ref<boolean>(false)

let handleChange = (val: boolean) => {
  console.log(val)
}



let checked1 = ref<number[]>([1, 2])
let checked2 = ref<number[]>([1, 3])
let checked3 = ref<number[]>([1, 2])
let checked4 = ref<number[]>([])
let checked5 = ref<number[]>([])
let checked6 = ref<number[]>([])
let checked7 = ref<number[]>([])
let checked8 = ref<number[]>([])
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