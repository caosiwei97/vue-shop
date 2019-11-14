<template>
  <div class="home">
    <header-slot :header-title="headerTile">
      <!-- left slot -->
      <template #left>
        <i class="iconfont iconsousuo1 slot-left"></i>
      </template>
      <!-- right slot -->
      <template #right>
        <span class="top-right-login slot-right">登陆|注册</span>
      </template>
    </header-slot>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'

export default {
  name: 'Home',
  components: {
    HeaderSlot
  },
  data() {
    return {
      headerTile: '金石滩街道大连民族大学4号公寓'
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  position relative
  padding-top px2rem(45)
  .slot-left
    font-size: 1.8em
  .slot-right
    font-size: .875em
</style>
