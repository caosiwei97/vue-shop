<template>
  <div class="shoplist-container">
    <ul class="shoplist-wrapper" v-if="shopLists.length">
      <!-- item lists -->
      <li class="shoplist-item" v-for="item in shopLists" :key="item.id">
        <a :href="item.shopLink" class="item-wrapper">
          <!-- left -->
          <div class="item-img">
            <img :src="item.image_path" />
          </div>
          <!-- right -->
          <div class="item-detail">
            <!-- right header -->
            <section class="detail-header">
              <h4 class="header-brandnew">{{ item.name }}</h4>
              <ul class="header-service">
                <li
                  class="service-item"
                  v-for="service in item.supports"
                  :key="service._id"
                >
                  {{ service.icon_name }}
                </li>
              </ul>
            </section>
            <!-- right rating -->
            <section class="detail-rating">
              <div class="rating-info">
                <base-stars :score="~~item.rating" :size="24"></base-stars>
                <div class="score">{{ item.rating }}</div>
                <div class="orders">月售{{ item.recent_order_num }}单</div>
              </div>
              <div class="rating-logo">{{ item.delivery_mode.text }}</div>
            </section>
            <!-- right price -->
            <section class="detail-price">
              <p class="price-info">
                <span class="lowest-price"
                  >￥{{ item.float_minimum_order_amount }} 起送</span
                >
                <span class="segment">/</span>
                <span class="deliver-price"
                  >配送费约￥{{ item.float_delivery_fee }}</span
                >
              </p>
            </section>
          </div>
        </a>
      </li>
    </ul>
    <!-- no-list -->
    <ul v-else>
      <li v-for="item in 6" :key="item">
        <img :src="HomeShoplistSvg" />
      </li>
    </ul>
  </div>
</template>

<script>
import BaseStars from 'components/BaseStars'
import HomeShoplistSvg from 'images/svg/home_shoplist.svg'
export default {
  name: 'HomeShoplist',
  props: {
    shopLists: Array
  },
  components: {
    BaseStars
  },
  data() {
    return {
      HomeShoplistSvg
    }
  }
}
</script>

<style scoped lang="stylus">
$titleColor = #333

.shoplist-wrapper
  overflow hidden
  position relative
  background $white
  margin-bottom px2rem(45)
  .shoplist-item
    bottom-border-1px($borderColor)
    .item-wrapper
      display flex
      padding px2rem(15) px2rem(8)
      .item-img
        flex 1.5
        padding-right px2rem(10)
        img
          display block
          width 100%
      .item-detail
          flex 4
          color $navTextColor
          display flex
          flex-direction column
          justify-content space-between
          .detail-header
            width 100%
            display flex
            justify-content space-between
            .header-brandnew
              width px2rem(140)
              font-size 1em
              color $titleColor
              font-weight bold
              ellipsis()
              &::before
                content '品牌'
                display inline-block
                font-size .6875em
                background rgb(255, 217, 48)
                margin-right px2rem(5)
                padding px2rem(2)
                border-radius px2rem(2)
                vertical-align middle
            .header-service
              display flex
              align-items center
              .service-item
                font-size .6em
                width px2rem(10)
                height px2rem(10)
                color $iconColor
                border px2rem(1) solid $borderColor
                padding px2rem(2)
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
              border px2rem(1) solid $themeColor
              color $themeColor
              padding px2rem(1)
          .detail-price
            font-size .75em
</style>
