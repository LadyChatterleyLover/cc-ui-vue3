<template>
  <div style="background: #f7f7f7;height: 100vh;">
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-tree-select
          @clickNav="clickNav"
          @clickItem="clickItem"
          :items="items1"
          :active-id="activeId1"
          :main-active-index="activeIndex1"
        ></cc-tree-select>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">多选模式</div>
      <div class="demo-item">
        <cc-tree-select
          @clickNav="clickNav"
          @clickItem="clickItem"
          :items="items1"
          :active-id="activeId2"
          :main-active-index="activeIndex2"
        ></cc-tree-select>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">徽标提示</div>
      <div class="demo-item">
        <cc-tree-select :items="items2" :active-id="activeId1" :main-active-index="activeIndex1"></cc-tree-select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let activeId1 = 1
let activeIndex1 = 0
let activeId2 = [1, 2]
let activeIndex2 = 0

let items1 = [
  {
    text: '浙江',
    children: [
      {
        id: 1,
        text: '杭州'
      },
      {
        id: 2,
        text: '温州'
      },
      {
        id: 3,
        text: '宁波',
        disabled: true
      },
      {
        id: 4,
        text: '义务'
      }
    ]
  },
  {
    text: '江苏',
    children: [
      {
        id: 11,
        text: '南京'
      },
      {
        id: 12,
        text: '无锡'
      },
      {
        id: 13,
        text: '徐州'
      },
      {
        id: 14,
        text: '苏州'
      }
    ]
  },
  {
    text: '福建',
    disabled: true
  }
]
let items2 = [
  {
    text: '浙江',
    dot: true,
    children: [
      {
        id: 1,
        text: '杭州'
      },
      {
        id: 2,
        text: '温州'
      },
      {
        id: 3,
        text: '宁波',
        disabled: true
      },
      {
        id: 4,
        text: '义务'
      }
    ]
  },
  {
    text: '江苏',
    badge: 5,
    children: [
      {
        id: 11,
        text: '南京'
      },
      {
        id: 12,
        text: '无锡'
      },
      {
        id: 13,
        text: '徐州'
      },
      {
        id: 14,
        text: '苏州'
      }
    ]
  },
  {
    text: '福建',
    disabled: true
  }
]

let clickNav = (val: any) => {
  console.log(val)
}
let clickItem = (val: any) => {
  console.log(val)
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: 20px;
  &-title {
    padding: 10px;
  }
}
</style>