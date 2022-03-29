//Environment Variables
require('dotenv').config();

//Requires
const express = require('express');
const config = require('./database/config');
const cors = require('cors');

//Initializations
const app = express();

//Middlewares
app.use(cors());

//DB connection
config;

//Server is listening
app.listen(process.env.PORT, (req, res) => {
    console.log('Server on port', process.env.PORT);
});