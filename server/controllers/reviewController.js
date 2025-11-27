const { createReview, getAllReview } = require("../utils/reviewUtil");

async function createReviews(req,res) {
    const data = req.body;
    const user = req.user;
    try {
        const createdReview = await createReview(data, user)
        res.status(200).send({message:'Review Created successfully', createdReview})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function getAllReviews(req,res) {
    const data = req.params.productId;
    try {
        const reviews = await getAllReview(data)
        res.status(200).send({message:'Review Created successfully', reviews})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

module.exports = {

    createReviews,
    getAllReviews,
}