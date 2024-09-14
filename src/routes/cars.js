const express=require('express');
const router=express.Router();


router.get("/",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send("Cars Search");
});
router.get("/:brand",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send(req.params);
});
router.get("/:brand/:name",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send(req.params);
});
router.get("/:brand/:name/:variant",(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.status(200).send(req.params);
});

module.exports=router;