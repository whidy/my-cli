# nuxt-koa-basic

> My delightful Nuxt.js project

基于[`npx create-nuxt-app nuxt-koa-basic`](https://zh.nuxtjs.org/guide/installation)命令，初始化如下配置的项目进行调整，相关参考项目[hare](https://github.com/clarkdo/hare)。

* ? Project name `nuxt-koa-basic`
* ? Project description `My delightful Nuxt.js project`
* ? Author name `Whidy`
* ? Choose the package manager `Npm`
* ? Choose UI framework `Element`
* ? Choose custom server framework `Koa`
* ? Choose Nuxt.js modules `Axios`
* ? Choose linting tools `ESLint`
* ? Choose test framework `None`
* ? Choose rendering mode `Universal (SSR)`

## 修改vscode项目自定义配置

```json
{
  "eslint.enable": true,
  "editor.formatOnSave": false,
  "files.eol": "\n",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "vue",
      "autoFix": true
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "javascript",
      "autoFix": true
    }
  ],
  "files.associations": {
    "*.css": "scss",
  },
  "html.format.enable": false,
  "javascript.format.enable": false,
  "prettier.eslintIntegration": true,
  "eslint.alwaysShowStatus": true,
  "vetur.format.defaultFormatter.css": "prettier"
}
```

## 安装常用插件

* [minireset.css](https://github.com/jgthms/minireset.css)
* [vue-clipboard2](https://github.com/Inndy/vue-clipboard2)
* [dayjs](https://github.com/iamkun/dayjs)
* [cookie-universal-nuxt](https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt)
* `postcss-loader`、`precss`、`postcss-scss`来满足postcss支持。关于[nuxt下的postcss](https://zh.nuxtjs.org/api/configuration-build/#postcss)

对插件进行二次封装，在目录`plugins`内添加axios.js、clipboard.js、dayjs.js

## 修改Nuxt配置文件

首先项目创建完成后，进行简单的目录调整，项目分成client和server两个目录。打包在dist目录。

* 修改`.eslintrc.js`文件。注意，nuxt中的`@nuxtjs/eslint-config`，自从1.0.0版以上就开始使用了[`eslint-config-standard`](https://github.com/standard/eslint-config-standard)规范！
* 添加`.prettierrc`文件，如果编辑器装有prettier插件。
* 添加中间件文件`check-auth.js`，以后备用。
* assets目录添加`iconfonts`、`styles`、`scripts`、`images`等需要的目录。
* store目录添加`index.js`，创建简单的vuex。

配置文件修改如下：

```javascript
{
  srcDir: 'client/',
  buildDir: 'dist/client/',
  rootDir: './',
  router: {
    middleware: [
      'check-auth'
    ]
  },
  css: [
    'minireset.css/minireset.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/main.css'
  ],
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/clipboard',
    '@/plugins/axios',
    '@/plugins/dayjs',
    '@/plugins/filter'
  ],
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  build: {
    postcss: {
      syntax: 'postcss-scss',
      plugins: {
        'precss': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    // ...
  }
}
```

客户端相关配置，大致如上，其他需要修改的配置自行调整。

## 服务端配置

默认只有一个简单的server，这里我们手动添加服务端的middlewares、routes，以及可能用到的utils。

## Build Setup

``` bash
# install dependencies
$ npm i

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
