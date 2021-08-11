<template>
   <cc-calendar v-model:show='show' @confirm='confirm'></cc-calendar>
   <cc-button type="primary" size="small" @click='show = true'>打开日历</cc-button>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let show = ref<boolean>(false)

let confirm = (val: any) => {
  console.log(val)
}
</script>

<style scoped lang="scss">

</style>