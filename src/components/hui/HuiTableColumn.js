export default {
  name: 'HuiTableColumn',
  // inheritAttrs: false,
  props: {
    prop: {
      type: String
    },
    label: {
      type: String
    }
  },
  render (h) {
    // console.log(this.$parent)
    const count = 3
    let i = 0
    const arr = []
    while (i < count) {
      arr.push(this.label)
      i++
    }
    console.log(arr)
    return (
      <th>{this.label}</th>
    )
  },
  created () {
    // console.log(this.prop, this.label)
    // console.log(this.$attrs)
  }
}
