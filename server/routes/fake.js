const Router = require('koa-router')
// const urllib = require('urllib')
const { createRequest } = require('../utils/helpers')
const { fakeApi } = require('../backend-api')
const fake = new Router({
  prefix: '/api'
})
fake.post('/posts', async(ctx) => {
  // console.log('request posts')
  // const result = (await urllib.request(`http://localhost:5555${fakeApi.posts}`, {
  //   method: 'POST',
  //   dataType: 'json'
  // })).data
  // let resData
  const result = await createRequest('post', fakeApi.posts)
  ctx.body = result
})
fake.get('/users', async(ctx) => {
  const result = await createRequest('get', fakeApi.users)
  ctx.body = result
})
module.exports = fake.routes()
