<template>
  <div class="Water fullScreen">
    <HuiList1 :data="data" @list-click="listClick"></HuiList1>
    <FloatBall v-if="showFloatBall" right="15" bottom="15" @ball-click="ballClick"></FloatBall>
  </div>
</template>

<script>
import HuiList1 from '@/components/hui/HuiList1'
import FloatBall from '@/components/base/FloatBall'
export default {
  name: 'Water',
  components: {
    HuiList1,
    FloatBall
  },
  data () {
    return {
      showFloatBall: false,
      data: [
        {
          'id': 1,
          'title': '中宁站',
          'time': '2018-06-13 14:22',
          'children': [
            {
              'title': '水位',
              'value': '1443.54',
              'unit': 'm',
              'status': 1
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
              'value': '1730.24',
              'unit': 'm',
              'status': 1
            },
            {
              'title': '预警水位',
              'value': '1729.33',
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
              'value': '1722.24',
              'unit': 'm',
              'status': 0
            },
            {
              'title': '预警水位',
              'value': '1723.45',
              'unit': 'm'
            }
          ]
        }
      ]
    }
  },
  methods: {
    listClick (item, index) {
      const parentPath = this.$route.path
      this.$router.push({path: `${parentPath}/${item.id}`, query: {title: item.title}})
    },
    ballClick (iconClass) {
      const parentPath = this.$route.path
      this.$router.push(`${parentPath}/warnCondition`)
    },
    handleFloatBallStatus () {
      const name = this.$route.name.toLowerCase()
      switch (name) {
        case 'rain':
          this.showFloatBall = true
          break
        default:
          this.showFloatBall = false
      }
    }
  },
  created () {
    this.handleFloatBallStatus()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Water {
}
</style>
