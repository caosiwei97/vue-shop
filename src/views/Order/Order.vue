<template>
  <div class="order">
    <header-top :header-title="title"></header-top>
    <div class="order-loginout">
      <img src="./images/person.png" alt="">
      <h3>登陆后查看外卖清单</h3>
      <button>立即登陆</button>
    </div>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
export default {
  name: 'Order',
  components: { HeaderTop },
  data () {
    return {
      title: '订单列表'
    }
  }
}
</script>

<style scoped lang="stylus">
.order
  overflow hidden
  .order-loginout
    width 60%
    padding-top px2rem(130)
    text-align center
    margin 0 auto
    & > img
      width 100%
      height 30%
      display block
    & > h3
      padding px2rem(10) 0
      font-size 1em
      color #6a6a6a
    & > button
      display inline-block
      background $yellow
      font-size .875em
      outline none
      padding px2rem(10) px2rem(20)
      border 0
      color $white
      border-radius px2rem(4)
</style>
