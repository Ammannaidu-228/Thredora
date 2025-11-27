const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    cartItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cartItems',
    }],
    totalPrice:{
        type: Number,
        required: true,
        default: 0,
    },
    totalItems:{
        type: Number,
        required: true,
        default: 0,
    },
    discount:{
        type: Number,
        required: true,
        default: 0,

    },
    totalDiscountPrice:{
        type: Number,
        required: true,
        default: 0,

    },

},{
    timestamps: true
});

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart;