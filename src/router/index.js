import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Water from '@/components/Water'

Vue.use(Router)

const router = new Router({
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
      component: Water,
      meta: {
        title: '水情信息'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
