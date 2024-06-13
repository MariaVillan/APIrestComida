const express = require('express')
const router = express.Router()

router.get('/comida',(req,res)=>{
    return res.json({message:"SI CARGO, sin comida"})
})


module.exports=router
