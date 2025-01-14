const express = require("express");
const app = express();
const db = require('./config/mongoose-connection')
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs");

// REQUIRING ALL THE ROUTERS NEEDED:
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/prouductsRouter');
const usersRouter = require('./routes/usersRouter');

app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(3000,()=>{
    console.log("server running fine!")
});