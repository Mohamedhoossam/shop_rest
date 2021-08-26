const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create  order model

const OrderSchema=new Schema({
    prodectsName:{
        type:String,
        required:[true,'Name filed is requires']
    },
    prodectsPrice:{
        type:String
    },
    customerName:{
        type:String,
        required:[true,'Name filed is requires']
    },
    customerAddress:{
        type:String,
        required:[true,'Address filed is requires']
    },
    customerphone:{
        type:String,
        required:[true,'phone filed is requires']
    }

    
});
const order = mongoose.model('order', OrderSchema);
module.exports = order;