<template>
  <div class="demo">
    <div class="demo-content">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-goods-action :options="options1" :buttons="buttons1"></cc-goods-action>
      </div>
    </div>

    <div class="demo-content">
      <div class="demo-title">徽标</div>
      <div class="demo-item">
        <cc-goods-action :options="options2" :buttons="buttons2"></cc-goods-action>
      </div>
    </div>

    <div class="demo-content">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <cc-goods-action :options="options3" :buttons="buttons3"></cc-goods-action>
      </div>
    </div>

    <div class="demo-content">
      <div class="demo-title">自定义按钮颜色</div>
      <div class="demo-item">
        <cc-goods-action :options="options4" :buttons="buttons4"></cc-goods-action>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let options1 = [
  {
    text: '客服',
    icon: 'chat'
  },
  {
    text: '收藏',
    icon: 'heart'
  },
  {
    text: '购物车',
    icon: 'cart'
  }
]
let buttons1 = [
  {
    text: '加入购物车'
  }
]
let options2 = [
  {
    text: '客服',
    icon: 'chat',
    dot: true
  },
  {
    text: '收藏',
    icon: 'heart'
  },
  {
    text: '购物车',
    icon: 'cart',
    info: '10'
  }
]
let buttons2 = [
  {
    text: '加入购物车'
  },
  {
    text: '立即购买'
  }
]
let options3 = [
  {
    text: '客服',
    icon: 'chat',
    iconColor: 'orange'
  },
  {
    text: '购物车',
    icon: 'cart',
    info: '3',
    iconColor: '#258369',
    infoColor: '#abc123'
  }
]
let buttons3 = [
  {
    text: '加入购物车'
  },
  {
    text: '立即购买'
  }
]
let options4 = [
  {
    text: '客服',
    icon: 'chat'
  },
  {
    text: '收藏',
    icon: 'heart'
  },
  {
    text: '购物车',
    icon: 'cart'
  }
]
let buttons4 = [
  {
    text: '加入购物车',
    background: 'rgb(190, 153, 255)'
  },
  {
    text: '立即购买',
    background: 'rgb(114, 50, 221)'
  }
]
</script>

<style scoped lang="scss">
.demo {
  background: #f7f7f7;
  height: 100vh;
  .demo-content {
    margin-bottom: 20px;
    padding: 10px;
  }
  &-title {
    padding: 10px;
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
    background: #fff;
  }
}
</style>