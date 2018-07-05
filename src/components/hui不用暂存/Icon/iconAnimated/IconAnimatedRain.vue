<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :fill="iconColor"
    viewBox="0 0 100 100">
    <path d="M72.063,15.719C67.48,6.416,57.925,0.007,46.859,0.007c-14.844,0-26.967,11.507-28.012,26.074C7.943,29.19,0,38.72,0,50
  c0,13.307,11.065,24.159,25.003,24.927c0,0,44.782,0.076,45.31,0.076C86.705,75.004,100,61.707,100,45.315
  C99.975,29.517,87.625,16.637,72.063,15.719z"/>
    <g>
      <path class="slideOutDown" d="M40.601,84.371c-1.725,0-3.122,1.396-3.122,3.121v9.378c0,1.726,1.397,3.123,3.122,3.123s3.122-1.397,3.122-3.123v-9.378
        C43.736,85.768,42.326,84.371,40.601,84.371z"/>
      <path class="slideOutDown" d="M59.359,84.371c-1.727,0-3.123,1.396-3.123,3.121v9.378c0,1.726,1.396,3.123,3.123,3.123c1.726,0,3.123-1.397,3.123-3.123
        v-9.378C62.482,85.768,61.085,84.371,59.359,84.371z"/>
      <path class="slideOutDown" d="M21.856,84.371c-1.726,0-3.123,1.396-3.123,3.121v9.378c0,1.726,1.398,3.123,3.123,3.123c1.724,0,3.121-1.397,3.121-3.123
        v-9.378C24.978,85.768,23.58,84.371,21.856,84.371z"/>
      <path class="slideOutDown" d="M78.104,84.371c-1.722,0-3.121,1.396-3.121,3.121v9.378c0,1.726,1.397,3.123,3.121,3.123c1.727,0,3.123-1.397,3.123-3.123
        v-9.378C81.229,85.768,79.83,84.371,78.104,84.371z"/>
    </g>
  </svg>
</template>

<script>
import {iconProps} from '../mixin'
export default {
  name: 'HuiIconAnimatedRain',
  mixins: [iconProps]
}
</script>

<style scoped lang="less">
  svg {
    overflow: visible;
  }

  @keyframes slideOutDown {
    from {
      transform: translate3d(0, -50px, 0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      transform: translate3d(0, 50px, 0);
      opacity: 0;
    }
  }

  .slideOutDown {
    animation-iteration-count: infinite;
    animation-name: slideOutDown;
    &:nth-child(1) {
      animation-duration: 1.8s;
    }
    &:nth-child(2) {
      animation-duration: 1.2s;
    }
    &:nth-child(3) {
      animation-duration: 2.2s;
    }
    &:nth-child(4) {
      animation-duration: 1.6s;
    }
  }
</style>
