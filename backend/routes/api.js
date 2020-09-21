const express = require('express');
const router = express.Router();
const bookDetail = require ('../models/bookedDetails'); 
const movie = require ('../models/movies')
const mongoose = require('mongoose')
const Schema = mongoose.Schema;




router.post('/postbook', function (req, res) {
    let reqData = req.body;
    console.log(req.body)
    bookDetail.create(reqData, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});

router.get('/postbook/:id/:date', function (req, res) {

    console.log(">>>>>>>>>>>",req.params);

    bookDetail.find({$and : [{movieName: req.params.id} , {date : req.params.date}]}, function (err, result) {
        if (!result) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});

router.post('/movie', function (req, res) {
    let reqData = req.body;
    console.log(req.body)
    movie.create(reqData, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result);
        }
    })
});

router.get('/getmovie',function(req,res){
    movie.find(function(error,result){
        if(result){
            res.send(result);
        }
    })
})

module.exports = router;