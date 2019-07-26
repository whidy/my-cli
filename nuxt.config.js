module.exports = {
  mode: 'universal',
  srcDir: 'client/',
  buildDir: 'dist/client/',
  rootDir: './',
  router: {
    middleware: ['check-auth']
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [
    'minireset.css/minireset.css',
    'element-ui/lib/theme-chalk/index.css',
    { src: '@/assets/styles/main.scss', lang: 'scss' }
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/clipboard',
    '@/plugins/dayjs',
    '@/plugins/filter'
  ],
  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt'],
  axios: {
    baseURL: '/api'
  },
  build: {
    transpile: [/^element-ui/],
    extend(config, ctx) {}
  }
}
