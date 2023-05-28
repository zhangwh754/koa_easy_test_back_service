const koa = require('koa')
const koaBody = require('koa-body').default

const logRouter = require('./router/log')
const testRouter = require('./router/test')

const app = new koa()

app.use(koaBody())

app.use(logRouter.routes())
app.use(logRouter.allowedMethods())
app.use(testRouter.routes())
app.use(testRouter.allowedMethods())

console.log('http://192.168.10.104:8000/log')

app.listen(8000)
