const express = require('express');
const router =express.Router();
const Productes= require('../models/prodects')



//get a list of products
router.get('/products',function(req,res,next){

    Productes.find({}).then(function(Productes){
        res.send(Productes);
    });
});



//add  a new  products in db
router.post('/products',function(req,res,next){
    
   Productes.create(req.body).then(function(products){

  
    
    res.send(products);
    

}).catch(next)
});



//update a products in db

router.put('/products/:id',function(req,res,next){
    Productes.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
       
        Client.findOne({_id:req.params.id}).then(function(Productes){
         
 
        })
        res.send(Productes);
     });
    res.send({tupe:'update'});
});


// delete a product from db
router.delete('/products/:id',function(req,res,next){
 Productes.findByIdAndRemove({_id: req.params.id}).then(function(prodductes){
     res.send(products);
 })
    res.send({tupe:'DELETE'});
});

module.exports=router;