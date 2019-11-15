<template>
  <div class="Order">
    <header-slot :header-title="headerTile"></header-slot>
    <order-login></order-login>
  </div>
</template>

<script>
import HeaderSlot from 'components/HeaderSlot'
import OrderLogin from './components/OrderLogin'

export default {
  name: 'Order',
  components: {
    HeaderSlot,
    OrderLogin
  },
  data() {
    return {
      headerTile: '订单列表'
    }
  }
}
</script>

<style lang="stylus" scoped>
.order
  overflow hidden
</style>
