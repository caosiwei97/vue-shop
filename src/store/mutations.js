// Mutation ：改变state状态

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPLISTS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  UPDATE_SVG_TIME,
  RECEIVE_SHOP_FOODS,
  RECEIVE_SHOP_COMMENDS,
  RECEIVE_SHOP_INFO
} from './mutation-types' // 引入Mutation事件类型

export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORIES](state, { categories }) {
    state.categories = categories
  },
  [RECEIVE_SHOPLISTS](state, { shoplists }) {
    state.shoplists = shoplists
  },
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  [UPDATE_SVG_TIME](state, { timeNow }) {
    state.timeNow = timeNow
  },
  [RECEIVE_SHOP_FOODS](state, { foodLists }) {
    state.foodLists = foodLists
  },
  [RECEIVE_SHOP_COMMENDS](state, { commendLists }) {
    state.commendLists = commendLists
  },
  [RECEIVE_SHOP_INFO](state, { info }) {
    state.info = info
  }
}
