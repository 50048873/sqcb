<template>
  <div class="WindGrade fullScreen">
    <h3 class="title">风力等级说明</h3>
    <table>
      <thead>
        <tr>
          <th v-for="(item, index) in theadData" :key="index">{{item.title}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tbodyData" :key="index">
          <td>{{item.level}}</td>
          <td>{{item.title}}</td>
          <td>{{item.ms}}</td>
          <td>{{item.km}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'WindGrade',
  data () {
    return {
      theadData: [
        {
          title: '风级'
        },
        {
          title: '名称'
        },
        {
          title: '风速（m/s）'
        },
        {
          title: '(km/h)'
        }
      ],
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
  table {
    width: 100%;
    text-align: center;
    background-color: white;
    th {
      background-color: #e3fdfe;
      line-height: 34px;
      border: 1px solid #d7d7d7;
      &:first-child {
        border-left: none;
      }
      &:last-child {
        border-right: none;
      }
    }
    td {
      border: 1px solid #d7d7d7;
      line-height: 34px;
      &:first-child {
        border-left: none;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
