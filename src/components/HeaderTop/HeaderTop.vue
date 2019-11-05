<template>
  <header class="header-top">
    <!-- 头部左边插槽 -->
    <div class="top-left">
      <slot name="left"></slot>
    </div>
    <div class="top-center ellipsis">{{ headerTitle || '暂无数据' }}</div>
    <!-- 头部右边插槽 -->
    <div class="top-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    headerTitle: String
  }
}
</script>

<style scoped lang="stylus">
.header-top
  position relative
  width 100%
  height px2rem(45)
  color $white
  background-color $yellow
  display flex
  align-items center
  justify-content center
  .top-left
    position absolute
    left px2rem(15)
  .top-center
    width 50%
    text-align center
    font-size 1.3em
  .top-right
    position absolute
    right px2rem(15)
</style>
