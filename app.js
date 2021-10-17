const { dir } = require('console')
const path = require('path')

console.log(path.resolve('./app.js'))
// console.log(path.relative('/','./temp'))
// console.log(path.extname('./app.js'))
// console.log(path.dirname('./temp/utils.js'))
// console.log(__dirname)

console.log(path.join(__dirname), 'app.js')