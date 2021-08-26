const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create  prodects model

const ProdectsSchema=new Schema({
    name:{
        type:String,
        required:[true,'Nmae filed is requires']
    },
    price:{
        type:String
    }
    
});
const prodects = mongoose.model('prodects', ProdectsSchema);
module.exports = prodects;