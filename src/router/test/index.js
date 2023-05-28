const Router = require('koa-router')

const router = new Router({ prefix: '/test' })

router.post('/', (ctx, next) => {
  const requestBody = ctx.request.body

  let str = requestBody.str

  if (typeof str === 'string') {
    ctx.body = {
      data: { str: str.toLocaleUpperCase() },
      Tag: 1,
      Message: 'success'
    }
  } else {
    ctx.body = {
      data: null,
      Tag: 0,
      Message: '必须传入一个字符串'
    }
  }
})

module.exports = router
