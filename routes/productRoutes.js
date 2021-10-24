const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

/*
Route: http://localhost:3000/catagory/all
Method: GET
*/
router.get('/all', (req,res) =>{
  try{
    res.json({
      products: database.products,
      message: "Successfully fetchedykyv products",
      status: "SUCCESS"
    })
  }
  catch (error){
    res.json({
      catagories: [],
      message: error.message,
      status: "FAILED"
    })
  }

})

/*
Route: http://localhost:3000/products/add
Method: POST
*/
router.post('/add', (req,res) =>{
  const{name,price,catagory} = req.body

  if(!database.catagories.find(item => item.name === catagory)){
    // create a catagory if it doesn't already exist
    let newCatagory = {name:catagory,id:uuidv4()}
    database.catagories.push(newCatagory)
    //create a product & add it
    const newProduct = {
      id: uuidv4(),
      name,price,catagory:catagory
    }
    database.products.push(newProduct)
  }else {
    const newProduct = {
      id: uuidv4(),
      name,price,catagory: catagory
    }
    database.products.push(newProduct)
  }

  try{
    res.json({
      products: database.products,
      message: "Successfully added products",
      status: "SUCCESS"
    })
  }
  catch (error){
    console.log(error)

    res.json({
      catagories: [],
      message: error.message,
      status: "FAILED"
    })
  }

})


module.exports = router