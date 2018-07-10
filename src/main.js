// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/less/base.less'
import '../static/weui/dist/style/weui.min.css'
import '@/assets/less/common.less'
import '@/assets/less/animate.less'

// 注册Hui组件
import * as Hui from 'hui'
import 'hui/src/assets/less/hui.css'
import 'hui/src/assets/font-hui/style.css'

// 注册全局组件
import NoData from '@/components/base/NoData'

// 注册Hui组件
Vue.use(Hui.all)

// 注册全局组件
Vue.component('no-data', NoData)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
