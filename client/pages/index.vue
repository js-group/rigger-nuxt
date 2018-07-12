<template>
<div>
    index{{$store.getters.getCount}}
    <nuxt-link to="/list/">list/</nuxt-link>
    <p>userAgent: {{userAgent}}</p>
    <p>req: {{req}}</p>
    <p>env: {{env}}</p>
    <p>context keys: {{keys}}</p>
</div>
</template>
<style scoped>
.container {
    font-size: 20px;
    text-align: center;
    padding-top: 100px;
}
</style>
<script>
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  head() {
    return {
      'title': 'index',
      'meta': [],
      'link': [],
      'script': []
    };
  },
  /**
        * 同步data数据
        * @param context SSR执行上下文
        */
  // asyncData({req, env, ...args}) {
  //     return new Promise((resolve) => {
  //     setTimeout(function () {
  //         console.log(Object.keys(args))
  //         resolve({
  //             name: 'world',
  //             req: req ? 'server' : 'client',
  //             env: JSON.stringify(env),
  //             args: ''
  //         })
  //     }, 1000)
  //     })
  // },
  asyncData(context) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          'name': 'world',
          'userAgent': context.userAgent || '',
          'req': context.req ? 'server' : 'client',
          'env': JSON.stringify(context.env),
          'keys': JSON.stringify(Object.keys(context))
        });
      }, 1000);
    });
  },
  /**
    * 发请求的部分，会在created方法之前，syncData方法之后执行，
    * 如果返回的是个promise对象会等待完成后再执行
    */
  async fetch({ store }) {
    try {
      await Promise.all([
        store.dispatch('getWindowData')
      ]);
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {};
  },
  'methods': {
    ...mapActions(['getWindowData'])
  },
  'computed': {
    ...mapGetters({
      'getMyCount': 'getCount'
    }),
    ...mapState({
      'mycount': state => state.count
    })
  },
  mounted() {
    console.log(this.$store.state.index.title);
  }
};
</script>