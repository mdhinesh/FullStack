const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const { catagories } = require('../database/db');


/*
Route: http://localhost:3000/catagory/all
Method: GET
*/
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
 
/*
Route: http://localhost:3000/catagory/add
Method: POST
*/
router.post('/add', (req,res) =>{ 
    const {name} = req.body
    let newCatagory = {
      name,
      id: uuidv4()
    }
    try{
      let includes = database.catagories.find(item => item.name === name)
      if(!includes) database.catagories.push(newCatagory)
      else console.log('Already exist')
      res.json({
        catagories: database.catagories,
        message: "Successfully added catogories",
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
Route: http://localhost:3000/catagory/delete
Method: DELETE
*/
router.delete('/delete',(req,res) =>{
  try{

    const {id} = req.body
    // let element = database.catagories.find(item => item.id === id)
    // const index = database.catagories.indexOf(element)
    // database.catagories.splice(index, 1)
    const newCatagory = database.catagories.filter(item => item.id !==id) 
    database.catagories = newCatagory
    res.json({
      catagories: newCatagory,
      message: "Successfully delted the catogories",
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

/*
Route: http://localhost:3000/catagory/update/:id
Method: UPDATE
*/



module.exports = router