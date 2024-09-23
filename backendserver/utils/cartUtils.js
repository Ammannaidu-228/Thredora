const CartItems = require("../models/cartItemModel");
const Cart = require("../models/cartModel");
const Product = require("../models/productModel");


async function createCart(user) {
    
    try {
        const cart = new Cart({user});
        const createdCart = await cart.save();
        return createdCart
        
    } catch (error) {
        throw new Error(error.message);
        
    }
}

async function findUSerCart(userid) {
    try {

        
    let cart = await Cart.findOne({user: userid});
    let cartItems = await CartItems.find({cart: cart._id}).populate("product");

    cart.cartItems = cartItems

    let totalPrice = 0;
    let totalDiscountPrice = 0;
    let totalItems = 0;

    for(let cartItem of cart.cartItems ){
        totalPrice += cartItem.price;
        totalDiscountPrice += cartItem.discountPrice;
        totalItems += cartItem.quantity;
    }

    cart.totalItems = totalItems;
    cart.totalPrice = totalPrice;
    cart.discount = totalPrice - totalDiscountPrice;
    cart.totalDiscountPrice = totalDiscountPrice

    return cart;
        
    } catch (error) {

        throw new Error(error.message);

        
    }

    
}

async function addcartItem(userId, req) {
    try {
        const cart = await Cart.findOne({user:userId})
        const product = await Product.findOne({_id: req.productId})
        const isPresent = await CartItems.findOne({cart: cart?._id, product: product?._id, userId})

        if(!isPresent){
            const cartItems = await new CartItems({
                product: product?._id,
                cart: cart?._id,
                quantity: 1,
                userId,
                price: product?.price,
                size: req.size,
                discountPrice: product?.discountPrice,

            });

            const createdCartItem = await cartItems.save();
            cart.cartItems.push(createdCartItem);
            await cart.save();
            return "Item added to cart"
        }
        
    } catch (error) {
        throw new Error(error.message);

    } 
}


module.exports = {

                    createCart,
                    findUSerCart,
                    addcartItem
                }