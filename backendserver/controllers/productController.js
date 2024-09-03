const { createProduct, deleteProduct, updateProduct, findProductById, getAllProducts, createMultipleproducts } = require("../utils/productUtil");

async function createProducts(req,res) {
    const data = req.body;
    try {
        const createdProduct = await createProduct(data)
        res.status(200).send({message:'Product Created successfully', createdProduct})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function deleteProducts(req,res) {
    const data = req.params.id;
    try {
        await deleteProduct(data)
        res.status(200).send({message:'Product deleted successfully'})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function updateProducts(req,res) {
    const productId = req.params.idd;
    const data = req.body;
    try {
        const updatedProduct = await updateProduct(productId,data)
        res.status(200).send({message:'Product Created successfully', updatedProduct})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function findProductsById(req,res) {
    const data = req.params.id;
    try {
        const products = await findProductById(data)
        res.status(200).send({message:'Product fetched successfully', products})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function getAllProductsController(req,res) {
    const data = req.query;
    try {
        const products = await getAllProducts(data)
        res.status(200).send({message:'Products fetched successfully', products})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

async function createMultipleproductsController(req,res) {
    const data = req.body;
    try {
        const createdProducts = await createMultipleproducts(data)
        res.status(200).send({message:'Products Created successfully', createdProducts})
    } catch (error) {
        res.status(500).send(error.message) 
    }
}

module.exports = {
    createProducts,
    deleteProducts,
    updateProducts,
    findProductsById,
    getAllProductsController,
    createMultipleproductsController
}