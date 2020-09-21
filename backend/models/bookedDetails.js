const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  bookingDetails= new Schema({
    name :{
        type : String,
    },
    email :{
        type : String,
    },
    movieName:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'movieName',
    },
    date:{
        type : String,
    },
    sits:{
        type : Number,
    },
    bookedSit:[{
        type : String,
    }],
})

const bookDetail = mongoose.model('bookingDetails',bookingDetails);
module.exports = bookDetail;