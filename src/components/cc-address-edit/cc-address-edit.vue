<template>
  <div class="cc-address-edit">
    <div class="cc-address-edit-field">
      <cc-form :model="addressInfo" :rules="rules">
        <cc-form-item prop="name">
          <cc-field
            style="width: 100%;"
            :border="false"
            clearable
            label="姓名"
            :placeholder="userPlaceholder"
            v-model:value="info.name"
          ></cc-field>
        </cc-form-item>

        <cc-form-item prop="tel">
          <cc-field
            :border="false"
            style="width: 100%;"
            clearable
            label="电话"
            :placeholder="telPlaceholder"
            v-model:value="info.tel"
          ></cc-field>
        </cc-form-item>

        <!-- <cc-form-item>
          <cc-field
            style="width: 100%;"
            :border="false"
            label="地区"
            readonly
            :placeholder="areaPlaceholder"
            rightIcon="arrowright"
            v-model:value="area"
            @click="clickArea"
          ></cc-field>
        </cc-form-item>-->

        <cc-form-item>
          <cc-field
            style="width: 100%;"
            :border="false"
            label="详细地址"
            clearable
            :placeholder="detailAddressPlaceholder"
            v-model:value="info.addressDetail"
          ></cc-field>
        </cc-form-item>
        <cc-form-item v-if="showPostal">
          <cc-field
            style="width: 100%;"
            clearable
            :border="false"
            label="邮政编码"
            :placeholder="postalPlaceholder"
            v-model:value="info.postalCode"
          ></cc-field>
        </cc-form-item>
      </cc-form>
    </div>
    <div class="cc-address-edit-default">
      <div class="cc-address-edit-default-title">设置为默认地址</div>
      <div class="cc-address-edit-default-check">
        <cc-switch v-model:value="info.isDefault"></cc-switch>
      </div>
    </div>
    <div class="cc-address-edit-button-save" @click="save">
      <cc-button round block :color="saveButtonColor">{{ saveButtonText }}</cc-button>
    </div>
    <div class="cc-address-edit-button-del" @click="del" v-if="showDelete">
      <cc-button round block :color="deleteButtonColor">{{ deleteButtonText }}</cc-button>
    </div>

    <!-- <cc-popup @ mode="bottom" :show.sync="visible" height="600rpx">
      <cc-area title=" " @confirm="confirm" @cancel="cancel"></cc-area>
    </cc-popup>-->
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType, ref, onMounted } from 'vue'

export interface AddressInfo {
  id: string,
  name: string,
  tel: string,
  province: string,
  city: string,
  county: string,
  addressDetail: string,
  areaCode: string,
  postalCode: string,
  isDefault: boolean
}


let props = defineProps({
  addressInfo: {
    type: Object as PropType<AddressInfo>,
    default: () => {
      return {
        id: '',
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        addressDetail: '',
        areaCode: '',
        postalCode: '',
        isDefault: false
      }
    }
  },
  // 收货人姓名占位符
  userPlaceholder: {
    type: String,
    default: '收货人姓名'
  },
  // 收货人电话占位符
  telPlaceholder: {
    type: String,
    default: '收货人电话'
  },
  // 地区占位符
  areaPlaceholder: {
    type: String,
    default: '请选择省 / 市 / 区'
  },
  // 详细地址占位符
  detailAddressPlaceholder: {
    type: String,
    default: '街道门牌、楼层房间号等信息'
  },
  // 邮政编码占位符
  postalPlaceholder: {
    type: String,
    default: '邮政编码'
  },
  // 保存按钮颜色
  saveButtonColor: {
    type: String,
    default: '#ee0a24'
  },
  // 删除按钮颜色
  deleteButtonColor: {
    type: String,
    default: ''
  },
  // 是否显示邮政编码
  showPostal: {
    type: Boolean,
    default: true
  },
  // 是否显示默认地址栏
  showSetDefault: {
    type: Boolean,
    default: true
  },
  // 是否显示删除按钮
  showDelete: {
    type: Boolean,
    default: true
  },
  // 是否显示地区
  showArea: {
    type: Boolean,
    default: true
  },
  // 是否显示详细地址
  showDetail: {
    type: Boolean,
    default: true
  },
  // 保存按钮文字
  saveButtonText: {
    type: String,
    default: '保存'
  },
  // 删除按钮文字
  deleteButtonText: {
    type: String,
    default: '删除'
  }
})
let emits = defineEmits(['save', 'delete'])


let info = ref<AddressInfo>(props.addressInfo)
let rules = ref<any>({
  name: [
    {
      required: true,
      message: '收货人姓名不能为空',
      trigger: 'blur'
    }
  ],
  tel: [
    {
      validator: (rule: any, value: string, callback: any) => {
        if (value === '') {
          callback(new Error('收货人电话不能为空'))
        } else if (!/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(value)) {
          callback(new Error('请输入正确的手机号码'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
})
let visible = ref<boolean>(false)


let save = () => {
  emits('save', info.value)
}
let del = () => {
  emits('delete', info.value)
}
let genID = (length: number) => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
}

onMounted(() => {
  info.value.id = genID(20)
})
</script>

<style scoped lang="scss">
.cc-address-edit {
  padding: 12px;
  &-field {
    border-radius: 8px;
  }
  &-default {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    overflow: hidden;
    border-radius: 8px;
    background: #fff;
    padding: 10px 16px;
  }
  &-button {
    &-save {
      margin-top: 30px;
      margin-bottom: 15px;
    }
  }
}
</style>