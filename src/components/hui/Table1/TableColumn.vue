<script>
export default {
  name: 'HuiTableColumn',
  props: {
    prop: {
      type: String
    },
    label: {
      type: String
    }
  },
  render (h) {
    return (
      <th>{this.label}</th>
    )
  }
}
</script>
