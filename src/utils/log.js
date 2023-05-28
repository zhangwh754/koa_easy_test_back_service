const path = require('path')

const { writeFile } = require('./file')

const timeFormat = time => (String(time).length === 1 ? `0${time}` : time)

const log = date => type =>
  `[${timeFormat(date.getHours())}-${timeFormat(date.getMinutes())}-${timeFormat(date.getSeconds())}][${type}]`

const logNowBug = log(new Date())

const writeLog = fileData => {
  const errMsg = JSON.parse(fileData).errMsg

  const fileName = path.resolve(__dirname, `../../log/${logNowBug('DEBUG')}.json`)

  writeFile(fileData, fileName)
}

module.exports = {
  writeLog
}
