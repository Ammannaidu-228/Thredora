const Category = require("../models/categoryModel");
const Product = require("../models/productModel");

async function findProductById(productId) {
  try {
    const product = await Product.findById(productId)
      .populate("category")
      .exec();
    if (!product) {
      throw new Error("Product Not Found");
    }
    console.log("Product In the Backend",product)
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createProduct(req) {
  let topLevel = await Category.findOne({ name: req.topLevelCategory });
  if (!topLevel) {
    topLevel = new Category({
      name: req.topLevelCategory,
      level: 1,
    });
    await topLevel.save();
  }

  let secondLevel = await Category.findOne({
    name: req.secondLevelCategory,
    parentCategory: topLevel?._id,
  });
  if (!secondLevel) {
    secondLevel = new Category({
      name: req.secondLevelCategory,
      parentCategory: topLevel?._id,
      level: 2,
    });
    await secondLevel.save();
  }
  let thirdLevel = await Category.findOne({
    name: req.thirdLevelCategory,
    parentCategory: secondLevel?._id,
  });
  if (!thirdLevel) {
    thirdLevel = new Category({
      name: req.thirdLevelCategory,
      parentCategory: secondLevel?._id,
      level: 3,
    });
    await thirdLevel.save();
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
  });

  return await product.save();
}

async function deleteProduct(productId) {
  try {
    const product = await findProductById(productId);
    await Product.findByIdAndDelete(product._id);
    return "Product Deleted Successfully";
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateProduct(productId, productData) {
  try {
    const product = await findProductById(productId);
    await Product.findByIdAndUpdate(product._id, productData);
    return "Product Updated Successfully";
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllProducts(req) {
  // Destructure query parameters with default values
  let {
    category,
    color,
    sizes = [],
    minPrice = 0,
    maxPrice = Number.MAX_SAFE_INTEGER, // A very high default value for maxPrice
    minDiscount = 0,
    sort,
    stock,
    pageNumber = 1,
    pageSize = 10,
  } = req;
  pageNumber = Math.max(1, parseInt(pageNumber)) || 10; // Ensure pageNumber is at least 1
pageSize = Math.max(10, parseInt(pageSize)); // Ensure pageSize is at least 1

  // Initialize the query
  let query = Product.find({}).populate("category");
  // Category filtering
  // Category filtering
  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      console.log("Found category ID:", existCategory._id); // Debugging line
      query = query.where("category").equals(existCategory._id);
    } else {
      console.log("No category found with name:", category); // Debugging line
      return { content: [], currentPage: pageNumber, totalPages: 0 }; // No products found
    }
  }

  // Color filtering
  if (color) {
    const colorSet = new Set(
      color.split(",").map((c) => c.trim().toLowerCase())
    );
    if (colorSet.size > 0) {
      const colorRegex = new RegExp([...colorSet].join("|"), "i");
      query = query.where("color").regex(colorRegex);
    }
  }

  // Sizes filtering
  if (sizes.length > 0) {
    query = query.where("sizes.name").in(sizes); // Assuming sizes is an array of size names
  }

  // Price range filtering
// Price range filtering
if (minPrice !== undefined && maxPrice !== undefined) {
    // Only apply price filtering if both values are set and not equal to zero
    if (minPrice !== '' && maxPrice !== '' && (minPrice !== '0' || maxPrice !== '0')) {
        query = query.where("discountPrice").gte(minPrice).lte(maxPrice);
    }
}


  // Minimum discount filtering
  if (minDiscount) {
    query = query.where("discountPercent").gte(minDiscount);
  }

  // Stock filtering
  if (stock) {
    if (stock === "InStock") {
      query = query.where("quantity").gt(0);
    } else if (stock === "OutOfStock") {
      query = query.where("quantity").lt(1);
    }
  }

  // Sorting
  if (sort) {
    const sortDirection = sort === "PriceHigh" ? -1 : 1;
    query = query.sort({ discountPrice: sortDirection });
  }

  // Pagination
  const totalProducts = await Product.countDocuments(query);
  const skip = (pageNumber - 1) * pageSize;

  query = query.skip(skip).limit(pageSize);
  console.log("Final query in the backend", query.getQuery())


// Fetch products
const products = await query.exec();
const totalPages = Math.ceil(totalProducts / pageSize);

return { content: products, currentPage: pageNumber, totalPages: totalPages };
}

async function createMultipleproducts(products) {
  for (let product of products) {
    await createProduct(product);
  }
}

module.exports = {
  findProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  createMultipleproducts,
};
