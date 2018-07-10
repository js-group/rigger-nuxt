<template>
    <div>
        index
        <p>platform: {{req}}</p>
        <p>env: {{env}}</p>
        <p>userAgent: {{userAgent}}</p>
        <nuxt-link to="/list">Go to /list</nuxt-link>
    </div>
</template>
<script>
    export default {
        head () {
            return {
                title: 'index',
                meta: [
                    { hid: 'description', name: 'description', content: 'My custom description' }
                ]
            }
        },
        /**
         * 同步data数据
         */
        asyncData({req, env, userAgent}) {
            console.log('asyncData', userAgent);
            return new Promise((resolve) => {
            setTimeout(function () {
                resolve({ 
                    name: 'world', 
                    req: req ? 'server' : 'client', 
                    env: JSON.stringify(env),
                    userAgent: userAgent || ''
                })
            }, 1000)
            })
        },
        /**
         * 发请求的部分
         */
        fetch() {}
    }
</script>
<style scoped>
.container {
    font-size: 20px;
    text-align: center;
    padding-top: 100px;
}
</style>