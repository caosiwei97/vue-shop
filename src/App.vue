<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide v-if="isShowFooterGuide"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: { FooterGuide },
  computed: {
    isShowFooterGuide () {
      return this.$route.meta.isShowFooterGuide
    }
  }
}
</script>

<style scoped lang="stylus">
  #app
    width 100%
    height 100%
    background-color $backgroundColor
</style>
