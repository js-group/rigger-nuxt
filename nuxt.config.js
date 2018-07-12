const resolve = require('path').resolve;
module.exports = {
  dev: process.env.NODE_ENV !== 'production',
  env: {
    ENV: process.env.ENV || 'prd'
  },
  srcDir: 'client/',
  head: {
    title: '首页',
    titleTemplate: '%s',
    htmlAttrs: {},
    bodyAttrs: {},
    headAttrs: {},
    meta: [
      { charset: 'utf-8' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon,', href: 'favicon.ico' }],
    script: [
      // 不加body属性则表示直接插入到head标签中加载
      {src: 'js/flexible-v2.js', type: 'text/javascript'},
      // body 插入到body标签区域，可选值: app_before 业务JS之前 | app_after 业务JS之后
    ]
  },
  // 全局样式
  css: ['~/assets/css/style.css'],
  render: {
    // preload预加载
    resourceHints: false
  },
  build: {
    publicPath : '/',  // 静态资源发布目录，默认值/_nuxt/
    // 合并layouts, aladdin-ibank到公共库文件
    vendor: ['~/layouts/default','aladdin-ibank'],
    // 插件
    plugins: [],
    // eslint
    extend (config, ctx) {
      if (ctx.isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            // 指定eslint的配置文件在哪里
            configFile: './eslintrc.vue.js',
            // 自动修复不符合约定的写法
            fix: true
          }       
        })        
      }
    }
    // 图片转base64
    // extend(config) {
    //   config.module.rules.map((item, index) => {
    //     if(item.test.test(".jpg")){
    //       config.module.rules[index] = {
    //         test: /\.(png|jpe?g|gif|svg)$/,
    //         loader: 'url-loader?limit=61440'
    //       };
    //     }
    //   })
    // }
  },
  router: {
    // 路由模式 mode: 'hash',
    // 主目录
    base: '/platform/scheduleNew/',
    // 路由继承
    extendRoutes (routes) {
      routes.push({
        path: '/index.html*',
        component: resolve(__dirname, 'client/pages/index.vue')
      });      
    },
    // 路由中间件，在每页渲染前运行中间件的逻辑, 此为全局，也可以单独使用，用法：在页面中添加 middleware: '中间件名'
    middleware: ['index']
  },
  // 去掉默认的 progress
  // loading: false,
  // 加载进度条, 如果不想使用可以指定为false
  loading: '~/components/loading.vue',
  // 插件配置
  plugins: [
    // 这个组件是客户端使用，服务端用不了，加个ssr: false
    { src: '~/plugins/index', ssr: false }
  ],
  // 静态生成配置
  generate: {
    // 静态生成目录
    dir: './platform/scheduleNew/',
    // 压缩选项
    minify: {
      // 禁止去除可选的标签
      removeOptionalTags: false
    }
  },
  // 全局错误页
  ErrorPage: '~/components/error.vue',
  serverMiddleware: [
    // API middleware
  ]
}