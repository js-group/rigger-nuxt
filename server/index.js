import express from 'express'
import {Nuxt, Builder} from 'nuxt'

const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.set('port', port)

let config = require('../nuxt.config')
const nuxt = new Nuxt(config)

app.use(nuxt.render)

// build only in dev mode
if(config.dev){
  new Builder(nuxt).build().catch(error => {
    console.log(error)
    process.exit(0)
  })
}

app.disable('x-powered-by')
app.listen(port, host, () => {
  console.log('Server listening on ' + host + ':' + port)
})