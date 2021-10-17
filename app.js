const fs = require('fs')

// fs.readFile('./test.txt' ,(error,data)=>{
//   if(error) console.log(error)
//   else console.log(data.toString())
// })

// console.log(fs.readFileSync('./test.txt', 'utf-8'))

fs.writeFile('./test.txt','hiiiiiisdubvkbv' ,(error)=>{
  if(error) console.log(error)
})
