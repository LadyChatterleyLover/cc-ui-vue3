<template>
  <div style="background: #F7F8FA;">
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-tabbar :list='list1' @change="handleChange"></cc-tabbar>
      </div>
    </div>

    <!-- <div class="demo">
      <div class="demo-title demo-title-fixed">固定在底部</div>
      <div class="demo-item">
        <cc-tabbar :list='list1' fixed></cc-tabbar>
      </div>
    </div> -->

    <div class="demo">
      <div class="demo-title">徽标提示</div>
      <div class="demo-item">
        <cc-tabbar :list='list2'></cc-tabbar>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义颜色</div>
      <div class="demo-item">
        <cc-tabbar :list='list1' active-color="#ee0a24" inactive-color="#000"></cc-tabbar>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义背景颜色</div>
      <div class="demo-item">
        <cc-tabbar :list='list1' bgColor='#ddd'></cc-tabbar>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">路由跳转</div>
      <div class="demo-item">
        <cc-tabbar :list='list3' router></cc-tabbar>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">中间凸起按钮</div>
      <div class="demo-item">
        <cc-tabbar :list='list4'>
          <template #plus='{item}'>
            <img width="37" height="37" :src="item.active ? 'https://cdn.uviewui.com/uview/common/min_button_select.png' : 'https://cdn.uviewui.com/uview/common/min_button.png'" />
          </template>
        </cc-tabbar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TabbarListItem } from "@/components/cc-tabbar/cc-tabbar.vue"

let list1: TabbarListItem[] = [
  {
    text: '首页',
    icon: 'home'
  },
  {
    text: '分类',
    icon: 'bars'
  },
  {
    text: '购物车',
    icon: 'cart'
  },
  {
    text: '我的',
    icon: 'person'
  }
]
let list2: TabbarListItem[] = [
  {
    text: '首页',
    icon: 'home',
    dot: true
  },
  {
    text: '分类',
    icon: 'bars',
    count: 1
  },
  {
    text: '购物车',
    icon: 'cart',
    dot: true
  },
  {
    text: '我的',
    icon: 'person',
    count: 22
  }
]
let list3: TabbarListItem[] = [
  {
    text: '首页',
    icon: 'home',
    url: '/tabbar'
  },
  {
    text: '分类',
    icon: 'bars',
    url: '/category'
  },
  {
    text: '购物车',
    icon: 'cart',
    url: '/cart'
  },
  {
    text: '我的',
    icon: 'person',
    url: '/my'
  }
]
let list4: TabbarListItem[] = [
  {
    text: '首页',
    icon: 'home',
    url: '/tabbar'
  },
  {
    text: '分类',
    icon: 'bars',
    url: '/category'
  },
  {
    text: '发布',
    slots: 'plus',
    midButton: true,
  },
  {
    text: '购物车',
    icon: 'cart',
    url: '/cart'
  },
  {
    text: '我的',
    icon: 'person',
    url: '/my'
  }
]

let handleChange = ({item, index}: {item: TabbarListItem, index: number}) => {
  console.log(item, index)
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(20)};

  &-title {
    padding: #{topx(10)};
    &-fixed {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 60px;
    }
  }
  &-item {
    margin-bottom: 10px;
  }
}
</style>