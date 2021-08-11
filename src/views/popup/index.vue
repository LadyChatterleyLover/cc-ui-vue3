<template>
  <div>
    <div>
      <div class="title">基础语法</div>
      <div class="item">
        <cc-popup v-model:show="show1">红是朱砂痣烙印心口</cc-popup>
        <cc-button @click="open1" size="small">打开弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">弹出框方向</div>
      <div class="item">
        <cc-popup v-model:show="show2" mode="left">红是蚊子血般平庸</cc-popup>
        <cc-button @click="open2">左边打开</cc-button>
      </div>
      <div class="item">
        <cc-popup v-model:show="show3" mode="right">
          <div class="flex">从背后抱你的时候</div>
        </cc-popup>
        <cc-button @click="open3">右边打开</cc-button>
      </div>
      <div class="item">
        <cc-popup v-model:show="show4" mode="top">期待的却是他的面容</cc-popup>
        <cc-button @click="open4">顶部打开</cc-button>
      </div>
      <div class="item">
        <cc-popup v-model:show="show5" mode="bottom">
          <div>握在手中却流失于指缝</div>
        </cc-popup>
        <cc-button @click="open5">底部打开</cc-button>
      </div>
    </div>

    <div>
      <div class="title">关闭按钮</div>
      <div class="item">
        <cc-popup v-model:show="show6" closeable>我不好爱</cc-popup>
        <cc-button @click="open6">关闭按钮</cc-button>
      </div>
      <div class="item">
        <cc-popup v-model:show="show7" mode="left" closeable>你又美丽又伟大</cc-popup>
        <cc-button @click="open7">关闭按钮</cc-button>
      </div>
      <div class="item">
        <cc-popup closeIcon="search" v-model:show="show8" closeable>得你一人越来越可爱</cc-popup>
        <cc-button @click="open8">自定义关闭图标</cc-button>
      </div>
    </div>

    <div>
      <div class="title">自定义宽高</div>
      <div class="item">
        <cc-popup width="600" v-model:show="show9" closeable>烟味</cc-popup>
        <cc-button @click="open9">自定义宽度</cc-button>
      </div>
      <div class="item">
        <cc-popup width="600" v-model:show="show10" mode="left" closeable>颓废,混杂着烟味</cc-popup>
        <cc-button @click="open10">自定义宽度</cc-button>
      </div>
      <div class="item">
        <cc-popup height="600" mode="bottom" v-model:show="show11" closeable>
          <div class="content">我满脸胡渣</div>
        </cc-popup>
        <cc-button @click="open11">自定义高度</cc-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let show1 = ref<boolean>(false)
let show2 = ref<boolean>(false)
let show3 = ref<boolean>(false)
let show4 = ref<boolean>(false)
let show5 = ref<boolean>(false)
let show6 = ref<boolean>(false)
let show7 = ref<boolean>(false)
let show8 = ref<boolean>(false)
let show9 = ref<boolean>(false)
let show10 = ref<boolean>(false)
let show11 = ref<boolean>(false)
let open1 = () => {
  show1.value = true
}
let open2 = () => {
  show2.value = true
}
let open3 = () => {
  show3.value = true
}
let open4 = () => {
  show4.value = true
}
let open5 = () => {
  show5.value = true
}
let open6 = () => {
  show6.value = true
}
let open7 = () => {
  show7.value = true
}
let open8 = () => {
  show8.value = true
}
let open9 = () => {
  show9.value = true
}
let open10 = () => {
  show10.value = true
}
let open11 = () => {
  show11.value = true
}
</script>

<style scoped  lang="scss">
.title {
  margin: #{topx(10)}
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin:  #{topx(10)};
  div {
    margin:  #{topx(5)};
  }
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.content {
  height: 1000rpx;
}
</style>