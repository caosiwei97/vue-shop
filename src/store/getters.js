// state 计算属性

export default {
  captchaUrlTime(state) {
    return `${state.proxyUrl}captcha?time=${state.timeNow}`
  },
  totalCount(state) {
    return state.cartLists.reduce((acc, cur) => acc + cur.count, 0)
  },
  totalPrice(state) {
    return state.cartLists.reduce((acc, cur) => acc + cur.count * cur.price, 0)
  }
}
