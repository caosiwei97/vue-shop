<template>
  <section class="profile-nav">
    <a href="#" class="nav-link" v-for="(item, index) in navLinks" :key="index">
      <span class="link-left">
        <span class="left-icon">
          <i
            :class="['iconfont', item.iconClassName]"
            :style="{ color: item.iconColor }"
          ></i>
        </span>
        <span class="left-title">{{ item.title }}</span>
      </span>
      <span class="link-right">
        <i class="iconfont iconjiantou1"></i>
      </span>
    </a>
  </section>
</template>

<script>
export default {
  name: 'ProfileNav',
  props: {
    navLinks: Array
  }
}
</script>

<style lang="stylus" scoped>
.profile-nav
  overflow hidden
  top-border-1px($borderColor)
  // common styles
  .nav-link
    display flex
    justify-content space-between
    align-items center
    background-color $white
    bottom-border-1px($borderColor)
    padding px2rem(18) px2rem(15)
    .link-left
      display flex
      align-items center
      .left-icon
        display flex
        align-items center
        width px2rem(20)
        height px2rem(20)
        .iconfont
          font-size 1.3em
      .left-title
        color $textColor
        padding-left px2rem(5)
</style>
