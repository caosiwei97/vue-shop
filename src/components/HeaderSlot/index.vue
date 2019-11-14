<template>
  <header class="header-slot">
    <!-- left-->
    <div class="slot-left">
      <slot name="left"></slot>
    </div>
    <!-- center-->
    <div class="slot-center">{{ headerTitle || '暂无数据' }}</div>
    <!-- right-->
    <div class="slot-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSlot',
  props: {
    headerTitle: String
  }
}
</script>

<style scoped lang="stylus">
.header-slot
  position fixed
  z-index 999
  left 0
  right 0
  top 0
  width 100%
  height px2rem(45)
  color $white
  background-color $themeColor
  display flex
  align-items center
  justify-content space-between
  .slot-left
    margin-left px2rem(5)
  .slot-center
    width 50%
    text-align center
    font-size 1.3em
    ellipsis()
  .slot-right
    margin-right px2rem(5)
</style>
