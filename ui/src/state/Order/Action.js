import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionTypes"


export const createOrder = (reqData)=> async(dispatch)=>{


    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data} = await api.post('/orders', reqData.data)
        if(data.id){
            reqData.navigate({search :`step=3&orderId=${data.id}`})
        }
        dispatch({type: CREATE_ORDER_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:CREATE_ORDER_FAILURE, payload: error.message})
    }
}

export const getOrderById =(reqData)=> async(dispatch)=>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST})

    try {
        const {data} = await api.get(`/orders/${reqData.orderId}`)
        dispatch({type: GET_ORDER_BY_ID_SUCCESS, payload:data})
        
    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FAILURE, payload: error.message})

    }
}