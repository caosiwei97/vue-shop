// Mutation ：改变state状态

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPLISTS
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
  }
}
