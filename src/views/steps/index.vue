<template>
  <div>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-steps :list="list1" :active="active"></cc-steps>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">展示点</div>
      <div class="demo-item">
        <cc-steps :list="list1" dot :active="active"></cc-steps>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义图标</div>
      <div class="demo-item">
        <cc-steps :list="list2" :active="active"></cc-steps>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <cc-steps :list="list3" :active="active"></cc-steps>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">描述信息</div>
      <div class="demo-item">
        <cc-steps :list="list4" :active="active"></cc-steps>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">竖向</div>
      <div class="demo-item">
        <cc-steps :list="list4" :active="active" vertical></cc-steps>
      </div>
    </div>

    <div class="demo-btn">
      <div class="demo-btn-item" @click="pre">
        <cc-button round type="primary" size="small">上一步</cc-button>
      </div>
      <div class="demo-btn-item" @click="next">
        <cc-button round type="error" size="small">下一步</cc-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let active = ref<number>(0)
let list1 = [
  {
    name: '下单'
  },
  {
    name: '出库'
  },
  {
    name: '运输'
  },
  {
    name: '签收'
  }
]
let list2 = [
  {
    name: '下单',
    icon: 'chat'
  },
  {
    name: '出库',
    icon: 'search'
  },
  {
    name: '运输',
    icon: 'person'
  },
  {
    name: '签收',
    icon: 'heart'
  }
]
let list3 = [
  {
    name: '下单',
    activeColor: '#fa2c19'
  },
  {
    name: '出库',
    activeColor: '#fa2c19'
  },
  {
    name: '运输',
    activeColor: '#fa2c19'
  },
  {
    name: '签收',
    activeColor: '#fa2c19'
  }
]
let list4 = [
  {
    name: '下单',
    content: '描述信息'
  },
  {
    name: '出库',
    content: '描述信息'
  },
  {
    name: '运输',
    content: '描述信息'
  },
  {
    name: '签收',
    content: '描述信息'
  }
]

let pre = () => {
  active.value--
  if (active.value === 0) active.value = 0
}
let next = () => {
  active.value++
  if (active.value === 3) active.value = 3
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: 20px;
  &-title {
    padding: 10px;
  }
  &-item {
    margin-left: 2px;
    view {
      margin-left: 15px;
    }
  }
  &-btn {
    display: flex;
    align-items: center;
    &-item {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>