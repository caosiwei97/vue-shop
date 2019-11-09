<template>
  <div class="home-shoplist-container">
    <!-- header -->
    <div class="shoplist-header">
      <span class="header-icon">
        <i class="iconfont icondingdan"></i>
      </span>
      <span class="header-title">附近商家</span>
    </div>
    <!-- list -->
    <div class="shoplist-content">
      <ul>
        <!-- item lists -->
        <li class="content-item" v-for="item in shopLists" :key="item.id">
          <a :href="item.shopLink">
            <!-- left -->
            <div class="item-img">
              <img :src="item.shopImgUrl" alt="" />
            </div>
            <!-- right -->
            <div class="item-detail">
              <!-- right header -->
              <section class="detail-header">
                <h4 class="header-brandnew">{{ item.shopBrandnew }}</h4>
                <ul>
                  <li
                    class="header-service"
                    v-for="(service, index) in item.shopService"
                    :key="index"
                  >
                    {{ service }}
                  </li>
                </ul>
              </section>
              <!-- right rating -->
              <section class="detail-rating">
                <div class="rating-info">
                  <base-stars :score="~~item.shopScore" :size="24"></base-stars>
                  <div class="score">{{ item.shopScore }}</div>
                  <div class="orders">月售{{ item.shopOrders }}单</div>
                </div>
                <div class="rating-logo">{{ item.shopLogo }}</div>
              </section>
              <!-- right price -->
              <section class="detail-price">
                <p class="price-info">
                  <span class="lowest-price">￥{{ item.shopLowestPrice }} 起送</span>
                  <span class="segment">/</span>
                  <span class="deliver-price">配送费约￥{{ item.shopDeliverPrice }}</span>
                </p>
              </section>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseStars from '@/components/BaseStars/BaseStars.vue'
export default {
  name: 'HomeShopList',
  props: {
    shopLists: Array
  },
  components: {
    BaseStars
  }
}
</script>

<style scoped lang="stylus">
$titleColor = #333
$serviceColor = #999
$borderColor = #f1f1f1

.home-shoplist-container
  position relative
  margin-top px2rem(10)
  background $white
  top-border-1px($borderColor)
  .shoplist-header
    padding px2rem(10) px2rem(10) 0
    color $iconColor
    font-size .875em
  .shoplist-content
    margin-bottom px2rem(50)
    .content-item
      bottom-border-1px($borderColor)
      a
        display flex
        padding px2rem(15) px2rem(8)
        .item-img
          flex 1
          padding-right px2rem(10)
          img
            display block
            width 100%
            height 100%
        .item-detail
          flex 3
          color #666
          .detail-header
            width 100%
            display flex
            justify-content space-between
            .header-brandnew
              width px2rem(140)
              font-size 1em
              color $titleColor
              font-weight bolder
              ellipsis()
              &::before
                content '品牌'
                display inline-block
                font-size .6875em
                color $titleColor
                background rgb(255, 217, 48)
                margin-right px2rem(5)
                padding px2rem(2)
                border-radius px2rem(2)
            ul
              display flex
              .header-service
                font-size .7em
                color $serviceColor
                border px2rem(1) solid $borderColor
                padding 0 px2rem(2)
                border-radius px2rem(2)
          .detail-rating
            display flex
            justify-content space-between
            align-items center
            font-size .6em
            margin px2rem(18) 0 px2rem(20) 0
            .rating-info
              display flex
              .score
                margin 0 px2rem(4)
                color #ff6000
            .rating-logo
              border px2rem(1) solid #02a774
              color #02a774
              padding px2rem(1)
          .detail-price
            font-size .75em
</style>
