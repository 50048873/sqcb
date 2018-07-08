import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import List from '@/components/base/List'
import Detail from '@/components/base/Detail'
import RainCondition from '@/components/rain/RainCondition'
import WindCondition from '@/components/wind/WindCondition'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '水情测报'
      }
    },
    {
      path: '/water',
      name: 'water',
      component: List,
      meta: {
        title: '水情信息'
      }
    },
    {
      path: '/water/:id',
      name: 'waterDetail',
      props: true,
      component: Detail,
      meta: {
        title: '水位信息'
      }
    },
    {
      path: '/rain',
      name: 'rain',
      component: List,
      meta: {
        title: '雨情信息'
      }
    },
    {
      path: '/rain/RainCondition',
      name: 'rainCondition',
      component: RainCondition,
      meta: {
        title: '降雨报警说明'
      }
    },
    {
      path: '/rain/:id',
      name: 'rainDetail',
      props: true,
      component: Detail,
      meta: {
        title: '雨位信息'
      }
    },
    {
      path: '/wind',
      name: 'wind',
      component: List,
      meta: {
        title: '风情信息'
      }
    },
    {
      path: '/wind/WindCondition',
      name: 'windCondition',
      component: WindCondition,
      meta: {
        title: '风力等级说明'
      }
    },
    {
      path: '/wind/:id',
      name: 'windDetail',
      props: true,
      component: Detail,
      meta: {
        title: '风情信息'
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
    document.title = title
  }
  next()
})

export default router
