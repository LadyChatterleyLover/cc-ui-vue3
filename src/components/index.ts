import {Component, App} from 'vue'
import ccButton from './cc-button/cc-button.vue'
import ccIcon from './cc-icon/cc-icon.vue'
import ccSearch from './cc-search/cc-search.vue'
import ccTag from './cc-tag/cc-tag.vue'
import ccMask from './cc-mask/cc-mask.vue'
import ccToast from './cc-toast/cc-toast.vue'
import ccDialog from './cc-dialog/cc-dialog.vue'
import ccBadge from './cc-badge/cc-badge.vue'
import ccDivider from './cc-divider/cc-divider.vue'
import ccNotify from './cc-notify/cc-notify.vue'
import ccPopup from './cc-popup/cc-popup.vue'
import ccCell from './cc-cell/cc-cell.vue'
import ccActionSheet from './cc-actionSheet/cc-actionSheet.vue'
import ccNoticeBar from './cc-notice-bar/cc-notice-bar.vue'
import ccRow from './cc-layout/cc-row.vue'
import ccCol from './cc-layout/cc-col.vue'
import ccCountup from './cc-countup/cc-countup.vue'
import ccCollapse from './cc-collapse/cc-collapse.vue'
import ccRate from './cc-rate/cc-rate.vue'
import ccNavBar from './cc-nav-bar/cc-nav-bar.vue'
import ccSkeleton from './cc-skeleton/cc-skeleton.vue'
import ccTabs from './cc-tabs/cc-tabs.vue'
import ccGrid from './cc-grid/cc-grid.vue'
import ccSidebar from './cc-sidebar/cc-sidebar.vue'
import ccAvatar from './cc-avatar/cc-avatar.vue'
import ccSwitch from './cc-switch/cc-switch.vue'
import ccSlider from './cc-slider/cc-slider.vue'
import ccRadio from './cc-radio/cc-radio.vue'
import ccCheckbox from './cc-checkbox/cc-checkbox.vue'
import ccCheckboxGroup from './cc-checkbox/cc-checkbox-group.vue'
import ccStepper from './cc-stepper/cc-stepper.vue'
import ccDropdown from './cc-dropdown/cc-dropdown.vue'
import ccField from './cc-field/cc-field.vue'
import ccVerifyButton from './cc-verify-button/cc-verify-button.vue'
import ccNumberKeyboard from './cc-number-keyboard/cc-number-keyboard.vue'
import ccPasswordInput from './cc-password-input/cc-password-input.vue'
import ccLoading from './cc-loading/cc-loading.vue'
import ccTabbar from './cc-tabbar/cc-tabbar.vue'
import ccPopover from './cc-popover/cc-popover.vue'
import ccForm from './cc-form/cc-form.vue'
import ccFormItem from './cc-form/cc-form-item.vue'
import ccProgress from './cc-progress/cc-progress.vue'
import ccCalendar from './cc-calendar/cc-calendar.vue'
import ccCountDown from './cc-countdown/cc-countdown.vue'
import ccSticky from './cc-sticky/cc-sticky.vue'
import ccSwiper from './cc-swiper/cc-swiper.vue'
import ccAddressList from './cc-address-list/cc-address-list.vue'
import ccAddressEdit from './cc-address-edit/cc-address-edit.vue'
import ccGoodsCard from './cc-goods-card/cc-goods-card.vue'
import ccContactCard from './cc-contact-card/cc-contact-card.vue'
import ccContactList from './cc-contact-list/cc-contact-list.vue'
import ccGoodsAction from './cc-goods-action/cc-goods-action.vue'
import ccSubmitBar from './cc-submit-bar/cc-submit-bar.vue'
import ccCouponCell from './cc-coupon-cell/cc-coupon-cell.vue'
import ccCouponList from './cc-coupon-list/cc-coupon-list.vue'
import ccChecker from './cc-checker/cc-checker.vue'
import ccSteps from './cc-steps/cc-steps.vue'
import ccOpenMore from './cc-open-more/cc-open-more.vue'
import ccLoadMore from './cc-load-more/cc-load-more.vue'
import ccGap from './cc-gap/cc-gap.vue'
import ccLink from './cc-link/cc-link.vue'
import ccTreeSelect from './cc-tree-select/cc-tree-select.vue'
import ccCircleProgress from './cc-circle-progress/cc-circle-progress.vue'
import ccSwipeCell from './cc-swipe-cell/cc-swipe-cell.vue'
import ccArea from './cc-area/cc-area.vue'
import ccUpload from './cc-upload/cc-upload.vue'
import ccImagePreview from './cc-image-preview/cc-image-preview.vue'
import ccPullRefresh from './cc-pull-refresh/cc-pull-refresh.vue'



interface ComponentItem {
  name: string,
  component: Component
}

const components: ComponentItem[] = [
  {
    name: 'cc-button',
    component: ccButton
  },
  {
    name: 'cc-icon',
    component: ccIcon
  },
  {
    name: 'cc-search',
    component: ccSearch
  },
  {
    name: 'cc-tag',
    component: ccTag
  },
  {
    name: 'cc-mask',
    component: ccMask
  },
  {
    name: 'cc-toast',
    component: ccToast
  },
  {
    name: 'cc-dialog',
    component: ccDialog
  },
  {
    name: 'cc-badge',
    component: ccBadge
  },
  {
    name: 'cc-divider',
    component: ccDivider
  },
  {
    name: 'cc-notify',
    component: ccNotify
  },
  {
    name: 'cc-popup',
    component: ccPopup
  },
  {
    name: 'cc-cell',
    component: ccCell
  },
  {
    name: 'cc-swipe-cell',
    component: ccSwipeCell
  },
  {
    name: 'cc-area',
    component: ccArea
  },
  {
    name: 'cc-action-sheet',
    component: ccActionSheet
  },
  {
    name: 'cc-pull-refresh',
    component: ccPullRefresh
  },
  {
    name: 'cc-notice-bar',
    component: ccNoticeBar
  },
  {
    name: 'cc-image-preview',
    component: ccImagePreview
  },
  {
    name: 'cc-row',
    component: ccRow
  },
  {
    name: 'cc-col',
    component: ccCol
  },
  {
    name: 'cc-countup',
    component: ccCountup
  },
  {
    name: 'cc-collapse',
    component: ccCollapse
  },
  {
    name: 'cc-rate',
    component: ccRate
  },
  {
    name: 'cc-nav-bar',
    component: ccNavBar
  },
  {
    name: 'cc-skeleton',
    component: ccSkeleton
  },
  {
    name: 'cc-tabs',
    component: ccTabs
  },
  {
    name: 'cc-grid',
    component: ccGrid
  },
  {
    name: 'cc-steps',
    component: ccSteps
  },
  {
    name: 'cc-sidebar',
    component: ccSidebar
  },
  {
    name: 'cc-avatar',
    component: ccAvatar
  },
  {
    name: 'cc-checker',
    component: ccChecker
  },
  {
    name: 'cc-switch',
    component: ccSwitch
  },
  {
    name: 'cc-slider',
    component: ccSlider
  },
  {
    name: 'cc-link',
    component: ccLink
  },
  {
    name: 'cc-radio',
    component: ccRadio
  },
  {
    name: 'cc-checkbox',
    component: ccCheckbox
  },
  {
    name: 'cc-checkbox-group',
    component: ccCheckboxGroup
  },
  {
    name: 'cc-stepper',
    component: ccStepper
  },
  {
    name: 'cc-dropdown',
    component: ccDropdown
  },
  {
    name: 'cc-upload',
    component: ccUpload
  },
  {
    name: 'cc-field',
    component: ccField
  },
  {
    name: 'cc-verify-button',
    component: ccVerifyButton
  },
  {
    name: 'cc-number-keyboard',
    component: ccNumberKeyboard
  },
  {
    name: 'cc-password-input',
    component: ccPasswordInput
  },
  {
    name: 'cc-loading',
    component: ccLoading
  },
  {
    name: 'cc-tabbar',
    component: ccTabbar
  },
  {
    name: 'cc-popover',
    component: ccPopover
  },
  {
    name: 'cc-form',
    component: ccForm
  },
  {
    name: 'cc-form-item',
    component: ccFormItem
  },
  {
    name: 'cc-progress',
    component: ccProgress
  },
  {
    name: 'cc-circle-progress',
    component: ccCircleProgress
  },
  {
    name: 'cc-calendar',
    component: ccCalendar
  },
  {
    name: 'cc-count-down',
    component: ccCountDown
  },
  {
    name: 'cc-sticky',
    component: ccSticky
  },
  {
    name: 'cc-open-more',
    component: ccOpenMore
  },
  {
    name: 'cc-load-more',
    component: ccLoadMore
  },
  {
    name: 'cc-gap',
    component: ccGap
  },
  {
    name: 'cc-tree-select',
    component: ccTreeSelect
  },
  {
    name: 'cc-swiper',
    component: ccSwiper
  },
  {
    name: 'cc-address-list',
    component: ccAddressList
  },
  {
    name: 'cc-address-edit',
    component: ccAddressEdit
  },
  {
    name: 'cc-goods-card',
    component: ccGoodsCard
  },
  {
    name: 'cc-contact-card',
    component: ccContactCard
  },
  {
    name: 'cc-contact-list',
    component: ccContactList
  },
  {
    name: 'cc-goods-action',
    component: ccGoodsAction
  },
  {
    name: 'cc-submit-bar',
    component: ccSubmitBar
  },
  {
    name: 'cc-coupon-cell',
    component: ccCouponCell
  },
  {
    name: 'cc-coupon-list',
    component: ccCouponList
  },
]

export default {
  install(app: App) {
    components.map((item: ComponentItem) => {
      app.component(item.name, item.component)
    })
  }
}