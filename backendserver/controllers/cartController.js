const { findUSerCart, addcartItem } = require("../utils/cartUtils");


async function findUsersCarts(req,res) {
    const user = req.user;
    try {
        const userCart = await findUSerCart(user._id)
        return res.status(200).send(userCart)
        
    } catch (error) {
        
        return res.status(500).send(error.message)
    }
    
}

async function addItemsToCarts(req,res) {
    const userId = req.user?._id;
    const data = req.body;

    try {
        const addeditems = await addcartItem(userId, data);
        return res.status(200).send({message:"Item added Successfully", addeditems})
    } catch (error) {
        return res.status(500).send(error.message)

    }
    
}

module.exports = {

    findUsersCarts,
    addItemsToCarts
}