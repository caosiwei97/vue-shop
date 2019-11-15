<template>
  <section class="profile-data">
    <a class="data-list" v-for="(item, index) in dataLinks" :key="index">
      <!-- number -->
      <div class="list-number">
        <span :style="{ color: item.color }" class="number-content">{{
          item.content
        }}</span>
        <span class="number-unit">{{ item.unit }}</span>
      </div>
      <!-- title -->
      <div class="list-title">{{ item.title }}</div>
    </a>
  </section>
</template>

<script>
export default {
  name: 'ProfileData',
  props: {
    dataLinks: Array
  }
}
</script>

<style lang="stylus" scoped>
.profile-data
  overflow hidden
  background $white
  bottom-border-1px($borderColor)
  display flex
  align-content center
  .data-list
    flex 1
    right-border-1px($borderColor)
    padding px2rem(10) px2rem(15) px2rem(10)
    color $textColor
    &:last-child
      border-right none
    .list-number
      display flex
      justify-content center
      align-items center
      font-size .875em
      .number-content
        font-size 2.14em
    .list-title
      text-align center
      padding-top px2rem(10)
      font-size .875em
</style>
