module.exports = {
  outputDir: "dist",
  assetsDir: "static",
  chainWebpack: config => {
    config.module
      .rule("less")
      .oneOf("vue")
      .use("px2rem-loader")
      .loader("px2rem-loader")
      .before("postcss-loader")
      .options({ remUnit: 34.5 })
      .end();
  },
  configureWebpack: () => {},
  productionSourceMap: true,
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  },
  parallel: require("os").cpus().length > 1,
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    // proxy: {
    //     "/airdrop": { //将www.exaple.com印射为/apis
    //         target: targetURL,
    //         changeOrigin: true,
    //         bypass: function (req, res, proxyOptions) {
    //             console.log('/box/: ', req.url);
    //         },
    //         // pathRewrite: {
    //         //     '^/airdrop': ''
    //         // }
    //     },
    // },
    before: () => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
};
