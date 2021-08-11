<template>
  <div class="demo">
    <div class="demo-item" v-for="(item, index) in list" :key="index">
      <div class="demo-title">{{ item.title }}</div>
      <div class="demo-content" v-for="(item1, index1) in item.item" :key="index1" @click="clickItem(item1)">
        <div class="demo-content-left">
          <div class="demo-content-left-label">{{ item1.label }}</div>
          <div class="demo-content-left-title">{{ item1.title }}</div>
        </div>
        <div class="demo-content-icon">
          <cc-icon type="arrowright" size="22" color="#979797"></cc-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from "vue-router"

let router = useRouter()

interface Item {
  label: string,
  title: string,
  url: string
}

interface ListItem {
  title: string,
  item: Item[]
}
let list: ListItem[] = [
  {
    title: '基础组件',
    item: [
      {
        label: 'Button',
        title: '按钮',
        url: '/button'
      },
      {
        label: 'Cell',
        title: '单元格',
        url: '/cell'
      },
      {
        label: 'Layout',
        title: '布局',
        url: '/layout'
      },
      {
        label: 'Popup',
        title: '弹出层',
        url: '/popup'
      },
      {
        label: 'Toast',
        title: '轻提示',
        url: '/toast'
      },
    ]
  },
  {
    title: '表单组件',
    item: [
      {
        title: 'Calendar',
        label: '日历',
        url: '/calendar'
      },
      {
        title: 'Checkbox',
        label: '复选框',
        url: '/checkbox'
      },
      {
        title: 'Filed',
        label: '输入框',
        url: '/field'
      },
      {
        title: 'Form',
        label: '表单',
        url: '/form'
      },
      {
        title: 'NumberKeyboard',
        label: '数字键盘',
        url: '/numberKeyboard'
      },
      {
        title: 'PasswordInput',
        label: '密码输入框',
        url: '/passwordInput'
      },
      {
        title: 'Radio',
        label: '单选框',
        url: '/radio'
      },
      {
        title: 'Rate',
        label: '评分',
        url: '/rate'
      },
      {
        title: 'Search',
        label: '搜索框',
        url: '/search'
      },
      {
        title: 'Slider',
        label: '滑块',
        url: '/slider'
      },
      {
        title: 'Stepper',
        label: '步进器',
        url: '/stepper'
      },
      {
        title: 'Switch',
        label: '开关',
        url: '/switch'
      },
      {
        title: 'Checker',
        label: '选择项',
        url: '/checker'
      },
      {
        title: 'Upload',
        label: '文件上传',
        url: '/upload'
      },
    ]
  },
  {
    title: '反馈组件',
    item: [
      {
        title: 'ActionSheet',
        label: '动作面板',
        url: '/actionSheet'
      },
      {
        title: 'Dialog',
        label: '弹出框',
        url: '/dialog'
      },
      {
        title: 'DropdownMenu',
        label: '下拉菜单',
        url: '/dropdown'
      },
      {
        title: 'Loading',
        label: '加载',
        url: '/loading'
      },
      {
        title: 'Notify',
        label: '消息通知',
        url: '/notify'
      },
      {
        title: 'Mask',
        label: '遮罩层',
        url: '/mask'
      },
      {
        title: 'PullRefresh',
        label: '下拉刷新',
        url: '/pullRefresh'
      },
      {
        title: 'SwipeCell',
        label: '滑动单元格',
        url: '/swipeCell'
      },
      {
        title: 'Avatar',
        label: '头像',
        url: '/avatar'
      },
    ]
  },
  {
    title: '展示组件',
    item: [
      {
        title: 'Badge',
        label: '徽标',
        url: '/badge'
      },
      {
        title: 'CircleProgress',
        label: '环形进度条',
        url: '/circleProgress'
      },
      {
        title: 'Collapse',
        label: '折叠面板',
        url: '/collapse'
      },
      {
        title: 'CountDown',
        label: '倒计时',
        url: '/countDown'
      },
      {
        title: 'Countup',
        label: '数字滚动',
        url: '/countup'
      },
      {
        title: 'Divider',
        label: '分割线',
        url: '/divider'
      },
      {
        title: 'ImagePreview',
        label: '图片预览',
        url: '/imagePreview'
      },
      {
        title: 'NoticeBar',
        label: '通知栏',
        url: '/noticeBar'
      },
      {
        title: 'Progress',
        label: '进度条',
        url: '/progress'
      },
      {
        title: 'Skeleton',
        label: '骨架屏',
        url: '/skeleton'
      },
      {
        title: 'Steps',
        label: '步骤条',
        url: '/steps'
      },
      {
        title: 'Sticky',
        label: '粘性布局',
        url: '/sticky'
      },
      {
        title: 'Swiper',
        label: '轮播',
        url: '/swiper'
      },
      {
        title: 'Tag',
        label: '标签',
        url: '/tag'
      },
      {
        title: 'OpenMore',
        label: '展开更多',
        url: '/openMore'
      },
      {
        title: 'LoadMore',
        label: '加载更多',
        url: '/loadMore'
      },
      {
        title: 'Gap',
        label: '间隔槽',
        url: '/gap'
      },
    ]
  },
  {
    title: '导航组件',
    item: [
      {
        title: 'Grid',
        label: '宫格',
        url: '/grid'
      },
      {
        title: 'IndexBar',
        label: '索引栏',
        url: '/indexBar'
      },
      {
        title: 'NavBar',
        label: '导航栏',
        url: '/navBar'
      },
      {
        title: 'Sidebar',
        label: '侧边导航',
        url: '/sidebar'
      },
      {
        title: 'Tab',
        label: '标签页',
        url: '/tabs'
      },
      {
        title: 'Tabbar',
        label: '标签栏',
        url: '/tabbar'
      },
      {
        title: 'Link',
        label: '超链接',
        url: '/link'
      },
      {
        title: 'TreeSelect',
        label: '分类选择',
        url: '/treeSelect'
      },
    ]
  },
  {
    title: '业务组件',
    item: [
      {
        title: 'AddressEdit',
        label: '地址编辑',
        url: '/addressEdit'
      },
      {
        title: 'AddressList',
        label: '地址列表',
        url: '/addressList'
      },
      // {
      //   title: 'Area',
      //   label: '省市区选择',
      //   url: '/area'
      // },
      {
        title: 'goodsCard',
        label: '商品卡片',
        url: '/goodsCard'
      },
      {
        title: 'contactCard',
        label: '联系人卡片',
        url: '/contactCard'
      },
      {
        title: 'contactList',
        label: '联系人列表',
        url: '/contactList'
      },
      {
        title: 'GoodsAction',
        label: '商品导航',
        url: '/goodsAction'
      },
      {
        title: 'SubmitBar',
        label: '提交订单栏',
        url: '/submitBar'
      },
      {
        title: 'Coupon',
        label: '优惠券',
        url: '/coupon'
      },
    ]
  }
]

let clickItem = (item: Item) => {
  router.push(item.url)
}
</script>

<style lang="scss" scoped>
.demo {
  background: #f7f8fa;
  padding: #{topx(30)} #{topx(25)};
  &-title {
    font-size: 14px;
    color: #909ca4;
    margin-bottom: #{topx(20)};
  }
  &-content {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 #{topx(40)};
    background: #fff;
    height: 45px;
    background: #fff;
    border-radius: #{topx(22)};
    box-shadow: 0 1px 4px 0 rgb(102 102 102 / 6%);
    margin-bottom: #{topx(13)};
    &-left {
      display: flex;
      align-items: center;
      font-weight: 700;
      color: #333;
      &-title {
        margin-left: #{topx(10)};
      }
    }
    &-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: #{topx(30)};
    }
  }
}
</style>