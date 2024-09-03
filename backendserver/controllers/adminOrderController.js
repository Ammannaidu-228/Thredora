const { fetchAllOrders, confirmOrderUtil, shipOrderUtil, deliverOrderUtil, cancelOrderUtil, deleteOrderUtil } = require("../utils/orderUtils")


async function getAllOrders(req,res) {
    try {
        const allorders = await fetchAllOrders();
        res.status(200).send(allorders) 
    } catch (error) {
        return res.status(500).send(error.message) 
    }  
}

async function confirmOrder(req,res) {
    const orderId = req.params.orderId; 
    try {
        const orders = await confirmOrderUtil(orderId)
        res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

async function shipOrder(req,res) {
    const orderId = req.params.orderId; 
    try {
        const orders = await shipOrderUtil(orderId)
        res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

async function deliverOrder(req,res) {
    const orderId = req.params.orderId; 
    try {
        const orders = await deliverOrderUtil(orderId)
        res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

async function cancelOrder(req,res) {
    const orderId = req.params.orderId; 
    try {
        const orders = await cancelOrderUtil(orderId)
        res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

async function deleteOrder(req,res) {
    const orderId = req.params.orderId; 
    try {
        const orders = await deleteOrderUtil(orderId)
        res.status(200).send(orders);
    } catch (error) {
        return res.status(500).send(error.message) 
    }
}

module.exports = {
    getAllOrders,
    confirmOrder,
    shipOrder,
    deleteOrder,
    deliverOrder,
    cancelOrder
}