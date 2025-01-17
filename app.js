const express = require("express");
const app = express();
const db = require('./config/mongoose-connection')
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Requiring all the routers needed:
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/prouductsRouter');  // Fix typo here (prouductsRouter -> productsRouter)
const usersRouter = require('./routes/usersRouter');

// Setting up the routes
app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Route for owner login
app.get('/owner-login', (req, res) => {
    res.render('owner-login');
});

// Route to render the product creation page (GET request)
app.get('/create', (req, res) => {
    res.render('createproducts'); // This is the page where you create a new product
});

// Route to handle form submission (POST request)
app.post('/create', (req, res) => {
    // Here you will process the data from the form
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

    // Handle the product creation logic (e.g., save to database)
    // After that, you can redirect to a success page or render a success message
    
    // Render the 'create' page with the success message
    res.render('shop',);
});

// Route for the home page
app.get('/', function (req, res) {
    res.render('index');
});

// Starting the server
app.listen(3000, () => {
    console.log("Server running fine!");
});
