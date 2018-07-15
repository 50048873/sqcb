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

export let getStrDate = {
  methods: {
    getStrDate (value) {
      let date = new Date(value)
      let y = date.getFullYear()
      let m = (date.getMonth() + 1).toString().padStart(2, '0')
      let d = date.getDate().toString().padStart(2, '0')
      let hour = date.getHours().toString().padStart(2, '0')
      let minute = date.getMinutes().toString().padStart(2, '0')
      return `${y}-${m}-${d} ${hour}:${minute}`
    }
  }
}
