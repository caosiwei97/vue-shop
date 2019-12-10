<template>
  <div class="shop-cart-wrapper">
    <div class="shop-cart">
      <div class="cart-left" @click="toggoleShowDetail">
        <div class="left-icon">
          <i
            :class="['iconfont', 'iconiconshopping', { highlight: totalCount }]"
          ></i>
          <div class="icon-label" v-if="totalCount">{{ totalCount }}</div>
        </div>
        <div class="left-price">
          <div class="price-sum">￥{{ totalPrice }}</div>
          <div class="price-delivery">配送费￥{{ info.deliveryPrice }}元</div>
        </div>
      </div>
      <div :class="['cart-right', { highlight: cartRightText === '去结算' }]">
        {{ cartRightText }}
      </div>
    </div>
    <transition name="fade">
      <div class="shop-detail" v-show="isShowList" @click="toggoleShowDetail">
        <div class="detail-wrapper">
          <h3 class="detail-header">
            <div class="header-left">购物车</div>
            <div class="header-right">清空</div>
          </h3>
          <ul class="detail-list">
            <li
              class="list-item"
              v-for="(item, index) in cartLists"
              :key="index"
            >
              <div class="item-left">{{ item.name }}</div>
              <div class="item-right">
                <span class="right-price">￥{{ item.price }}</span>
                <card-control :food="item"></card-control>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import CardControl from 'components/CardControl'

export default {
  name: 'ShopCart',
  components: {
    CardControl
  },
  data() {
    return {
      isShowDetail: false
    }
  },
  computed: {
    ...mapState(['info', 'cartLists']),
    ...mapGetters(['totalPrice', 'totalCount']),
    cartRightText() {
      let rest = this.totalPrice - this.info.minPrice

      if (this.totalPrice === 0) {
        return `￥${this.info.minPrice}元起送`
      } else if (rest >= 0) {
        return '去结算'
      } else {
        return `还差${Math.abs(rest)}元起送`
      }
    },
    isShowList() {
      // if (this.totalCount === 0) {
      //   this.isShowDetail = false
      //   return false
      // }
      if (this.totalCount && !this.isShowDetail) {
        return false
      }
      return this.isShowDetail && this.totalCount
    }
  },
  methods: {
    toggoleShowDetail() {
      if (this.totalCount !== 0) {
        this.isShowDetail = !this.isShowDetail
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.fade-enter-active
.fade-leave-active
  transition opacity .5s
.fade-enter
.fade-leave-to
  opacity 0
.shop-cart-wrapper
  .shop-cart
    position fixed
    bottom 0
    left 0
    right 0
    z-index 9999
    background black
    display flex
    align-items center
    height px2rem(50)
    .cart-left
      flex 3
      color $white
      display flex
      padding-left px2rem(10)
      align-items center
      .left-icon
        width px2rem(50)
        height px2rem(50)
        border-radius 50%
        background black
        transform translateY(px2rem(-10))
        position relative
        >i
          font-size 3em
          color #766b6b
          positionCenter()
          &.highlight
            color $themeColor
        .icon-label
          position absolute
          right 0
          top 0
          background red
          color $white
          width px2rem(18)
          height px2rem(14)
          border-radius px2rem(10)
          font-size .8em
          text-align center
          line-height 1.2
      .left-price
        padding-left px2rem(5)
        text-align center
        .price-delivery
          font-size .8em
          color $iconColor
        .price-sum
          font-weight bold
          padding-bottom px2rem(5)
    .cart-right
      flex 1
      background #302a2a
      font-size .8em
      font-weight bold
      text-align center
      color $white
      height 100%
      line-height 4
      &.highlight
        background $themeColor
  .shop-detail
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    background rgba(0, 0, 0, .5)
    z-index 999
    .detail-wrapper
      position absolute
      left 0
      right 0
      bottom px2rem(50)
      background $white
      .detail-header
        display flex
        align-items center
        justify-content space-between
        background $backgroundColor
        box-shadow 0 px2rem(1) #ccc
        padding px2rem(10) px2rem(5)
        color $textColor
        .header-right
          font-size .8em
          color $themeColor
      .detail-list
        .list-item
          display flex
          align-items center
          justify-content space-between
          padding px2rem(15) px2rem(10)
          .item-right
            display flex
            align-items center
            .right-price
              padding-right px2rem(10)
              color red
</style>
