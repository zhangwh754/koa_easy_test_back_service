const fs = require('fs')

const Router = require('koa-router')
const path = require('path')

const router = new Router({ prefix: '/upload' })

router.post('/', async (ctx, next) => {
  const file = ctx.request.files.files

  const requestBody = ctx.request.body

  console.log(requestBody)

  ctx.body = {
    tag: 1,
    message: 'Upload successful!'
  }
})

module.exports = router
