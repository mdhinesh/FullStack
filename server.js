const express = require('express')
const database =require('./database/db')
const app = express()
const catagoryRoutes = require('./routes/catagoryRoutes')
const productRoutes = require('./routes/productRoutes')
app.use(express.json())

app.use('/catagory', catagoryRoutes)
app.use('/products', productRoutes)


app.listen(3000, ()=>{
  console.log(`Server is started in the 3000`)
})