<template>
  <div :class="[theme, getSize, customTheme]" v-if="data.length">
    <span
      v-for="(item, index) in data"
      :key="index"
      :class="getON(index)"
      @click="tabClick(item, index)">
      {{item.title}}
    </span>
  </div>
</template>

<script>
export default {
  name: 'HuiTab1',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    bgColorDefault: {
      type: String,
      default: '#dbdbdb'
    },
    bgColorActive: {
      type: String,
      default: '#409EFF'
    },
    theme: {
      type: String,
      default: 'HuiTab1-theme1'
    },
    customTheme: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'large'
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  computed: {
    getSize () {
      let sizeCls
      switch (this.size) {
        case 'medium':
          sizeCls = 'HuiTab1-theme1--medium'
          break
        case 'small':
          sizeCls = 'HuiTab1-theme1--small'
          break
        case 'mini':
          sizeCls = 'HuiTab1-theme1--mini'
          break
        default:
          sizeCls = 'HuiTab1-theme1--large'
          break
      }
      return sizeCls
    }
  },
  methods: {
    tabClick (item, index) {
      this.currentIndex = index
      this.$emit('tab-click', item, index)
    },
    getON (index) {
      return {
        ON: this.currentIndex === index
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @large: 18px;
  @medium: 16px;
  @small: 14px;
  @mini: 12px;
  .HuiTab1-theme1 {
    span {
      display: inline-block;
      background-color: #dbdbdb;
      color: black;
      cursor: pointer;
      &.ON, &:hover, &:focus {
        background-color: #409EFF;
        color: white;
      }
    }
    &.HuiTab1-theme1--large {
      span {
        margin-right: 10px;
        padding: 4px 20px;
        font-size: @large;
      }
    }
    &.HuiTab1-theme1--medium {
      span {
        margin-right: 8px;
        padding: 4px 18px;
        font-size: @medium;
      }
    }
    &.HuiTab1-theme1--small {
      span {
        margin-right: 6px;
        padding: 4px 16px;
        font-size: @small;
      }
    }
    &.HuiTab1-theme1--mini {
      span {
        margin-right: 4px;
        padding: 4px 14px;
        font-size: @mini;
      }
    }
  }
</style>
