<template>
  <div class="dashboard">
    <header-top :header-title="title">
      <!-- left slot -->
      <template #left>
        <i class="iconfont iconsousuo1 top-left-search"></i>
      </template>
      <!-- right slot -->
      <template #right>
        <span class="top-right-login">登陆|注册</span>
      </template>
    </header-top>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
export default {
  name: 'Home',
  components: { HeaderTop },
  data () {
    return {
      title: '大连市金石滩街道大连民族大学'
    }
  }
}
</script>

<style scoped lang="stylus">
.top-left-search
  font-size 1.8em
.top-right-login
  font-size .875em
</style>
