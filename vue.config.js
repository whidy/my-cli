const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue'
  ],
  defaultExtractor(content) {
    const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '');
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || [];
  },
  safelist: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/]
});

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
        ]
      }
    }
  }
};
