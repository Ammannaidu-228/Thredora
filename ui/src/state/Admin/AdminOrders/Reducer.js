import {
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
} from "./ActionTypes";

const initialState = {
  adminOrders: [],
  isLoading: false,
  error: null,
};

export const adminOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_ORDERS_SUCCESS:
      return { ...state, isLoading: false, adminOrders: action.payload };
    case GET_ORDERS_FAILURE:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
