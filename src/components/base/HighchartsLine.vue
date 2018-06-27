<template>
  <div class="highcharts-wrap line-top line-bottom"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import {getDataByKey, standardDate} from '@/assets/js/util'
import {chart} from '@/assets/js/mixin'

export default {
  name: 'HighchartsColumn',
  props: {
    title: {
      type: String
    },
    yTitleText: {
      type: String
    },
    xTitleText: {
      type: String
    },
    data: {
      type: Array
    },
    maxScroll: {
      type: [String, Number],
      default: 10
    }
  },
  mixins: [chart],
  methods: {
    draw () {
      let categories = getDataByKey(standardDate(this.data, 'curDate'), 'curDate')
      let data = getDataByKey(this.data, 'y')
      let options = {
        credits: {
          enabled: false
        },
        title: {
          text: this.title,
          style: {fontSize: '14px'},
          y: 15
        },
        xAxis: {
          scrollbar: {
            enabled: !(categories.length <= this.maxScroll)
          },
          max: categories.length <= this.maxScroll ? categories.length - 1 : this.maxScroll - 1,
          categories: categories,
          title: {
            text: this.xTitleText,
            align: 'high'
          }
        },
        yAxis: {
          lineWidth: 1,
          tickWidth: 1,
          title: {
            text: this.yTitleText,
            align: 'high',
            offset: -20,
            rotation: 0,
            x: 2,
            y: -20
          }
        },
        legend: {
          enabled: false
        },
        /* plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 0 //设置x轴起始数
                }
              }, */
        series: [{
          name: '水位',
          data: data,
          color: '#1b9ce4'
        }],
        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
      }
      this.chart = new Highcharts.Chart(this.$el, options)
    }
  }
}
</script>

<style lang="less">
.highcharts-wrap {
  .highcharts-container {
    padding-top: 20px;
    overflow: visible!important;
  }
  svg {
    overflow: visible!important;
  }
}
</style>
