const { createOrder, findOrderById, userOrderHistory } = require("../utils/orderUtils");


async function createOrders(req,res) {

    const user = await req.user;
    const address = await req.body;
    console.log("Address in the backend", address)
    
    try {
        const createdOrder = await createOrder(user,address)
        res.status(200).send({message:'Order Created Successfully', createdOrder})
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function findOrdersById(req,res) {

    const orderId = await req.params.id;
    
    try {
        const recordedOrder = await findOrderById(orderId)
        res.status(200).send({message:'Order fetched Successfully', recordedOrder})
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function OrdersHistory(req,res) {

    const userid = await req.user._id;
    
    try {
        const recordedOrder = await userOrderHistory(userid)
        res.status(200).send({message:'Here is the user Order History', recordedOrder})
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {

    createOrders,
    findOrdersById,
    OrdersHistory,
}