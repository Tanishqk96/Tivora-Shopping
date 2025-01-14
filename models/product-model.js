const mongoose = require('mongoose');

// CREATING A BASIC DATABASE MODEL(SCHEMA) WHICH WILL STORE ALL THE PRODUCT DATA 
const productSchema = mongoose.Schema({
    image:String,
    name:String,
    price:Number,
    discount:{
        type:Number,
        default:0,
    },
    bgcolor:String,
    panelcolor:String,
    textcolor:String,
});

// EXPORTING THE PRODUCTSCHEMA DATABASE( CHANGES TO BE MADE)
mongoose.exports = mongoose.model("product",productSchema);