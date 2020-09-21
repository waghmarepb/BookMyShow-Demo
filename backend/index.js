const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express()

//connection for mongodb
mongoose.connect('mongodb://localhost/movieShow',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

//for core
app.use(cors());

//use to parse the url
app.use(bodyParser.json());

//to use router in server
app.use('/api',require('./routes/api'));

//listen for request
app.listen(process.env.port || 8080,function(){
    console.log("Listening for port 8080");
})