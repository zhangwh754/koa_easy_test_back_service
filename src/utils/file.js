// 文件系统模块执行文件操作
const fs = require('fs')
const path = require('path')

const writeFile = (fileData, filePath) => {
  fs.writeFileSync(filePath, fileData, 'utf8', err => {
    if (err) {
      console.log(err)
    } else {
      console.log('保存成功')
    }
  })
}

module.exports = {
  writeFile
}
