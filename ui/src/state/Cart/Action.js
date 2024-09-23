import { api } from "../../config/apiConfig";
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionTypes";

export const addItemToCart = (reqData) => async (dispatch) => {
    console.log("reqData", reqData)
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
    console.log("productId", reqData.productId)
    console.log("size", reqData.size)
  try {
    const { data } = await api.post("/cart/add", reqData)
    .then((responce)=>console.log("resonce in the Action", responce.data))
    .catch((error)=>console.error(error));
    console.log(data);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error details:", error.response ? error.response.data : error.message);
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
  }
};

export const removeCartItem = (cartItemId)=> async (dispatch)=>{
    console.log("cartItem Id", cartItemId)
    dispatch({type: REMOVE_CART_ITEM_REQUEST})

    try {
        const {data} = await api.delete(`/cart-items/${cartItemId}`)
        dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message });

    }
}

export const updateCartItem = (reqData)=> async (dispatch)=>{
    console.log("update data in the Ui", reqData)
    console.log("update data in the Ui", reqData.cartId)

    dispatch({type: UPDATE_CART_ITEM_REQUEST})

    try {
        const {data} = await api.put(`/cart-items/${reqData.cartItemId}`, reqData)
                                .then((responce)=>console.log("responce after Updating The Cart Item",responce.data))
                                .catch((error)=> console.error("Error", error))
        dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message });

    }
}

export const getCart = ()=> async (dispatch)=>{
    dispatch({type: GET_CART_REQUEST})

    try {
        const {data} = await api.get(`/cart/`)
        console.log("cart", data)
        dispatch({type: GET_CART_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message });

    }
}

