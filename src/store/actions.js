// dispatch action 触发Muation事件

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPLISTS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  UPDATE_SVG_TIME,
  RECEIVE_SHOP_FOODS,
  RECEIVE_SHOP_COMMENDS,
  RECEIVE_SHOP_INFO,
  ADD_FOOD_NUM,
  DECREASE_FOOD_NUM
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
  },
  // 请求商家食物列表
  async getShopLists({ commit }, callback) {
    const { data } = await this.$axios.getShopFoodListsApi()
    if (data.code === 0) {
      commit({
        type: RECEIVE_SHOP_FOODS,
        foodLists: data['data']
      })
    }
    callback && callback()
  },
  // 请求商家评论列表
  async getCommendLists({ commit }) {
    const { data } = await this.$axios.getShopCommendListsApi()
    if (data.code === 0) {
      commit({
        type: RECEIVE_SHOP_COMMENDS,
        commendLists: data['data']
      })
    }
  },
  // 请求商家详情
  async getShopInfo({ commit }) {
    const { data } = await this.$axios.getShopInfoUrlApi()
    if (data.code === 0) {
      commit({
        type: RECEIVE_SHOP_INFO,
        info: data['data']
      })
    }
  },
  // 更新食物数量
  updateControlNum({ commit }, { isAdd, food }) {
    isAdd
      ? commit({
          type: ADD_FOOD_NUM,
          food
        })
      : commit({
          type: DECREASE_FOOD_NUM,
          food
        })
  }
}
