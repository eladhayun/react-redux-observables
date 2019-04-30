/* eslint-disable */
const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api/mock', {
      target: 'http://localhost:9000',
      pathRewrite: {
        '^/api/mock': ''
      },
      secure: false,
      logLevel: 'debug'
    }),
    proxy('/api', {
      target: 'http://localhost:8080',
      secure: false,
      logLevel: 'debug'
    }),
    proxy('/authenticate', {
      target: 'http://localhost:8080',
      secure: false,
      logLevel: 'debug'
    })
  )
}
