import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api'
import 'styles/css/reset.css'
import 'styles/css/layout.css'
import 'styles/css/iconfont.css'
import '@/mock' // 引入mock
import '@/filters' // 引入自定义过滤器

Vue.prototype.$axios = api // 将所有api请求挂在Vue原型中
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
