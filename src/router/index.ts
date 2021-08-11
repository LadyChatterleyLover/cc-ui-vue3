import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
const isPro = process.env.NODE_ENV !== 'production'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/demo/category.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/demo/cart.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/demo/my.vue'),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../views/button/index.vue'),
    meta: {
      title: '按钮'
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/search/index.vue'),
    meta: {
      title: '搜索框'
    }
  },
  {
    path: '/tag',
    name: 'tag',
    component: () => import('../views/tag/index.vue'),
    meta: {
      title: '标签'
    }
  },
  {
    path: '/mask',
    name: 'mask',
    component: () => import('../views/mask/index.vue'),
    meta: {
      title: '遮罩层'
    }
  },
  {
    path: '/toast',
    name: 'toast',
    component: () => import('../views/toast/index.vue'),
    meta: {
      title: '轻提示'
    }
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('../views/dialog/index.vue'),
    meta: {
      title: '弹出框'
    }
  },
  {
    path: '/badge',
    name: 'badge',
    component: () => import('../views/badge/index.vue'),
    meta: {
      title: '徽标'
    }
  },
  {
    path: '/divider',
    name: 'divider',
    component: () => import('../views/divider/index.vue'),
    meta: {
      title: '分割线'
    }
  },
  {
    path: '/notify',
    name: 'notify',
    component: () => import('../views/notify/index.vue'),
    meta: {
      title: 'notify消息通知'
    }
  },
  {
    path: '/popup',
    name: 'popup',
    component: () => import('../views/popup/index.vue'),
    meta: {
      title: '弹出层'
    }
  },
  {
    path: '/cell',
    name: 'cell',
    component: () => import('../views/cell/index.vue'),
    meta: {
      title: '单元格'
    }
  },
  {
    path: '/swipeCell',
    name: 'swipeCell',
    component: () => import('../views/swipeCell/index.vue'),
    meta: {
      title: '滑动单元格'
    }
  },
  {
    path: '/actionSheet',
    name: 'actionSheet',
    component: () => import('../views/actionSheet/index.vue'),
    meta: {
      title: '操作面板'
    }
  },
  {
    path: '/noticeBar',
    name: 'noticeBar',
    component: () => import('../views/noticeBar/index.vue'),
    meta: {
      title: '通知栏'
    }
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout/index.vue'),
    meta: {
      title: 'layout布局'
    }
  },
  {
    path: '/countup',
    name: 'countup',
    component: () => import('../views/countup/index.vue'),
    meta: {
      title: '数字滚动'
    }
  },
  {
    path: '/collapse',
    name: 'collapse',
    component: () => import('../views/collapse/index.vue'),
    meta: {
      title: '折叠面板'
    }
  },
  {
    path: '/rate',
    name: 'rate',
    component: () => import('../views/rate/index.vue'),
    meta: {
      title: '评分'
    }
  },
  {
    path: '/navBar',
    name: 'navBar',
    component: () => import('../views/navBar/index.vue'),
    meta: {
      title: 'navBar导航栏'
    }
  },
  {
    path: '/skeleton',
    name: 'skeleton',
    component: () => import('../views/skeleton/index.vue'),
    meta: {
      title: '骨架屏'
    }
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import('../views/tabs/index.vue'),
    meta: {
      title: '标签页'
    }
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('../views/grid/index.vue'),
    meta: {
      title: '宫格'
    }
  },
  {
    path: '/sidebar',
    name: 'sidebar',
    component: () => import('../views/sidebar/index.vue'),
    meta: {
      title: '侧边导航'
    }
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: () => import('../views/avatar/index.vue'),
    meta: {
      title: '头像'
    }
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('../views/switch/index.vue'),
    meta: {
      title: '开关'
    }
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import('../views/slider/index.vue'),
    meta: {
      title: '滑块'
    }
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import('../views/radio/index.vue'),
    meta: {
      title: '单选框'
    }
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('../views/checkbox/index.vue'),
    meta: {
      title: 'checkbox多选框'
    }
  },
  {
    path: '/stepper',
    name: 'stepper',
    component: () => import('../views/stepper/index.vue'),
    meta: {
      title: '步进器'
    }
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: () => import('../views/dropdown/index.vue'),
    meta: {
      title: '下拉菜单'
    }
  },
  {
    path: '/field',
    name: 'field',
    component: () => import('../views/field/index.vue'),
    meta: {
      title: '输入框'
    }
  },
  {
    path: '/checker',
    name: 'checker',
    component: () => import('../views/checker/index.vue'),
    meta: {
      title: '选择项'
    }
  },
  {
    path: '/verifyButton',
    name: 'verifyButton',
    component: () => import('../views/verifyButton/index.vue'),
    meta: {
      title: '验证码按钮'
    }
  },
  {
    path: '/numberKeyboard',
    name: 'numberKeyboard',
    component: () => import('../views/numberKeyboard/index.vue'),
    meta: {
      title: '数字输入框'
    }
  },
  {
    path: '/passwordInput',
    name: 'passwordInput',
    component: () => import('../views/passwordInput/index.vue'),
    meta: {
      title: '密码输入框'
    }
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../views/loading/index.vue'),
    meta: {
      title: '加载'
    }
  },
  {
    path: '/tabbar',
    name: 'tabbar',
    component: () => import('../views/tabbar/index.vue'),
    meta: {
      title: 'tabbar底部导航栏'
    }
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/form/index.vue'),
    meta: {
      title: 'form表单'
    }
  },
  {
    path: '/progress',
    name: 'progress',
    component: () => import('../views/progress/index.vue'),
    meta: {
      title: '进度条'
    }
  },
  {
    path: '/circleProgress',
    name: 'circleProgress',
    component: () => import('../views/circleProgress/index.vue'),
    meta: {
      title: '圆形进度条'
    }
  },
  {
    path: '/steps',
    name: 'steps',
    component: () => import('../views/steps/index.vue'),
    meta: {
      title: '步骤条'
    }
  },
  {
    path: '/openMore',
    name: 'openMore',
    component: () => import('../views/openMore/index.vue'),
    meta: {
      title: '展开更多'
    }
  },
  {
    path: '/loadMore',
    name: 'loadMore',
    component: () => import('../views/loadMore/index.vue'),
    meta: {
      title: '加载更多'
    }
  },
  {
    path: '/gap',
    name: 'gap',
    component: () => import('../views/gap/index.vue'),
    meta: {
      title: '加载更多'
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/upload/index.vue'),
    meta: {
      title: '上传'
    }
  },
  {
    path: '/imagePreview',
    name: 'imagePreview',
    component: () => import('../views/imagePreview/index.vue'),
    meta: {
      title: '图片预览'
    }
  },
  {
    path: '/pullRefresh',
    name: 'pullRefresh',
    component: () => import('../views/pullRefresh/index.vue'),
    meta: {
      title: '下拉刷新'
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/calendar/index.vue'),
    meta: {
      title: '日历'
    }
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: () => import('../views/countdown/index.vue'),
    meta: {
      title: '倒计时'
    }
  },
  {
    path: '/sticky',
    name: 'sticky',
    component: () => import('../views/sticky/index.vue'),
    meta: {
      title: '粘性布局'
    }
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('../views/swiper/index.vue'),
    meta: {
      title: '轮播'
    }
  },
  {
    path: '/link',
    name: 'link',
    component: () => import('../views/link/index.vue'),
    meta: {
      title: '超链接'
    }
  },
  {
    path: '/treeSelect',
    name: 'treeSelect',
    component: () => import('../views/treeSelect/index.vue'),
    meta: {
      title: '分类选择'
    }
  },
  {
    path: '/addressList',
    name: 'addressList',
    component: () => import('../views/addressList/index.vue'),
    meta: {
      title: '地址列表'
    }
  },
  {
    path: '/addressEdit',
    name: 'addressEdit',
    component: () => import('../views/addressEdit/index.vue'),
    meta: {
      title: '地址编辑'
    }
  },
  {
    path: '/area',
    name: 'area',
    component: () => import('../views/area/index.vue'),
    meta: {
      title: '省市区选择'
    }
  },
  {
    path: '/goodsCard',
    name: 'goodsCard',
    component: () => import('../views/goodsCard/index.vue'),
    meta: {
      title: '商品卡片'
    }
  },
  {
    path: '/contactCard',
    name: 'contactCard',
    component: () => import('../views/contactCard/index.vue'),
    meta: {
      title: '联系人卡片'
    }
  },
  {
    path: '/contactList',
    name: 'contactList',
    component: () => import('../views/contactList/index.vue'),
    meta: {
      title: '联系人列表'
    }
  },
  {
    path: '/goodsAction',
    name: 'goodsAction',
    component: () => import('../views/goodsAction/index.vue'),
    meta: {
      title: '商品导航'
    }
  },
  {
    path: '/submitBar',
    name: 'submitBar',
    component: () => import('../views/submitBar/index.vue'),
    meta: {
      title: '提交订单栏'
    }
  },
  {
    path: '/coupon',
    name: 'coupon',
    component: () => import('../views/coupon/index.vue'),
    meta: {
      title: '优惠券'
    }
  },
]

const router = createRouter({
  history: isPro ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string
  next()
})

export default router
