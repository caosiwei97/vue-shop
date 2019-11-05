import Vue from 'vue'
import Router from 'vue-router'
// import Router Components
import Home from '@/views/Home/Home.vue'
import Search from '@/views/Search/Search.vue'
import Order from '@/views/Order/Order.vue'
import Profile from '@/views/Profile/Profile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: '外卖',
      component: Home
    },
    {
      path: '/search',
      name: '搜索',
      component: Search
    },
    {
      path: '/order',
      name: '订单',
      component: Order
    },
    {
      path: '/profile',
      name: '我的',
      component: Profile
    }
  ]
})
