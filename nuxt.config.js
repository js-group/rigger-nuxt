module.exports = {
    dev: (process.env.NODE_ENV !== 'production'),
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    srcDir: 'client/',
    head: {
        title: '...',
        meta: [
            { hid: 'description', name: 'description', content: 'nuxt description' }
        ]
    },
    css: ['~/assets/css/style.css'],
    build: {
        // 生成的打包文件目录，默认为"/"，但是nuxt.js还是会放在dist目录之下
        publicPath: '/',
        vendor: ['~/layouts/default']
    },
    render: {
        // 禁用preload
        resourceHints: false
    },
    router: {
        // 路由主目录，默认为"/"
        base: '/',
        // 中间件
        // middleware: ['ua']
    },
    // 加载进度条, 如果不想使用可以指定为false
    loading: '~/components/loading.vue',
    // Vue.js 插件配置
    plugins: [],
    // 全局错误页
    ErrorPage: '~/components/error.vue',
    
};