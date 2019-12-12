<template>
  <div class="shop-comments">
    <div class="comments-rating">
      <div class="rating-left">
        <div class="left-num">{{ info.score }}</div>
        <p class="left-description">综合评分</p>
        <p class="left-rate">高于周边商家{{ info.rankRate }}%</p>
      </div>
      <div class="rating-right">
        <div class="right-altitude">
          <span>服务态度</span>
          <base-stars :score="info.serviceScore" :size="36"></base-stars>
          <span class="score">{{ info.serviceScore }}</span>
        </div>
        <div class="right-foods">
          <span>商家评分</span>
          <base-stars :score="info.foodScore" :size="36"></base-stars>
          <span class="score">{{ info.foodScore }}</span>
        </div>
        <div class="right-time">
          <span>送达时间</span>
          <span class="time">{{ info.deliveryTime }}分钟</span>
        </div>
      </div>
    </div>
    <div class="comments-detail">
      <div class="detail-header">
        <div class="header-button_top">
          <div
            class="button-all button"
            :class="{ current: commendType === 2 }"
            @click="handleTypeClick(2)"
          >
            <span>全部</span>
            <span>12</span>
          </div>
          <div
            class="button-good button"
            :class="{ current: commendType === 0 }"
            @click="handleTypeClick(0)"
          >
            <span>满意</span>
            <span>11</span>
          </div>
          <div
            class="button-bad button"
            :class="{ current: commendType === 1 }"
            @click="handleTypeClick(1)"
          >
            <span>不满意</span>
            <span>10</span>
          </div>
        </div>
        <div class="header-button_bottom" @click="toggleShow">
          <i
            class="iconfont iconduigou"
            :class="{ current: isShowOnlyText }"
          ></i>
          <span>只看有内容的评价</span>
        </div>
      </div>
      <div class="detail-list-wrapper">
        <ul>
          <li
            class="list-item"
            v-for="(item, index) in filterCommendLists.get(commendType)"
            :key="index"
          >
            <div class="item-left">
              <img :src="item.avatar" />
            </div>
            <div class="item-right">
              <p class="right-header">
                <span class="header-username">{{ item.username }}</span>
                <span class="header-time">{{ item.rateTime }}</span>
              </p>
              <p class="right-rate">
                <base-stars :score="item.score" :size="24"></base-stars>
                <span>{{ item.deliveryTime }}</span>
              </p>
              <P class="right-commends">{{ item.text }}</P>
              <div class="right-label">
                <span class="label-logo"></span>
                <span
                  class="label-recommend"
                  v-for="(food, index) in item.recommend"
                  :key="index"
                  >{{ food }}
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BaseStars from 'components/BaseStars'
import { mapState } from 'vuex'
import BScroll from '@better-scroll/core'

export default {
  name: 'ShopComments',
  components: {
    BaseStars
  },
  data() {
    return {
      commendType: 2,
      isShowOnlyText: true
    }
  },
  computed: {
    ...mapState(['info', 'commendLists']),
    filterCommendLists() {
      let filterMap = new Map()
      let goodList = [] // 存放具有满意态度的评论信息
      let badList = [] // 存放不满意的
      let allList = [] // 所有评论

      allList = Array.from(this.commendLists)

      allList.forEach(item => {
        item.rateType === 0 ? goodList.push(item) : badList.push(item)
      })
      // 是否显示只有内容的评价
      if (this.isShowOnlyText) {
        goodList = this.filterNoTextCommend(goodList)
        badList = this.filterNoTextCommend(badList)
        allList = this.filterNoTextCommend(allList)
      }
      // 存入map
      return filterMap
        .set(0, goodList)
        .set(1, badList)
        .set(2, allList)
    }
  },
  mounted() {
    this.getShopInfo(), this.getShopRating()
  },
  methods: {
    // 请求商家信息
    getShopInfo() {
      this.$store.dispatch('getShopInfo')
    },
    // 请求商家评论信息
    getShopRating() {
      this.$store.dispatch('getCommendLists', () => {
        this.$nextTick(() => {
          this._initBscroll()
        })
      })
    },
    // 初始化Bscroll
    _initBscroll() {
      if (!this.scroll) {
        this.scroll = new BScroll('.detail-list-wrapper', {
          click: true,
          probeType: 2
        })
      }
    },
    // 根据评论类型切换不同类型评论
    handleTypeClick(type) {
      this.commendType = type
    },
    toggleShow() {
      this.isShowOnlyText = !this.isShowOnlyText
    },
    // 过滤无内容的评论
    filterNoTextCommend(list) {
      return list.filter(item => item.text)
    }
  }
}
</script>

<style lang="stylus" scoped>
.shop-comments
  .comments-rating
    padding px2rem(15) px2rem(10)
    display flex
    bottom-border-1px($borderColor)
    color $textColor
    background $white
    .rating-left
      flex 1
      display flex
      align-items center
      flex-direction column
      right-border-1px(#a69595)
      padding-right px2rem(10)
      .left-num
        color $themeColor
        font-weight bold
        font-size 1.2em
      .left-description
        padding px2rem(5) 0
        font-size .8em
      .left-rate
        font-size .6em
        color $iconColor
    .rating-right
      flex 2
      padding px2rem(5) px2rem(20)
      display flex
      flex-direction column
      justify-content space-between
      font-size .8em
      >div
        display flex
        align-items center
        >span:first-child
          padding-right px2rem(5)
        .score
          color $themeColor
          padding-left px2rem(5)
        .time
          color $iconColor
          padding-left px2rem(5)
          font-size .8em
  .comments-detail
    margin-top px2rem(15)
    background $white
    top-border-1px($borderColor)
    .detail-header
      padding px2rem(20)
      bottom-border-1px($borderColor)
      .header-button_top
        font-size .6em
        color $textColor
        display flex
        .button
          flexCenter()
          width px2rem(65)
          height px2rem(30)
          background #ddd
          margin-right px2rem(10)
          flex-direction row
          &.current
            color $white
            background $themeColor
      .header-button_bottom
        padding-top px2rem(25)
        display flex
        align-items center
        .iconfont
          color #ddd
          font-size 1.2em
          &.current
            color $themeColor
        >span
          font-size .8em
          color $iconColor
    .detail-list-wrapper
      width 100%
      height px2rem(300)
      overflow hidden
      .list-item
        display flex
        padding px2rem(20)
        height px2rem(100)
        bottom-border-1px($borderColor)
        .item-left
          margin-right px2rem(10)
          >img
            width px2rem(20)
            height px2rem(20)
            border-radius 50%
        .item-right
          color $textColor
          font-size .8em
          width 100%
          .right-header
            display flex
            justify-content space-between
            font-size .8em
            >span.header-time
              color $iconColor
          .right-rate
            padding-top px2rem(5)
            display flex
            align-items center
            >span
              padding-left px2rem(5)
          .right-commends
            padding px2rem(5) 0

          .right-label
            display flex
            flex-wrap wrap
            .label-recommend
              margin 0 px2rem(5) px2rem(5) 0
              border px2rem(1) solid #ccc
              padding px2rem(1)
              color #bbb
</style>
