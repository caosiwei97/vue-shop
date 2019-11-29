<template>
  <div class="base-alert">
    <div class="alert-wrapper">
      <div class="alert-top">
        <div class="top-icon">
          <span></span>
          <span></span>
        </div>
        <p class="top-message">{{ alertMessage }}</p>
      </div>
      <div class="alert-bottom" @click="handleConfirm">确认</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseAlert',
  props: {
    alertMessage: {
      type: String,
      default: '这是一个警告'
    }
  },
  methods: {
    handleConfirm() {
      this.$emit('cancelMask', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
@keyframes tipMove
  0%
    transform scale(1)
  35%
    transform scale(.8)
  70%
    transform scale(1.1)
  100%
    transform scale(1)
.base-alert
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background-color rgba(0, 0, 0, 0.5)
  z-index 999
  flexCenter()
  .alert-wrapper
    width 60%
    height 20%
    background-color $white
    border-radius px2rem(4)
    flexCenter()
    animation tipMove .4s
    text-align center
    .alert-top
      width 100%
      padding-top px2rem(5)
      flex 3
      flexCenter()
      text-align center
      .top-icon
        width px2rem(50)
        height px2rem(50)
        border-radius 50%
        border px2rem(2) solid red
        flexCenter()
        span
          width px2rem(2)
          background-color red
          &:nth-of-type(1)
            height px2rem(30)
          &:nth-of-type(2)
            height px2rem(2)
            border px2rem(1)
            border-radius 50%
            margin-top px2rem(2)
      .top-message
        padding-top px2rem(5)
        font-size .8em
        color #333
    .alert-bottom
      flex 1
      width 100%
      background-color $themeColor
      flexCenter()
      color $white
</style>
