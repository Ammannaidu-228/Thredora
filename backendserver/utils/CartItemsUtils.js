const CartItems = require('../models/cartItemModel');
const { findUserById } = require('./userUtils');



async function findCartItemById(cartItemId) {
    console.log(cartItemId)
    let cartItem = await CartItems.findById(cartItemId).populate('product');
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
            item.size = cartItemData.size
            item.price = (item.quantity)*item.product.price;
            item.discountPrice = item.quantity*item.product.discountPrice;
            const updatedCart = await item.save();
            const updatedCartWithoutProduct = {
                _id: updatedCart._id,
                cart: updatedCart.cart,
                quantity: updatedCart.quantity,
                price: updatedCart.price,
                discountPrice: updatedCart.discountPrice,
                userId: updatedCart.userId,
                size: updatedCart.size,
                createdAt: updatedCart.createdAt,
                updatedAt: updatedCart.updatedAt,
                __v: updatedCart.__v
            };
            return updatedCartWithoutProduct
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
            console.log("Matched")
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