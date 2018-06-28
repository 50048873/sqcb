<template>
  <div class="Water fullScreen">
    <hui-list1 class="theme2" :data="data" theme="HuiList1-theme2" @list-click="listClick"></hui-list1>
    <float-ball v-if="showFloatBall" right="15" bottom="15" @ball-click="ballClick"></float-ball>
  </div>
</template>

<script>
import FloatBall from '@/components/base/FloatBall'
const waterList = [
  {
    'id': 1,
    'title': '中宁站',
    'time': '2018-06-13 14:22',
    'status': 1,
    'children': [
      {
        'title': '水位',
        'value': '55.4',
        'unit': 'm'
      },
      {
        'title': '预警水位',
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
        'title': '水位',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '预警水位',
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
        'title': '水位',
        'value': '55.4',
        'unit': 'mm'
      },
      {
        'title': '预警水位',
        'value': '1443.32',
        'unit': 'm'
      }
    ]
  }
]
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
      data: []
    }
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
          break
        case 'wind':
          this.showFloatBall = true
          this.data = windList
          break
        default:
          this.showFloatBall = false
          this.data = waterList
      }
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
}
</style>
