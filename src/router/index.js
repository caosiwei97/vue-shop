import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '外卖',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/search',
    name: '搜索',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "search" */ '@/views/Search')
  },
  {
    path: '/order',
    name: '订单',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "order" */ '@/views/Order')
  },
  {
    path: '/profile',
    name: '我的',
    meta: { isShowFooterGuide: true },
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile')
  },
  {
    path: '/login',
    name: '登陆',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '/shop',
    name: '商家详情',
    component: () => import(/* webpackChuckName: "shop" */ '@/views/Shop'),
    redirect: '/shop/foods',
    children: [
      {
        path: 'foods',
        name: '食物列表',
        component: () =>
          import(/* webpackChuckName: "shop" */ '@/views/Shop/ShopFoods')
      },
      {
        path: 'commends',
        name: '评论列表',
        component: () =>
          import(/* webpackChuckName: "shop" */ '@/views/Shop/ShopCommends')
      },
      {
        path: 'info',
        name: '商家信息',
        component: () =>
          import(/* webpackChuckName: "shop" */ '@/views/Shop/ShopInfo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
