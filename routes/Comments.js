const express=require("express");
const router=express.Router()

router.get("/",(req,res)=>{
    res.send({data:"Here is your comments"})
})

router.post("/",(req,res)=>{
    res.send({data:"Here is your data"})
})

router.put("/",(req,res)=>{
    res.send({data:"Here is your data"})
})

router.delete("/",(req,res)=>{
    res.send({data:"Here is your data"})
})


module.exports=router