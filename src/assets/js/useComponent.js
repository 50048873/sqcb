import Vue from 'vue'
import HuiList1 from '@/components/hui/HuiList1'
import HuiTable1 from '@/components/hui/HuiTable1'
import HuiSlide from '@/components/hui/HuiSlide'
import HuiTab1 from '@/components/hui/HuiTab1'

export default function useComponent () {
  Vue.use(HuiList1)
  Vue.use(HuiTable1)
  Vue.use(HuiSlide)
  Vue.use(HuiTab1)
}
