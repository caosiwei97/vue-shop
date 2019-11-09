<template>
  <div id="app">
    <router-view></router-view>
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide.vue'

export default {
  name: 'App',
  components: { FooterGuide }
}
</script>

<style scoped lang="stylus">
  #app
    width 100%
    height 100%
    background-color $backgroundColor
</style>
