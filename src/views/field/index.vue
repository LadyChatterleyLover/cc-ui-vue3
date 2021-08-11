
  <template>
  <div style="background: #f7f7f7;height: 100vh;">
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <cc-field
          v-model:value="value1"
          label="文本"
          :border="false"
          clearable
          @clear="handleClear"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @click="handleClick"
          @clickLeft="clickLeft"
        ></cc-field>
      </div>
      <div v-if="value1">当前输入框值: {{ value1 }}</div>
    </div>

    <div class="demo">
      <div class="demo-title">输入框类型</div>
      <div class="demo-item">
        <cc-field v-model:value="value2" label="文本"></cc-field>
      </div>
      <div class="demo-item">
        <cc-field v-model:value="value3" label="密码" type="password"></cc-field>
      </div>
      <div class="demo-item">
        <cc-field v-model:value="value4" type="tel" label="手机号"></cc-field>
      </div>
      <div class="demo-item">
        <cc-field v-model:value="value5" type="number" label="数字"></cc-field>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">禁用状态</div>
      <div class="demo-item">
        <cc-field v-model:value="value10" label="只读" readonly></cc-field>
      </div>
      <div class="demo-item">
        <cc-field v-model:value="value10" label="禁用" disabled></cc-field>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">显示图标</div>
      <div class="demo-item">
        <cc-field
          v-model:value="value8"
          left-icon="search"
          right-icon="person"
          placeholder="显示图标"
          label="文本"
          @clickRight="clickRight"
        ></cc-field>
      </div>
      <div class="demo-item">
        <cc-field left-icon="chat" v-model:value="value9" placeholder="显示图标" label="文本"></cc-field>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">必填</div>
      <div class="demo-item">
        <cc-field v-model:value="value10" label="文本" required></cc-field>
      </div>
      <div class="demo-item">
        <cc-field v-model:value="value11" label="文本" required error error-message="都怪那天雨下的太急"></cc-field>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">输入长度限制</div>
      <div class="demo-item">
        <cc-field :maxlength="50" show-word-limit v-model:value="value12" label="文本"></cc-field>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自适应高度</div>
      <div class="demo-item">
        <cc-field
          :maxlength="200"
          show-word-limit
          v-model:value="value13"
          type="textarea"
          rows="1"
          label="文本"
        ></cc-field>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">插入按钮</div>
      <div class="demo-item">
        <cc-field v-model:value="value14" label="文本">
          <template #button>
            <cc-button type="success" size="small">发送验证码</cc-button>
          </template>
        </cc-field>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let value1 = ref<string>('')
let value2 = ref<string>('')
let value3 = ref<string>('')
let value4 = ref<string>('')
let value5 = ref<string>('')
let value6 = ref<string>('只读状态')
let value7 = ref<string>('禁用状态')
let value8 = ref<string>('')
let value9 = ref<string>('123')
let value10 = ref<string>('')
let value11 = ref<string>('遇见你的那天起')
let value12 = ref<string>('')
let value13 = ref<string>('')
let value14 = ref<string>('')

let handleInput = (val: string) => {
  console.log(val)
}
let handleChange = (val: string) => {
  console.log(val)
}
let handleFocus = (e: FocusEvent) => {
  console.log('focus', e)
}
let handleBlur = (e: FocusEvent) => {
  console.log('blur', e)
}
let handleClick = (e: MouseEvent) => {
  console.log('click', e)
}
let handleClear = (e: MouseEvent) => {
  console.log('clear')
}
let clickLeft = (e: MouseEvent) => {
  console.log('clickLeft', e)
}
let clickRight = (e: MouseEvent) => {
  console.log('clickRight', e)
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: 20px;
  padding: 10px;
  &-title {
    padding: 10px;
  }
  &-item {
    padding: 0 5px;
    margin-bottom: 10px;
  }
}
</style>