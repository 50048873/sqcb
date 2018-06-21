<template>
  <table class="Table">
    <thead>
      <tr>
        <th v-for="(item, index) in theadData" :key="index">{{item.title}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in tbodyData" :key="index">
        <td>{{item.time}}</td>
        <td>{{item.value}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const theadData = [
  {
    title: '时间'
  },
  {
    title: '水位（m）'
  }
]
const tbodyData = [
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
]
export default {
  name: 'Table',
  data () {
    return {
      theadData: theadData,
      tbodyData: tbodyData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Table {
    width: 100%;
    text-align: center;
    background-color: white;
    th {
      background-color: #e3fdfe;
      line-height: 34px;
      border: 1px solid #d7d7d7;
    }
    td {
      border: 1px solid #d7d7d7;
      line-height: 34px;
    }
  }
</style>
