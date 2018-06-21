import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/base/List'
import Detail from '@/components/base/Detail'
import WarnCondition from '@/components/Rain/WarnCondition'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '水情测报'
      }
    },
    {
      path: '/water',
      name: 'Water',
      component: List,
      meta: {
        title: '水情信息'
      }
    },
    {
      path: '/water/:id',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '水位信息'
      }
    },
    {
      path: '/rain',
      name: 'Rain',
      component: List,
      meta: {
        title: '雨情信息'
      }
    },
    {
      path: '/rain/warnCondition',
      name: 'warnCondition',
      component: WarnCondition,
      meta: {
        title: '降雨报警说明'
      }
    },
    {
      path: '/rain/:id',
      name: 'RainDetail',
      component: Detail,
      meta: {
        title: '雨位信息'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let title
  if (to.meta && to.meta.title) {
    title = to.meta.title
    if (to.query && to.query.title) {
      title = to.query.title + title
    }
  }
  document.title = title
  next()
})

export default router
