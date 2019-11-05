<template>
  <div class="order">
    <header-top :header-title="title"></header-top>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
export default {
  name: 'Order',
  components: { HeaderTop },
  data () {
    return {
      title: '订单列表'
    }
  }
}
</script>

<style scoped lang="stylus"></style>
