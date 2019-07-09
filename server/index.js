const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')
const useMiddlewares = require('./middlewares')
const useRoutes = require('./routes')
const consts = require('./utils/consts')

async function start() {
  const host = consts.HOST
  const port = consts.PORT
  const app = new Koa()

  app.keys = ['nuxt-koa-basic']
  config.dev = !(app.env === 'production')

  const nuxt = new Nuxt(config)

  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  useMiddlewares(app)
  useRoutes(app)

  app.use(async(ctx, next) => {
    await next()
    ctx.status = 200
    ctx.req.session = ctx.session
    await new Promise((resolve, reject) => {
      nuxt.render(ctx.req, ctx.res, err => err ? reject(err) : resolve())
    })
  })

  app.listen(port, host)
  const _host = host === '0.0.0.0' ? 'localhost' : host
  consola.ready({
    message: `Server listening on http://${_host}:${port}\n`,
    badge: true
  })
}

start()
