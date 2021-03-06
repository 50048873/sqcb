<template>
  <div class="Water fullScreen">
    <hui-list1 class="theme2" :data="data" theme="HuiList1-theme2" @list-click="listClick" @warn-click="warnClick"></hui-list1>
    <float-ball v-if="showFloatBall" right="15" bottom="15" @ball-click="ballClick">
      <hui-icon-normal-explain class="iconExplain" v-if="isRain"></hui-icon-normal-explain>
      <hui-icon-normal-wind class="iconExplain" v-if="isWind"></hui-icon-normal-wind>
    </float-ball>
    <hui-dialog
      :title="dialog.title"
      :visible.sync="dialog.visible"
      width="80%">
      <p v-for="(value, key) in dialog.data" :key="key">{{value}}</p>
    </hui-dialog>
  </div>
</template>

<script>
import FloatBall from '@/components/base/FloatBall'
import * as api from '@/assets/js/api'
import {success, noDataHintTxt} from '@/assets/js/config'
import {loading, isObject, handleDecimalLength, getServerErrorMessageAsHtml, convertWindDrection} from '@/assets/js/util'
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
      isWater: false,
      dialog: {
        visible: false,
        title: '',
        data: {}
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    loading.remove()
    next()
  },
  methods: {
    listClick (item, index) {
      const parentPath = this.$route.path
      this.$router.push({path: `${parentPath}/${item.stcd}`, query: {title: item.title}})
    },
    warnClick (item, index) {
      if (this.isRain) {
        api.getAllWarnListByStcd({stcd: item.stcd})
          .then((res) => {
            if (res.status === success) {
              let data = res.data
              if (isObject(data)) {
                this.dialog.visible = true
                this.dialog.title = item.title
                this.dialog.data = data
              } else if (data) {
                this.$message({content: noDataHintTxt, icon: 'hui-warn'})
              }
            } else {
              this.$message({content: res.msg, icon: 'hui-warn'})
            }
          }, (err) => {
            this.$message({content: getServerErrorMessageAsHtml(err, 'List.vue->getAllWarnListByStcd'), icon: 'hui-warn'})
          })
      }
    },
    ballClick (iconClass) {
      const parentPath = this.$route.path
      const name = this.$route.name
      this.$router.push(`${parentPath}/${name}Condition`)
    },
    handleFloatBallStatus () {
      const name = this.$route.name
      switch (name) {
        case 'water':
          this.showFloatBall = false
          this.getRiverRealList()
          this.isWater = true
          break
        case 'rain':
          this.showFloatBall = true
          this.getPptnRealList()
          this.isRain = true
          break
        case 'wind':
          this.showFloatBall = true
          this.getFqList()
          this.isWind = true
          break
      }
    },
    getRiverRealList () {
      api.getRiverRealList()
        .then((res) => {
          if (res.status === success) {
            let data = res.data
            if (Array.isArray(data)) {
              this.data = this.convertRiverRealList(data)
            } else if (data) {
              this.$message({content: noDataHintTxt, icon: 'hui-warn'})
            }
          } else {
            this.$message({content: res.msg, icon: 'hui-warn'})
          }
        }, (err) => {
          this.$message({content: getServerErrorMessageAsHtml(err, 'List.vue->getRiverRealList'), icon: 'hui-warn'})
        })
    },
    getPptnRealList () {
      api.getPptnRealList()
        .then((res) => {
          if (res.status === success) {
            let data = res.data
            if (Array.isArray(data)) {
              this.data = this.convertPptnRealList(data)
            } else if (data) {
              this.$message({content: noDataHintTxt, icon: 'hui-warn'})
            }
          } else {
            this.$message({content: res.msg, icon: 'hui-warn'})
          }
        }, (err) => {
          this.$message({content: getServerErrorMessageAsHtml(err, 'List.vue->getPptnRealList'), icon: 'hui-warn'})
        })
    },
    getFqList () {
      api.getFqList()
        .then((res) => {
          if (res.status === success) {
            let data = res.data
            if (Array.isArray(data)) {
              this.data = this.convertFqList(data)
            } else if (data) {
              this.$message({content: noDataHintTxt, icon: 'hui-warn'})
            }
          } else {
            this.$message({content: res.msg, icon: 'hui-warn'})
          }
        }, (err) => {
          this.$message({content: getServerErrorMessageAsHtml(err, 'List.vue->getFqList'), icon: 'hui-warn'})
        })
    },
    convertRiverRealList (data) {
      let res = []
      data.forEach((item) => {
        let obj = {
          children: []
        }
        obj.stcd = item.stcd
        obj.title = item.riverNmae ? item.riverNmae.trim() : ''
        obj.time = item.times
        obj.status = item.warnType
        obj.timeType = item.timeType
        obj.children.push({
          title: '水位',
          value: handleDecimalLength(item.z),
          unit: 'm'
        })
        obj.children.push({
          title: '预警水位',
          value: handleDecimalLength(item.warnValue),
          unit: 'm'
        })
        res.push(obj)
      })
      return res
    },
    convertPptnRealList (data) {
      let res = []
      data.forEach((item) => {
        let obj = {
          children: []
        }
        obj.stcd = item.stcd
        obj.title = item.pptnNmae ? item.pptnNmae.trim() : ''
        obj.time = item.times
        obj.status = item.warnType
        obj.timeType = item.timeType
        obj.children.push({
          title: '今日雨量',
          value: handleDecimalLength(item.dyp, 1),
          unit: 'mm'
        })
        obj.children.push({
          title: '当年累计',
          value: handleDecimalLength(item.rainfall, 0),
          unit: 'mm'
        })
        res.push(obj)
      })
      return res
    },
    convertFqList (data) {
      let res = []
      data.forEach((item) => {
        let obj = {
          children: []
        }
        obj.stcd = item.stcd
        obj.title = item.fqNmae ? item.fqNmae.trim() : ''
        obj.time = item.times
        obj.status = item.warnType
        obj.timeType = item.timeType
        obj.children.push({
          title: '风速',
          value: handleDecimalLength(item.winSpeed, 0),
          unit: 'm/s'
        })
        obj.children.push({
          title: '风力等级',
          value: handleDecimalLength(item.winGrade, 0)
        })
        obj.children.push({
          title: '风向',
          value: convertWindDrection(item.winDre)
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
