<template>
  <div class="search">
    <header-top :header-title="title"></header-top>
    <form action="#" method="post" class="search-form">
      <input type="text" name="search" placeholder="请输入商家或美食名称" autofocus="autofocus" />
      <input type="submit" value="提交"/>
    </form>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
export default {
  name: 'Search',
  components: { HeaderTop },
  data () {
    return {
      title: '搜索'
    }
  }
}
</script>

<style scoped lang="stylus">
.search
  width 100%
  height 100%
  overflow hidden
  background-color $backgroundColor
  .search-form
    margin-top px2rem(45)
    padding px2rem(12)px2rem(8)
    background-color $white
    display flex
    & > input
      border-radius px2rem(2)
      height px2rem(35)
      padding 0 px2rem(4)
      outline none
      font-weight bold
      font-size .875em
    & > input[type="text"]
      flex 4
      color #333
      background-color #f2f2f2
      padding-left px2rem(10)
    & > input[type="submit"]
      flex 1
      border px2rem(4) solid $yellow
      color $white
      background-color $yellow
      margin-left px2rem(10)
</style>
