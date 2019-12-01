// dispatch action 触发Muation事件

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPLISTS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  UPDATE_SVG_TIME
} from './mutation-types' // 引入Mutation事件类型

export default {
  // 请求地址信息
  async getAddress({ commit, state }) {
    const geohash = state.latitude + ',' + state.longtitude
    const {
      data: { data }
    } = await this.$axios.getLocationApi(geohash)
    commit({
      type: RECEIVE_ADDRESS,
      address: data
    })
  },
  // 请求食物分类信息
  async getCategories({ commit }) {
    const {
      data: { data }
    } = await this.$axios.getShopCategoryApi()
    commit({
      type: RECEIVE_CATEGORIES,
      categories: data
    })
  },
  // 请求商家列表信息
  async getShoplists({ commit, state }) {
    const {
      data: { data }
    } = await this.$axios.getShoplistsByLocationApi(state)
    commit({
      type: RECEIVE_SHOPLISTS,
      shoplists: data
    })
  },
  // 同步更新用户信息
  updateUserInfo({ commit }, userInfo) {
    commit({
      type: RECEIVE_USER_INFO,
      userInfo
    })
  },
  // 异步获取用户信息,维持状态
  async getUserInfo({ commit }) {
    const { data } = await this.$axios.getUserInfoApi()
    if (data['data'] && data.code === 0) {
      commit({
        type: RECEIVE_USER_INFO,
        userInfo: data['data']
      })
    }
  },
  // 用户退出登录
  async getUserLogout({ commit }) {
    const { data } = await this.$axios.getUserLogoutApi()
    if (data && data.code === 0) {
      commit({
        type: RESET_USER_INFO
      })
    }
  },
  // 更新svg
  updateTime({ commit }, timeNow) {
    commit({
      type: UPDATE_SVG_TIME,
      timeNow
    })
  }
}
