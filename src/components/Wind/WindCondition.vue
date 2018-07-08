<template>
  <div class="WindGrade fullScreen">
    <h3 class="title">风力等级说明</h3>
    <hui-table1 :data="data">
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
      data: [
        {
          level: 0,
          title: '无风',
          ms: '0.0-0.2',
          km: '<1'
        },
        {
          level: 1,
          title: '轻风',
          ms: '0.3-1.6',
          km: '1-5'
        },
        {
          level: 2,
          title: '轻风',
          ms: '1.6-3.4',
          km: '6-11'
        },
        {
          level: 3,
          title: '微风',
          ms: '3.4-5.5',
          km: '12-19'
        },
        {
          level: 4,
          title: '和风',
          ms: '5.5-8.0',
          km: '20-28'
        },
        {
          level: 5,
          title: '清风',
          ms: '8.0-10.8',
          km: '29-38'
        },
        {
          level: 6,
          title: '强风',
          ms: '10.8-13.9',
          km: '39-49'
        },
        {
          level: 7,
          title: '劲风（疾风）',
          ms: '13.9-17.2',
          km: '50-61'
        },
        {
          level: 8,
          title: '大风',
          ms: '17.2-20.8',
          km: '62-74'
        },
        {
          level: 9,
          title: '烈风',
          ms: '20.8-24.5',
          km: '75-88'
        },
        {
          level: 10,
          title: '狂风',
          ms: '24.5-28.5',
          km: '89-102'
        },
        {
          level: 11,
          title: '暴风',
          ms: '28.5-32.6',
          km: '103-117'
        },
        {
          level: 12,
          title: '台风（一级飓风）',
          ms: '32.6-37.0',
          km: '117-134'
        },
        {
          level: 13,
          title: '台风（一级飓风）',
          ms: '37.0-41.4',
          km: '134-149'
        },
        {
          level: 14,
          title: '强台风（二级飓风）',
          ms: '41.5-46.1',
          km: '150-166'
        },
        {
          level: 15,
          title: '强台风（三级飓风）',
          ms: '46.2-50.9',
          km: '167-183'
        },
        {
          level: 16,
          title: '超强台风（三级飓风）',
          ms: '51.0-56.0',
          km: '184-201'
        },
        {
          level: 17,
          title: '超强台风（四级飓风）',
          ms: '56.1-61.2',
          km: '202-220'
        },
        {
          level: '17级以上',
          title: '超强台风（四级飓风）',
          ms: '≥61.3',
          km: '≥221'
        },
        {
          level: '',
          title: '超强台风（五级飓风）',
          ms: '',
          km: '≥250'
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
