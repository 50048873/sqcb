<template>
  <div class="WindGrade fullScreen">
    <h3 class="title">风力等级说明</h3>
    <hui-table1 :data="tbodyData">
      <hui-table-column prop="level" label="风级"></hui-table-column>
      <hui-table-column prop="title" label="名称"></hui-table-column>
      <hui-table-column prop="ms" label="风速（m/s）"></hui-table-column>
      <hui-table-column prop="km" label="(km/h)"></hui-table-column>
    </hui-table1>
  </div>
</template>

<script>
export default {
  name: 'WindGrade',
  data () {
    return {
      tbodyData: [
        {
          level: 0,
          title: '无风',
          ms: '0.0-0.2',
          km: '< 1'
        },
        {
          level: 0,
          title: '无风',
          ms: '0.0-0.2',
          km: '< 1'
        },
        {
          level: 0,
          title: '无风',
          ms: '0.0-0.2',
          km: '< 1'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../assets/less/variable.less';
.WindGrade {
  .title {
    padding: 10px 15px;
    font-weight: bold;
  }
}
</style>
