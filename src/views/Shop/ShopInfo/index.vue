<template>
  <div class="shop-info-wrapper">
    <div class="shop-info">
      <div class="info-delivery">
        <h3 class="delivery-title">配送信息</h3>
        <p class="delivery-detail">
          <span>{{ info.description }}</span>
          <span
            >由商家配送提供配送，约{{ info.deliveryTime }}分钟到达，距离{{
              info.distance
            }}</span
          >
        </p>
        <p class="delivery-cost">配送费￥{{ info.deliveryPrice }}</p>
      </div>
      <div class="info-service">
        <h3 class="service-title">活动和服务</h3>
        <div class="service-detail">
          <ul class="detail-list">
            <li
              class="list-item"
              v-for="(item, index) in info.supports"
              :key="index"
            >
              <span
                class="item-left"
                :style="{ backgroundColor: discountColor[item.type] }"
                >{{ item.name }}</span
              >
              <span class="item-right">{{ item.content }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="info-pic">
        <h3 class="pic-title">商家实景</h3>
        <div class="pic-list-wrapper">
          <ul class="pic-list" ref="pic">
            <li
              class="list-item"
              v-for="(pic, index) in info.pics"
              :key="index"
            >
              <img width="120" height="90" :src="pic" />
            </li>
          </ul>
        </div>
      </div>
      <div class="info-shop">
        <h3 class="shop-title">商家信息</h3>
        <p class="shop-category">
          <span class="title">品类</span>
          <span class="content">{{ info.category }}</span>
        </p>
        <p class="shop-contact">
          <span class="title">商家电话</span>
          <span class="content">{{ info.phone }}</span>
        </p>
        <p class="shop-address">
          <span class="title">地址</span>
          <span class="content">{{ info.address }}</span>
        </p>
        <p class="shop-time">
          <span class="title">营业时间</span>
          <span class="content">{{ info.workTime }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from '@better-scroll/core'

export default {
  name: 'ShopInfo',
  data() {
    return {
      discountColor: ['orange', 'red', 'yellowgreen']
    }
  },
  computed: {
    ...mapState(['info'])
  },
  mounted() {
    if (this.info.pics) {
      this._initBscroll()
    }
  },
  watch: {
    info() {
      this.$nextTick(() => {
        this._initBscroll()
      })
    }
  },
  methods: {
    _initBscroll() {
      let picWidth = 120
      let space = 5
      let picNum = this.info.pics.length
      let ul = this.$refs.pic
      // 初始化垂直方向上的滑动
      new BScroll('.shop-info-wrapper', {
        click: true,
        probeType: 2
      })
      // 给ul设置宽，形成滑动的条件
      ul.style.width = (picWidth + space) * picNum - space + 'px'
      // 初始化横向滑动
      new BScroll('.pic-list-wrapper', {
        scrollX: true,
        probeType: 2
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.shop-info-wrapper
  position absolute
  top px2rem(200)
  bottom 0
  left 0
  width 100%
  overflow hidden
  .shop-info
    .info-delivery, .info-service, .info-pic, .info-shop
      background $white
      padding px2rem(10)
      bottom-border-1px($borderColor)
      .delivery-title, .service-title, .pic-title, .shop-title
        font-weight bold
        padding-bottom px2rem(15)
      .delivery-detail
        font-size .8em
        padding-bottom px2rem(15)
        >span:first-child
          background $themeColor
          color $white
          padding px2rem(1)
          margin-right px2rem(5)
      .delivery-cost
        font-size .8em
        color $iconColor
    .info-service, .info-pic, .info-shop
      margin-top px2rem(15)
      top-border-1px($borderColor)
      .service-detail
        font-size .8em
        .detail-list
          .list-item
            padding-bottom px2rem(10)
            .item-left
              color $white
              padding px2rem(2)
              font-size .6em
              margin-right px2rem(5)


    .info-shop
      >p
        display flex
        justify-content space-between
        align-items center
        bottom-border-1px($borderColor)
        padding px2rem(20) 0
        font-size .8em
    .info-pic
      .pic-list-wrapper
        overflow hidden
        .pic-list
          display flex
          .list-item
            margin-right px2rem(5)
            width px2rem(120)
            height px2rem(90)
</style>
