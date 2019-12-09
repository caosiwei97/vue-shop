<template>
  <div class="food-show" @click="hideFoodCard">
    <div class="show-card">
      <!-- 卡片上部分 -->
      <div class="card-top">
        <div class="top-img">
          <img :src="food.image" />
        </div>
        <p class="top-description">{{ food.info }}</p>
        <div class="top-back" @click="hideFoodCard">
          <i class="iconfont iconicon_arrow_left"></i>
        </div>
      </div>
      <!-- 卡片下部分 -->
      <div class="card-bottom">
        <h3 class="bottom-title">{{ food.name }}</h3>
        <p class="bottom-info">
          <span>月售{{ food.sellCount }}份</span>
          <span>好评率{{ food.rating }}%</span>
        </p>
        <div class="bottom-price">￥{{ food.price }}</div>
      </div>
      <!-- card——control -->
      <div class="card-control">
        <card-control :food="food"></card-control>
      </div>
    </div>
  </div>
</template>

<script>
import CardControl from 'components/CardControl'

export default {
  name: 'FoodShow',
  props: {
    food: {
      type: Object
    }
  },
  components: {
    CardControl
  },
  methods: {
    hideFoodCard() {
      this.$emit('close', true)
    }
  }
}
</script>

<style lang="stylus" scoped>
.food-show
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  background rgba(0, 0, 0, .5)
  z-index 99999
  .show-card
    width 80%
    height 55%
    positionCenter()
    border-radius px2rem(4)
    background $white
    display flex
    flex-direction column
    .card-top
      flex 4
      position relative
      .top-img
        width 100%
        height 100%
        >img
          width 100%
          height 100%
      .top-description
        position absolute
        bottom px2rem(10)
        left px2rem(10)
        color $white
        font-size .8em
      .top-back
        position absolute
        top 0
        left 0
        color $white
        padding px2rem(10)
    .card-bottom
      flex 1
      padding px2rem(20)
      .bottom-title
        font-weight bold
      .bottom-info
        color $iconColor
        font-size .8em
        margin px2rem(10) 0
        >span:first-child
          margin-right px2rem(5)
      .bottom-price
        color red
    .card-control
      position absolute
      bottom px2rem(10)
      right px2rem(10)
</style>
