<template>
  <div class="demo">
    <div class="demo-title">基础用法</div>
    <div class="demo-item">
      <div>
        <cc-switch v-model:value="checked"></cc-switch>
      </div>
    </div>

    <div class="demo-title">禁用状态</div>
    <div class="demo-item">
      <div>
        <cc-switch disabled v-model:value="checked"></cc-switch>
      </div>
    </div>

    <div class="demo-title">自定义颜色</div>
    <div class="demo-item">
      <div>
        <cc-switch activeColor="#ee0a24" inactiveColor="#abc123" v-model:value="checked"></cc-switch>
      </div>
    </div>

    <div class="demo-title">自定义尺寸</div>
    <div class="demo-item">
      <div>
        <cc-switch size="16" v-model:value="checked"></cc-switch>
      </div>
      <div>
        <cc-switch size="36" v-model:value="checked"></cc-switch>
      </div>
    </div>

    <div class="demo-title">文字显示</div>
    <div class="demo-item">
      <div>
        <cc-switch v-model:value="checked" activeText="搁浅"></cc-switch>
      </div>
      <div>
        <cc-switch v-model:value="checked" activeText="威廉古堡" inactiveText='双节棍'></cc-switch>
      </div>
      <div>
        <cc-switch v-model:value="checked"  activeTextColor="#ee0a24" inactiveTextColor="#abc123" activeText="黑色幽默"></cc-switch>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
let dialog = ref()
let checked = ref<boolean>(false)

let onChange = (val: boolean) => {
  checked.value = val
}
let confirm = () => {

}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: #{topx(20)};
  &-title {
    padding: #{topx(10)};
  }
  &-item {
    display: flex;
    align-items: center;
    margin-left: #{topx(2)};
    div {
      margin-left: #{topx(15)};
    }
  }
}
</style>