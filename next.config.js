const path = require('path');
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, './assets')
      }
    }
    return config
  }
})

