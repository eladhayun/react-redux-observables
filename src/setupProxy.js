const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api/mock/data',
    createProxyMiddleware({
      target: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
      secure: false,
      logLevel: 'debug',
      changeOrigin: true
    })
  )
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      secure: false,
      logLevel: 'debug'
    })
  )
}
