// vue3.0的配置文件   更多配置项自行到网上查询
// 文件名一定是vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/", //根路径  记得是./ 不是/
  outputDir: "dist", //构建输出目录
  assetsDir: "assets", //静态资源目录(html,css,js,fonts)
  lintOnSave: true, //是否开启eslint保存检测 有效值：true || false || 'error
  productionSourceMap: false,
  devServer: {
    open: true, //当使用npm run server 是否自动打开网页
    host: "localhost", //域名
    port: "8080",
    https: false //最好给false
    // hotOnly: false,//当你添加新的模块的时候给你一些好的配置
    // proxy: {
    //     // 配置跨域
    //     'api': {
    //         target: 'http//localhost:5000/api/',//跨域地址
    //         ws: true,//是否跨域
    //         changOrigin: true,
    //         pathRewrite: {
    //             '^/api': ''
    //         }
    //     }
    // }
  }
};
