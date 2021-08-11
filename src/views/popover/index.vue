<template>
  <div class="container">
    <!-- <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <div>
          <cc-popover
            @select="handleSelect"
            v-model:value="value1"
            :actions="actions"
            placement="bottom-start"
          >
            <template #reference>
              <cc-button type="success">浅色风格</cc-button>
            </template>
          </cc-popover>
        </div>
        <div>
          <cc-popover v-model:value="value2" :actions="actions" theme="dark">
            <template #reference>
              <cc-button type="success">深色风格</cc-button>
            </template>
          </cc-popover>
        </div>
        <div>
          <cc-popover v-model:value="value3" :actions="actions" placement="bottom-end">
            <template #reference>
              <cc-button type="success">右侧位置</cc-button>
            </template>
          </cc-popover>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">展示图标</div>
      <div class="demo-item">
        <div>
          <cc-popover v-model:value="value4" :actions="actions1">
            <template #reference>
              <cc-button type="success">浅色风格</cc-button>
            </template>
          </cc-popover>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用选项</div>
      <div class="demo-item">
        <div>
          <cc-popover v-model:value="value5" :actions="actions2">
            <template #reference>
              <cc-button type="success">禁用选项</cc-button>
            </template>
          </cc-popover>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">弹出方向</div>
      <div class="demo-item" style="margin: 100px 0;">
        <div>
          <cc-popover v-model:value="value6" :actions="actions" placement="top-start">
            <template #reference>
              <cc-button type="success">左上方</cc-button>
            </template>
          </cc-popover>
        </div>

        <div>
          <cc-popover v-model:value="value7" :actions="actions" placement="top">
            <template #reference>
              <cc-button type="success">上方</cc-button>
            </template>
          </cc-popover>
        </div>

        <div>
          <cc-popover v-model:value="value8" :actions="actions" placement="top-end">
            <template #reference>
              <cc-button type="success">右上方</cc-button>
            </template>
          </cc-popover>
        </div>

        <div style="margin-left: 200px;">
          <cc-popover v-model:value="value9" :actions="actions" placement="left-start">
            <template #reference>
              <cc-button type="success">左偏上</cc-button>
            </template>
          </cc-popover>
        </div>
        <div style="margin-left: 200px;">
          <cc-popover v-model:value="value10" :actions="actions" placement="left" theme="dark">
            <template #reference>
              <cc-button type="success">左边</cc-button>
            </template>
          </cc-popover>
        </div>
        <div style="margin-left: 200px;">
          <cc-popover v-model:value="value11" :actions="actions" placement="left-end">
            <template #reference>
              <cc-button type="success">左偏下</cc-button>
            </template>
          </cc-popover>
        </div>

        <div style="margin-right: 200px;">
          <cc-popover v-model:value="value12" :actions="actions" placement="right-start">
            <template #reference>
              <cc-button type="success">右偏上</cc-button>
            </template>
          </cc-popover>
        </div>

        <div style="margin-right: 200px;">
          <cc-popover v-model:value="value13" :actions="actions" placement="right">
            <template #reference>
              <cc-button type="success">右边</cc-button>
            </template>
          </cc-popover>
        </div>

        <div style="margin-right: 200px;">
          <cc-popover v-model:value="value14" :actions="actions" placement="right-end">
            <template #reference>
              <cc-button type="success">右偏下</cc-button>
            </template>
          </cc-popover>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义内容</div>
      <div class="demo-item">
        <cc-popover v-model:value="value15" :actions="actions" placement="bottom">
          <template #reference>
            <cc-button type="success">自定义内容</cc-button>
          </template>
        </cc-popover>
      </div>
    </div>-->
    <div class="demo">
      <div class="demo-title">自定义内容</div>
      <div >
        <cc-popover v-model:value="value15" :actions="actions" placement="top">
          <template #reference>
            <cc-button type="success">自定义内容</cc-button>
          </template>
        </cc-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ActionItem } from '@/components/cc-popover/cc-popover.vue'
import { ref } from 'vue'
let value1 = ref<boolean>(false)
let value2 = ref<boolean>(false)
let value3 = ref<boolean>(false)
let value4 = ref<boolean>(false)
let value5 = ref<boolean>(false)
let value6 = ref<boolean>(false)
let value7 = ref<boolean>(false)
let value8 = ref<boolean>(false)
let value9 = ref<boolean>(false)
let value10 = ref<boolean>(false)
let value11 = ref<boolean>(false)
let value12 = ref<boolean>(false)
let value13 = ref<boolean>(false)
let value14 = ref<boolean>(false)
let value15 = ref<boolean>(false)

let actions: ActionItem[] = [
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' },
  { text: '选项一' },
  { text: '选项二' },
  { text: '选项三' }
]
let actions1: ActionItem[] = [
  { text: '选项一', icon: 'person' },
  { text: '选项二', icon: 'search' },
  { text: '选项三', icon: 'chat' }
]
let actions2: ActionItem[] = [
  { text: '选项一', icon: 'person', disabled: true },
  { text: '选项二', disabled: true },
  { text: '选项三' }
]


let handleSelect = ({ item, index }: { item: ActionItem, index: number }) => {
  console.log('select', item, index)
}
</script>

<style scoped lang="scss">
.container {
  background: #f7f8fa;
  height: 100vh;
  display: flex;
  align-items: center;
  // justify-content: center;
}
.demo {
  margin-bottom: #{topx(10)};
  padding: #{topx(10)};

  &-title {
    padding: #{topx(10)};
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    div {
      margin-right: #{topx(20)};
      margin-bottom: #{topx(10)};
    }
  }
}
</style>