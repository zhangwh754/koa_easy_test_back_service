const fs = require('fs')
const path = require('path')

/**
 * 删除指定目录下所有子文件
 * @param {*} path
 */
function emptyDir(path) {
    const files = fs.readdirSync(path)
    files.forEach(file => {
        const filePath = `${path}/${file}`
        const stats = fs.statSync(filePath)
        if (stats.isDirectory()) {
            emptyDir(filePath)
        } else {
            fs.unlinkSync(filePath)
            // console.log(`删除${file}文件成功`);
        }
    })
}

emptyDir(process.argv[2] || path.resolve(__dirname, '../../logs'))
