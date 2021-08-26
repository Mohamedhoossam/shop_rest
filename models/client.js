const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create geolocation schema
/*
const Geoschema=new Schema({
  trpe:{
    type:String,
    default:"Point"
  },
  coordinates:{
    type:[Number],
    index:'2dsphere'
  }
});
*/

const ClientSchema = new Schema({

// client userName
  userName: {
    type: String,
    required: [true, 'Name field is required'],
  },

  // client passWord
  passWord: {
    type: String,
   // required: [true, 'address field is required'],
  },
 
 // geometry:Geoschema
});

const client = mongoose.model('Client', ClientSchema);
module.exports = client;