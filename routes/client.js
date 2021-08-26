const express = require('express');
const client = require('../models/client');
const router =express.Router();
const Client= require('../models/client')



//get a list of products
router.get('/client',function(req,res,next){
Client.find({}).then(function(client){
    res.send(client);
});

    //res.send({tupe:'GET'});
});



//add  a new  products in db
router.post('/client',function(req,res,next){
    
   Client.create(req.body).then(function(client){

  
    
    res.send(client);
    

});
});



//update a products in db

router.put('/client/:id',function(req,res,next){
    
    Client.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
       
       Client.findOne({_id:req.params.id}).then(function(client){
        

       })
       res.send(client);
    });
    res.send({tupe:'UPdate'});
});


// delete a product from db
router.delete('/client/:id',function(req,res,next){
    Client.findByIdAndRemove({_id: req.params.id}).then(function(client){
        res.send(client);
    })
    res.send({tupe:'DELETE'});
});

module.exports=router;