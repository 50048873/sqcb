export let chart = {
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.draw()
  },
  watch: {
    data (newVal, oldVal) {
      if (newVal) {
        this.draw()
      }
    }
  }
}
