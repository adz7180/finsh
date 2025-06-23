module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugin('html').tap(args => {
      args[0].minify = false
      args[0].inject = 'body' // Ensures scripts load properly
      return args
    })
  }
}
