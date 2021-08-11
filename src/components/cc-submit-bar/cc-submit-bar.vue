<template>
  <div>
    <div class="tip" v-if="$slots.tip">
      <slot name="tip"></slot>
    </div>
    <div class="container flex a-center">
      <slot></slot>
      <div class="flex j-end a-center f-1">
        <div class="label">{{ label }}:</div>
        <div class="price flex a-center">
          <div class="currency">{{ currency }}</div>
          <div class="leftPrice">{{ leftPrice }}</div>
          <div class="rightPrice">.{{ rightPrice }}</div>
        </div>
        <div>
          <cc-button
            :loading="loading"
            :disabled='disabled'
            :color="buttonColor"
            round
            @click="submit"
          >
            {{ buttonText }}
          </cc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, onMounted } from 'vue'

let props = defineProps({
  // 价钱
  price: {
    type: Number,
    required: true
  },
  // 左侧文案
  label: {
    type: String,
    default: '合计'
  },
  // 按钮文字
  buttonText: {
    type: String,
    default: '提交订单'
  },
  // 按钮颜色
  buttonColor: {
    type: String,
    default: '#ee0a24'
  },
  // 货币符号
  currency: {
    type: String,
    default: '¥'
  },
  // 价格小数点后位数
  decimalLength: {
    type: [String, Number],
    default: '2'
  },
  // 是否禁用按钮
  disabled: {
    type: Boolean,
    default: false
  },
  // 是否显示加载中的按钮
  loading: {
    type: Boolean,
    default: false
  }
})
let emits = defineEmits(['submit'])


let leftPrice = ref<number>(0)
let rightPrice = ref<string>('')

let submit = () => {
  if (!props.disabled && !props.loading) {
    emits('submit')
  }
}
onMounted(() => {
  leftPrice.value = Math.floor(props.price / 100)
  rightPrice.value = String((props.price / 100).toFixed(props.decimalLength as number)).split('.')[1]
})
</script>

<style scoped lang="scss">
.w100 {
  width: 100%;
}
.f-1 {
  flex: 1;
}
.flex {
  display: flex;
}
.a-center {
  align-items: center;
}
.j-center {
  justify-content: center;
}
.j-between {
  justify-content: space-between;
}
.j-end {
  justify-content: flex-end;
}
.container {
  height: 50px;
  padding: 0 16px;
  font-size: 14px;
  position: relative;
  .price {
    margin: 0 5px;
    color: #ee0a24;
    .currency {
      font-size: 12px;
      position: relative;
      top: 1px;
    }
    .leftPrice {
      font-size: 20px;
      font-weight: 500;
    }
    .rightPrice {
      font-size: 12px;
      position: relative;
      top: 1px;
    }
  }
}
.tip {
  padding: 8px 12px;
  color: #f56723;
  font-size: 12px;
  line-height: 1.5;
  background-color: #fff7cc;
}
.disable {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>