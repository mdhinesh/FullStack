const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

router.get('/all', (req,res) =>{
  try{
    res.status(200).json({
      catagories: database.catagories,
      message: "Successfully fetched catogories",
      status: "SUCCESS"
    })
  }
  catch (error){
    res.status(200).json({
      catagories: [],
      message: error.message,
      status: "FAILED"
    })
  }

})
 
router.post('/add', (req,res) =>{
  try{
    const {name} = req.body
    let newCatagory = {
      name,
      id: uuidv4()
    }

    database.catagories.push(newCatagory)

    res.status(200).json({
      catagories: database.catagories,
      message: "Successfully fetched catogories",
      status: "SUCCESS"
    })
  }
  catch (error){
    res.status(200).json({
      catagories: [],
      message: error.message,
      status: "FAILED"
    })
  }

})

module.exports = router