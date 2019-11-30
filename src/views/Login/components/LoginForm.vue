<template>
  <form class="login-form" @submit.prevent="handleLoginSubmit">
    <!-- phone -->
    <section class="form-phone" v-show="!isPasswordWay">
      <input type="tel" placeholder="手机" maxlength="11" v-model="phone" />
      <button
        :disabled="!isSendMessageCode"
        :class="{ isActive: isSendMessageCode }"
        @click.prevent="getMessageCode"
      >
        {{ getMessageCodeText }}
      </button>
    </section>
    <!-- phone/mail/username -->
    <section class="form-mail" v-show="isPasswordWay">
      <input type="text" placeholder="手机/邮箱/用户名" v-model="name" />
    </section>
    <!-- password -->
    <section class="form-password" v-show="isPasswordWay">
      <input
        type="password"
        maxlength="8"
        placeholder="密码"
        v-if="!isShowPassword"
        v-model="pwd"
      />
      <input
        type="text"
        maxlength="8"
        placeholder="密码"
        v-model="pwd"
        v-else
      />
      <base-switch @switch="handleSwitch"></base-switch>
    </section>
    <!-- message code -->
    <section class="form-message_code" v-show="!isPasswordWay">
      <input type="tel" maxlength="6" placeholder="验证码" v-model="code" />
    </section>
    <!-- svg code -->
    <section class="form-svg_code" v-show="isPasswordWay">
      <input type="tel" maxlength="8" placeholder="验证码" v-model="captcha" />
      <img :src="captchaUrl" @click.prevent="handleSvgClick" ref="captchaImg" />
    </section>
    <!-- protocol -->
    <section class="form-protocol" v-show="!isPasswordWay">
      <p>
        温馨提示：未注册文哲外卖帐号的手机号，登录时将自动注册，且代表已同意
        <a
          href="https://i.waimai.meituan.com/c/rules/%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E6%9D%A1%E6%AC%BE%E6%9C%80%E6%96%B0%E7%89%88.html"
          >《用户服务协议》</a
        >
      </p>
    </section>
    <button type="submit" class="form-submit">登陆</button>
  </form>
</template>

<script>
import BaseSwitch from 'components/BaseSwitch'
import { isPhoneNumber, isCode } from '@/utils/validate.js'

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
      isActive: false,
      isShowPassword: false, // 是否显示密码
      timeCount: 0, // 计时器
      phone: '', // 手机号
      code: '', // 手机验证码
      name: '', // 用户名
      pwd: '', // 密码
      captcha: '', // svg验证码
      captchaUrl: `${process.env.VUE_APP_BASE}captcha`
    }
  },
  computed: {
    // 是否显示`发送验证码`
    isSendMessageCode() {
      return (
        this.phone.length && isPhoneNumber(this.phone) && this.timeCount === 0
      )
    },
    // 根据计时器状态来显示不同文字
    getMessageCodeText() {
      if (this.timeCount > 0) {
        return `请在${this.timeCount}(s)后重新发送`
      } else {
        return '获取验证码'
      }
    }
  },
  methods: {
    // 点击时判断当前是否处于计时状态
    async getMessageCode() {
      // 如果不存在计时就开始计时
      let timer
      if (!this.timeCount) {
        this.timeCount = 60
        timer = setInterval(() => {
          if (this.timeCount === 0) {
            clearInterval(timer)
          } else {
            this.timeCount--
          }
        }, 1000)
        // 请求验证码
        try {
          let { data } = await this.$axios.getMessageCodeApi(this.phone)
          if (data.code === 1) {
            this.emitMessage(data.msg)
            if (this.timeCount) {
              this.timeCount = 0
              clearInterval(timer)
              timer = undefined
            }
          }
        } catch (error) {
          this.emitMessage('发送验证码失败')
        }
      }
    },
    // 根据BaseSwitch组件状态来决定是否显示密码
    handleSwitch(isSwitch) {
      this.isShowPassword = isSwitch
    },
    // 提交表单,验证
    handleLoginSubmit() {
      this.isPasswordWay ? this.checkPasswordWay() : this.checkMessageWay()
    },
    // 验证手机验证码登录方式
    checkMessageWay() {
      if (!this.phone) {
        this.emitMessage('请输入手机号')
      } else if (!isPhoneNumber(this.phone)) {
        this.emitMessage('手机号格式错误')
      } else if (!this.code) {
        this.emitMessage('请输入验证码')
      } else if (!isCode(this.code)) {
        this.emitMessage('请输入正确的验证码')
      }
    },
    // 验证用户名密码登录方式
    checkPasswordWay() {
      if (!this.name) {
        this.emitMessage('请输入用户名/邮箱/手机号')
      } else if (!this.pwd) {
        this.emitMessage('请输入密码')
      } else if (!this.captcha) {
        this.emitMessage('请输入验证码')
      }
    },
    // 向父组件传递消息
    emitMessage(message) {
      this.$emit('checkMessage', message)
    },
    // 更新svg
    handleSvgClick() {
      this.$refs.captchaImg.src = this.captchaUrl + '?time=' + Date.now()
    }
  }
}
</script>

<style lang="stylus" scoped>
$textColor = #333
$btnColor = #ccc
$inputBorder = #ddd

.login-form
  overflow hidden
  .form-phone
  .form-message_code
  .form-svg_code
  .form-password
  .form-mail
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
        border px2rem(1) solid $themeColor
    >button
      position absolute
      top 50%
      right px2rem(10)
      transform translateY(-50%)
      border none
      background transparent
      color $btnColor
      &.isActive
        color #000
    >img
      position absolute
      right 0
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
