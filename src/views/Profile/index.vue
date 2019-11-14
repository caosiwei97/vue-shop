<template>
  <div class="profile">
    <header-slot :header-title="headerTile"></header-slot>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'

export default {
  name: 'Profile',
  components: {
    HeaderSlot
  },
  data() {
    return {
      headerTile: '我的'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
