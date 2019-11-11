<template>
  <div class="login">
    <router-link :to="{ name: '外卖' }" class="login-link">
      <i class="iconfont iconicon_arrow_left"></i>
    </router-link>
    <div class="login-wrapper">
      <div class="login-header">
        <h2 class="header-title">文哲外卖</h2>
        <div class="header-content">
          <a href="#">短信登陆</a>
          <a href="#">密码登陆</a>
        </div>
      </div>
      <div class="login-content">
        <form action="#">
          <section class="content-phone">
            <input type="tel" placeholder="手机号" maxlength="11">
            <button disabled="disabled">获取验证码</button>
          </section>
          <section class="content-verification">
            <input type="tel" maxlength="8" placeholder="验证码">
          </section>
          <section class="content-tip">
            <p>
                温馨提示：未注册文哲外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="#">《用户服务协议》</a>
            </p>
          </section>
          <button type="submit" class="content-btn">登陆</button>
        </form>
        <p class="login-us">关于我们</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="stylus">
$textColor = #333
$btnColor = #ccc
.login
  overflow hidden
  .login-link
    width px2rem(30)
    height px2rem(30)
    display inline-block
    text-align center
    line-height 1.875
    i
      font-size 1.25em
  .login-wrapper
    width 80%
    margin 0 auto
    padding-top px2rem(60)
    text-align center
    .login-header
      overflow hidden
      .header-title
        font-size 2.5em
        color $yellow
      .header-content
        padding-top px2rem(40)
        font-size .875em
        a
          color $textColor
    .login-content
      overflow hidden
      .content-phone
      .content-verification
        margin-top px2rem(16)
        height px2rem(48)
        font-size .875em
        background-color $white
        position relative
        input
          width 100%
          height 100%
          border-radius px2rem(4)
          padding-left px2rem(10)
          border px2rem(1) solid #ddd
          box-sizing border-box
        button
          position absolute
          top 50%
          right px2rem(10)
          transform translateY(-50%)
          border none
          background transparent
          color $btnColor
      .content-tip
        margin-top px2rem(12)
        color $iconColor
        text-align left
        line-height 1.4
        font-size .875em
        a
          color $yellow
      .content-btn
        display block
        width 100%
        height px2rem(42)
        line-height 2.625
        margin-top px2rem(30)
        border-radius px2rem(4)
        background $yellow
        color $white
        border 0
        font-size 1em
    .login-us
      color $iconColor
      margin-top px2rem(20)
      font-size .75em
</style>
