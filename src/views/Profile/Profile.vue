<template>
  <div class="profile">
    <header-top :header-title="title"></header-top>
  </div>
</template>

<script>
import HeaderTop from '@/components/HeaderTop/HeaderTop.vue'
export default {
  name: 'Profile',
  components: { HeaderTop },
  data () {
    return {
      title: '我的'
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
