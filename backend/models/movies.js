const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  movieName= new Schema({
    movieName:{
        type : String,
    },
})

const movie = mongoose.model('movieName',movieName);
module.exports = movie;