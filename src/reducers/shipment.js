import {
  LOAD_SHIPMENT_SUCCESS,
  LOAD_SHIPMENT_ERROR,
  CLEAR_STATUS
} from '../actions/actionTypes';

const initialState = {
  data: null,
  error: null
}

export default function shipment(state = initialState, action) {
  switch(action.type) {
    case LOAD_SHIPMENT_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case LOAD_SHIPMENT_ERROR:
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