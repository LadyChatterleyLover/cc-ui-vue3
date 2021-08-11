<template>
  <div>
    <div>
      <div class="title">基础语法</div>
      <div>
        <cc-search
          v-model:value="value"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          @confirm="handleConfirm"
          @close="close"
          @cancel="cancel"
        ></cc-search>
      </div>
    </div>

    <div>
      <div class="title">圆形</div>
      <div>
        <cc-search v-model:value="value" round></cc-search>
      </div>
    </div>

    <div>
      <div class="title">文字对齐方式</div>
      <div>
        <cc-search v-model:value="value" textAlign="center"></cc-search>
      </div>
      <div>
        <cc-search v-model:value="value" textAlign="right"></cc-search>
      </div>
    </div>

    <div>
      <div class="title">图标对齐方式</div>
      <div>
        <cc-search v-model:value="value" iconAlign="center" textAlign="center"></cc-search>
      </div>
      <div>
        <cc-search v-model:value="value" iconAlign="right" textAlign="right"></cc-search>
      </div>
    </div>

    <div>
      <div class="title">自定义图标</div>
      <div>
        <cc-search v-model:value="value" round icon="person"></cc-search>
      </div>
    </div>

    <div>
      <div class="title">左侧内容</div>
      <div>
        <cc-search v-model:value="value" round label="地址"></cc-search>
      </div>
    </div>

    <div>
      <div class="title">禁用</div>
      <div>
        <cc-search v-model:value="value" round disabled></cc-search>
      </div>
    </div>

    <div>
      <div class="title">自定义左侧内容</div>
      <div>
        <cc-search v-model:value="value" round>
          <template #label>
            <div class="label">
              <div>地址</div>
              <div style="margin-left: 8rpx">
                <cc-icon type="arrowdown" size="10"></cc-icon>
              </div>
            </div>
          </template>
        </cc-search>
      </div>
    </div>

    <div>
      <div class="title">自定义右侧内容</div>
      <div>
        <cc-search v-model:value="value" round>
          <template #action>
            <div>搜索</div>
          </template>
        </cc-search>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from "vue"

let value = ref('')

let close = () => {
  console.log('close')
}
let cancel = () => {
  console.log('cancel')
}
let handleInput = (e: Event) => {
  console.log('input', e)
}
let handleFocus = (e: Event) => {
  console.log('focus', e)
}
let handleBlur = (e: Event) => {
  console.log('blur', e)
}
let handleConfirm = (e: Event) => {
  console.log('confirm', e)
}
</script>

<style lang='scss' scoped>
.title {
  margin: #{topx(10)};
}
.label {
  display: flex;
  align-items: center;
}
</style>