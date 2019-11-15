<template>
  <div class="order-login">
    <div class="login-img">
      <img src="../images/person.png" alt="" />
    </div>
    <h3>登陆后查看外卖清单</h3>
    <button>立即登陆</button>
  </div>
</template>

<script>
export default {
  name: 'OrderLogin'
}
</script>

<style lang="stylus" scoped>
.order-login
  display flex
  flex-direction column
  justify-content center
  align-items center
  height 100vh
  .login-img
    width 50%
    img
      display block
      width 100%
  h3
    padding px2rem(10) 0
    font-size 1em
    color $navTextColor
  button
    display inline-block
    background $themeColor
    font-size .875em
    outline none
    padding px2rem(10) px2rem(20)
    border 0
    color $white
    border-radius px2rem(4)
</style>
