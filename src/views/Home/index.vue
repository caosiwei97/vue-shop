<template>
  <div class="home">
    <!-- header slot -->
    <header-slot :header-title="headerTile">
      <!-- left slot -->
      <template #left>
        <i class="iconfont iconsousuo1 slot-left"></i>
      </template>
      <!-- right slot -->
      <template #right>
        <span class="top-right-login slot-right">登陆|注册</span>
      </template>
    </header-slot>
    <!-- swiper nav -->
    <home-swiper :icon-lists="iconLists"></home-swiper>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'
import HomeSwiper from './components/HomeSwiper'

// icon img
import iconOne from 'images/home/1.jpg'
import iconTwo from 'images/home/2.jpg'
import iconThree from 'images/home/3.jpg'
import iconFour from 'images/home/4.jpg'
import iconFive from 'images/home/5.jpg'
import iconSix from 'images/home/6.jpg'
import iconSeven from 'images/home/7.jpg'
import iconEight from 'images/home/8.jpg'
import iconNight from 'images/home/9.jpg'

export default {
  name: 'Home',
  components: {
    HeaderSlot,
    HomeSwiper
  },
  data() {
    return {
      headerTile: '金石滩街道大连民族大学4号公寓',
      iconLists: [
        {
          iconUrl: iconOne,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconTwo,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconThree,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconFour,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconFive,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconSix,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconSeven,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconEight,
          iconTitle: '甜品饮品'
        },
        {
          iconUrl: iconNight,
          iconTitle: '甜品饮品'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  position relative
  padding-top px2rem(45)
  .slot-left
    font-size: 1.8em
  .slot-right
    font-size: .875em
</style>
