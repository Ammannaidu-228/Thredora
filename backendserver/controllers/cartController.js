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

async function addItemsToCarts(req, res) {
    const userId = req.user?._id;
    const { productId, size } = req.body; // Correctly get the values from req.body


    if (!productId || !size) {
        return res.status(400).send({ message: "Product ID and size are required" });
    }

    try {
        // Assuming addcartItem takes userId and some product data
        const addedItems = await addcartItem(userId, { productId, size });
        return res.status(200).send({ message: "Item added successfully", addedItems });
    } catch (error) {
        console.error("Error in addItemsToCarts:", error);
        return res.status(500).send({ message: error.message });
    }
}


module.exports = {

    findUsersCarts,
    addItemsToCarts
}