const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { dbConnect } = require('./config/db');
require('dotenv').config(); 
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
const productRoutes = require('./routes/productRoutes');

dbConnect();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(express.static('front'));

app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: true
}));

app.use('/', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});