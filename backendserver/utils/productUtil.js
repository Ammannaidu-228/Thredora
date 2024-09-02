const Category = require("../models/categoryModel");
const Product = require("../models/productModel");




async function findProductById(productId) {

    try {
        const product = await Product.findById(productId).populate("category").exec();
        if(!product){
            throw new Error("Product Not Found");
        }
        return product
    } catch (error) {
        throw new Error(error.message); 
    }
    
}

async function createProduct(req) {
    
    let topLevel = await Category.findOne({name: req.topLevelCategory});
    if(!topLevel){
        toplevel = new Category({
            name: req.topLevelCategory,
            level: 1
        })
    }

    let secondLevel = await Category.findOne({ 
        name: req.secondLevelCategory,
        parentCategory: topLevel._id,
    
    })
    if(!secondLevel){
        secondLevel = new Category({
            name: req.secondLevelCategory,
            parentCategory: topLevel._id,
            level: 2
        })
    }
    let thirdLevel = await Category.findOne({ 
        name: req.thirdLevelCategory,
        parentCategory: secondLevel._id,
    
    })
    if(!thirdLevel){
        thirdLevel = new Category({
            name: req.thirdLevelCategory,
            parentCategory: secondLevel._id,
            level: 3
        })
    }

    const product = new Product({
        title: req.title,
        color: req.color,
        description: req.description,
        discountPercent: req.discountPercent,
        discountPrice: req.discountPrice,
        imageUrl: req.imageUrl,
        brand: req.brand,
        price: req.price,
        sizes: req.size,
        quantity: req.quantity,
        category: thirdLevel._id,

    })
    
    return await product.save()
}

async function deleteProduct(productId) {
    try {
        
        const product = await findProductById(productId)
        await Product.findByIdAndDelete(product._id)
        return "Product Deleted Successfully"
    } catch (error) {
        throw new Error(error.message); 

    }
}

async function updateProduct(productId, productData) {
    
    try {
        const product = await findProductById(productId);
        await Product.findByIdAndUpdate(product._id, productData);
        return "Product Updated Successfully"
    } catch (error) {
        throw new Error(error.message); 
    }
}

async function getAllProducts(req) {

    let {category, color, sizes, minPrice, maxPrice, minDiscount, sort, stock, pageNumber, pageSize} = req;
    pageSize = pageSize || 10

    let query = Product.find({}).populate("category");

    if(category){
        const existCategory = await Category.findOne({name: category});
        if(existCategory){
            query = query.where("category").equals(existCategory._id);
        }
        else{
            return { content: [], currentPage:1, totalPages: 0}
        }
    }

    if(color){
        const colorSet = new Set(color.split(",").map(color=> color.trim().toLowerCase()));
        const colorRegex = colorSet.size > 0 ? new RegExp([...colorSet].join("|"),"i") : null;
        query = query.where("color").regex(colorRegex);

    }
    if(sizes){
        const sizesSet = new Set(sizes);
        query = query.where("sizes").in(sizesSet)
    }
    if(minPrice && maxPrice){
        query = query.where("discountPrice").gte(minPrice).lte(maxPrice)

    }
    if(minDiscount){
        query = query.where("discountPercent").gte(minDiscount)
    }
    if(stock){

        if(stock == "InStock"){
            query = query.where("quantity").gt(0);
        }
        else if(stock == "OutOfStock"){
            query = query.where("quantity").lt(1)
        }
    }
    if(sort){
        const sortDirection = sort === "PriceHigh" ? -1:1;
        query = query.where({discountPrice: sortDirection})
    }

    const totalProducts = await Product.countDocuments(query);
    const skip = (pageNumber-1)*pageSize;

    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();

    const totalPages = Math.ceil((totalProducts/pageSize));

    return {content: products, currentPage: pageNumber, totalPages: totalPages}


    
}



async function createMultipleproducts(products) {
    for(let product of products){
        await createProduct(product)
    }
}


module.exports = {

    findProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    createMultipleproducts,
}