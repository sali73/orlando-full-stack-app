const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    location:  { type: String, required: true },
    img: {type:String , required: true },
    rate: Number,
    price:Number,
    size: String,
    // textarea: textarea
    



});

const Tour  = mongoose.model('Tour ', tourSchema);

module.exports = Tour;