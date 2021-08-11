<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-checker :list="list1" v-model:value="value1" @change="handleChange"></cc-checker>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">多选</div>
      <div class="demo-item">
        <cc-checker :list="list1" v-model:value="value2" multiple @change="handleChange"></cc-checker>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">圆角类型</div>
      <div class="demo-item">
        <cc-checker :list="list2" v-model:value="value1"></cc-checker>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">只读状态</div>
      <div class="demo-item">
        <cc-checker :list="list3" v-model:value="value1"></cc-checker>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-checker :list="list4" v-model:value="value1"></cc-checker>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">徽标</div>
      <div class="demo-item">
        <cc-checker :list="list5" v-model:value="value1"></cc-checker>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

let value1 = ref<number>(0)
let value2 = ref<number[]>([1, 2])
let list1 = [
  {
    label: '彷徨',
    value: 0
  },
  {
    label: '呐喊',
    value: 1
  },
  {
    label: '动物凶猛',
    value: 2
  }
]
let list2 = [
  {
    label: '彷徨',
    value: 0,
    round: true
  },
  {
    label: '呐喊',
    value: 1,
    round: true
  },
  {
    label: '动物凶猛',
    value: 2,
    round: true
  }
]
let list3 = [
  {
    label: '彷徨',
    value: 0,
    readonly: true
  },
  {
    label: '呐喊',
    value: 1,
    readonly: true
  },
  {
    label: '动物凶猛',
    value: 2,
    readonly: true
  }
]
let list4 = [
  {
    label: '彷徨',
    value: 0,
    disabled: true
  },
  {
    label: '呐喊',
    value: 1,
    disabled: true
  },
  {
    label: '动物凶猛',
    value: 2,
    disabled: true
  }
]
let list5 = [
  {
    label: '彷徨',
    value: 0,
    info: '99'
  },
  {
    label: '呐喊',
    value: 1,
    disabled: true
  },
  {
    label: '动物凶猛',
    value: 2,
    info: 'ok',
    round: true
  }
]

let handleChange = (val: any) => {
  console.log(val)
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: 20px;
  padding: 10px;
  &-title {
    padding: 10px;
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>