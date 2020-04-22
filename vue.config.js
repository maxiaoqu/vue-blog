const consoleInfo = require('./console');

// 配置跨域
const proUrlObj = {
    // 测试
    // target: 'http://168.130.1.33:8097'

    // 线上
    target: 'http://server.maxiaoqu.com/'
};

module.exports = {
    publicPath: './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    outputDir: process.env.outputDir,
    productionSourceMap: false,
    filenameHashing: false,
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            loader: 'raw-loader'
        });
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                    .end();
                config.plugins.delete('prefetch');
            }
        }
    },
    devServer: {
        port: 1111,
        host: 'localhost',
        https: false,
        open: true,
        proxy: {
            // 通配【勿动】
            '/maxiaoqu': {
                target: 'http://168.168.168.168:8888/maxiaoqu',
                changeOrigin: true,
                pathRewrite: {
                    '/maxiaoqu': '/'
                }
            },
            // 联调时的跨域【可进行增加和修改】
            '/auth': proUrlObj,

            // 通用统一验证跨域【只可改IP】
            '/zuul': proUrlObj,
        },
    }
}
