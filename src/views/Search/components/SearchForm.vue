<template>
  <form action="#" class="search-form">
    <input
      type="text"
      name="search"
      placeholder="请输入商家或美食名称"
      autofocus="autofocus"
    />
    <input type="submit" value="提交" />
  </form>
</template>

<script>
export default {
  name: 'SearchForm'
}
</script>

<style lang="stylus" scoped>
.search-form
  padding px2rem(12)px2rem(8)
  background-color $white
  display flex
  input
    border-radius px2rem(2)
    height px2rem(35)
    padding 0 px2rem(4)
    border none
    font-weight bold
    font-size .875em
  input[type="text"]
    flex 4
    color #333
    background-color #f2f2f2
    padding-left px2rem(10)
  input[type="submit"]
    flex 1
    border px2rem(4) solid $themeColor
    color $white
    background-color $themeColor
    margin-left px2rem(10)
</style>
