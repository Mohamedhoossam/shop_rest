const express = require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app=express();

//connect to mongodb
mongoose.connect('mongodb://localhost/shop_app');
mongoose.Promise=global.Promise;





//body parser
app.use(bodyParser.json());


// initialze routes
app.use('/api',require('./routes/products'));
app.use('/api',require('./routes/client'));
app.use('/api',require('./routes/order'));




//error handling middleware
app.use(function(err,req,res,next){
 
     // console.log(err)
     res.send({error: err.message});
});




// listen for requests


app.listen(process.env.port||4000,function(){
    console.log('now lisitinig req');


});

