<template>
  <div style="background: #f7f7f7;height: 100vh;">
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-contact-card type="add" @click="onAdd"></cc-contact-card>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">编辑联系人</div>
      <div class="demo-item">
        <cc-contact-card type="edit" name="eason" tel="13888888888"></cc-contact-card>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">不可编辑</div>
      <div class="demo-item">
        <cc-contact-card
          type="edit"
          name="eason"
          tel="13888888888"
          :editable="false"
          @click="onAdd"
        ></cc-contact-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let onAdd = () => {
  console.log('add')
}
</script>

<style scoped lang="scss">
.demo {
  &-title {
    padding: 20px;
  }
  &-item {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>