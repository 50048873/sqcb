// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '@/assets/less/base.less'
import '../static/weui/dist/style/weui.min.css'
import '@/assets/less/common.less'

import useComponent from '@/assets/js/useComponent'
useComponent()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
