const Router = require('koa-router')
const { getIp, createRequest } = require('../utils/helpers')
const { authApi, reportApi } = require('../utils/backend-api')
const auth = new Router({
  prefix: '/api'
})
auth.post('/auth/login', async(ctx) => {
  const body = Object.assign({ ip: getIp(ctx.req) }, ctx.request.body)
  // request for backend
  const fakeData = {
    role: 100
  }
  Object.assign(fakeData, ctx.request.body)
  ctx.session.authUser = fakeData
  ctx.body = {
    code: 200,
    data: fakeData,
    msg: '登录成功！'
  }
})
auth.post('/auth/logout', (ctx) => {
  ctx.session = null
  ctx.status = 200
})
module.exports = auth.routes()
