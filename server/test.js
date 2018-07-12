let NuxtObj = require('nuxt');
let Nuxt = NuxtObj.Nuxt, Builder = NuxtObj.Builder, Generator = NuxtObj.Generator;

let config = require('../nuxt.config')
const nuxt = new Nuxt(config)

const builder =  new Builder(nuxt);
builder.build().then(() => {
  new Generator(nuxt, builder).generate({build:false,init: false}).catch(error => {
    // console.log(error)
    process.exit(0)
  })
}).catch(error => {
  // console.log(error)
  process.exit(0)
});

  
