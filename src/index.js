const path = require('path')

const koa = require('koa')
const koaBody = require('koa-body').default
var cors = require('koa2-cors')

const logRouter = require('./router/log')
const testRouter = require('./router/test')
const uploadRouter = require('./router/upload')

const app = new koa()

const complexForm = {
  multipart: true,
  formidable: {
    uploadDir: path.resolve(__dirname, '../upload_imgs'),
    keepExtensions: true
  }
}

app.use(koaBody(complexForm))
app.use(cors())

app.use(logRouter.routes())
app.use(logRouter.allowedMethods())
app.use(testRouter.routes())
app.use(testRouter.allowedMethods())
app.use(uploadRouter.routes())
app.use(uploadRouter.allowedMethods())

app.listen(8000)
