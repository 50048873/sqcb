<template>
  <ul :class="theme" v-if="data.length">
    <li v-for="(item, index) in data" :key="index" @click="listClick(item, index)" :class="getWarnCls(item.status)">
      <div class="line">
        <span class="line-item">
          <em class="title">{{item.title}}</em>
        </span>
        <span class="line-item time">
          <em>{{item.time}}</em>
        </span>
      </div>
      <div class="line">
        <span class="line-item" v-for="(item, index) in item.children" :key="index">
          <em>{{item.title}}：</em>
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
    },
    theme: {
      type: String,
      default: 'HuiList1-theme1'
    }
  },
  methods: {
    getWarnCls (status) {
      return status === 1 ? 'WARN' : ''
    },
    listClick (item, index) {
      this.$emit('list-click', item, index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './font/style.css';
  .HuiList1-theme1 {
    li {
      padding: 10px;
      background-color: white;
      position: relative;
      &:after {
        content: " ";
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        height: 1px;
        border-bottom: 1px solid;
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        color: #d9d9d9;
      }
      .line {
        display: flex;
        justify-content: space-between;
        line-height: 1.8;
        .line-item {
          display: block;
          font-size: 0;
          em {
            font-style: normal;
            font-size: 14px;
          }
          .title {
            font-weight: bold;
            font-size: 16px;
          }
        }
        .time {
          text-align: right;
        }
      }
      &.WARN {
        .line:last-child {
          span:first-child {
            color: red;
          }
        }
      }
    }
  }
  .HuiList1-theme2 {
    li {
      margin: 10px 15px;
      padding: 10px 15px;
      background-color: white;
      border: 1px solid #d9d9d9;
      .line {
        display: flex;
        justify-content: space-between;
        line-height: 1.8;
        .line-item {
          display: block;
          font-size: 0;
          em {
            font-style: normal;
            font-size: 14px;
          }
          .title {
            font-weight: bold;
            font-size: 16px;
          }
        }
        .time {
          text-align: right;
        }
      }
      &.WARN {
        position: relative;
        margin-left: 26px;
        padding-left: 26px;
        .line:last-child {
          span:first-child {
            color: red;
          }
        }
        &:before {
          content: '\e900';
          position: absolute;
          top: 50%;
          left: 0;
          width: 34px;
          height: 34px;
          margin-left: -17px;
          line-height: 34px;
          text-align: center;
          color: white;
          font-size: 16px;
          border-radius: 50%;
          background-color: red;
          transform: translateY(-50%);
        }
      }
    }
  }
</style>
