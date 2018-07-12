# nuxt.js脚手架

## 目录结构
├── .nuxt nuxt自动生成的临时目录

├── client 业务代码目录

│   ├── assets 静态资源目录（js/css/image等）

│   ├── components Vue组件目录

│   ├── layouts  布局组件

│   │   ├── default.vue  默认布局组件

│   ├── pages    页面目录(vue组件形式)

│   │   ├── index.vue  首页

│   │   ├── list.vue  列表页

│   ├── plugins  插件目录（vue插件扩展等）

│   │   ├── index.js  插件主文件

│   ├── static   静态文件目录（不会被webpack打包处理）

│   ├── store    vuex目录（actions/state/mutations）

├── dist   nuxt生成的打包目录

├── node_modules node模块目录

├── server nuxt-server目录

├── tools 工具目录

├── nuxt.config.js nuxt配置文件

├── package.json node配置文件

├── README.md 项目帮助文档


## 安装

### 方式1：
将tools目录下的node_modules.zip解压到根目录

## 方式2：
```javascript
npm install
```

## 运行在线服务
### 开发环境
```javascript
npm run server-dev 
```
### 测试环境
```javascript
npm run server-stg 
```
### 生产环境
```javascript
npm run server-stg 
```



## 打包静态文件（生成dist目录）
### 开发环境
```javascript
npm run build-dev
```

### 测试环境
```javascript
npm run build-stg
```

### 生产环境
```javascript
npm run build-prd
```


更多资料查看：`https://zh.nuxtjs.org/`