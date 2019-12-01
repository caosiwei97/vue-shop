// state 计算属性

export default {
  captchaUrlTime: state => {
    return `${state.proxyUrl}captcha?time=${state.timeNow}`
  }
}
