<template>
  <div class="card-control">
    <transition name="move">
      <div
        class="control-decrease"
        v-if="food.count"
        @click.stop="updateControlNum(false)"
      ></div>
    </transition>
    <div class="control-num" v-if="food.count">{{ food.count }}</div>
    <div class="control-add" @click.stop="updateControlNum(true)"></div>
  </div>
</template>

<script>
export default {
  name: 'CardControl',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    updateControlNum(isAdd) {
      this.$store.dispatch('updateControlNum', { isAdd, food: this.food })
    }
  }
}
</script>

<style lang="stylus" scoped>
.move-enter-active, .move-leave-active
  transition all .5s
.move-enter, .move-leave-to
  opacity 0
  transform translateX(px2rem(10))
.card-control
  display flex
  align-items center
  .control-add
  .control-decrease
    width px2rem(15)
    height px2rem(15)
    border-radius 50%
    background $themeColor
    position relative
    &::before
    &::after
      content ''
      positionCenter()
      background $white
    &::before
      width 80%
      height px2rem(1)
    &::after
      width px2rem(1)
      height 80%
  .control-decrease
    background $white
    border px2rem(1) solid $themeColor
    box-sizing border-box
    &::before
      background $themeColor
    &::after
      display none
  .control-num
    padding 0 px2rem(10)
    color $iconColor
    font-size .8em
</style>
