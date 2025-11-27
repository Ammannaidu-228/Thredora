const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    streetAddress:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    zipCode:{
        type: Number,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'users',
    }

},{
    timestamps: true
});

const Address = mongoose.model("addresses", addressSchema)

module.exports = Address;