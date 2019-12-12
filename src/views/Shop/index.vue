<template>
  <div class="shop">
    <shop-header></shop-header>
    <div class="shop-routers">
      <router-link :to="{ path: 'foods' }" class="router-link">
        <span>点餐</span>
      </router-link>
      <router-link :to="{ path: 'commends' }" class="router-link">
        <span>评价</span>
      </router-link>
      <router-link :to="{ path: 'info' }" class="router-link">
        <span>商家</span>
      </router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from './components/ShopHeader'

export default {
  name: 'Shop',
  components: {
    ShopHeader
  }
}
</script>

<style lang="stylus" scoped>
.shop
  overflow hidden
  height 100%
  position relative
  .shop-routers
    display flex
    bottom-border-1px($borderColor)
    background $white
    .router-link
      flex 1
      text-align center
      >span
        display inline-block
        padding px2rem(10) 0
    .router-link-active
      color $themeColor
      >span
        position relative
        &::after
          content ''
          position absolute
          bottom 0
          left 0
          right 0
          height px2rem(1)
          background $themeColor
</style>
