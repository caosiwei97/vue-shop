<template>
  <div class="home">
    <!-- header slot -->
    <header-slot :header-title="headerTile">
      <!-- left slot -->
      <template #left>
        <router-link :to="{ path: '/search' }" class="slot-left">
          <i class="iconfont iconsousuo1"></i>
        </router-link>
      </template>
      <!-- right slot -->
      <template #right>
        <router-link
          class="top-right-login slot-right"
          :to="userInfo['_id'] ? { path: '/userInfo' } : { path: '/login' }"
        >
          <span v-if="!userInfo['_id']">登陆|注册</span>
          <span v-else>
            <i class="iconfont icongeren1"></i>
          </span>
        </router-link>
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
import HomeShoplist from './components/HomeShopList'
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
      shopLists: state => state.shoplists,
      userInfo: state => state.userInfo
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
    color $white
  .slot-right
    font-size: .875em
    color $white
    .iconfont
      font-size 1.5em
</style>
