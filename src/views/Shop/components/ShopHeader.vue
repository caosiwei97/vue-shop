<template>
  <div class="shop-header">
    <!-- ?? -->
    <nav class="header-nav" :style="{ backgroundImage: `url(${info.bgImg})` }">
      <router-link class="nav-link" :to="{ path: '/home' }">
        <i class="iconfont iconicon_arrow_left"></i>
      </router-link>
      <!-- ???? -->
      <div class="nav-img">
        <img :src="info.avatar" alt="" />
      </div>
    </nav>
    <!-- ???? -->
    <div class="header-content">
      <!-- 标题 -->
      <h3 class="content-title" @click="toggleShopCard">
        <span class="title-brandnew">品牌</span>
        <span class="title-name">{{ info.name }}</span>
        <span class="title-icon"></span>
      </h3>
      <!-- 商家数据 -->
      <div class="content-detail">
        <span class="detail-rating">{{ info.serviceScore }}</span>
        <span class="detail-orders">月售{{ info.sellCount }}单</span>
        <span class="deatil-service">{{ info.description }}</span>
        <span class="detail-time">约{{ info.deliveryTime }}分钟</span>
        <span class="detail-distance">距离{{ info.distance }}</span>
      </div>
      <!-- 优惠 -->
      <div
        class="content-discount"
        v-if="info.supports"
        @click="toggleDiscountCard"
      >
        <span class="discount-logo">{{ info.supports[0].name }}</span>
        <span class="discount-detail">{{ info.supports[0].content }}</span>
        <span class="discount-num">{{ info.supports.length }}个优惠</span>
        <span class="discount-icon"></span>
      </div>
    </div>
    <!-- 显示商家详细信息 -->
    <transition name="fade">
      <div
        class="header-show-detail"
        v-show="isShowShopCard"
        @click="toggleShopCard"
      >
        <div class="detail-card">
          <h3 class="card-title">
            <span class="title-brandnew">品牌</span>
            <span class="title-name">{{ info.name }}</span>
          </h3>
          <div class="card-item">
            <div class="item-cell">
              <span>{{ info.serviceScore }}</span>
              <span>评分</span>
            </div>
            <div class="item-cell">
              <span>{{ info.sellCount }}</span>
              <span>月售</span>
            </div>
            <div class="item-cell">
              <span>{{ info.description }}</span>
              <span>约{{ info.deliveryTime }}分钟</span>
            </div>
            <div class="item-cell">
              <span>{{ info.deliveryPrice }}</span>
              <span>配送费用</span>
            </div>
            <div class="item-cell">
              <span>{{ info.distance }}</span>
              <span>距离</span>
            </div>
          </div>
          <div class="card-notice">
            <span>公告</span>
            <p>{{ info.bulletin }}</p>
          </div>
          <div class="card-close" @click="toggleShopCard"></div>
        </div>
      </div>
    </transition>
    <!-- 显示优惠 -->
    <transition name="fade">
      <div
        class="header-show-discount"
        v-if="isShowDiscountCard"
        @click="toggleDiscountCard"
      >
        <div class="discount-card">
          <h3 class="card-title">优惠活动</h3>
          <div class="card-content">
            <p
              class="content-item"
              v-for="(item, index) in info.supports"
              :key="index"
            >
              <span
                class="discount-logo"
                :style="{ backgroundColor: discountColor[item.type] }"
                >{{ item.name }}</span
              >
              <span class="discount-detail">{{ item.content }}</span>
            </p>
          </div>
          <div class="card-close" @click="toggleDiscountCard"></div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShopHeader',
  computed: {
    ...mapState(['info'])
  },
  data() {
    return {
      isShowShopCard: false,
      isShowDiscountCard: false,
      discountColor: ['orange', 'red', 'yellowgreen']
    }
  },
  methods: {
    toggleShopCard() {
      this.isShowShopCard = !this.isShowShopCard
    },
    toggleDiscountCard() {
      this.isShowDiscountCard = !this.isShowDiscountCard
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
.shop-header
  background $white
  overflow hidden
  position relative
  height 100%
  .header-nav
    width 100%
    height px2rem(50)
    background no-repeat
    background-size cover
    position relative
    .nav-link
      display flex
      justify-content center
      align-items center
      width px2rem(50)
      height px2rem(50)
      .iconfont
        color $white
        font-size 1.5em
    .nav-img
      width px2rem(60)
      height px2rem(60)
      position absolute
      left 50%
      top px2rem(10)
      transform translateX(-50%)
      >img
        width 100%
        box-shadow: 0 0 .4vw 0 rgba(0, 0, 0, .2)
  .header-content
    margin-top px2rem(30)
    display flex
    justify-content center
    flex-direction column
    text-align center
    .content-title
      .title-brandnew
        padding px2rem(2)
        background yellow
        font-size .8em
        color $textColor
        transform translateY(px2rem(-10))
      .title-name
        font-weight bold
        font-size 1.2em
        margin 0 px2rem(10)
      .title-icon
        display inline-block
        width 0
        height 0
        border px2rem(5) solid transparent
        border-left px2rem(5) solid $textColor
    .content-detail
      margin px2rem(10) 0
      span
        margin-right px2rem(5)
        font-size .8em
        color $textColor
    .content-discount
      width 90%
      margin 0 auto
      margin-bottom px2rem(10)
      border px2rem(1) solid $borderColor
      font-size .8em
      padding px2rem(5)
      display flex
      justify-content space-between
      align-items center
      .discount-logo
        background $themeColor
        color $white
        padding px2rem(1)
        box-sizing border-box
        font-size .6em
      .discount-icon
        border px2rem(5) solid transparent
        border-top px2rem(5) solid $textColor
        transform translateY(20%)
  .header-show-detail
  .header-show-discount
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    height 100%
    background rgba(0, 0, 0, 0.5)
    .detail-card
      width 90%
      height 30%
      padding px2rem(15) px2rem(10)
      positionCenter()
      background $white
      border-radius px2rem(10)
      box-sizing border-box
      text-align center
      .card-title
        .title-brandnew
          padding px2rem(2)
          background yellow
          font-size .8em
          color $textColor
          transform translateY(px2rem(-10))
        .title-name
          font-weight bold
          font-size 1.2em
          margin 0 px2rem(10)
      .card-item
        display table
        margin px2rem(10) 0
        .item-cell
          display table-cell
          >span
            display inline-block
            &:last-child
              font-size .8em
              color $iconColor
      .card-notice
        font-size .8em
        color $iconColor
        >span
          position relative
          &::before
          &::after
            content ''
            display inline-block
            position absolute
            top 50%
            width px2rem(20)
            height px2rem(1)
          &::before
            left px2rem(-25)
            background-image linear-gradient(to right, #e7e3e3, #a19f9f)
          &::after
            right px2rem(-25)
            background-image linear-gradient(to left, #e7e3e3, #a19f9f)
        >p
          text-align left
          padding-top px2rem(5)
          line-height 1.4
          color $textColor
      .card-close
        width px2rem(20)
        height px2rem(20)
        border-radius 50%
        border px2rem(1) solid $white
        position absolute
        left 50%
        transform translate(-50%)
        bottom px2rem(-30)
        &::before
        &::after
          content ''
          position absolute
          width px2rem(2)
          height px2rem(18)
          background $white
          transform-origin center
        &::before
          transform rotate(45deg)
        &::after
          transform rotate(-45deg)
  .header-show-discount
    .discount-card
      height 30%
      position absolute
      bottom 0
      left 0
      right 0
      background-color $white
      padding px2rem(20)
      .card-title
        font-weight bold
        font-size 1.5em
        margin-bottom px2rem(20)
        text-align center
      .card-content
        overflow scroll
        height 80%
        .content-item
          line-height 2
          .discount-logo
            color $white
            padding px2rem(1)
            box-sizing border-box
            font-size .8em
            margin-right px2rem(10)
          .discount-detail
            color $navTextColor
      .card-close
        width px2rem(20)
        height px2rem(20)
        border-radius 50%
        position absolute
        right px2rem(10)
        top px2rem(10)
        &::before
        &::after
          content ''
          position absolute
          left 50%
          top 50%
          width px2rem(2)
          height px2rem(18)
          background black
        &::before
          transform translate(-50%, -50%) rotate(45deg)
        &::after
          transform translate(-50%, -50%) rotate(-45deg)
</style>
