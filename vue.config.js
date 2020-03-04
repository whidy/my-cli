module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // eslint-disable-next-line global-require
          require('tailwindcss'),
        ],
      },
    },
  },
}
