// LOCAL MONGODB DB USED HERE, DO NOT PUSH WITHOUT CHANGING THE CONNECTION 
const mongoose = require('mongoose');
const config = require('config');
const debug = require('debug')("development:mongoose");
mongoose.connect(`${config.get("MONGODB_URI")}/tivora`)
.then(function(){
    debug("connected sucessfully!");
})
.catch(function(err){
    debug(err);
})

module.exports = mongoose.connection;