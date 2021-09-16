<template>
  <button
    class="cc-button"
    :hover-class="hoverClassName"
    :loading="loading"
    :class="[
      `${typeClass}`,
      `${sizeClass}`,
      `${isPlain}`,
      { 'cc-button-block': block },
      { 'cc-button-disabled': disabled },
      { 'cc-button-round': round },
    ]"
    :style="{ background: color, ...customColor, ...customStyle }"
    @click="handleClick"
  >
    <div class="cc-button-content">
      <cc-icon
        v-if="icon"
        class="cc-button-icon"
        :color="iconColor"
        :type="icon"
        :size="iconSize"
      ></cc-icon>
      <text :class="{ 'cc-button-text': icon }">
        <slot></slot>
      </text>
    </div>
  </button>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
  onMounted,
  ref,
  PropType,
} from "vue";

type ButtonTypeProps =
  | ""
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info";
type ButtonSizeProps = "" | "large" | "small" | "mini";

interface ColorList {
  type: string;
  color: string;
}

let props = defineProps({
  type: {
    type: String as PropType<ButtonTypeProps>,
    default: "",
  },
  // 是否是朴素按钮
  plain: {
    type: Boolean,
    default: false,
  },
  // 圆形按钮
  round: {
    type: Boolean,
    default: false,
  },
  // 块级按钮
  block: {
    type: Boolean,
    default: false,
  },
  // 禁用状态
  disabled: {
    type: Boolean,
    default: false,
  },
  // 尺寸
  size: {
    type: String as PropType<ButtonSizeProps>,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  // 图标 和uni-icon一致
  icon: {
    type: String,
  },
  // 自定义颜色
  color: {
    type: String,
    default: "",
  },
  // 自定义样式
  customStyle: {
    type: Object,
  },
  // 按钮点击时的样式
  hoverClass: {
    type: String,
  },
});
let emits = defineEmits(["click"]);

// 颜色列表
let colorList: ColorList[] = [
  {
    type: "primary",
    color: "#0081ff",
  },
  {
    type: "success",
    color: "#39b54a",
  },
  {
    type: "error",
    color: "#e54d42",
  },
  {
    type: "warning",
    color: "#f37b1d",
  },
  {
    type: "info",
    color: "#909399",
  },
];

// 是否是朴素按钮
let isPlain = computed(() => {
  if (props.plain) return `cc-button-${props.type}-plain`;
  else return "";
});

// 按钮类型
let typeClass = computed(() => {
  if (props.type) return `cc-button-${props.type}`;
  else return "";
});

// 尺寸
let sizeClass = computed(() => {
  if (props.size) return `cc-button-${props.size}`;
  else return "";
});

// hoverclass
let hoverClassName = computed(() => {
  if (props.hoverClass) return props.hoverClass;
  else {
    if (!props.plain) {
      return `cc-button-hover`;
    } else {
      return `cc-button-${props.type}-hover`;
    }
  }
});

// 自定义颜色时的朴素状态下边框和背景颜色
let customColor = ref();

// 图标大小
let iconSize = computed(() => {
  if (props.size === "large") {
    return 28;
  } else if (props.size === "") {
    return 24;
  } else if (props.size === "small") {
    return 20;
  } else {
    return 16;
  }
});

// 图标颜色
let iconColor = computed(() => {
  if (props.type) {
    if (!props.plain) return "#fff";
    else {
      let item = colorList.find((item) => item.type === props.type);
      return item && item.color;
    }
  } else {
    return "#000";
  }
});

let handleClick = () => {
  /** loading 状态不可点击触发click事件 */
  if (props.loading) return;
  emits("click");
};

onMounted(() => {
  // 自定义颜色情况
  if (props.color) {
    customColor.value = {
      color: "#fff",
    };
    if (props.plain) {
      customColor.value = {
        color: props.color,
        border: `1px solid ${props.color}`,
        background: "#fff",
      };
    }
  }
});
</script>

<style lang="scss" scoped>
.cc-button {
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  height: #{topx(44)};
  margin: 0;
  padding: 0;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 0 #{topx(15)};
  background: #fff;
  color: #000;
  border: 1px solid #ebedf0;

  .cc-button-content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      height: 100%;
    }
    .cc-button-text {
      margin-left: #{topx(4)};
    }
    .cc-button-icon {
      margin-left: #{topx(6)};
    }
  }
  &-block {
    width: 100%;
  }
  &-hover {
    opacity: 0.8;
  }
  &-large {
    height: #{topx(50)};
  }
  &-small {
    height: #{topx(32)};
  }
  &-mini {
    height: #{topx(24)};
  }
  &-disabled {
    cursor: not-allowed;
    opacity: 0.5;
    // pointer-events: none;
  }
  &-round {
    border-radius: #{topx(24)};
  }
  &-primary {
    background: $primary;
    border: 1px solid $primary;
    color: #fff;
  }
  &-primary-plain {
    background: #fff;
    border: 1px solid $primary;
    color: $primary;
  }
  &-primary-hover {
    background: $primary;
    color: #fff;
  }
  &-success {
    background: $success;
    border: 1px solid $success;
    color: #fff;
  }
  &-success-plain {
    background: #fff;
    border: 1px solid $success;
    color: $success;
  }
  &-success-hover {
    background: $success;
    color: #fff;
  }
  &-warning {
    background: $warning;
    border: 1px solid $warning;
    color: #fff;
  }
  &-warning-plain {
    background: #fff;
    border: 1px solid $warning;
    color: $warning;
  }
  &-warning-hover {
    background: $warning;
    color: #fff;
  }
  &-info {
    background: $info;
    border: 1px solid $info;
    color: #fff;
  }
  &-info-plain {
    background: #fff;
    border: 1px solid $info;
    color: $info;
  }
  &-info-hover {
    background: $info;
    color: #fff;
  }
  &-error {
    background: $error;
    border: 1px solid $error;
    color: #fff;
  }
  &-error-plain {
    background: #fff;
    border: 1px solid $error;
    color: $error;
  }
  &-error-hover {
    background: $error;
    color: #fff;
  }
}
</style>
