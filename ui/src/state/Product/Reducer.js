import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionTypes";


const initialState = {
    products: [],
    product:null,
    error:null,
    loading:false
}

export const customerProductReducer = (state = initialState, action)=>{
    
    switch (action.type) {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {...state, error:null, loading:true}
        case FIND_PRODUCTS_SUCCESS:
            return {...state, error:null, products:action.payload, loading:false}
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state, error:null, product: action.payload, loading:false}
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
            return {...state, error:action.payload, loading:false}
    
        default:
            return state
    }
}