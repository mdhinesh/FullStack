// const http = require('http')
// // const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request,response) =>{
//   //request.url
//   // console.log(request.headers)
//   const {url} = request
//   if(url == "/login"){
//     response.write('<h1>login<h1>')
//     response.end()
//   }
//   if(url == "/signup"){
//     response.write("<h1>Signup<h1>")
//     response.end()
//   }
//   // const markup = fs.readFileSync(path.resolve('./index.html'))
//   // response.write(markup)
//   // response.end()
// })

// server.listen(3000,()=>{
//   console.log(`Server listening at port: ${3000}`)
// })

const data = [{name:"dhinesh"},{name:"kavvbkjvea"}]

const express = require('express')
const app = express()

app.get('/getNames',(req,res)=>{
  res.send(data)
})

app.get('/login',(req,res)=>{
  res.send('This is LOGIN')
})

app.get('/', (req,res) => {
  res.send("This is response")
})

app.get('/signup',(req,res)=>{
  res.send("This is signup")
})

app.listen(3000,()=>{
  console.log("server listenin at port 3000")
})