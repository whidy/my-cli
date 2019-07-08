const consts = require('../utils/consts')
const auth = require('./auth')

module.exports = (app) => {
  app.use(auth)
}
