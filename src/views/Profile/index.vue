<template>
  <div class="profile">
    <!-- headertop -->
    <header-slot :header-title="headerTile"></header-slot>
    <!-- login -->
    <profile-login></profile-login>
    <!-- data -->
    <profile-data :data-links="dataLinks"></profile-data>
    <!-- nav -->
    <profile-nav :nav-links="navLinks"></profile-nav>
    <!-- service -->
    <profile-nav :nav-links="serviceLinks"></profile-nav>
    <!-- logout button -->
    <base-button class="profile-logout" v-if="isShowButton"></base-button>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'
import ProfileLogin from './components/ProfileLogin'
import ProfileData from './components/ProfileData'
import ProfileNav from './components/ProfileNav'
import BaseButton from 'components/BaseButton'

export default {
  name: 'Profile',
  components: {
    HeaderSlot,
    ProfileLogin,
    ProfileData,
    ProfileNav,
    BaseButton
  },
  data() {
    return {
      headerTile: '我的',
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
      ],
      serviceLinks: [
        {
          title: '服务中心',
          iconColor: 'green',
          iconClassName: 'iconfuwuzhongxin'
        }
      ]
    }
  },
  computed: {
    isShowButton() {
      return this.$store.state.userInfo['_id']
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  overflow hidden
  .profile-login
    margin-top px2rem(45.5)
  .profile-nav
  .profile-logout
    margin-top px2rem(10)
</style>
