const { createRating } = require("../utils/ratingUtil");


async function createRatings(req,res) {
    const data = req.body;
    const user = req.user;
    try {
        const createdRating = await createRating(data, user)
        res.status(200).send({message:'Review Created successfully', createdRating})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function getAllRatings(req,res) {
    const data = req.params.productId;
    try {
        const ratings = await createReview(data)
        res.status(200).send({message:'Ratings Fetched successfully', ratings})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

module.exports = {

    createRatings,
    getAllRatings
}