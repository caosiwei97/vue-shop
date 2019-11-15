<template>
  <div class="shoplist-title">
    <i class="iconfont iconliebiao"></i>
    <span class="title-shop">{{ shoplistTitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'HomeShoplistTitle',
  props: {
    shoplistTitle: String
  }
}
</script>

<style lang="stylus" scoped>
.shoplist-title
  margin-top px2rem(10)
  background-color $white
  top-border-1px($borderColor)
  padding px2rem(10) px2rem(10) 0
  .iconfont
    font-size 1.25em
    vertical-align middle
  .title-shop
    margin-left px2rem(10)
    font-size .875em
    color $iconColor
</style>
