const body = require('koa-body')
const compress = require('koa-compress')
const session = require('koa-session')
const redisStore = require('koa-redis')
const consts = require('../utils/consts')
module.exports = (app) => {
  const SESSION_CONFIG = {
    key: consts.SESS_KEY,
    maxAge: 48 * 3600 * 1000,
    store: redisStore({
      host: '127.0.0.1',
      port: 6379
    })
  }
  app.use(session(SESSION_CONFIG, app))
  app.use(compress({}))
  app.use(body())
  app.use(async(ctx, next) => {
    if (!ctx.session.authUser && !/\/api\/auth\/\w+/.test(ctx.url) && ctx.url.split('/')[1] === 'api') {
      ctx.body = { code: 401, msg: 'not auth' }
      return false
    } else {
      await next()
    }
  })
}
