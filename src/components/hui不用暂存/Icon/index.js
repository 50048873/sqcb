// 普通图标
import IconNormalExplain from './iconNormal/IconNormalExplain'
import IconNormalWind from './iconNormal/IconNormalWind'
// 动画图标
import IconAnimatedRain from './iconAnimated/IconAnimatedRain'
import IconAnimatedWater from './iconAnimated/IconAnimatedWater'
import IconAnimatedWater2 from './iconAnimated/IconAnimatedWater2'
import IconAnimatedWater3 from './iconAnimated/IconAnimatedWater3'
import IconAnimatedWind from './iconAnimated/IconAnimatedWind'

export default (Vue) => {
  Vue.component(IconNormalExplain.name, IconNormalExplain)
  Vue.component(IconNormalWind.name, IconNormalWind)

  Vue.component(IconAnimatedRain.name, IconAnimatedRain)
  Vue.component(IconAnimatedWater.name, IconAnimatedWater)
  Vue.component(IconAnimatedWater2.name, IconAnimatedWater2)
  Vue.component(IconAnimatedWater3.name, IconAnimatedWater3)
  Vue.component(IconAnimatedWind.name, IconAnimatedWind)
}
