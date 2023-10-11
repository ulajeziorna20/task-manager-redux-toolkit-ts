const express = require('express');
const app = express();
require('../database/db')
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');

// mongoose.connect('mongodb://127.0.0.1:27017/mern-clients-apps',  { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
// app.use(cookieParser());
// app.use(cors());



app.listen(4000, () => {
    console.log('Server CRM started');
})