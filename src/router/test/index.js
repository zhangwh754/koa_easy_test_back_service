const Router = require('koa-router')

const router = new Router({ prefix: '/test' })

router.post('/', async (ctx, next) => {
  const requestBody = ctx.request.body

  let str = requestBody.str

  console.log(ctx.request.header)

  await wait(1)

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

/**
 * 等待指定的秒数，然后返回一个已解析的 Promise。
 * @param {number} second 要等待的秒数
 * @returns {Promise<void>}
 */
const wait = second => new Promise(resolve => setTimeout(resolve, second * 1000))

module.exports = router
