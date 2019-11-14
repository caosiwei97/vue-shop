<template>
  <div id="app">
    <router-view />
    <footer-guide></footer-guide>
  </div>
</template>

<script>
import FooterGuide from 'components/FooterGuide'

export default {
  name: 'App',
  components: { FooterGuide }
}
</script>

<style lang="stylus">
#app
  background-color $backgroundColor
</style>
