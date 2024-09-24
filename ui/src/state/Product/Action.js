import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionTypes";

export const findProducts = (reqData) => async (dispatch) => {
  console.log("Data in the frontent query", reqData)
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber=1,
    pageSize,
  } = reqData;

  try {
    dispatch({ type: FIND_PRODUCTS_REQUEST });

    // Construct query parameters dynamically
    const queryParams = new URLSearchParams();

    if (colors.length) queryParams.append('colors', colors);
    if (sizes.length) queryParams.append('sizes', sizes);
    if (minPrice !== undefined && maxPrice !== undefined) {
      queryParams.append('minPrice', minPrice);
      queryParams.append('maxPrice', maxPrice);
    }
    if (minDiscount) queryParams.append('minDiscount', minDiscount);
    if (category) queryParams.append('category', category);
    if (stock) queryParams.append('stock', stock);
    if (sort) queryParams.append('sort', sort);
    queryParams.append('pageNumber', pageNumber);  // Ensure the correct page number
    queryParams.append('pageSize', pageSize);      // Number of products per page

    // API call with query parameters
    const { data } = await api.get(`/products?${queryParams.toString()}`);

    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
    console.log("data from the backend",data);
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};


export const findProductById = (reqData) => async (dispatch) => {
    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
    const {productId} = reqData;
    console.log("reqData", reqData)
    console.log("productId in Dispatch", productId)

    try {
      const { data } = await api.get(`/products/${productId}`);
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload: data})
        console.log("responce from backend",data)

    } catch (error) {
      dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload: error.message})
    }
  };
  
