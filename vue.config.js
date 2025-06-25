module.exports = {
  publicPath: '/',
  // Use an array of packages that need transpiling (or empty array if none)
  transpileDependencies: [],

  chainWebpack: config => {
    config.resolve.symlinks(false);
    config.plugin('html').tap(args => {
      args[0].minify = false;
      args[0].inject = 'body';
      return args;
    });
  },

  configureWebpack: {
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 244 * 1024 // 244KB chunks
      }
    }
  }
}
