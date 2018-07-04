<template>
  <div class="Water fullScreen">
    <hui-list1 class="theme2" :data="data" theme="HuiList1-theme2" @list-click="listClick"></hui-list1>
    <float-ball v-if="showFloatBall" right="15" bottom="15" @ball-click="ballClick">
      <hui-icon-normal-explain class="iconExplain" v-if="isRain"></hui-icon-normal-explain>
      <hui-icon-normal-wind class="iconExplain" v-if="isWind"></hui-icon-normal-wind>
    </float-ball>
  </div>
</template>

<script>
import FloatBall from '@/components/base/FloatBall'
import * as api from '@/assets/js/api'
import {success} from '@/assets/js/config'
// const waterList = [
//   {
//     'id': 1,
//     'title': '中宁站',
//     'time': '2018-06-13 14:22',
//     'status': 1,
//     'children': [
//       {
//         'title': '水位',
//         'value': '55.4',
//         'unit': 'm'
//       },
//       {
//         'title': '预警水位',
//         'value': '1443.32',
//         'unit': 'm'
//       }
//     ]
//   },
//   {
//     'id': 2,
//     'title': '红堡寺站',
//     'time': '2018-06-13 14:22',
//     'children': [
//       {
//         'title': '水位',
//         'value': '55.4',
//         'unit': 'mm'
//       },
//       {
//         'title': '预警水位',
//         'value': '1443.32',
//         'unit': 'm'
//       }
//     ]
//   },
//   {
//     'id': 3,
//     'title': '河西镇',
//     'time': '2018-06-13 14:22',
//     'children': [
//       {
//         'title': '水位',
//         'value': '55.4',
//         'unit': 'mm'
//       },
//       {
//         'title': '预警水位',
//         'value': '1443.32',
//         'unit': 'm'
//       }
//     ]
//   }
// ]
const rainList = [
  {
    'id': 1,
    'title': '中宁站',
    'time': '2018-06-13 14:22',
    'status': 1,
    'children': [
      {
        'title': '今日雨量',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '当年累计',
        'value': '1443.32',
        'unit': 'm'
      }
    ]
  },
  {
    'id': 2,
    'title': '红堡寺站',
    'time': '2018-06-13 14:22',
    'children': [
      {
        'title': '今日雨量',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '当年累计',
        'value': '1443.32',
        'unit': 'm'
      }
    ]
  },
  {
    'id': 3,
    'title': '河西镇',
    'time': '2018-06-13 14:22',
    'children': [
      {
        'title': '今日雨量',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '当年累计',
        'value': '1443.32',
        'unit': 'm'
      }
    ]
  }
]
const windList = [
  {
    'id': 1,
    'title': '中宁站',
    'time': '2018-06-13 14:22',
    'status': 1,
    'children': [
      {
        'title': '风速',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '风力等级',
        'value': '12',
        'unit': ''
      },
      {
        'title': '风向',
        'value': '东南风',
        'unit': ''
      }
    ]
  },
  {
    'id': 2,
    'title': '红堡寺站',
    'time': '2018-06-13 14:22',
    'children': [
      {
        'title': '风速',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '风力等级',
        'value': '12',
        'unit': ''
      },
      {
        'title': '风向',
        'value': '东南风',
        'unit': ''
      }
    ]
  },
  {
    'id': 3,
    'title': '河西镇',
    'time': '2018-06-13 14:22',
    'children': [
      {
        'title': '风速',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '风力等级',
        'value': '12',
        'unit': ''
      },
      {
        'title': '风向',
        'value': '东南风',
        'unit': ''
      }
    ]
  }
]
export default {
  name: 'Water',
  components: {
    FloatBall
  },
  data () {
    return {
      showFloatBall: false,
      data: [],
      isRain: false,
      isWind: false,
      isWater: false
    }
  },
  beforeRouteEnter (to, from, next) {
    api.getRiverRealList()
      .then((res) => {
        if (res.status === success) {
          console.log(res)
          next((vm) => {
            console.log(vm)
            vm.data = vm.convertRiverRealList(res.data)
            console.log(vm.data)
          })
        } else {
          console.log(res.msg)
        }
      }, (err) => {
        console.log(err)
      })
  },
  methods: {
    listClick (item, index) {
      const parentPath = this.$route.path
      this.$router.push({path: `${parentPath}/${item.id}`, query: {title: item.title}})
    },
    ballClick (iconClass) {
      const parentPath = this.$route.path
      const name = this.$route.name
      this.$router.push(`${parentPath}/${name}Condition`)
    },
    handleFloatBallStatus () {
      const name = this.$route.name.toLowerCase()
      switch (name) {
        case 'rain':
          this.showFloatBall = true
          this.data = rainList
          this.isRain = true
          break
        case 'wind':
          this.showFloatBall = true
          this.data = windList
          this.isWind = true
          break
        default:
          this.showFloatBall = false
          // this.data = waterList
          this.isWater = true
      }
    },
    convertRiverRealList (data) {
      let res = []
      data.forEach((item) => {
        let obj = {
          children: []
        }
        obj.title = item.riverNmae
        obj.time = item.times
        obj.status = item.warnType
        obj.children.push({
          title: '水位',
          value: item.z,
          unit: 'm'
        })
        obj.children.push({
          title: '预警水位',
          value: item.warnValue,
          unit: 'm'
        })
        res.push(obj)
      })
      return res
    }
  },
  created () {
    this.handleFloatBallStatus()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.Water {
  .HuiList1-theme2.theme2 {
    li {
      margin-right: 10px;
      margin-left: 10px;
    }
  }
  .iconExplain {
    width: 30px;
    height: 30px;
    fill: white;
  }
}
</style>
