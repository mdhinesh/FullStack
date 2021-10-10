const add = () => {
  console.log('I add stuff')
}

const sub = () => {
  console.log('I sub stuff')
}

const mul = () => {
  console.log('I mul stuff')
}

const div = () => {
  console.log('I div stuff')
}

module.exports.add = add
module.exports.sub = sub
module.exports.mul = mul
module.exports.div = div

//const {add, sub, mul, div} = require('./utils')

//add()
//sub()
//mul()
//div()
//--app.js