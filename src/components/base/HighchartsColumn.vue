<template>
  <div class="highcharts-wrap"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock'
import {chart} from '../../assets/js/mixin'

export default {
  mixins: [chart],
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
  methods: {
    draw () {
      let options = {
        chart: {
          type: 'column'
        },
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
              let date = new Date(this.value)
              let y = date.getFullYear()
              let m = (date.getMonth() + 1).toString().padStart(2, '0')
              let d = date.getDate().toString().padStart(2, '0')
              let hour = date.getHours().toString().padStart(2, '0')
              let minute = date.getMinutes().toString().padStart(2, '0')
              return `${y}-${m}-${d} ${hour}:${minute}`
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
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.2f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
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
