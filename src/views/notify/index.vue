<template>
  <div>
    <cc-notify ref="notify"></cc-notify>
    <div>
      <div class="title">基础语法</div>
      <div class="item">
        <div>
          <cc-button @click="open({title: '最佳损友'})">primary</cc-button>
        </div>
        <div>
          <cc-button type="success" @click="open({ title: '红玫瑰', type: 'success' })">success</cc-button>
        </div>
        <div>
          <cc-button type="warning" @click="open({ title: '白玫瑰', type: 'warning' })">warning</cc-button>
        </div>
        <div>
          <cc-button type="error" @click="open({ title: '人来人往', type: 'error' })">error</cc-button>
        </div>
        <div>
          <cc-button type="info" @click="open({ title: '一丝不挂', type: 'info' })">info</cc-button>
        </div>
      </div>
    </div>

    <div>
      <div class="title">显示时间</div>
      <div class="item">
        <div>
          <cc-button @click="open({ title: '内疚' })">默认2000</cc-button>
        </div>
        <div>
          <cc-button
            type="success"
            @click="open({ title: 'last order', type: 'success', duration: 5000 })"
          >5000</cc-button>
        </div>
        <div>
          <cc-button
            type="warning"
            @click="open({ title: '阿牛', type: 'warning', duration: 300 })"
          >300</cc-button>
        </div>
      </div>
    </div>

    <div>
      <div class="title">自定义颜色</div>
      <div class="item">
        <div>
          <cc-button @click="open({ title: '富士山下', color: '#ad0000', background: '#ffe1e1', })">自定义颜色</cc-button>
        </div>
      </div>
    </div>

    <div>
      <div class="title">显示圆角</div>
      <div class="item">
        <div>
          <cc-button @click="open({ title: 'k歌之王', showRadius: true })">显示圆角</cc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NotifyOptions } from '@/components/cc-notify/cc-notify.vue'
import { ref } from 'vue'

let notify = ref()
let open = (options: NotifyOptions) => {
  notify.value.show({
    // 标题
    title: options.title,
    // 类型
    type: options.type || 'primary',
    // 持续时间
    duration: options.duration || 2000,
    // 自定义背景颜色和文字颜色
    background: options.background,
    color: options.color,
    showRadius: options.showRadius
  })
}
</script>

<style scoped lang='scss'>
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div {
    margin: #{topx(5)};
  }
}
</style>