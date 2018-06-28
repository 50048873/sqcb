<template>
  <div class="WaterDetail fullScreen">
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>开始时间</p>
        </div>
        <div class="weui-cell__ft">
          <input class="weui-input" v-model="startTime" type="datetime-local" value="">
        </div>
      </a>
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <p>结束时间</p>
        </div>
        <div class="weui-cell__ft">
          <input class="weui-input" v-model="endTime" type="datetime-local" value="">
        </div>
      </a>
    </div>
    <div class="tab-wrap">
      <hui-tab1 :data="tabData" size="small" @tab-click="tabClick"></hui-tab1>
      <highcharts-line class="highcharts" v-show="currentIndex === 0" :yTitleText="yTitleText" :data="chartData" v-if="chartData.length"></highcharts-line>
      <hui-table1 :data="tbodyData" v-show="currentIndex === 1">
        <hui-table-column prop="time" label="时间"></hui-table-column>
        <hui-table-column prop="value" :label="yTitleText"></hui-table-column>
      </hui-table1>
    </div>
  </div>
</template>

<script>
import HighchartsLine from '@/components/base/HighchartsLine'
export default {
  name: 'WaterDetail',
  components: {
    HighchartsLine
  },
  data () {
    return {
      startTime: '2018-06-20T18:28:00',
      endTime: '2018-06-20T18:28:00',
      currentIndex: 0,
      tabData: [
        {
          'title': '图形'
        },
        {
          'title': '表格'
        }
      ],
      chartData: [
        {
          'curDate': '2016-10',
          'y': 95.31
        },
        {
          'curDate': '2016-11',
          'y': 95.58
        },
        {
          'curDate': '2016-12',
          'y': 95.85
        },
        {
          'curDate': '2017-01',
          'y': 96.12
        },
        {
          'curDate': '2017-02',
          'y': 96.38
        },
        {
          'curDate': '2017-03',
          'y': 96.65
        },
        {
          'curDate': '2017-04',
          'y': 96.93
        },
        {
          'curDate': '2017-05',
          'y': 97.20
        },
        {
          'curDate': '2017-06',
          'y': 97.47
        },
        {
          'curDate': '2017-07',
          'y': 97.74
        },
        {
          'curDate': '2017-08',
          'y': 98.01
        },
        {
          'curDate': '2017-09',
          'y': 98.29
        },
        {
          'curDate': '2017-10',
          'y': 98.84,
          'percent': '+3.70%'
        }
      ],
      tbodyData: [
        {
          time: '2018-06-21 11:30',
          value: '2.80'
        },
        {
          time: '2018-06-21 11:30',
          value: '2.80'
        },
        {
          time: '2018-06-21 11:30',
          value: '2.80'
        }
      ],
      yTitleText: '水位（m）'
    }
  },
  methods: {
    tabClick (item, index) {
      this.currentIndex = index
    },
    handleType () {
      const name = this.$route.name.toLowerCase()
      switch (name) {
        case 'raindetail':
          this.yTitleText = '雨量（m）'
          break
        default:
          this.yTitleText = '水位（m）'
      }
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
