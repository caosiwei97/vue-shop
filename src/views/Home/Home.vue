<template>
  <div class="home">
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
    <!-- home-swiper -->
    <home-swiper :icon-lists="iconLists"></home-swiper>
    <!-- home-shop-lists -->
    <home-shop-list :shop-lists="shopLists"></home-shop-list>
  </div>
</template>

<script>
// component
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeShopList from './components/HomeShopList.vue'

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

// shop img
import shopOne from 'images/shop/1.jpg'
import shopTwo from 'images/shop/2.jpg'
import shopThree from 'images/shop/3.jpg'
import shopFour from 'images/shop/4.jpg'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HeaderTop,
    HomeShopList
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
      ],
      shopLists: [
        {
          id: '1',
          shopLink: 'https://www.maomiav.com/',
          shopImgUrl: shopOne,
          shopBrandnew: '麦草家',
          shopService: ['保', '准', '票'],
          shopScore: '3.7',
          shopLogo: '老曹专送',
          shopOrders: '88',
          shopLowestPrice: '20',
          shopDeliverPrice: '5'
        },
        {
          id: '2',
          shopLink: 'https://www.maomiav.com/',
          shopImgUrl: shopTwo,
          shopBrandnew: '麦草家',
          shopService: ['保', '准', '票'],
          shopScore: '3.7',
          shopLogo: '老曹专送',
          shopOrders: '88',
          shopLowestPrice: '20',
          shopDeliverPrice: '5'
        },
        {
          id: '3',
          shopLink: 'https://www.maomiav.com/',
          shopImgUrl: shopThree,
          shopBrandnew: '麦草家',
          shopService: ['保', '准', '票'],
          shopScore: '3.7',
          shopLogo: '老曹专送',
          shopOrders: '88',
          shopLowestPrice: '20',
          shopDeliverPrice: '5'
        },
        {
          id: '4',
          shopLink: 'https://www.maomiav.com/',
          shopImgUrl: shopFour,
          shopBrandnew: '麦草家',
          shopService: ['保', '准', '票'],
          shopScore: '3.7',
          shopLogo: '老曹专送',
          shopOrders: '88',
          shopLowestPrice: '20',
          shopDeliverPrice: '5'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.home {
  position: relative;
  padding-top: px2rem(45);
}

.top-left-search {
  font-size: 1.8em;
}

.top-right-login {
  font-size: .875em;
}
</style>
