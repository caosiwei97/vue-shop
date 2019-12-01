<template>
  <div class="base-button">
    <button class="button-style">退出登录</button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton'
}
</script>

<style lang="stylus" scoped>
.base-button
  overflow hidden
  width 100%
  .button-style
    display flex
    justify-content center
    width 100%
    color $white
    background-color red
    height px2rem(40)
    border none
    border-radius px2rem(4)
    font-size 1em
    padding px2rem(10)
</style>
