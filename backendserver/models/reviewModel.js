const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    review:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,

    },
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,

    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
},{
    timestamps: true
});

const Review = mongoose.model("ratings", reviewSchema)

module.exports = Review;