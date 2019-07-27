const querystring = require('querystring')
const axios = require('axios')
const consts = require('../utils/consts')

const getIp = (req) => {
  return (
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  )
}

const createRequest = async(method, url, requestConfig) => {
  const { payload = null, ...restOfRequestConfig } = requestConfig || {}
  const requestConfigObj = {
    timeout: consts.AXIOS_DEFAULT_TIMEOUT,
    baseURL: consts.ENDPOINT_ADDR,
    method,
    url,
    ...restOfRequestConfig
  }

  if (payload !== null) {
    requestConfigObj.data = querystring.stringify(payload)
  }
  const recv = await axios.request(requestConfigObj)
  // const data = Object.assign({}, recv.data)
  return Promise.resolve(recv.data)
}

module.exports = {
  getIp,
  createRequest
}
