const express = require('express');
const app = express();
const PORT = process.env.PORT
const mongoose = require('./database/database');
const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');
const cookie_parser = require('cookie-parser');
require('dotenv').config();

app.use(cookie_parser())
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);


app.listen(PORT,(req,res) =>{
    console.log(`Server is connected to the port ${PORT}`);
})