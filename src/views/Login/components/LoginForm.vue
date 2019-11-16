<template>
  <form action="#" class="login-form">
    <!-- phone -->
    <section class="form-phone">
      <input type="tel" :placeholder="placeholder" maxlength="11" />
      <button disabled="disabled" v-show="!isPasswordWay">获取验证码</button>
    </section>
    <!-- password -->
    <section class="form-password" v-show="isPasswordWay">
      <input type="tel" maxlength="8" placeholder="密码" />
      <base-switch></base-switch>
    </section>
    <!-- verification -->
    <section class="form-verification">
      <input type="tel" maxlength="8" placeholder="验证码" />
      <img src="" alt="" v-show="isPasswordWay" />
    </section>
    <!-- protocol -->
    <section class="form-protocol" v-show="!isPasswordWay">
      <p>
        温馨提示：未注册文哲外卖帐号的手机号，登录时将自动注册，且代表已同意
        <a href="#">《用户服务协议》</a>
      </p>
    </section>
    <button type="submit" class="form-submit">登陆</button>
  </form>
</template>

<script>
import BaseSwitch from 'components/BaseSwitch'

export default {
  name: 'LoginForm',
  props: {
    isPasswordWay: Boolean
  },
  components: {
    BaseSwitch
  },
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    placeholder() {
      if (this.isPasswordWay) {
        return '手机/邮箱/用户名'
      }
      return '手机'
    }
  }
}
</script>

<style lang="stylus" scoped>
$textColor = #333
$btnColor = #ccc
$inputBorder = #ddd

.active

.login-form
  overflow hidden
  .form-phone
  .form-verification
  .form-password
    margin-top px2rem(16)
    height px2rem(48)
    font-size .875em
    background-color $white
    position relative
    >input
      width 100%
      height 100%
      border-radius px2rem(4)
      padding-left px2rem(10)
      border px2rem(1) solid $inputBorder
      box-sizing border-box
      outline 0
      &:focus
        border 1px solid $themeColor
    >button
      position absolute
      top 50%
      right px2rem(10)
      transform translateY(-50%)
      border none
      background transparent
      color $btnColor
  .form-password
    .base-switch
      position absolute
      top 50%
      right 5%
      transform translateY(-50%)
  .form-protocol
    margin-top px2rem(12)
    color $iconColor
    text-align left
    line-height 1.4
    font-size .875em
    a
      color $themeColor
  .form-submit
    display block
    width 100%
    height px2rem(42)
    line-height 2.625
    margin-top px2rem(30)
    border-radius px2rem(4)
    background $themeColor
    color $white
    border 0
    font-size 1em
</style>
