const Router = require('koa-router')
const { getIp, createRequest } = require('../utils/helpers')
const { authApi } = require('../backend-api')
const auth = new Router({
  prefix: '/api'
})
auth.post('/auth/login', async(ctx) => {
  const body = Object.assign({ ip: getIp(ctx.req) }, ctx.request.body)
  // request for backend
  const result = await createRequest('post', authApi.login)
  // const fakeData = {
  //   role: 100
  // }
  // Object.assign(fakeData, ctx.request.body)
  ctx.session.authUser = result.data
  ctx.body = {
    code: 200,
    data: result.data,
    msg: '登录成功！'
  }
})
auth.post('/auth/whois', (ctx) => {
  if (ctx.session.authUser) {
    ctx.body = {
      code: 200,
      data: ctx.session.authUser,
      msg: '登录成功！'
    }
  } else {
    ctx.body = {
      code: 401,
      data: null,
      msg: '无权访问'
    }
  }
})
auth.post('/auth/logout', (ctx) => {
  ctx.session = null
  ctx.status = 200
})
module.exports = auth.routes()
