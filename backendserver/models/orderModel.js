const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    orderItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderItems',
    }],
    orderDate:{
        type: Date,
        required: true,
        default: Date.now(),
    },
    deliverDate:{
        type: Date,
    },
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'addresses',
    },
    paymentDetails:[{
        paymentMethod:{
            type: String,
        },
        transactionId:{
            type: String,
        },
        paymentId:{
            type: String,
        },
        paymentStatus:{
            type: String,
            default: 'Pending'
        },

    }],
    totalPrice:{
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
        required: true,
    },
    totalDiscountPrice:{
        type: Number,
        required: true,
    },
    orderStatus:{
        type: String,
        required: true,
        default: 'Pending',
    },
    totalItems:{
        type: Number,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },


},{
    timestamps: true
});

const Order = mongoose.model("orders", orderSchema)

module.exports = Order;