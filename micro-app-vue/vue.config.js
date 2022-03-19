const path = require("path");

module.exports = {
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
               less: {
                   test: /\.less$/i,
                   use: [
                       // compiles Less to CSS
                       "style-loader",
                       "css-loader",
                       "less-loader",
                   ]
               }
        }
    },
    configureWebpack: {
        output: {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            library: "VueMicroApp",
            // 将你的 library 暴露为所有的模块定义下都可运行的方式
            libraryTarget: "umd",
            // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
            jsonpFunction: `webpackJsonp_VueMicroApp`,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    },
    devServer: {
        port: 9000,
        open: true,
        disableHostCheck: true,
        // 配置跨域请求头，解决开发环境的跨域问题
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    }

};
