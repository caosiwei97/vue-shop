<template>
  <div class="search">
    <header-slot :header-title="headerTile"></header-slot>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'

export default {
  name: 'Search',
  components: {
    HeaderSlot
  },
  data() {
    return {
      headerTile: '搜索'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
