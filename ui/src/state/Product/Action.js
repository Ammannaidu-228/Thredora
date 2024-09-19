import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionTypes";

export const findProducts = (reqData) => async (dispatch) => {
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  try {
    dispatch({ type: FIND_PRODUCTS_REQUEST });
    const { data } = await api.get(
      `/products`);
      dispatch({type:FIND_PRODUCTS_SUCCESS, payload: data})
      console.log(data)
  } catch (error) {
    dispatch({type:FIND_PRODUCTS_FAILURE, payload: error.message})
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
  
