module.exports={
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 3049,
        hot: true,

        // 解决跨域问题
        proxy: {
            "/v1/restserver/ting": {
                target: "http://tingapi.ting.baidu.com",
                changeOrigin: true
            },
            "/api":{
                target:"http://59.111.92.205:8088",
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            "/tahe-api":{
                // http://music.taihe.com
                target:"http://musicapi.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/tahe-api': ''
                }
            },
            "/music":{
                // http://music.taihe.com
                target:"http://music.taihe.com",
                changeOrigin: true,
                pathRewrite: {
                    '^/music': ''
                }
            },

        }
    },
}