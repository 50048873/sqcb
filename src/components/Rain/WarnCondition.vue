<template>
  <div class="WarnCondition fullScreen">
    <div class="weui-cells__title">什么情况下会报警？</div>
    <div class="weui-cells">
      <div class="weui-cell" v-for="(item, index) in data" :key="index">
          <div class="weui-cell__bd">
              <p>{{item.title}}</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
const data = [
  {
    title: '1小时雨量超过50mm'
  },
  {
    title: '3小时雨量超过70mm'
  },
  {
    title: '6小时雨量超过80mm'
  },
  {
    title: '12小时雨量超过100mm'
  },
  {
    title: '24小时雨量超过120mm'
  }
]
export default {
  name: 'WarnCondition',
  created () {
    this.data = data
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
