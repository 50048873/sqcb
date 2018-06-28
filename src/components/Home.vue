<template>
  <div class="Home fullScreen">
    <nav class="nav">
      <router-link
        v-for="(item, index) in navData"
        :key="index"
        :to="item.to"
        :style="getBg(index)">
        <!-- <span class="icon-wrap"> -->
        <water-icon></water-icon>
        <!-- </span> -->
        <span class="title">{{item.title}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import WaterIcon from './Water/WaterIcon'
const navData = [
  {
    title: '水情',
    iconCls: 'nxst-water',
    to: '/water',
    svg: require('@/assets/svg/home-1.svg')
  },
  {
    title: '雨情',
    to: '/rain',
    iconCls: 'nxst-rain',
    svg: require('@/assets/svg/home-2.svg')
  },
  {
    title: '风情',
    to: '/wind',
    iconCls: 'nxst-wind',
    svg: require('@/assets/svg/home-3.svg')
  }
]
export default {
  name: 'Home',
  components: {
    WaterIcon
  },
  methods: {
    initSingleDirectionData () {
      this.navData = navData
    },
    getBg (index) {
      return {
        backgroundImage: `url(${this.navData[index].svg})`
      }
    }
  },
  created () {
    this.initSingleDirectionData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .Home {
    background: url(/static/img/home-bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .nav {
      padding: 30px 15px;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding: 20px 40px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: black;
        font-size: 24px;
        // .icon-wrap {
        //   font-size: 48px;
        // }
        &:nth-child(2n) {
          flex-direction: row-reverse;
        }
      }
    }
  }
</style>
