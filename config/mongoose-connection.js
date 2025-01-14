// LOCAL MONGODB DB USED HERE, DO NOT PUSH WITHOUT CHANGING THE CONNECTION 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tivora')
.then(function(){
    console.log("connected sucessfully!");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;