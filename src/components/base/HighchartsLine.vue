<template>
  <div class="highcharts-wrap"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import {chart, getStrDate} from '@/assets/js/mixin'

export default {
  name: 'HighchartsColumn',
  props: {
    yTitleText: {
      type: String
    },
    title: {
      type: String
    },
    data: {
      type: Array,
      required: true
    },
    pointStart: {
      required: true
    }
  },
  mixins: [chart, getStrDate],
  methods: {
    draw () {
      var _this = this
      let options = {
        title: {
          text: this.title,
          style: {fontSize: '14px'}
        },
        credits: {
          enabled: false
        },
        xAxis: {
          type: 'datetime',
          labels: {
            rotation: -70,
            x: 10,
            formatter: function () {
              return _this.getStrDate(this.value)
            }
          },
          tickPixelInterval: 50
        },
        yAxis: {
          lineWidth: 1,
          tickWidth: 1,
          title: {
            text: this.yTitleText,
            align: 'high'
          }
        },
        tooltip: {
          shared: true,
          useHTML: true,
          formatter: function () {
            let date = _this.getStrDate(this.x)
            let content = '<p style="font-size: 10px;">时间：' + date + '</p>'
            for (let i = 0; i < this.points.length; i++) {
              content += '<p style="color: ' + this.points[i].series.color + '">' + this.points[i].series.name + ': ' + this.points[i].y.toFixed(2) + '</p>'
            }
            return content
          }
        },
        legend: {
          enabled: false
        },
        series: [{
          name: this.title,
          data: this.data,
          pointStart: new Date(this.pointStart) * 1,
          pointInterval: 60 * 60 * 1000 // one hour
        }]
      }
      this.chart = new Highcharts.Chart(this.$el, options)
    }
  }
}
</script>

<style lang="less">
.highcharts-wrap {
  .highcharts-container {
    // padding-top: 20px;
    overflow: visible!important;
  }
  svg {
    overflow: visible!important;
  }
}
</style>
