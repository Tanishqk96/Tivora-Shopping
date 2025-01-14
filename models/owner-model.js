const mongoose = require('mongoose');

// CREATING A BASIC DATABASE MODEL(SCHEMA) WHICH WILL STORE ALL THE USER DATA 
const ownerSchema = mongoose.Schema({
fullname:{
    type:String,
    minLength:3,
    trim:true,
},
email:String,
password:String,
products:{
    type:Array,
    default:[]
},
contact:Number,
picture:String,
})
// EXPORTING THE USERSCHEMA DATABASE( CHANGES TO BE MADE)
module.exports = mongoose.model("owner",ownerSchema);