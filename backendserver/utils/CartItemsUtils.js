const CartItems = require('../models/cartItemModel');
const { findUserById } = require('./userUtils');



async function findCartItemById(cartItemId) {

    let cartItem = await CartItems.findById(cartItemId)
    try {
        if(cartItem){
            return cartItem
        }
        else{
            throw new Error("CartItem Not Found"); 
        }
    } catch (error) {
        
        throw new Error(error.message);
        
    }
    
}

async function updateCartItem(userId, cartItemId, cartItemData) {
    let item = await findCartItemById(cartItemId);
    try {
        if(!item){
            throw new Error("selected item not found from your data");
        }

        let user = await findUserById(item.userId)

        if(!user){
            throw new Error("User Not found");
            
        }

        if(user._id.toString() === userId.toString()){

            item.quantity = cartItemData.quantity;
            item.price = item.quantity*item.product.price;
            item.discountPrice = item.quantity*item.product.discountPrice;
            const updatedCart = await item.save();
            return updatedCart
        }
        else{
            throw new Error(" You're not authorized to update the cart");
        }

    } catch (error) {
        throw new Error(error.message);
    }
}

async function removecartItemById(userId, cartItemId) {

    try {

        const cartitem = await findCartItemById(cartItemId);
        const user = await findUserById(userId);
    
        if(user._id.toString() === cartitem.userId.toString()){
            await CartItems.findByIdAndDelete(cartitem);
        }
        
    } catch (error) {
        throw new Error(error.message);

    }

}
    



module.exports = {
    findCartItemById,
    updateCartItem,
    removecartItemById,
}