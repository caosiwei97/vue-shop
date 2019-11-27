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
    <!-- home-shoplist title -->
    <home-shoplist-title></home-shoplist-title>
    <!-- home-shoplists -->
    <home-shoplist :shop-lists="shopLists"></home-shoplist>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'
import HomeSwiper from './components/HomeSwiper'
import HomeShoplist from './components/HomeShoplist'
import HomeShoplistTitle from './components/HomeShoplistTitle'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    HeaderSlot,
    HomeSwiper,
    HomeShoplist,
    HomeShoplistTitle
  },
  computed: {
    ...mapState({
      // 首页标题地址
      headerTile: state => state.address.name,
      iconLists: state => state.categories,
      shopLists: state => state.shoplists
    })
  },
  mounted() {
    // 请求首页地址信息，更新state
    this.getAddress()
    // 获取首页食品分类信息
    this.getCategories()
    // 获取商家列表
    this.getShoplists()
  },
  methods: {
    ...mapActions(['getAddress', 'getCategories', 'getShoplists'])
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
