const Address = require('../models/addressModel');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const OrderItem = require('../models/orderItemsModel')
const { findUSerCart } = require('./cartUtils');


async function createOrder(user, shippingAddress) {
    let address;

    if(shippingAddress?._id){

        let existingAddress = await Address.findById(shippingAddress?._id)
        address = existingAddress;
    }
    else{

        address = new Address(shippingAddress);
        address.user = user;
        await address.save();

        console.log('address',address)

        user.address.push(address);
        await user.save();
    }

    const cart = await findUSerCart(user?._id);
    let orderItems = [];

    for(const item of cart.cartItems){
        const orderItem = new OrderItem({
            price: item.price,
            Product: item.Product,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountPrice: item.discountPrice,
        })

        const createdOrderItem = await orderItem.save();
        console.log('created OrderItem', createdOrderItem);
        orderItems.push(createdOrderItem)
    }

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountPrice: cart.totalDiscountPrice,
        discount: cart.discount,
        totalItems: cart.totalItems,
        shippingAddress: address,
    });

    const savedOrder = await createdOrder.save();
    return savedOrder;

}

async function findOrderById(orderId) {

    try {

        const order = await Order.findById(orderId)
                                 .populate("user")
                                 .populate({path: "orderItems", populate:{path: "product"}})
                                 .populate("shippingAddress")
        
        return order;
                                 
    } catch (error) {
        throw new Error(error.message);
        
    }
    
}

//Admin utils

async function placeOrderUtil(orderId) {

    try {

        const order = await findOrderById(orderId);
        order.orderStatus = "Placed"
        order.paymentDetails.paymentStatus = "completed"
        return await order.save();
        
    } catch (error) {
        throw new Error(error.message);

    }
}

async function confirmOrderUtil(orderId) {

    try {

        const order = await findOrderById(orderId);
        order.orderStatus = "Confirmed"
        return await order.save();
        
    } catch (error) {
        throw new Error(error.message);

    }
}

async function shipOrderUtil(orderId) {

    try {

        const order = await findOrderById(orderId);
        order.orderStatus = "shipped"
        return await order.save();
        
    } catch (error) {
        throw new Error(error.message);

    }
}

async function deliverOrderUtil(orderId) {

    try {

        const order = await findOrderById(orderId);
        order.orderStatus = "Delivered"
        return await order.save();
        
    } catch (error) {
        throw new Error(error.message);

    }
}
async function cancelOrderUtil(orderId) {

    try {

        const order = await findOrderById(orderId);
        order.orderStatus = "Cancelled"
        return order.save();
        
    } catch (error) {
        throw new Error(error.message);

    }
}

async function userOrderHistory(userId) {

    try {

            const order = await Order.find({user: userId, orderStatus:"Placed"})
            .populate({path: "orderItems", populate:{path: "product"}}).lean();

            return order
        
    } catch (error) {

        throw new Error(error.message);

        
    }
}

async function fetchAllOrders() {
    
    try {

        const order = await Order.find({})
                                 .populate({path: "orderItems", populate:{path: "product"}}).lean();
        ;

        return order;

        
    } catch (error) {

        throw new Error(error.message);

        
    }
}

async function deleteOrderUtil(orderId) {
    
    const order = await findOrderById(orderId)
    return await Order.findByIdAndDelete(order._id)
}



module.exports = {
    createOrder,
    findOrderById,
    placeOrderUtil,
    confirmOrderUtil,
    shipOrderUtil,
    deliverOrderUtil,
    cancelOrderUtil,
    userOrderHistory,
    fetchAllOrders,
    deleteOrderUtil,
}