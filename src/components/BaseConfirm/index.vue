<template>
  <div class="base-confirm">
    <div class="confirm-wrapper">
      <h2 class="confirm-title">提示</h2>
      <p class="confirm-content">确定执行此操作?</p>
      <div class="confirm-button">
        <span @click="handleCancel">取消</span>
        <span @click="handleConfirm">确定</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseConfirm',
  methods: {
    handleCancel() {
      this.$emit('cancel')
    },
    handleConfirm() {
      this.$emit('confirm')
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
.base-confirm
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  background-color rgba(0, 0, 0, 0.5)
  z-index 9999
  flexCenter()
  .confirm-wrapper
    width 60%
    height 20%
    background-color $white
    border-radius px2rem(4)
    animation tipMove .4s
    text-align center
    display flex
    flex-direction column
    .confirm-title
    .confirm-content
    .confirm-button
      flex 1
    .confirm-title
      padding-top px2rem(20)
    .confirm-content
      color $navTextColor
      padding px2rem(10) 0
    .confirm-button
      top-border-1px($navTextColor)
      display flex
      justify-content center
      align-items center
      span
        flex 1
        display block
        height 100%
        line-height 1.8
        &:first-child
          right-border-1px($navTextColor)
          color red
        &:last-child
          color #0b79fb
</style>
