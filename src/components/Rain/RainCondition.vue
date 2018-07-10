<template>
  <div class="WarnCondition fullScreen">
    <div class="weui-cells__title">什么情况下会报警？</div>
    <div class="weui-cells">
      <div class="weui-cell" v-for="(value, key) in data" :key="key">
          <div class="weui-cell__bd">
              <p>{{key.replace('warn', '')}}小时雨量超过{{value}}mm</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/assets/js/api'
import {success, noDataHintTxt} from '@/assets/js/config'
import {getServerErrorMessageAsHtml} from '@/assets/js/util'
export default {
  name: 'WarnCondition',
  data () {
    return {
      data: []
    }
  },
  methods: {
    getAllWarnList () {
      api.getAllWarnList()
        .then((res) => {
          if (res.status === success) {
            if (Array.isArray(res.data) && res.data.length) {
              this.data = res.data[0]
            } else {
              this.$message({content: noDataHintTxt, icon: 'hui-warn'})
            }
          } else {
            this.$message({content: res.msg, icon: 'hui-warn'})
          }
        }, (err) => {
          this.$message({content: getServerErrorMessageAsHtml(err, 'RainCondition.vue->getAllWarnList'), icon: 'hui-warn'})
        })
    }
  },
  created () {
    this.getAllWarnList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/variable.less';
.WarnCondition {
  .weui-cells__title {
    font-size: 16px;
    font-weight: bold;
    color: @color-warn;
  }
}
</style>
