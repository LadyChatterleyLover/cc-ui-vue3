<template>
  <div>
    <div class="title">基础用法</div>
    <div class="title">
      <cc-collapse :list="list1"></cc-collapse>
    </div>

    <div class="title">右侧箭头显示和样式</div>
    <div class="item">
      <cc-collapse  :list="list2"></cc-collapse>
    </div>

    <div class="title">默认展开项</div>
    <div class="item">
      <cc-collapse :current="current1"  :list="list1"></cc-collapse>
    </div>

    <div class="title">手风琴模式</div>
    <div class="item">
      <cc-collapse accordion  :list="list1"></cc-collapse>
    </div>

    <div class="title">禁用和无边框</div>
    <div class="item">
      <cc-collapse  :list="list3"></cc-collapse>
    </div>

    <div class="title">自定义内容</div>
    <div class="item">
      <cc-collapse  :list="list4">
        <template #title>
          <cc-icon type='search'></cc-icon>
          搜索
        </template>
        <template #content>
          <div style="color: red;">回到过去</div>
        </template>
        <template #value>
          <div>轨迹</div>
        </template>
      </cc-collapse>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CollapseItem } from "@/components/cc-collapse/cc-collapse.vue";
import {ref} from 'vue'
let current1 = ref<number>(1)
let list1: CollapseItem[] = [
  {
    title: '晴天',
    content: '故事的小黄花，从出生那年就飘着童年的荡秋千，随记忆一直晃到现在故事的小黄花，从出生那年就飘着童年的荡秋千，随记忆一直晃到现在'
  },
  {
    title: '晴天',
    content: '吹着前奏望着天空，我想起花瓣试着掉落为你翘课的那一天，花落的那一天教室的那一间，我怎么看不见消失的下雨天，我好想再淋一遍'
  },
  {
    title: '晴天',
    content: '站在屋顶只对风说，不想被左右，本来讨厌下雨的天空，直到听见有人说爱我'
  }
]
let list2: CollapseItem[] = [
  {
    title: '你听得到',
    content: '有谁能比我知道，你的温柔像羽毛，秘密躺在我怀抱，只有你能听得到',
    arrow: false
  },
  {
    title: '你听得到',
    content: '还有没有人知道，你的微笑像拥抱，多想藏着你的好，只有我看得到',
    arrowColor: "#123abc"
  },
  {
    title: '你听得到',
    content: '没想到失去的勇气我还留着，好想再问一遍你会等待还是离开，刮风这天我试过握着你手但偏偏雨渐渐，大到我看你不见还要多久我才能在你身边，等到放晴的那天我会比较好一点',
    arrowSize: "20"
  }
]
let list3: CollapseItem[] = [
  {
    title: '你听得到',
    content: '坐在电影院的二楼，看人群走过，怎么那一天的我们，都默默的微笑很久',
    disabled: true
  },
  {
    title: '你听得到',
    content: '我想我是太过依赖，在挂电话的刚才，坚持学单纯的小孩，静静看守这份爱',
    border: false
  },
  {
    title: '你听得到',
    content: '知道不能太依赖，怕你会把我宠坏，你的香味一直徘徊，我舍不得离开'
  }
]
let list4: CollapseItem[] = [
  {
    titleSlot: true,
    contentSlot: true,
    rightSlot: true
  },
  {
    titleSlot: true,
    contentSlot: true,
    rightSlot: true
  }
]


</script>

<style scoped lang="scss">
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  button {
    margin-right: #{topx(5)};
  }
}
</style>