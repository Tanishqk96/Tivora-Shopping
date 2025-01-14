const mongoose = require('mongoose');

// CREATING A BASIC DATABASE MODEL(SCHEMA) WHICH WILL STORE ALL THE USER DATA 
const userSchema = mongoose.Schema({
fullname:String,
email:String,
password:String,
cart:{
    type:Array,
    default:[]
},
isadmin:Boolean,
orders:{
    type:Array,
    default:[]
},
contact:Number,
picture:db
})
// EXPORTING THE USERSCHEMA DATABASE( CHANGES TO BE MADE)
mongoose.exports = mongoose.model("user",userSchema);