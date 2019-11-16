<template>
  <div class="login">
    <!-- icon link -->
    <router-link :to="{ name: '外卖' }" class="login-link">
      <i class="iconfont iconicon_arrow_left"></i>
    </router-link>
    <div class="login-wrapper">
      <!-- header title -->
      <div class="login-header">
        <h2 class="header-title">文哲外卖</h2>
        <div class="header-content">
          <a
            href="#"
            v-for="(item, index) in loginWays"
            :key="index"
            @click="handleClick(item.wayClass)"
            :class="{ active: isActive(item.wayClass) }"
          >
            {{ item.title }}
          </a>
        </div>
      </div>
      <!-- form -->
      <login-form :isPasswordWay="isPasswordWay"></login-form>
      <p class="login-footer">关于我们</p>
    </div>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data() {
    return {
      currentActiveClass: 'message',
      loginWays: [
        {
          wayClass: 'message',
          title: '短信登陆'
        },
        {
          wayClass: 'password',
          title: '密码登陆'
        }
      ]
    }
  },
  computed: {
    isPasswordWay() {
      return this.currentActiveClass === 'password'
    }
  },
  methods: {
    handleClick(way) {
      this.currentActiveClass = way
    },
    isActive(way) {
      return this.currentActiveClass === way
    }
  }
}
</script>

<style scoped lang="stylus">
.active
  color $themeColor !important
  font-weight 700
  border-bottom px2rem(2) solid $themeColor
  box-sizing border-box
.login
  overflow hidden
  background-color $white
  height 100%
  .login-link
    width px2rem(30)
    height px2rem(30)
    display inline-block
    text-align center
    line-height 1.875
    .iconfont
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
        color $themeColor
      .header-content
        padding px2rem(40) px2rem(70) 0
        font-size .875em
        display flex
        justify-content space-between
        a
          color $textColor
          padding-bottom px2rem(4)
    .login-footer
      color $iconColor
      margin-top px2rem(20)
      font-size .75em
</style>
