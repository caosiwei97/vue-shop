<template>
  <section class="profile-login">
    <router-link
      :to="userInfo['_id'] ? { path: '/userInfo' } : { path: '/login' }"
      class="login-link"
    >
      <div class="login-logo">
        <i class="iconfont icongeren2"></i>
      </div>
      <div class="login-info">
        <P v-show="!userInfo['phone']">{{ userInfo['name'] || '登陆/注册' }}</P>
        <p>
          <i class="iconfont iconshouji"></i>
          <span>{{ userInfo['phone'] || '暂无绑定手机号' }}</span>
        </p>
      </div>
      <div class="login-button">
        <i class="iconfont iconjiantou1"></i>
      </div>
    </router-link>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProfileLogin',
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style lang="stylus" scoped>
.profile-login
  background-color $themeColor
  .login-link
    display flex
    align-items center
    padding px2rem(20) px2rem(10)
    position relative
    .login-logo
      overflow hidden
      width px2rem(60)
      height px2rem(60)
      position relative
      border-radius 50%
      .iconfont
        font-size 6em
        positionCenter()
        background $borderColor
      @media screen and (min-width 768px)
        .iconfont
          font-size 5em
      @media screen and (min-width 1024px)
        .iconfont
          font-size 4.5em
    .login-info
      margin-left px2rem(15)
      font-size 1.125em
      font-weight bold
      color $white
      p:first-child
        padding-bottom px2rem(10)
      p:last-child
        font-size .77em
        .iconfont
          font-size 1.5em
          vertical-align middle
        span
          margin-left px2rem(5)
    .login-button
      position absolute
      right 5%
      top 50%
      transform translateY(-50%)
      color $white
</style>
