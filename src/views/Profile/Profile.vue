<template>
  <div class="profile">
    <header-top :header-title="title"></header-top>
    <!-- login -->
    <section class="profile-login">
      <a href="#" class="login-link">
        <div class="login-logo">
          <i class="iconfont icongeren"></i>
        </div>
        <div class="login-info">
          <P>登陆/注册</P>
          <p>
            <i class="iconfont iconshouji"></i>
            <span>暂无绑定手机号</span>
          </p>
        </div>
        <div class="login-button">
          <i class="iconfont iconjiantou1"></i>
        </div>
      </a>
    </section>
    <!-- data -->
    <section class="profile-data">
      <div class="data-list">
        <a class="list-link" v-for="(item,index) in dataLinks" :key="index">
          <span class="link-top"><span :style="{ color: item.color }">{{ item.content }}</span>{{ item.unit }}</span>
          <span class="link-bottom">{{ item.title }}</span>
        </a>
      </div>
    </section>
    <!-- other nav -->
    <section class="profile-nav">
      <a href="#" class="nav-link" v-for="(item, index) in navLinks" :key="index">
        <span class="link-left">
          <span class="left-icon">
            <i :class="['iconfont', item.iconClassName]" :style="{ color: item.iconColor }"></i>
          </span>
          <span class="left-title">{{ item.title }}</span>
        </span>
        <span class="link-right">
          <i class="iconfont iconjiantou1"></i>
        </span>
      </a>
    </section>
    <!-- service -->
    <section class="profile-service">
      <a class="service-link" href="#">
        <span class="link-left">
          <span class="left-icon">
            <i class="iconfont iconfuwuzhongxin"></i>
          </span>
          <span class="left-title">服务中心</span>
        </span>
        <span class="link-right">
          <i class="iconfont iconjiantou1"></i>
        </span>
      </a>
    </section>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'

export default {
  name: 'Profile',
  components: { HeaderTop },
  data () {
    return {
      title: '我的',
      dataLinks: [
        {
          title: '我的余额',
          content: '0.00',
          unit: '元',
          color: '#f90'
        },
        {
          title: '我的优惠',
          content: '0',
          unit: '个',
          color: '#ff5f3e'
        },
        {
          title: '我的积分',
          content: '0',
          unit: '分',
          color: '#6ac20b'
        }
      ],
      navLinks: [
        {
          title: '我的订单',
          iconColor: 'green',
          iconClassName: 'icondingdan'
        },
        {
          title: '积分商城',
          iconColor: '#ff5f3e',
          iconClassName: 'iconiconshopping'
        },
        {
          title: '老曹外卖会员卡',
          iconColor: '#f90',
          iconClassName: 'iconhuiyuan'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
$textColor = #333
.profile
  overflow hidden
  .profile-login
    margin-top px2rem(45.5)
    .login-link
      display flex
      align-items center
      background $yellow
      padding px2rem(20) px2rem(10)
      position relative
      .login-logo
        overflow hidden
        border-radius 50%
        width px2rem(60)
        height px2rem(60)
        i
          font-size 3.95em
          background $borderColor
      .login-info
        margin-left px2rem(15)
        font-size 1.125em
        font-weight bold
        color $white
        p:first-child
          padding-bottom px2rem(10)
        p:last-child
          font-size .77em
          vertical-align center
      .login-button
        position absolute
        right 5%
        top 50%
        transform translateY(-50%)
        color $white
  .profile-data
    overflow hidden
    background $white
    width 100%
    bottom-border-1px($borderColor)
    .data-list
      display flex
      .list-link
        flex 1
        text-align center
        border-right px2rem(1) solid $borderColor
        & > span
          display block
          font-siez .875em
        .link-top
          color $textColor
          padding px2rem(10) px2rem(15) px2rem(10)
          & > span
            font-size 2.14em
        .link-bottom
          padding-bottom px2rem(10)
          font-size .875em
      a.list-link:last-child
        border-right none
  // common styles
  .profile-nav
  .profile-service
    margin-top px2rem(10)
    overflow hidden
    top-border-1px($borderColor)
    // common styles
    .nav-link
    .service-link
      display flex
      justify-content space-between
      align-items center
      background-color $white
      bottom-border-1px($borderColor)
      padding px2rem(18) px2rem(15)
      .link-left
        display flex
        align-items center
        .left-icon
          display flex
          align-items center
          width px2rem(20)
          height px2rem(20)
          i
            font-size 1.3em
        .left-title
          color $textColor
          padding-left px2rem(5)
  // overide service styles
  .profile-service
    .service-link
      top-border-1px($borderColor)
      .left-icon
        color $yellow
</style>
