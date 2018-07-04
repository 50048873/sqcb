import Vue from 'vue'
import List1 from '@/components/hui/List1'
import Table1 from '@/components/hui/Table1'
import RouterviewSlide from '@/components/hui/RouterviewSlide'
import Tab1 from '@/components/hui/Tab1'
import Icon from '@/components/hui/Icon'

export default function useComponent () {
  Vue.use(List1)
  Vue.use(Table1)
  Vue.use(RouterviewSlide)
  Vue.use(Tab1)
  Vue.use(Icon)
}
