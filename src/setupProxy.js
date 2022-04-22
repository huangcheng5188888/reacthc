// const proxy = require("http-proxy-middleware")
// 低版本用以上引入。高版本用以下引入
const { createProxyMiddleware: proxy } = require('http-proxy-middleware')


module.exports = function (app) {
    app.use(
        proxy('/vue',
            {
                target: "http://localhost:1902",
                changeOrigin: true,

            })
    )
}
