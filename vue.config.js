const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// 全局mixins.styl样式
function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [resolve('src/assets/styles/stylus/index.styl')]
    })
}

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type =>
      addStyleResource(config.module.rule('stylus').oneOf(type))
    )
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('images', resolve('src/assets/images'))
      .set('components', resolve('src/components'))
  },
  devServer: {
    proxy: {
      '/': {
        target: process.env.VUE_APP_BASE, // 代理地址
        changeOrigin: true // 是否支持跨域
      }
    }
  }
}
