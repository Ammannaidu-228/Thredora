const { updateCartItem, removecartItemById } = require("../utils/CartItemsUtils");


async function updateCartsItems(req,res) {

    const userId = await req.user?._id;
    const cartItemId = await  req.params.id;
    const data = await req.body.data;
    console.log("data",data)
    console.log("userId",userId)
    console.log("cartItemId",cartItemId)

    try {
        const updatedCart = await updateCartItem(userId,cartItemId,data);
        return res.status(200).send({message:'Cart Item Updated Successfully', updatedCart})
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
async function removeCartsItems(req,res) {

    const userId = req.user._id;
    const cartId = req.params.id;
    console.log(userId, cartId)
    try {
        await removecartItemById(userId,cartId);
        return res.status(200).send({message:'Cart Item deleted Successfully'})
        
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    updateCartsItems,
    removeCartsItems,
}