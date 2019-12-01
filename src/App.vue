<template>
  <div id="app">
    <router-view />
    <footer-guide v-if="isShowFooterGuide"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from 'components/FooterGuide'

export default {
  name: 'App',
  components: { FooterGuide },
  computed: {
    isShowFooterGuide() {
      return this.$route.meta.isShowFooterGuide
    }
  },
  mounted() {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="stylus">
#app
  background-color $backgroundColor
  width 100%
  height 100%
</style>
