<template>
  <div>
    <!-- <HuiTableColumn :data="data" label="日期" prop="date"></HuiTableColumn> -->
    <table class="Table">
      <thead>
        <tr>

        </tr>
      </thead>
      <tbody>
        <tr>

        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import HuiTableColumn from '@/components/hui/HuiTableColumn.js'
export default {
  name: 'HuiTable',
  // inheritAttrs: false,
  components: {
    HuiTableColumn
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      label: '日期',
      prop: 'date'
    }
  },
  beforeCreate () {
    // this.theadData = this.$children
  },
  created () {
    console.log(this)
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
