<template>
  <div>
    <div>
      <div class="title">基础用法</div>
      <div class="item">
        <cc-action-sheet @select="handleSelect" :list="list1" v-model:show="show1"></cc-action-sheet>
        <cc-button @click="open1">打开操作列表</cc-button>
      </div>
    </div>

    <div>
      <div class="title">圆角菜单</div>
      <div class="item">
        <cc-action-sheet :list="list1" round v-model:show="show2"></cc-action-sheet>
        <cc-button @click="open2">打开操作列表</cc-button>
      </div>
    </div>

    <div>
      <div class="title">描述信息</div>
      <div class="item">
        <cc-action-sheet :list="list2" description="这是一段描述信息" v-model:show="show3"></cc-action-sheet>
        <cc-button @click="open3">打开操作列表</cc-button>
      </div>
    </div>

    <div>
      <div class="title">取消按钮</div>
      <div class="item">
        <cc-action-sheet :list="list1" showCancel v-model:show="show4"></cc-action-sheet>
        <cc-button @click="open4">打开操作列表</cc-button>
      </div>
      <div class="item">
        <cc-action-sheet closeable :list="list1" showCancel v-model:show="show5"></cc-action-sheet>
        <cc-button @click="open5">关闭按钮</cc-button>
      </div>
      <div class="item">
        <cc-action-sheet :closeOnClickAction="false" :list="list1" showCancel v-model:show="show6"></cc-action-sheet>
        <cc-button @click="open6">点击取消按钮不可关闭</cc-button>
      </div>
      <div class="item">
        <cc-action-sheet cancelText="关闭" :list="list1" showCancel v-model:show="show7"></cc-action-sheet>
        <cc-button @click="open7">取消文字</cc-button>
      </div>
    </div>

    <div>
      <div class="title">禁用和自定义样式</div>
      <div class="item">
        <cc-action-sheet closeabled :list="list3" v-model:show="show8"></cc-action-sheet>
        <cc-button @click="open8">打开操作列表</cc-button>
      </div>
    </div>

    <div>
      <div class="title">自定义标题</div>
      <div class="item">
        <cc-action-sheet closeable title="标题" :list="list1" v-model:show="show9"></cc-action-sheet>
        <cc-button @click="open9">自定义标题</cc-button>
      </div>
    </div>

    <div>
      <div class="title">自定义内容</div>
      <div class="item">
        <cc-action-sheet :list="list1" v-model:show="show10">
          <template #content>
            <div class="content">内容</div>
          </template>
        </cc-action-sheet>
        <cc-button @click="open10">自定义内容</cc-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ListItem } from '@/components/cc-actionSheet/cc-actionSheet.vue'
import { ref } from 'vue'
let list1: ListItem[] = [
  {
    name: '选项一'
  },
  {
    name: '选项二'
  },
  {
    name: '选项三'
  }
]

let list2: ListItem[] = [
  {
    name: '选项一'
  },
  {
    name: '选项二'
  },
  {
    name: '选项三',
    subname: '描述信息'
  }
]

let list3: ListItem[] = [
  {
    name: '选项一',
    color: '#ee0a24'
  },
  {
    name: '选项二',
    disabled: true
  },
  {
    name: '选项三',
    fontSize: 50,
  },
  {
    name: '加载选项',
    loading: true
  }
]

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

let handleSelect = ({ item, index }: {item: ListItem, index: number}) => {
  console.log(item)
  console.log(index)
}

</script>

<style scoped lang="scss">
.title {
  margin: 20rpx;
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 20rpx 0;
  div {
    margin: 10rpx;
  }
}
.content {
  padding: 32rpx 32rpx 320rpx;
}
</style>