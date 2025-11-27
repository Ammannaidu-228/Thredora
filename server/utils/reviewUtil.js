const Review = require("../models/reviewModel");
const { findProductById } = require("./productUtil");



async function createReview(req, user) {
    const product = await findProductById(req.productId);
    const review = new Review({
        user: user._id,
        product: product._id,
        review: req.review,
        createdAt: new Date(),
    })

    await product.save();
    return await review.save();  
}

async function getAllReview(productId){
    const product = await findProductById(productId);
    return await Review.find({product: product._id}).populate("user");
}

module.exports = {

    createReview,
    getAllReview,

}