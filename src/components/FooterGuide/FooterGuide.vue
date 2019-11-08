<template>
  <div class="footer-guide">
    <router-link class="guide-item" :to="item.routerLink" v-for="(item, index) in routerDataLists" :key="index">
      <div class="item-icon">
        <i :class="['iconfont', item.iconClass]"></i>
      </div>
      <div class="item-title">{{ item.iconTitle }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data () {
    return {
      routerDataLists: [
        {
          routerLink: { name: '外卖' },
          iconClass: 'iconwaimai-',
          iconTitle: '外卖'
        },
        {
          routerLink: { name: '搜索' },
          iconClass: 'iconsousuo',
          iconTitle: '搜索'
        },
        {
          routerLink: { name: '订单' },
          iconClass: 'icondingdan1',
          iconTitle: '订单'
        },
        {
          routerLink: { name: '我的' },
          iconClass: 'icongeren1',
          iconTitle: '我的'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.router-link-active
  color $yellow !important
.footer-guide
  top-border-1px($borderColor)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color $white
  height px2rem(50)
  display flex
  .guide-item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin px2rem(5)
    color $iconColor
    & > div
      font-size .75em
      .iconfont
        font-size 2em
</style>
