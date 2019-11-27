// dispatch action 触发Muation事件

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPLISTS
} from './mutation-types' // 引入Mutation事件类型

export default {
  // 请求地址信息
  async getAddress({ commit, state }) {
    const geohash = state.latitude + ',' + state.longtitude
    const { data } = await this.$axios.getLocationApi(geohash)
    commit({
      type: RECEIVE_ADDRESS,
      address: data
    })
  },
  // 请求食物分类信息
  async getCategories({ commit }) {
    const { data } = await this.$axios.getShopCategoryApi()
    commit({
      type: RECEIVE_CATEGORIES,
      categories: data
    })
  },
  // 请求商家列表信息
  async getShoplists({ commit, state }) {
    const { data } = await this.$axios.getShoplistsByLocationApi(state)
    commit({
      type: RECEIVE_SHOPLISTS,
      categories: data
    })
  }
}
