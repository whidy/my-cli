const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // eslint-disable-next-line global-require
          require('tailwindcss')('./tailwind.config.js'),
          ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
        ],
      },
    },
  },
}
