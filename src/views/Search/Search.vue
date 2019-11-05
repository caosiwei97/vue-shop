<template>
  <div class="search">
    <header-top :header-title="title"></header-top>
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
</style>
