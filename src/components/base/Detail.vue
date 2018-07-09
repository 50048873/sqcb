<template>
  <div class="WaterDetail fullScreen">
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>开始时间</p>
        </div>
        <div class="weui-cell__ft">
          <input class="weui-input" v-model="beginDate" @change="searchData" type="datetime-local" value="">
        </div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>结束时间</p>
        </div>
        <div class="weui-cell__ft">
          <input class="weui-input" v-model="endDate" @change="searchData" type="datetime-local" value="">
        </div>
      </a>
    </div>
    <div class="tab-wrap">
      <hui-tab1 :data="tabData" size="small" @tab-click="tabClick" v-show="data.length"></hui-tab1>
      <highcharts-line class="highcharts" v-show="currentIndex === 0 && data.length" :yTitleText="yTitleText" :data="data"></highcharts-line>
      <hui-table1 :data="data" v-show="currentIndex === 1 && data.length">
        <hui-table-column prop="time" label="时间"></hui-table-column>
        <hui-table-column prop="value" :label="yTitleText"></hui-table-column>
      </hui-table1>
    </div>
    <no-data v-if="!data.length"></no-data>
  </div>
</template>

<script>
import HighchartsLine from '@/components/base/HighchartsLine'
import {getDateStr, handleDecimalLength, standardDate} from '@/assets/js/util'
import * as api from '@/assets/js/api'
import {success, noDataHintTxt} from '@/assets/js/config'
export default {
  name: 'WaterDetail',
  components: {
    HighchartsLine
  },
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      beginDate: getDateStr(-7, '00', '00', null, true),
      endDate: getDateStr(0, null, null, null, true),
      currentIndex: 0,
      tabData: [
        {
          'title': '图形'
        },
        {
          'title': '表格'
        }
      ],
      data: [],
      yTitleText: '水位（m）'
    }
  },
  methods: {
    tabClick (item, index) {
      this.currentIndex = index
    },
    handleType () {
      switch (this.name) {
        case 'waterDetail':
          this.yTitleText = '水位（m）'
          this.getRiveDetailData()
          break
        case 'rainDetail':
          this.yTitleText = '雨量（m）'
          this.getPptnDetailData()
          break
        case 'windDetail':
          this.yTitleText = '风速（m）'
          this.getDseStFqRList()
          break
      }
    },
    searchData () {
      switch (this.name) {
        case 'waterDetail':
          this.getRiveDetailData()
          break
        case 'rainDetail':
          this.getPptnDetailData()
          break
        case 'windDetail':
          this.getDseStFqRList()
          break
      }
    },
    getRiveDetailData () {
      let params = {
        stcd: this.id,
        beginDate: this.beginDate.replace('T', ' '),
        endDate: this.endDate.replace('T', ' ')
      }
      api.getRiveDetailData(params)
        .then((res) => {
          if (res.status === success) {
            let data = res.data
            if (Array.isArray(data)) {
              let convertedRes = []
              data.forEach((item) => {
                convertedRes.push({
                  stcd: item.stcd,
                  time: item.tm,
                  value: handleDecimalLength(item.z)
                })
              })
              this.data = standardDate(convertedRes, 'time')
            } else {
              this.hint(noDataHintTxt)
            }
          } else {
            this.hint(res.msg)
          }
        }, (err) => {
          this.serverErrorTip(err, '错误来源：Detail.vue')
        })
    },
    getPptnDetailData () {
      let params = {
        stcd: this.id,
        beginDate: this.beginDate.replace('T', ' '),
        endDate: this.endDate.replace('T', ' ')
      }
      api.getPptnDetailData(params)
        .then((res) => {
          if (res.status === success) {
            let data = res.data
            if (Array.isArray(data)) {
              let convertedRes = []
              data.forEach((item) => {
                convertedRes.push({
                  stcd: item.stcd,
                  time: item.tm,
                  value: handleDecimalLength(item.drp)
                })
              })
              this.data = standardDate(convertedRes, 'time')
            } else {
              this.hint(noDataHintTxt)
            }
          } else {
            this.hint(res.msg)
          }
        }, (err) => {
          this.serverErrorTip(err, '错误来源：Detail.vue')
        })
    },
    getDseStFqRList () {
      let params = {
        stcd: this.id,
        beginDate: this.beginDate.replace('T', ' '),
        endDate: this.endDate.replace('T', ' ')
      }
      api.getDseStFqRList(params)
        .then((res) => {
          if (res.status === success) {
            let data = res.data
            if (Array.isArray(data)) {
              let convertedRes = []
              data.forEach((item) => {
                convertedRes.push({
                  stcd: item.stcd,
                  time: item.detTime,
                  value: handleDecimalLength(item.winSpeed)
                })
              })
              this.data = standardDate(convertedRes, 'time')
            } else {
              this.hint(noDataHintTxt)
            }
          } else {
            this.hint(res.msg)
          }
        }, (err) => {
          this.serverErrorTip(err, '错误来源：Detail.vue')
        })
    }
  },
  created () {
    this.handleType()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/variable.less';
.WaterDetail {
  .weui-cells {
    margin-top: -1px;
  }
  .tab-wrap {
    margin: @margin-primary;
    .highcharts {
      border: 1px solid #eee;
      padding-top: 15px;
      padding-bottom: 15px;
      background-color: white;
    }
  }
}
</style>
