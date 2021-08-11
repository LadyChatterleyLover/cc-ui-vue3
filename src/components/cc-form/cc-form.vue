<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose, getCurrentInstance, provide, PropType } from 'vue'
import { RuleItem, Callback } from './types'
import mitt from 'mitt'


export interface Rules {
  [key: string]: RuleItem[]
}

let formMitt = mitt()
let props = defineProps({
  model: {
    type: Object,
    required: true
  },
  rules: {
    type: Object as PropType<Rules>,
    required: true
  }
})

// 派发数据给子组件
let instance = getCurrentInstance()
provide('form', instance)


let fields = ref<any[]>([])
formMitt.on('formFieldAdd', field => {
  fields.value.push(field)
})

// 验证方法
let validate = (callback: Callback) => {
  // 所有需要验证表单项的结果
  if (fields.value && fields.value.length) {
    let tasks = fields.value.map((item: any) => item.ctx.validate())
    Promise.all(tasks)
      .then(res => {
        let result = res.every(item => item === true)
        callback(result)
      })
      .catch(() => callback(false))
  }
}

// 重置表单值
let resetFields = () => {
  if (fields.value && fields.value.length) {
    fields.value.map((item: any) => {
      item.ctx.resetField()
    })
  }
}

defineExpose({
  validate,
  resetFields
})
</script>

<style scoped lang="scss">
</style>