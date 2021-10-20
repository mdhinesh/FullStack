const express = require('express')
const database =require('./database/db')
const app = express()
const catagoryRoutes = require('./routes/catagoryRoutes')

console.log(catagoryRoutes.stack)

app.use(express.json())

app.use('/mer', catagoryRoutes)

app.get('/', (req,res) => {
  try{
    console.log(document)
  }
  catch(error){
    res.send(error.message)
  }
})

app.listen(3000, ()=>{
  console.log(`Server is started in the 3000`)
})