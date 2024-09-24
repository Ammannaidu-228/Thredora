import { api } from "../../config/apiConfig"
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST } from "./ActionTypes"


export const createPayment = (orderId)=> async(dispatch)=>{

    dispatch({type: CREATE_PAYMENT_REQUEST})
    try {
        const {data} = await api.post(`/payments/${orderId}`, {})
        console.log("responce from create payment", data)
        if(data.paymentLink.payment_link_url){
            window.location.href = data.paymentLink.payment_link_url
        }
        
    } catch (error) {
        dispatch({type: CREATE_PAYMENT_FAILURE, payload: error.message})
    }
}

export const updatePayment = (reqData)=> async(dispatch)=>{
    console.log("data In the Ui",reqData)
    dispatch({type: UPDATE_PAYMENT_REQUEST})

    try {
        const {data} = await api.get(`/payments/?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`)
        console.log("After Updating the Payment Details", data)
    } catch ({error}) {
        dispatch({type: UPDATE_PAYMENT_FAILURE, payload: error.message})

    }
}