const Router = require('koa-router')
const { getIp, createRequest } = require('../utils/helpers')
const { authApi, reportApi } = require('../utils/backend-api')
const auth = new Router({
  prefix: '/api'
})
auth.post('/auth/login', async(ctx) => {
  const body = Object.assign({ ip: getIp(ctx.req) }, ctx.request.body)
  ctx.body = 'hello world'
})
auth.post('/auth/logout', (ctx) => {
  ctx.session = null
  ctx.status = 200
})
module.exports = auth.routes()
