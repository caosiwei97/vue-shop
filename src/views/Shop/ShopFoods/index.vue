<template>
  <div class="shop-foods">
    <!-- 左栏分类 -->
    <div class="foods-category">
      <ul class="category-list">
        <li class="list-item" v-for="(item, index) in foodLists" :key="index">
          <div class="item-detail">
            <img :src="item.icon" v-if="item.icon" />
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
    <!-- 右栏食物分类详情 -->
    <div class="foods-detail">
      <!-- 每个分类 -->
      <ul class="detail-category">
        <li
          class="category-block"
          v-for="(category, index) in foodLists"
          :key="index"
        >
          <!-- 分类名 -->
          <h1 class="category-title">{{ category.name }}</h1>
          <!-- 当前分类下所有食物 -->
          <ul class="category-list">
            <li
              class="list-item"
              v-for="(food, index) in category.foods"
              :key="index"
            >
              <div class="item-left">
                <img :src="food.icon" />
              </div>
              <div class="item-right">
                <h3 class="item-name">{{ food.name }}</h3>
                <p class="item-description">{{ food.description }}</p>
                <div class="item-data">
                  <span>月售{{ food.sellCount }}份</span>
                  <span>好评率{{ food.rating }}%</span>
                </div>
                <div class="item-price">
                  <span>￥{{ food.price }}</span>
                  <del v-if="food.oldPrice">￥{{ food.oldPrice }}</del>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from '@better-scroll/core' // 引入滑动库

export default {
  name: 'ShopFoods',
  data() {
    return {
      scrollY: 0, // 右边滑动距离
      tops: [] // 右边初始化每个食物分类顶部li的坐标距离
    }
  },
  computed: {
    ...mapState(['foodLists'])
  },
  mounted() {
    // 请求数据后才初始化Bscroll
    this.$store.dispatch('getShopLists', () => {
      this.$nextTick(() => {
        this._initCategoryScroll()
        this._initDetailScroll()
      })
    })
  },
  methods: {
    _initCategoryScroll() {
      new BScroll('.foods-category')
    },
    _initDetailScroll() {
      new BScroll('.foods-detail')
    }
  }
}
</script>

<style lang="stylus" scoped>
.shop-foods
  overflow hidden
  position absolute
  top px2rem(200)
  bottom px2rem(50)
  background $white
  display flex
  width 100%
  margin-top px2rem(1)
  .foods-category
    flex 1
    background $backgroundColor
    .category-list
      .list-item
        height px2rem(50)
        display table
        margin 0 auto
        .item-detail
          display table-cell
          font-size .8em
          height 100%
          line-height 4
          bottom-border-1px(rgba(7, 17, 27, 0.2))
          >img
            vertical-align middle
            width px2rem(12)
  .foods-detail
    flex 4
    .detail-category
      .category-title
        padding px2rem(10) 0 px2rem(10) px2rem(10)
        background $backgroundColor
        font-size .8em
        color $iconColor
        position relative
        &::before
          content ''
          position absolute
          width px2rem(2)
          height 100%
          background #cbc8c8
          left 0
          top 0
      .category-list
        padding-left px2rem(10)
        .list-item
          display flex
          align-items center
          padding px2rem(10) 0 px2rem(20) 0
          bottom-border-1px(#d3cdcd)
          .item-left
            flex 1
            >img
              width px2rem(80)
          .item-right
            flex 3
            display flex
            flex-direction column
            justify-content space-between
            padding-left px2rem(5)
            .item-name
              color $textColor
            .item-description
            .item-data
              font-size .8em
              color $iconColor
              >span:first-child
                margin-right px2rem(10)
            .item-description
              margin px2rem(5) 0
            .item-price
              padding-top px2rem(5)
              >span:first-child
                color red
              >del
                padding-left px2rem(5)
                color $iconColor
</style>
