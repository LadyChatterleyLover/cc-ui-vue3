<template>
  <cc-form :model="model" :rules="rules" ref="form">
    <cc-form-item leftIcon="person" label="用户名" prop="username">
      <cc-field v-model:value="model.username" :border="false"></cc-field>
    </cc-form-item>
    <cc-form-item label="密码" prop="password">
      <cc-field type="password" v-model:value="model.password" :border="false"></cc-field>
    </cc-form-item>
    <cc-form-item label="验证码">
      <cc-field type="password" v-model:value="model.code" :border="false"></cc-field>
    </cc-form-item>
    <cc-form-item>
      <cc-button type="primary" @click="submit">提交</cc-button>
      <cc-button style="margin-left: 30px;" @click="reset">重置</cc-button>
    </cc-form-item>
  </cc-form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let model = ref<any>({
  username: '',
  password: '',
  code: '',
})
let rules = ref<any>({
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      min: 2,
      max: 6,
      message: '用户名2-6位之间',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
})
let form = ref()

let submit = () => {
  form.value.validate((valid: any) => {
    if (valid) {
      console.log('success', model.value)
    } else {
      console.log('fail')
    }
  })
}
let reset = () => {
  form.value.resetFields()
}
</script>

<style scoped lang="scss">
</style>