<template>
  <ul class="HuiList1" v-if="data.length">
    <li v-for="(item, index) in data" :key="index" @click="listClick(item, index)">
      <div class="line">
        <span class="line-item">
          <em class="title">{{item.title}}</em>
        </span>
        <span class="line-item time">
          <em>{{item.time}}</em>
        </span>
      </div>
      <div class="line">
        <span class="line-item" :style="getWarn(item.status)" v-for="(item, index) in item.children" :key="index">
          <em>{{item.title}}</em>
          <em>{{item.value}}</em>
          <em>{{item.unit}}</em>
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HuiList1',
  componentName: 'HuiList1',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    getWarn (status) {
      return status === 1 ? {color: 'red'} : ''
    },
    listClick (item, index) {
      this.$emit('list-click', item, index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import '../../assets/less/variable.less';
  .HuiList1 {
    li {
      .line-bottom();
      padding: 10px;
      background-color: white;
      .line {
        display: flex;
        justify-content: space-between;
        line-height: 1.8;
        .line-item {
          display: block;
          em {
            font-style: normal;
          }
          .title {
            font-weight: bold;
          }
        }
        .time {
          text-align: right;
        }
      }
    }
  }
</style>
