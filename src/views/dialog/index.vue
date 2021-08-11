<template>
  <div>
    <div>
      <div class="title">基础用法</div>
      <div class="item">
        <cc-dialog
          v-model:show="show1"
          title="最佳损友"
          content="问我有没有,确实也没有,一直躲避的借口,非什么大仇,为何旧知己到最后,变不到老友"
        ></cc-dialog>
        <cc-button type="primary" @click="open1">提示弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">无标题</div>
      <div class="item">
        <cc-dialog v-model:show="show2" content="朋友我当你一秒朋友,朋友,我当你一世朋友"></cc-dialog>
        <cc-button type="primary" @click="open2">提示弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">确认弹框</div>
      <div class="item">
        <cc-dialog v-model:show="show3" showCancelButton title="最佳损友" content="严重似情侣讲分手"></cc-dialog>
        <cc-button type="primary" @click="open3">提示弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">点击遮罩层可关闭</div>
      <div class="item">
        <cc-dialog v-model:show="show4" title="最佳损友" closeOnClickOverlay content="我有痛快过你有没有"></cc-dialog>
        <cc-button type="primary" @click="open4">提示弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">自定义颜色和文字</div>
      <div class="item">
        <cc-dialog
          v-model:show="show5"
          showCancelButton
          confirmText="立即登录"
          cancelText="继续浏览"
          confirmColor="#e54d42"
          cancelColor="#0081ff"
          title="最佳损友"
          content="严重似情侣讲分手"
        ></cc-dialog>
        <cc-button type="primary" @click="open5">提示弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">异步关闭</div>
      <div class="item">
        <cc-dialog
          ref="dialog"
          @confirm="confirm"
          v-model:show="show6"
          asyncClose
          showCancelButton
          title="最佳损友"
          content="挂念这旧友"
        ></cc-dialog>
        <cc-button type="primary" @click="open6">提示弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">富文本内容</div>
      <div class="item">
        <cc-dialog v-model:show="show7" asyncClose showCancelButton title="东邪西毒">
          <template #content>
            <div style="height: 300rpx" v-html="content"></div>
          </template>
        </cc-dialog>
        <cc-button type="primary" @click="open7">提示弹框</cc-button>
      </div>
    </div>

    <div>
      <div class="title">自定义按钮</div>
      <div class="item">
        <cc-dialog
          v-model:show="show8"
          asyncClose
          showCancelButton
          title="东邪西毒"
          content="看见他走的时候,我的内心在嫉妒"
        >
          <template #button>
            <div class="btn" @click="clickButton">确认</div>
          </template>
        </cc-dialog>
        <cc-button type="primary" @click="open8">提示弹框</cc-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let show1 = ref(false)
let show2 = ref(false)
let show3 = ref(false)
let show4 = ref(false)
let show5 = ref(false)
let show6 = ref(false)
let show7 = ref(false)
let show8 = ref(false)

let content = `
      <span>
        嫣: 告诉我,你最爱的女人是哪一位?  
      </span>
      <span>
        峰: 不是你咯。  
      </span>
    `
let dialog = ref()
let confirm = () => {
  setTimeout(() => {
    dialog.value.close()
  }, 3000)
}
let clickButton = () => {
  show8.value = false
}

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
</script>

<style scoped lang="scss">
.title {
  margin: #{topx(10)};
}
.item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: #{topx(10)} 0;
  div {
    margin: #{topx(5)};
  }
}
.btn {
  background: linear-gradient(to right, #ff6034, #ee0a24);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: #{topx(33)};
  width: 92%;
  margin-left: 4%;
  border-radius: #{topx(24)};
  font-size: 14px;
}
</style>