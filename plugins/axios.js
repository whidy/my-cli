export default function ({ $axios, query, redirect, app }) {
  $axios.onRequest((config) => {
    // 报表接口自动带上comId
    if (/^\/api\/report\/.+/.test(config.url)) {
      const currentComId = query.comId || app.$cookies.get('currentComId')
      if (config.data) {
        config.data = Object.assign(config.data, { comId: currentComId })
      } else {
        config.data = { comId: currentComId }
      }
    }
    // console.log(config)
  })

  $axios.onResponse((response) => {
    if (response.status === 200) {
      /**
       * ! 在Nuxt服务层发起的请求，可能Koa接受到响应会设置session，
       * ! koa-session和会触发写入cookie，被服务层接受，axios检测到
       * ! 响应header存在'set-cookie'字段则由Nuxt的服务层res.setHeader转发，
       * ! 由客户端渲染时带上，即可写入客户端cookie
       */
      if (process.server) {
        const setCookieList = response.headers['set-cookie']
        // if "set-cookie" existed, pass it
        setCookieList && response.setHeader('set-cookie', setCookieList)
      }
      return response.data
    } else {
      // Message.error('网络异常，请稍候再试！')
    }
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
