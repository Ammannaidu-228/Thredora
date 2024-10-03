import { api } from "../../../config/apiConfig"
import { GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS } from "./ActionTypes"


export const getAllAdminOrders = () => async(dispatch)=>{

    dispatch({type: GET_ORDERS_REQUEST})
    try {
        const { data } = await api.get('/admin/orders/all')
        const orders = await data.Orders
        console.log("Responce from the backend", data)
        dispatch({type: GET_ORDERS_SUCCESS, payload: orders})
        
    } catch (error) {
        dispatch({type: GET_ORDERS_FAILURE, payload: error.message})
    }
}