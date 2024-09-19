import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from "./ActionTypes";

const initialState = {
  order: null,
  loading: false,
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, loading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return { ...state, order: action.payload, error: null, loading: false };
    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, error: null, loading: false, order: action.payload };
    case CREATE_ORDER_FAILURE:
    case GET_ORDER_BY_ID_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      state;
  }
};
