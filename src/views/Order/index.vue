<template>
  <div class="Order">
    <header-slot :header-title="headerTile"></header-slot>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'

export default {
  name: 'Order',
  components: {
    HeaderSlot
  },
  data() {
    return {
      headerTile: '订单列表'
    }
  }
}
</script>

<style lang="stylus" scoped></style>
