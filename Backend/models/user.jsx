const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  temzid:{type: String , required : true,unique: true},
  name: { type: String, required: true, unique: false},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phonenumber:{type : Number,required:true,unique:true},
  phoneCode:{type : Number,required:true,unique:false},

  
});

module.exports = mongoose.model('User', userSchema);
