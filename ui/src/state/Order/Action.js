import { api } from "../../config/apiConfig"
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionTypes"


export const createOrder = (reqData) => async (dispatch) => {
    console.log("Form data being sent:", reqData);
    dispatch({ type: CREATE_ORDER_REQUEST });

    try {
        const { data } = await api.post('/orders', reqData.address);
        console.log("Response from the Backend:", data);

        if (data?.createdOrder?._id) {
            console.log("Navigating to:", `step=3&orderId=${data.createdOrder._id}`);
            reqData.navigate({
                search: `step=3&orderId=${data.createdOrder._id}`,
            });
        } else {
            console.error("Order creation response does not contain order ID.");
        }

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        console.error("Order creation failed:", error);
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.message });
    }
};


export const getOrderById =(reqData)=> async(dispatch)=>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST})
    console.log("Data in the frontend",reqData)

    try {
        const {data} = await api.get(`/orders/${reqData}`).catch((error)=> console.error(error))
        dispatch({type: GET_ORDER_BY_ID_SUCCESS, payload:data})
        console.log("Responce from get Order", data)
        
    } catch (error) {
        dispatch({type:GET_ORDER_BY_ID_FAILURE, payload: error.message})

    }
}