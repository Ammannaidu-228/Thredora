const mongoose = require('mongoose')

const orderItemsSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
    },
    size:{
        type: String,
    },
    quantity:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    discountPrice:{
        type: Number,
        required: true,
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },

},{
    timestamps: true
});

const OrderItem = mongoose.model("orderItems", orderItemsSchema)

module.exports = OrderItem;