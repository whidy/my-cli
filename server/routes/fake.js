const Router = require('koa-router')
const { createRequest } = require('../utils/helpers')
const { fakeApi } = require('../utils/backend-api')
const fake = new Router({
  prefix: '/api'
})
fake.post('/posts', async(ctx) => {
  console.log('request posts start')
  const result = await createRequest('post', fakeApi.posts, {
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Accept: 'xxxs'
    }
  })
  console.log(result)
  ctx.body = result
})
fake.get('/users', async(ctx) => {
  const result = await createRequest('get', fakeApi.users)
  ctx.body = result
})
module.exports = fake.routes()
