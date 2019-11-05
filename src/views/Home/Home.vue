<template>
  <div class="dashboard">
    <!-- header-top -->
    <header-top :header-title="title">
      <!-- left slot -->
      <template #left>
        <i class="iconfont iconsousuo1 top-left-search"></i>
      </template>
      <!-- right slot -->
      <template #right>
        <span class="top-right-login">登陆|注册</span>
      </template>
    </header-top>
    <!-- Home-Swiper -->
    <home-swiper :icon-lists="iconLists"></home-swiper>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
import HomeSwiper from './components/HomeSwiper.vue'
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
    HomeSwiper,
    HeaderTop
  },
  data () {
    return {
      title: '大连市金石滩街道大连民族大学',
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

<style scoped lang="stylus">
.top-left-search
  font-size 1.8em
.top-right-login
  font-size .875em
</style>
