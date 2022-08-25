import {
  LOAD_PAYMENT_SUCCESS,
  LOAD_PAYMENT_ERROR,
  CLEAR_STATUS
} from '../actions/actionTypes';

const initialState = {
  data: null,
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
    case CLEAR_STATUS:
      return initialState  
    default:
      return state
  };
};