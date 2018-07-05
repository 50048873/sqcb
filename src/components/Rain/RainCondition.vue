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
import {success} from '@/assets/js/config'
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
            this.data = res.data[0]
          } else {
            this.hint(res.msg)
          }
        }, (err) => {
          this.serverErrorTip(err, '错误来源：RainCondition.vue')
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
