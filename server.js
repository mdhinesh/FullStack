const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const token = "TOP_SECRET"
let products = [{name:'iphone 12',price:'999'}, {name:'iphone11', price:'899'}, {name:'iphone10', price:'799'}]

//-----validation middleware---------
const validator = (req,res,next) =>{
  const{name,price} = req.body

  if(!name || !price)res.json({error: "validation failed"})
  else  next()
}

//------AUTHORIZATION MIDDLEWARE----------
const isAuthorised = (req,res,next) => {
  if(req.headers.authorization === token) next()
  else res.json({error: "Unauthorized"})
}

//----------------Public Route--------------
// GET route
// This will send products
app.get('/products', (req,res) =>{
  res.json({products})
})

//----------------Private Route--------------
// POST route
// This will add the products
app.post('/products/add', isAuthorised, validator, (req,res) =>{
  const{name,price} = req.body

  products.push({
    name,
    price
  })
  res.send('product added')
  }
)

//-------------AUTH ROUTES-----------
app.post('/auth', (req,res) =>{
  const{email,password} = req.body
  if(email === 'admin@gmail.com' && password === 'password'){
    res.send({token})
  }
    else{
      res.send({message:"UNAUTHORIZED"})
    }
  })

app.post('/delete', (req,res) => {
  
})

app.listen(PORT, ()=>{
  console.log(`Server is started in the ${PORT}`)
})