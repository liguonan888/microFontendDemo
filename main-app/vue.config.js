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
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
    },
    devServer: {
        port: 9999,
        open: true,
        disableHostCheck: true,
    },
};
