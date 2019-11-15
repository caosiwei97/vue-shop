<template>
  <div class="search">
    <header-slot :header-title="headerTile"></header-slot>
    <search-form></search-form>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'
import SearchForm from './components/SearchForm'

export default {
  name: 'Search',
  components: {
    HeaderSlot,
    SearchForm
  },
  data() {
    return {
      headerTile: '搜索'
    }
  }
}
</script>

<style lang="stylus" scoped>
.search
  width 100%
  height 100%
  overflow hidden
  background-color $backgroundColor
  margin-top px2rem(45)
</style>
