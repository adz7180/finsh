module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].minify = false;
      return args;
    });
  }
};
