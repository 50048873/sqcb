<script>
export default {
  name: 'HuiTable1',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  render () {
    let propsDatas = []

    this.$slots.default.forEach((item) => {
      if (item.tag) {
        propsDatas.push(item.componentOptions.propsData)
      }
    })

    let tbody = this.data.map((item) => {
      let tr = <tr></tr>
      let tds = []
      propsDatas.forEach((propsData) => {
        tds.push(<td>{item[propsData.prop]}</td>)
      })
      tr.children = tds
      return tr
    })

    return (
      <table class="Table">
        <thead>
          <tr>
            {this.$slots.default}
          </tr>
        </thead>
        <tbody>
          {tbody}
        </tbody>
      </table>
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Table {
    width: 100%;
    background-color: white;
    th {
      background-color: #e3fdfe;
      line-height: 34px;
      text-align: center;
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
      text-align: center;
      &:first-child {
        border-left: none;
      }
      &:last-child {
        border-right: none;
      }
    }
  }
</style>
