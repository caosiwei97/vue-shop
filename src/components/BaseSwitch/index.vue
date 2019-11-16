<template>
  <div
    :class="['base-switch', { switch: isSwitch }]"
    @click="isSwitch = !isSwitch"
  >
    <div :class="['switch-circle', { circle: isSwitch }]"></div>
    <span :class="['switch-text', { text: isSwitch }]">{{ switchText }}</span>
  </div>
</template>

<script>
export default {
  name: 'BaseSwitch',
  data() {
    return {
      isSwitch: false
    }
  },
  computed: {
    switchText() {
      if (this.isSwitch) {
        return 'abc'
      }
      return '...'
    }
  }
}
</script>

<style lang="stylus" scoped>
.switch
  background $themeColor !important
.circle
  transform translateX(px2rem(27)) !important
.text
  text-align left !important
.base-switch
  background $white
  color $white
  width px2rem(30)
  height px2rem(16)
  padding 0 px2rem(6)
  border px2rem(1) solid #ddd
  border-radius px2rem(8)
  transition background .3s, border-color .3s
  font-size .75em !important
  position relative
  .switch-circle
    position absolute
    width px2rem(16)
    height px2rem(16)
    border-radius 50%
    border px2rem(1) solid #ddd
    top px2rem(-1)
    left px2rem(-1)
    background $white
    box-shadow 0 px2rem(2) px2rem(4) 0 rgba(0, 0, 0, 0.1)
    transform translateX(0)
    transition transform .3s
  .switch-text
    color #ddd
    display inline-block
    width 100%
    height 100%
    line-height 1.5
    text-align right
</style>
