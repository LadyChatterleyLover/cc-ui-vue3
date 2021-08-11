<template>
  <div class="cc-field cc-filed-cell-left-icon" :class="{ 'cc-field-start': !$slots.rightIcon }">
    <cc-cell :border="border" :icon="leftIcon">
      <template #title>
        <div
          v-if="label"
          @click="clickLeft"
          class="cc-field-label"
          :class="{ 'cc-field-label-disabled': disabled }"
        >
          <div v-if="required" class="cc-field-label-required">*</div>
          <div>{{ label }}</div>
        </div>
      </template>
      <template #value>
        <div style="width: 100%;display: flex;align-items: center;">
          <textarea
            v-model="inputValue"
            class="cc-field-input"
            v-if="type === 'textarea'"
            :style="{ height: 24 * Number(rows) + 'px' }"
            :maxlength="maxlength"
          ></textarea>
          <input
            v-else
            class="cc-field-input"
            :class="{
              'cc-field-input-disabled': disabled,
              'cc-field-input-error': error
            }"
            v-model="inputValue"
            :placeholder="placeholder"
            :type="type"
            :readonly="readonly"
            :disabled="disabled"
            :maxlength="Number(maxlength)"
            @input="handleInput"
            @change="handleChange"
            @focus="handleFocus"
            @blur="handleBlur"
            @click="handleClick"
          />
          <div style="width: 100%;" v-if="$slots.button">
            <slot name="button"></slot>
          </div>
        </div>
      </template>
      <template #right-icon>
        <div style="z-index: 999;">
          <cc-icon @click="clear" v-if="inputValue" type="close" size="16" color="#969799"></cc-icon>
          <cc-icon @click="clickRight" :type="rightIcon" size="16" color="#969799"></cc-icon>
        </div>
      </template>
    </cc-cell>
    <div class="cc-field-error-message">{{ errorMessage }}</div>
    <div
      v-if="maxlength && showWordLimit"
      class="cc-field-word-limit"
    >{{ inputValue.length }} / {{ maxlength }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, PropType, getCurrentInstance } from 'vue'


type FieldTypeProps = 'text' | 'tel' | 'password' | 'number' | 'textarea'

let props = defineProps({
  // 输入框值
  value: {
    type: String,
    default: ''
  },
  // 左侧文字
  label: {
    type: String,
    default: ''
  },
  // 输入框占位符
  placeholder: {
    type: String,
    default: '请输入'
  },
  // 是否有边框
  border: {
    type: Boolean,
    default: true
  },
  // 是否可清除
  clearable: {
    type: Boolean,
    default: false
  },
  // 输入框类型
  type: {
    type: String as PropType<FieldTypeProps>,
    default: 'text'
  },
  // 输入框只读
  readonly: {
    type: Boolean,
    default: false
  },
  // 输入框禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 左侧图标
  leftIcon: {
    type: String,
    default: ''
  },
  // 右侧图标
  rightIcon: {
    type: String,
    default: ''
  },
  // 是否必填
  required: {
    type: Boolean,
    default: false
  },
  // 是否将输入内容标红
  error: {
    type: Boolean,
    default: false
  },
  // 底部错误提示文案，为空时不展示
  errorMessage: {
    type: String,
    default: ''
  },
  // 输入最大长度
  maxlength: {
    type: [String, Number],
    default: -1
  },
  // 是否显示字数统计，需要设置maxlength属性
  showWordLimit: {
    type: Boolean,
    default: false
  },
  // 文本域高度
  rows: {
    type: [String, Number],
    default: 1
  },
  // 输入时是否触发表单的校验
  validateEvent: {
    type: Boolean,
    default: true
  }
})
let emits = defineEmits(['update:value', 'clicLeft', 'clickRight', 'clear', 'click', 'change', 'input', 'focus', 'blur'])
let inputValue = ref<string>(props.value)
let instance = getCurrentInstance()


watch(() => inputValue.value, val => {
  emits('update:value', val)
})
watch(() => props.value, val => {
  inputValue.value = val
})

// 事件处理
let clear = (e: MouseEvent) => {
  inputValue.value = ''
  emits('clear', e)
}
let handleInput = () => {
  emits('input', inputValue.value)
  let ctx = (instance!.parent! as any).ctx
  if (props.validateEvent) {
    // 父组件分发事件
    ctx.formItemMitt.emit('validate-change', inputValue.value)
  }
}
let handleChange = () => {
  emits('change', inputValue.value)
}
let handleFocus = (e: FocusEvent) => {
  emits('focus', e)
}
let handleClick = (e: MouseEvent) => {
  emits('click', e)
}
let handleBlur = (e: FocusEvent) => {
  let ctx = (instance!.parent! as any).ctx
  if (props.validateEvent) {
    // 父组件分发事件
    ctx.formItemMitt.emit('validate-blur', inputValue.value)
  }
  emits('blur', e)
}
let clickLeft = (e: MouseEvent) => {
  emits('clicLeft', e)
}
let clickRight = (e: MouseEvent) => {
  emits('clickRight', e)
}
</script>

<style lang="scss" >
.cc-field {
  position: relative;
  width: 100%;
  textarea {
    position: relative;
    top: 4px;
  }
  &-icon {
    position: relative;
    top: 2px;
  }
  &-error-message {
    position: absolute;
    color: #ee0a24;
    font-size: 12px;
    bottom: -20px;
    left: 82px;
  }
  &-word-limit {
    position: absolute;
    color: #646566;
    font-size: 12px;
    bottom: -18px;
    right: 0;
  }
  &-start {
    .cc-cell-value {
      justify-content: flex-start;
    }
  }
  &-label {
    min-width: 54px;
    margin-right: 12px;
    position: relative;
    top: 2px;
    &-disabled {
      color: #c8c9cc;
    }
    &-required {
      position: absolute;
      left: -8px;
      top: -2px;
      color: #ee0a24;
      font-size: 14px;
    }
  }
  &-input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding: 0;
    color: #323233;
    line-height: inherit;
    text-align: left;
    border: 0;
    resize: none;
    outline: none;
    &-error {
      color: #ee0a24;
    }
    &-disabled {
      color: #c8c9cc;
      cursor: not-allowed;
      opacity: 1;
    }
  }
}
</style>