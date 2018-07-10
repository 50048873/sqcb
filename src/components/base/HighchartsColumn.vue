<template>
  <div class="highcharts-wrap"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import {getDataByKey} from '@/assets/js/util'
import {chart} from '../../assets/js/mixin'

export default {
  mixins: [chart],
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
    tickInterval: { // x轴显示数据间隔（即每隔多少条数据显示一条数据）
      type: [String, Number],
      default: 0
    }
  },
  methods: {
    draw () {
      let categories = getDataByKey(this.data, 'time')
      let data = getDataByKey(this.data, 'value', false)
      let options = {
        credits: {
          enabled: false
        },
        chart: {
          type: 'column'
        },
        title: {
          text: this.title
        },
        subtitle: {
          text: null
        },
        xAxis: {
          categories: categories,
          crosshair: true,
          tickInterval: this.tickInterval,
          title: {
            text: this.xTitleText,
            align: 'high'
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: this.yTitleText,
            align: 'high'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          // head + 每个 point + footer 拼接成完整的 table
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            borderWidth: 0
          }
        },
        series: [{
          data: data
        }]
      }
      this.chart = new Highcharts.Chart(this.$el, options)
    }
  }
}
</script>
