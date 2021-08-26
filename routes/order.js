const express = require('express');
const router =express.Router();
const Order= require('../models/order')



//get a list of order
router.get('/order',function(req,res,next){
    Order.find({}).then(function(order){
    res.send(order);
});

    //res.send({tupe:'GET'});
});



//add  a new  order in db
router.post('/order',function(req,res,next){
    
    Order.create(req.body).then(function(order){

  
    
    res.send(order);
    

});
});



//update a products in db

router.put('/order/:id',function(req,res,next){
    
    Order.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
       
        Order.findOne({_id:req.params.id}).then(function(order){
        

       })
       res.send(order);
    });
    res.send({tupe:'UPdate'});
});


// delete a order from db
router.delete('/order/:id',function(req,res,next){
    Order.findByIdAndRemove({_id: req.params.id}).then(function(order){
        res.send(order);
    })
    res.send({tupe:'DELETE'});
});

module.exports=router;