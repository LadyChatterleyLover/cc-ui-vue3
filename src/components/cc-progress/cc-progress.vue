<template>
  <div>
    <div class="flex a-center content" v-if="lineData">
      <div>
        <slot name="content"></slot>
      </div>
    </div>
    <div class="flex a-center" style="padding-right: 10rpx;">
      <div
        class="progress-container"
        id="container"
        ref="progressContainer"
        :style="{ background: inBgColor }"
      >
        <div
          class="progress-content flex j-end"
          id="content"
          ref="progressContent"
          :style="{ height: strokeWidth + 'px', background: bgColor, transition: `width ${Number(duration) / 1000}s ease` }"
          v-if="isAnimate"
        >
          <div class="textInside flex a-center j-center" v-if="textInside && !noData">
            <div>{{ percentage }}%</div>
          </div>
        </div>
        <div
          v-if="!isAnimate"
          class="progress-content flex j-end"
          :style="{ width: percentage + '%', height: strokeWidth + 'px', background: bgColor }"
        >
          <div class="textInside flex a-center j-center" v-if="textInside && !noData">
            <div class="text">{{ percentage }}%</div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="percentage"
          v-if="!textInside && !lineData && !noData && !isAnimate"
        >{{ percentage }}%</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, nextTick, onMounted } from 'vue'

let props = defineProps({
  // 进度条的值
  percentage: {
    type: [Number, String],
    required: true
  },
  // 是否内联显示数据
  textInside: {
    type: Boolean,
    default: false
  },
  // 进度条高度
  strokeWidth: {
    type: [Number, String],
    default: 6
  },
  // 默认动画时长
  duration: {
    type: [Number, String],
    default: 2000
  },
  // 是否有动画
  isAnimate: {
    type: Boolean,
    default: false
  },
  // 背景颜色
  bgColor: {
    type: String,
    default: '#409eff'
  },
  // 是否不显示数据
  noData: {
    type: Boolean,
    default: false
  },
  // 是否自定义显示内容
  lineData: {
    type: Boolean,
    default: false
  },
  // 自定义底色
  inBgColor: {
    type: String,
    default: '#ebeef5'
  }
})

let progressContainer = ref()
let progressContent = ref()

let width = ref<number>(0)
let timer = ref<any>(null)

let start = () => {
  nextTick(() => {
    if (props.isAnimate) {
      let style = window.getComputedStyle(progressContainer.value, null)
      let width: number = ((style.width).replace('px', '') as any) * (((props.percentage as number) * 1) / 100)
      progressContent.value.style.width = width.toFixed(2) + 'px';
      progressContent.value.style.transition = `width ${(props.duration as number) / 1000}s ease`;
    }

  })
}
onMounted(() => {
  nextTick(() => {
    start()
  })
})
</script>

<style scoped lang="scss">
.content {
  margin-bottom: 20rpx;
  .c-per {
    font-size: 52rpx;
  }
}
.progress-container {
  width: 100%;
  border-radius: 100px;
  .progress-content {
    border-radius: 200rpx;
    width: 0;
  }
  .textInside {
    color: #fff;
    margin-right: 10rpx;
    position: relative;
  }
}
.text {
  margin-left: 10rpx;
}
.percentage {
  margin-left: 12rpx;
  font-size: 12px;
  width: 60rpx;
}
.flex {
  display: flex;
}
.a-center {
  align-items: center;
}
.j-center {
  justify-content: center;
}
.j-between {
  justify-content: space-between;
}
.content {
  margin-bottom: 20rpx;
  color: #666;
  font-size: 32rpx;
}
</style>