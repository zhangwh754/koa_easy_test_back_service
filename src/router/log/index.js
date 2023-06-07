const Router = require('koa-router')
const { writeLog } = require('../../utils')

const router = new Router({ prefix: '/log' })

router.post('/', (ctx, next) => {
  const requestBody = ctx.request.body

  const type = requestBody.type

  const dataString = {
    url: requestBody.url,
    input: requestBody.input,
    errMsg: requestBody.output.slice(0, 100)
  }

  writeLog(JSON.stringify(dataString), type)

  ctx.body = ctx.request.body
})

module.exports = router
