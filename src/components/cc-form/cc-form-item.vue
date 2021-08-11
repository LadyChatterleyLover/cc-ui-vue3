<template>
  <div class="cc-form-item">
    <div
      class="cc-form-item-label"
      v-if="label"
      :style="{ width: labelWidth + 'px', justifyContent: lebelAlignValue }"
    >
      <div class="cc-form-item-label-required" v-if="required || isRequired">*</div>
      <div class="cc-form-item-label-icon" v-if="leftIcon">
        <cc-icon :type="leftIcon" size="12"></cc-icon>
      </div>
      <div class="cc-form-item-label-text">{{ label }}</div>
    </div>
    <div class="cc-form-item-content" :style="{ justifyContent: contentAlignValue }">
      <slot></slot>
    </div>
    <div class="cc-form-item-error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, inject, PropType, onMounted, getCurrentInstance } from 'vue'
import mitt from 'mitt'
import Schema from 'async-validator'
import {RuleItem } from './types'


let formItemMitt = mitt()

let form: any = inject('form')
let rules = ref<RuleItem[]>([])

let instance = getCurrentInstance()
let props = defineProps({
  // 验证表单字段
  prop: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  // 左侧文字
  label: {
    type: String,
    default: ''
  },
  // 左侧图标
  leftIcon: {
    type: String,
    default: ''
  },
  // 左侧内容宽度
  labelWidth: {
    type: [String, Number],
    default: 80
  },
  // label对齐方式
  labelAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  },
  // label对齐方式
  contentAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  }
})

// 错误信息
let error = ref<string>('')
// 避免点击重置按钮再次调用验证方法
let initValue = ref<any>('')

// label对齐方式
let lebelAlignValue = computed(() => {
  if (props.labelAlign === 'left') return 'flex-start'
  else if (props.labelAlign === 'center') return 'center'
  else return 'flex-end'
})
// 内容对齐方式
let contentAlignValue = computed(() => {
  if (props.contentAlign === 'left') return 'flex-start'
  else if (props.contentAlign === 'center') return 'center'
  else return 'flex-end'
})

// 验证方法
let validate = () => {
  // 当前表单值
  let value = form.ctx.model[props.prop]
  // 当前表单验证规则
  let rules = form.ctx.rules[props.prop]
  // 表单验证对象
  let validateAttr = {
    [props.prop]: rules
  }
  let schema = new Schema(validateAttr)
  if (props.prop) {
    return new Promise(reslove => {
      schema.validate({ [props.prop]: value }, { firstFields: true }, (errors) => {
        if (errors && errors.length) {
          error.value = errors[0].message
          reslove(false)
        } else {
          error.value = ''
          reslove(true)
        }
      })
    })
  }
}
// 初始化验证规则
let initRules = () => {
  rules.value = form.ctx.rules[props.prop]
  if (rules.value && rules.value.length) {
    // 判断trigger的类型
    rules.value.map((item: RuleItem) => {
      if (Array.isArray(item.trigger)) {
        if (item.trigger.includes('blur')) formItemMitt.on('validate-blur', validate)
        if (item.trigger.includes('change')) {
          formItemMitt.on('validate-change', validate)
        }
      } else {
        if (item.trigger === 'blur') {
          formItemMitt.on('validate-blur', validate)
        }
        if (item.trigger === 'change') {
          formItemMitt.on('validate-change', validate)
        }
      }
    })
  }
}
// 重置表单值
let resetField = () => {
  form.ctx.model[props.prop] = initValue.value
  error.value = ''
}

let isRequired = computed(() => {
  if (rules.value && rules.value.length) {
    return rules.value.find((rule: RuleItem) => rule.required)
  } else {
    return false
  }
})

onMounted(() => {
  initRules()
  if (props.prop) initValue.value = form.ctx.model[props.prop]
  if (props.prop) (instance!.parent! as any).ctx.formMitt.emit('formFieldAdd', instance)
})
</script>

<style lang="scss">
.cc-form-item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #303133;
  border-bottom: 1px solid #ebedf0;
  padding: 8px;
  min-height: 50px;
  .cc-cell {
    padding: 4px 10px;
  }
  &-label {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 12px;
    &-icon {
      margin-right: 3px;
    }
    &-required {
      color: red;
      position: absolute;
      left: 8px;
      top: 10px;
    }
  }
  &-content {
    flex: 1;
    display: flex;
    align-items: center;
  }
  &-error {
    color: #ee0a24;
    position: absolute;
    font-size: 12px;
    bottom: 0;
    left: 26%;
    margin-top: 10px;
  }
}
</style>