const express = require("express");
const router = express.Router();
const ObjectID =require('mongoose').Types.ObjectId;

const {PostsModel}= require("../models/postsModel");

router.get('/',(req,res)=>{
    PostsModel.find((err,docs)=>{
        if(!err) res.send(docs);
        else console.log('il y a erreur:'+err);
         
    })
});

router.post('/',(req,res)=>{
    const NewRecord =  new PostsModel({
        author:req.body.author,
        message:req.body.message
    });
    NewRecord.save((err,docs)=>{
        if(!err) res.send(docs);
        else console.log('data not insert:'+err);
    })
});

//modification
router.put('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send("Id inconnu :"+res.params.id)
    const updateRecord ={
        author:req.body.author,
        message:req.body.message
    };
    PostsModel.findByIdAndUpdate(
        req.params.id,{
            $set:updateRecord,
            new:true
        },
        (err,docs)=>{
            if(!err) res.send(docs)
            else console.log("Update error:"+err);
        }
    )
});

//supression

router.delete('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID inconnu :"+ req.params.id);
    PostsModel.findByIdAndRemove(
        req.params.id,
        (err,docs)=>{
            if(!err) res.send(docs);
            else console.log("il y a une erreur:"+err);
        }
    )
    
});

//show byn id

router.get('/:id',(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
      return res.status(400).send("ID inconnu :"+ req.params.id);
    PostsModel.findById(
        req.params.id,
        (err,docs)=>{
            if(!err) res.send(docs);
            else console.log("il y a une erreur:"+err);
        }
    )
    
});


module.exports = router;