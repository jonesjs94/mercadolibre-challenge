import {
  LOAD_PAYMENT_SUCCESS,
  LOAD_PAYMENT_ERROR
} from '../actions/actionTypes';

const initialState = {
  data: {},
  error: null
}

export default function payment(state = initialState, action) {
  switch(action.type) {
    case LOAD_PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case LOAD_PAYMENT_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  };
};