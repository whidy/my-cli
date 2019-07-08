const APP = 'nuxt-koa-basic'
const API = 'api'
const BASE_API = '/api'
const SESS_KEY = 'nuxt-koa-basic:sess'
const AXIOS_DEFAULT_TIMEOUT = 5000
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || '3000'
const ENDPOINT_ADDR = process.env.ENDPOINT_ADDR || 'http://localhost:7777'

module.exports = Object.freeze({
  APP,
  API,
  BASE_API,
  SESS_KEY,
  AXIOS_DEFAULT_TIMEOUT,
  HOST,
  PORT,
  ENDPOINT_ADDR
})
