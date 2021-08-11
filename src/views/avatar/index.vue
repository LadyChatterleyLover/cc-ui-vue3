<template>
  <div>
    <div class="demo">
      <div class="demo-title">基本用法</div>
      <div class="demo-item">
        <div>
          <cc-avatar :src="src" size="small"></cc-avatar>
        </div>
        <div>
          <cc-avatar :src="src"></cc-avatar>
        </div>
        <div>
          <cc-avatar :src="src" size="large"></cc-avatar>
        </div>
        <div>
          <cc-avatar :src="src" size="80"></cc-avatar>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">方形头像</div>
      <div class="demo-item">
        <div>
          <cc-avatar :round="false" :src="src" size="small"></cc-avatar>
        </div>
        <div>
          <cc-avatar :round="false" :src="src"></cc-avatar>
        </div>
        <div>
          <cc-avatar :round="false" :src="src" size="large"></cc-avatar>
        </div>
        <div>
          <cc-avatar :round="false" :src="src" size="80"></cc-avatar>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义内容</div>
      <div class="demo-item">
        <div>
          <cc-avatar>
            user
          </cc-avatar>
        </div>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">加载失败</div>
      <div class="demo-item">
        <div>
          <cc-avatar size='50' :src="`${src}1`" @error='handleError'>
            <img width="35" height="35" src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
          </cc-avatar>
        </div>
        <div>
          <cc-avatar size='60' :src="`${src}1`">
            加载失败
          </cc-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
let src: string = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'

let handleError = () => {
  console.log('error')
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
    margin-left: #{topx(15)};
    div {
      margin-left: #{topx(15)};
    }
  }
}
</style>