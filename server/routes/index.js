const consts = require('../utils/consts')
const auth = require('./auth')
const fake = require('./fake')

module.exports = (app) => {
  app.use(auth)
  app.use(fake)
}
